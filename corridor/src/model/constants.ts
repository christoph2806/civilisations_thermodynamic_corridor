/**
 * Calibration constants — Part 2–4, GAME_PROPOSAL §6.4
 */

export const STEFAN_BOLTZMANN = 5.67e-8; // W/(m² K⁴)
export const P_SUN = 120_000; // TW absorbed (approx)
export const T_HAB_DEFAULT = 292; // K (~19°C)
export const T_0 = 288; // K (~15°C) pre-industrial-ish
export const SIGMA_MIN = 0.3; // minimum viable civilisation (fraction of 2025)
export const DELTA_DEFAULT = 0.03; // decay rate ~3%/yr
export const MU_DEFAULT = 2.0; // metabolic multiplier
export const ETA_DEFAULT = 0.12; // aggregate efficiency ~12%
export const XI_DEFAULT = 1; // normalised
export const BUDGET_PER_TURN = 10; // decision points
export const YEARS_PER_TURN = 100; // standard mode
export const TOTAL_YEARS = 10_000;
export const TOTAL_ROUNDS = 100;
