/**
 * Thermodynamic dynamics — Part 2.1, 4.2
 * dΣ/dt = C − δΣ
 * C_th dT/dt = P_sun + ΓΣ − εσAT⁴
 */

import type { State, Parameters, Decision } from './types';
import { gamma } from './types';
import {
  T_0,
  T_HAB_DEFAULT,
  DELTA_DEFAULT,
  ETA_DEFAULT,
  XI_DEFAULT,
  MU_DEFAULT,
  SIGMA_MIN,
} from './constants';

/** Effect of allocation on parameters (simplified) */
function allocationToDeltaParams(decision: Decision): Partial<Parameters> {
  const a = decision.allocation;
  const delta: Partial<Parameters> = {};
  if (a?.ε) delta.ε = 0.01 * a.ε;
  if (a?.η_II) delta.η_II = 0.005 * a.η_II;
  if (a?.δ) delta.δ = -0.002 * a.δ;
  if (a?.ξ) delta.ξ = -0.01 * a.ξ;
  if (a?.μ) delta.μ = -0.05 * a.μ;
  if (a?.A) delta.A = 0.001 * a.A;
  if (a?.T_hab) delta.T_hab = 0.2 * a.T_hab;
  if (a?.α) delta.α = 0.01 * a.α;
  return delta;
}

function applyDelta(base: Parameters, delta: Partial<Parameters>): Parameters {
  const out = { ...base };
  for (const k of Object.keys(delta) as (keyof Parameters)[]) {
    const v = delta[k];
    if (v !== undefined) (out as Record<string, number>)[k] = Math.max(0.01, (base[k] as number) + v);
  }
  return out;
}

/** Equilibrium T for given Σ. Simplified: T_base + k·Γ·Σ (thermal coupling) */
function equilibriumT(Σ: number, Γ: number, _p: Parameters): number {
  const k = 4; // degrees per unit Γ·Σ
  return T_0 + k * Γ * Σ * 0.05;
}

/** Σ_max at ceiling (T = T_hab). From T_hab = T_base + k·Γ·Σ_max */
export function sigmaMax(Γ: number, p: Parameters): number {
  const k = 4 * 0.05;
  return Math.max(0.5, (p.T_hab - T_0) / (k * Γ));
}

/** Braking boundary: thermal inertia means kernel inside ceiling. ~Σ_max/2.5 */
export function sigmaCrit(_T: number, Γ: number, p: Parameters): number {
  const smax = sigmaMax(Γ, p);
  return smax / 2.5;
}

export function inKernel(state: State, Γ: number, p: Parameters): boolean {
  if (state.Σ < SIGMA_MIN) return false;
  if (state.T_eq > p.T_hab) return false;
  const crit = sigmaCrit(state.T_eq, Γ, p);
  return state.Σ <= crit;
}

/** Distance to boundary in "years of runway" (simplified) */
export function distanceToBoundary(state: State, Γ: number, p: Parameters): number {
  const crit = sigmaCrit(state.T_eq, Γ, p);
  const margin = (crit - state.Σ) / (state.Σ || 0.01);
  return Math.max(0, margin * 50); // rough years
}

const DEFAULT_PARAMS: Parameters = {
  ε: 0.9,
  A: 1,
  T_hab: T_HAB_DEFAULT,
  α: 0.3,
  η_II: ETA_DEFAULT,
  δ: DELTA_DEFAULT,
  ξ: XI_DEFAULT,
  μ: MU_DEFAULT,
};

/** Single step: state + decision + Δt → new state */
export function step(
  state: State,
  params: Parameters,
  decision: Decision,
  Δt: number
): { state: State; params: Parameters } {
  const deltaP = allocationToDeltaParams(decision);
  const newParams = applyDelta(params, deltaP);
  const Γ = gamma(newParams);

  // Construction: C = (μ-1)*δ*Σ from surplus; evolutionary ratchet adds bias
  const surplus = (params.μ - 1) * params.δ * state.Σ;
  const ratchet = 0.3; // Jevons: efficiency recycled into growth
  const C = surplus * (1 + ratchet) - (decision.allocation?.μ ?? 0) * 0.02 * state.Σ;

  // dΣ/dt = C − δΣ
  const dΣ = (C - params.δ * state.Σ) * Δt;
  const newΣ = Math.max(0.01, state.Σ + dΣ);

  // T: thermal inertia, approach equilibrium
  const T_eq_new = equilibriumT(newΣ, Γ, newParams);
  const tau_T = 30; // years
  const dT = ((T_eq_new - state.T_eq) / tau_T) * Δt;
  const newT = state.T_eq + dT;

  const newState: State = {
    Σ: newΣ,
    T_eq: newT,
    t: state.t + Δt,
  };

  return { state: newState, params: newParams };
}

export function createInitialState(): State {
  return {
    Σ: 1,
    T_eq: 288,
    t: 0,
  };
}

export function getDefaultParams(): Parameters {
  return { ...DEFAULT_PARAMS };
}
