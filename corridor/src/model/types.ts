/**
 * Thermodynamic model types — aligned with Part 2–4 notation.
 * See docs/GAME_PROPOSAL.md §6.5
 */

export interface State {
  /** Assembly stock (normalised, 1 = ~2025 level) */
  Σ: number;
  /** Equilibrium temperature (K) */
  T_eq: number;
  /** Year */
  t: number;
}

export interface Parameters {
  ε: number;   // emissivity
  A: number;   // radiating area (1 = Earth)
  T_hab: number;  // habitability limit (K)
  α: number;   // albedo factor
  η_II: number;   // Second Law efficiency
  δ: number;   // decay rate
  ξ: number;   // exergy cost per repair
  μ: number;   // metabolic multiplier
}

/** Γ = μδξ/η_II — power per unit assembly */
export function gamma(p: Parameters): number {
  return (p.μ * p.δ * p.ξ) / p.η_II;
}

export interface Decision {
  /** Allocation points per parameter (0–10 total budget) */
  allocation: Partial<Record<keyof Parameters, number>>;
}

export interface Event {
  id: string;
  name: string;
  effect: 'recession' | 'climate_shock' | 'tech_breakthrough' | 'resource_shock' | 'stability';
  magnitude: number;
  description: string;
}
