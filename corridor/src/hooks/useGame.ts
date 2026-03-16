import { useState, useCallback } from 'react';
import type { State, Parameters, Event } from '../model/types';
import { gamma } from '../model/types';
import {
  createInitialState,
  getDefaultParams,
  step,
  inKernel,
  distanceToBoundary,
  sigmaCrit,
  sigmaMax,
} from '../model/dynamics';
import { drawEvent, applyEvent } from '../model/events';
import { BUDGET_PER_TURN, TOTAL_YEARS, YEARS_PER_TURN } from '../model/constants';

export type GamePhase = 'playing' | 'extinct' | 'victory';

export interface TrajectoryPoint {
  state: State;
  params: Parameters;
}

export interface GameState {
  state: State;
  params: Parameters;
  trajectory: TrajectoryPoint[];
  round: number;
  phase: GamePhase;
  currentEvent: Event | null;
  allocation: Partial<Record<keyof Parameters, number>>;
}

const PARAM_LABELS: Record<keyof Parameters, string> = {
  ε: 'Decarbonisation',
  A: 'Space expansion',
  T_hab: 'Adaptation',
  α: 'Albedo',
  η_II: 'Efficiency',
  δ: 'Durability',
  ξ: 'Innovation',
  μ: 'Institutional reform',
};

export function useGame() {
  const initialState = createInitialState();
  const initialParams = getDefaultParams();
  const [game, setGame] = useState<GameState>(() => ({
    state: initialState,
    params: initialParams,
    trajectory: [{ state: initialState, params: initialParams }],
    round: 0,
    phase: 'playing',
    currentEvent: null,
    allocation: {},
  }));

  const Γ = gamma(game.params);
  const dK = distanceToBoundary(game.state, Γ, game.params);
  const Σ_crit = sigmaCrit(game.state.T_eq, Γ, game.params);
  const Σ_max = sigmaMax(Γ, game.params);

  const setAllocation = useCallback((param: keyof Parameters, value: number) => {
    setGame((g) => {
      const next = { ...g.allocation, [param]: value };
      const total = Object.values(next).reduce((a, b) => a + (b ?? 0), 0);
      if (total > BUDGET_PER_TURN) return g;
      return { ...g, allocation: next };
    });
  }, []);

  const commitTurn = useCallback(() => {
    setGame((g) => {
      if (g.phase !== 'playing') return g;

      // 1. Apply event if any
      let { state, params } = g;
      const event = drawEvent(Math.random());
      if (event) {
        const applied = applyEvent(state, params, event);
        state = applied.state;
        params = applied.params;
      }

      // 2. Build decision from allocation
      const decision = { allocation: g.allocation };

      // 3. Step
      const result = step(state, params, decision, YEARS_PER_TURN);
      state = result.state;
      params = result.params;

      const trajectory = [...g.trajectory, { state, params }];
      const round = g.round + 1;
      const Γ_new = gamma(params);

      let phase: GamePhase = 'playing';
      if (!inKernel(state, Γ_new, params)) {
        phase = 'extinct';
      } else if (state.t >= TOTAL_YEARS) {
        phase = 'victory';
      }

      return {
        state,
        params,
        trajectory,
        round,
        phase,
        currentEvent: event ?? null,
        allocation: {},
      };
    });
  }, []);

  const reset = useCallback(() => {
    const s = createInitialState();
    const p = getDefaultParams();
    setGame({
      state: s,
      params: p,
      trajectory: [{ state: s, params: p }],
      round: 0,
      phase: 'playing',
      currentEvent: null,
      allocation: {},
    });
  }, []);

  return {
    game,
    Γ,
    dK,
    Σ_crit,
    Σ_max,
    setAllocation,
    commitTurn,
    reset,
    PARAM_LABELS,
    budgetUsed: Object.values(game.allocation).reduce((a, b) => a + (b ?? 0), 0),
  };
}
