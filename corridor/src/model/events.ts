/**
 * Stochastic events — GAME_PROPOSAL §6.5 (5)
 */

import type { Event } from './types';
import type { State, Parameters } from './types';

const EVENT_POOL: Omit<Event, 'magnitude'>[] = [
  { id: 'recession', name: 'Recession', effect: 'recession', description: 'Construction drops, debt pressure rises.' },
  { id: 'climate', name: 'Climate shock', effect: 'climate_shock', description: 'Temperature jumps, emissivity degrades.' },
  { id: 'tech', name: 'Tech breakthrough', effect: 'tech_breakthrough', description: 'Efficiency improves (Jevons may recycle).' },
  { id: 'resource', name: 'Resource shock', effect: 'resource_shock', description: 'ξ and reserves affected.' },
  { id: 'stability', name: 'Institutional stability', effect: 'stability', description: 'μ-reduction gains traction.' },
];

export function drawEvent(seed: number): Event | null {
  if (Math.random() > 0.25) return null; // 25% chance per turn
  const template = EVENT_POOL[Math.floor(seed * EVENT_POOL.length) % EVENT_POOL.length];
  const magnitude = 0.5 + Math.random() * 0.5;
  return { ...template, magnitude };
}

export function applyEvent(
  state: State,
  params: Parameters,
  event: Event
): { state: State; params: Parameters } {
  const dΣ = state.Σ * 0.05;
  const dT = 0.5;
  let newΣ = state.Σ;
  let newT = state.T_eq;
  const newParams = { ...params };

  switch (event.effect) {
    case 'recession':
      newΣ = Math.max(0.1, state.Σ - dΣ * event.magnitude);
      break;
    case 'climate_shock':
      newT = state.T_eq + dT * event.magnitude;
      newParams.ε = Math.max(0.7, params.ε - 0.02 * event.magnitude);
      break;
    case 'tech_breakthrough':
      newParams.η_II = Math.min(0.25, params.η_II + 0.01 * event.magnitude);
      break;
    case 'resource_shock':
      newParams.ξ = Math.max(0.5, params.ξ - 0.1 * event.magnitude);
      newΣ = Math.max(0.1, state.Σ - dΣ * 0.5 * event.magnitude);
      break;
    case 'stability':
      newParams.μ = Math.max(1.1, params.μ - 0.05 * event.magnitude);
      break;
  }

  return {
    state: { ...state, Σ: newΣ, T_eq: newT },
    params: newParams,
  };
}
