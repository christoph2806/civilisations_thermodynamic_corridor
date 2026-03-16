# Civilisation's Thermodynamic Corridor — Interactive Game Proposal

*Turning the thermodynamic corridor analysis into an educational strategy game with survival as the objective.*

---

## 1. Core Concept

**"Corridor"** is a turn-based civilisation survival game grounded in the physics of Parts 1–5. The player steers a planetary civilisation through parameter space, making decisions each turn. The goal: survive 10,000 years without exceeding the viability kernel (extinction). The game teaches the constraint structure, the tier hierarchy, and the trade-offs between nostos and kleos through play.

---

## 1.1 Pacing: 30 Minutes, ~100 Rounds

**Constraint:** 10,000 years in 5-year steps = 2,000 rounds — unplayable. Target: ~100 rounds, ~30 min total.

**Solution: variable step size.** Each "round" advances a variable number of years:

| Round | Step (years) | Rationale |
|-------|--------------|-----------|
| 1–20 | 25 years | Crisis phase; frequent decisions |
| 21–60 | 100 years | Transition; moderate granularity |
| 61–100 | 200 years | Stable phase; coarse steps |

**Total:** 20×25 + 40×100 + 40×200 = 500 + 4,000 + 8,000 = **12,500 years** in 100 rounds. Adjust to hit 10,000: e.g. 20×25 + 35×100 + 45×150 ≈ 10,000.

**Alternative (simpler):** Fixed **100-year steps** → 100 rounds = 10,000 years. One decision per century. Less granular but clean. ~18 sec/round for 30 min.

**Goal:** 10,000 years is thematically right (10 millennia = "long-term viable"). 500 years would be easier but less iconic; 10,000 signals "you achieved durable civilisation."

**Game modes by length:**
| Mode | Rounds | Step | Span | Time |
|------|--------|------|------|------|
| **Quick** | 50 | 200 yr | 10,000 yr | ~15 min |
| **Standard** | 100 | 100 yr | 10,000 yr | ~30 min |
| **Extended** | 150 | 100 yr | 15,000 yr | ~45 min |

---

## 2. Game Loop

### 2.1 Turn Structure

- **Step size:** 100 years (standard); or variable (see above)
- **Per turn:**
  1. View current state (Σ, T, Γ, V, distance to kernel boundary)
  2. Receive "event cards" (perturbations: recession, climate shock, tech breakthrough, etc.)
  3. Allocate decision points across the eight-parameter control surface
  4. Commit; simulation advances
  5. See outcome, updated state, trajectory plot

### 2.2 State Vector

Displayed continuously (sidebar or HUD):

| Symbol | Name | Meaning |
|--------|------|---------|
| Σ | Assembly stock | Total maintained structure |
| T | Equilibrium temperature | Planetary radiative balance |
| Γ | Power–assembly coupling | μδξ/η_II |
| V(x) | Value functional | Expected viable stock-years from current state |
| d_K | Distance to kernel boundary | "Years of runway" at current trajectory |
| P / P_ceiling | Power utilisation | Current vs maximum sustainable |

Optional: debt D, reserves E_res, biosphere Σ_bio for advanced mode.

### 2.3 Decision Interface

**Decision points per turn:** Limited budget (e.g. 10 points), scaling with Σ or institutional capacity.

**Allocation targets (eight parameters):**

| Parameter | Action | Cost | Effect |
|-----------|--------|------|--------|
| ε | Decarbonisation | 1–3 pts | Improves emissivity |
| A | Space expansion | 2–5 pts | Raises ceiling (kleos) |
| T_hab | Adaptation / SAI | 1–2 pts | Shifts effective threshold |
| α | Albedo engineering | 1–2 pts | Strategic reserve |
| η_II | Efficiency programmes | 1–2 pts | Subject to Jevons |
| δ | Durability engineering | 1–2 pts | Lowers Γ |
| ξ | Process innovation | 1–2 pts | Lowers Γ |
| μ | Institutional reform | 2–4 pts | Metabolic multiplier; discriminant |

**Constraints:** Each parameter has min/max bounds, tier-dependent operability, and cooldowns. E.g. μ-reduction may require 2 consecutive turns of investment before taking effect.

### 2.4 Physics Engine

- **Dynamics:** dΣ/dt = C − δΣ; C bounded by allocated power; T evolves via Stefan–Boltzmann balance with thermal inertia
- **Viability kernel:** Precomputed or approximated; player sees "safe" vs "danger" zones on a (Σ, T) or (Σ, t) plot
- **Events:** Drawn from distribution (A9-style); can push state toward or away from boundary
- **Extinction condition:** T > T_hab or Σ < Σ_min or exit from K_combined

---

## 3. Scenarios & Modes

### 3.1 Starting Scenarios

| Scenario | Σ_0 | Γ_0 | T_0 | Debt | Notes |
|----------|-----|-----|-----|------|------|
| **World Today** | Calibrated to 2025 | ~current | ~288 K | High | Default; hardest |
| **Stabilised 2050** | Higher Σ | Lower Γ | +1 K | Moderate | Post-transition |
| **Fresh Start** | Low Σ | Configurable | 288 K | Zero | Sandbox |
| **Biosphere Intact** | Same | Same | Same | Same | Higher Σ_bio; larger K_combined |
| **Custom** | Sliders | Sliders | Sliders | Sliders | User-defined |

### 3.2 Game Modes

- **Campaign:** Sequential scenarios with increasing difficulty; unlock "World Today" after completing earlier ones
- **Sandbox:** Free configuration; no leaderboard; explore parameter space
- **Challenge:** Weekly/monthly seeded scenarios; same start for all; leaderboard by survival years and V(x) at end
- **Multiplayer (optional):** N agents share P_total; competitive gradient allocation; coalition formation

---

## 4. Leaderboard & Scoring

### 4.1 Primary Metric: Survival Years

- **Win condition:** Reach 10,000 years without extinction (100 rounds at 100-yr steps)
- **Leaderboard:** Ranked by years survived (descending)
- **Tie-breaker:** V(x) at last turn before 10,000 years, or at extinction
- **Early failure:** Games ending in extinction < 500 years rank below survival runs; "years survived" still primary

### 4.2 Secondary Metrics

- **V_max:** Maximum value functional achieved
- **Γ_min:** Lowest Γ achieved (efficiency of trajectory)
- **A_expansion:** Radiating area at end (kleos success)
- **Biosphere preserved:** Σ_bio / Σ_bio,0 at end

### 4.3 Achievements (Badges)

- **Nostos Master:** Survive 10,000 years with zero A-expansion
- **Kleos Pioneer:** Reach 2× Earth radiating area before year 5,000
- **Γ-Halver:** Reduce Γ by 50% within 500 years
- **Debt-Free:** Eliminate D and survive 1,000 years
- **Biosphere Guardian:** End with Σ_bio ≥ 0.9 × Σ_bio,0
- **Close Call:** Survive with d_K < 10 years at any point
- **Efficiency Trap:** Hit extinction via Jevons (efficiency → growth → ceiling)

---

## 5. UI/UX Sketch

### 5.1 Main Screen

- **Center:** (Σ, T) phase plot with trajectory history, viability kernel boundary, ceiling line
- **Left sidebar:** State vector (Σ, T, Γ, V, d_K, P/P_ceiling)
- **Right panel:** Decision allocation (8-parameter sliders or point allocation)
- **Bottom:** Timeline scrubber (forward/backward), turn counter, event log
- **Top:** Scenario name, difficulty, current strategy classification (S1–S7)

### 5.2 Time Control

- **Play/Pause:** Auto-advance or step manually
- **Scrubber:** Drag to any round (or year); state and trajectory update
- **Branching:** "Save decision" at turn N; "Revert to N" and re-allocate; compare branches
- **Speed:** 1×, 5×, 10× for auto-play (when enabled)
- **Round timer:** Optional countdown (e.g. 20 sec) to keep pace; or untimed for casual play

### 5.3 Feedback

- **Trajectory colour:** Green (inside kernel), yellow (approaching boundary), red (outside)
- **Alerts:** "d_K < 50 years"; "Jevons rebound: η gain recycled into growth"
- **Strategy label:** "Current: S6 (Apathy)" with explanation
- **End screen:** Extinction cause, final V(x), comparison to leaderboard

---

## 6. Technical Stack

### 6.1 Recommended: React + Vite + Supabase

For in-browser + mobile, simple graphics, auth, and leaderboard:

| Layer | Choice | Why |
|-------|--------|-----|
| **Frontend** | React + Vite | Fast build, works on mobile (responsive), large ecosystem |
| **Backend** | Supabase | Auth (username/password), Postgres (leaderboard, runs), Row Level Security, free tier |
| **Captcha** | Cloudflare Turnstile | Privacy-friendly, free, no Google dependency; or reCAPTCHA v3 |
| **Animations** | Framer Motion or CSS | Lightweight; no game engine needed for turn-based |
| **Charts** | Recharts or Chart.js | (Σ, T) phase plot, trajectory history |
| **Hosting** | Cloudflare Pages | Free tier, Git deploy, Turnstile same ecosystem; Vercel/Netlify alternatives |

**Auth flow:** Supabase Auth supports email+password natively. For username: use email as login, store display_name in a `profiles` table. Turnstile on signup form (validate before calling Supabase); optional on login. Sessions via JWT; optional email verification.

**Leaderboard:** Postgres table `runs(user_id, scenario_id, years_survived, v_final, seed, created_at)`. Indexed queries; RLS so users see only their own runs + public leaderboard.

### 6.2 Alternatives

- **SvelteKit + Supabase:** Lighter bundle, simpler; good if you prefer Svelte
- **Firebase:** Auth + Firestore + Hosting in one; less flexible than Postgres for leaderboard queries
- **Next.js:** If you want API routes and SSR; adds complexity

### 6.3 Simulation Fidelity

- **Simplified model:** 2D (Σ, T) or 3D (Σ, T, D); discrete events; lookup tables for kernel boundary
- **Full model:** ODE integration; full 4D state; expensive but accurate
- **Recommendation:** Start with simplified; add "realism" toggle for full model

### 6.4 Data & Calibration

- Use Part 2–4 parameters: δ ~ 0.02–0.05, Γ from Garrett, T_hab ~ 292 K, etc.
- Scenario "World Today" calibrated to 2025 data (IEA, IPCC, national accounts)

### 6.5 Dynamics Specification (What Needs to Be Done)

To make the 4D ODE model operational, the following must be defined:

**1. Allocation → parameter response**

Map player allocation (points per turn) to changes in the 8 parameters. For each parameter, define:
- Effect per point (e.g. +2 pts to ε → Δε = 0.01)
- Diminishing returns? Upper/lower bounds?
- Cooldowns or lag (e.g. μ-reduction takes 2 turns to take effect)

**2. Construction rate C**

$d\Sigma/dt = C - \delta\Sigma$. C must be determined from:
- Surplus power: $P - P_{\mathrm{maint}} = (\mu-1) \cdot P_{\mathrm{maint}}$
- Player allocation: fraction of surplus to construction vs other uses
- Bounds: $0 \leq C \leq \alpha P$ (from Part 4)
- Growth vs stabilisation: player choice to prioritise C or Γ-reduction

**3. Debt dynamics**

$dD/dt = rD - \text{repayment}$. Define:
- Repayment = f(Y, D, player allocation). Y ≈ output, linked to P and η
- Insolvency: when $Y < rD + \delta W$, trigger crisis (D jumps, Σ drops, or game over)
- r modifiable by institutional reform (μ-allocation)

**4. Reserves depletion**

$dE_{\mathrm{res}}/dt = -\text{throughput} / \text{EROI}$. Define:
- How P draws on E_res vs solar/stellar flux
- EROI curve (declining with depletion?)
- Optional: reserves only matter for bootstrap; can simplify to "temporal battery" that extends runway

**5. Event table**

Stochastic perturbations (A9). Define 5–10 event types:
- Recession: C drops, D rises
- Climate shock: T jumps, ε drops
- Tech breakthrough: η improves (but Jevons may recycle)
- Resource shock: ξ or E_res affected
- Probability per turn, effect magnitude, state-dependence

**6. Viability boundary**

Precompute or approximate the kernel boundary. Options:
- **2D (Σ, T):** Solve braking-boundary ODE for a grid of T; store $\Sigma_{\mathrm{crit}}(T)$
- **4D:** Use 2D projection; add heuristic for D and E_res (e.g. "debt crisis if D/W > threshold")
- Extinction when: $T > T_{\mathrm{hab}}$, $\Sigma < \Sigma_{\min}$, or state exits precomputed boundary

**7. Calibration pass**

Run scenarios; tune response functions so that:
- "World Today" + no action → extinction ~200 years
- "World Today" + sensible μ/Γ-reduction → survival to 10,000
- Game feels responsive (decisions matter within 5–10 turns)

### 6.6 Model Encapsulation for Author Review

The thermodynamic model is designed as a **self-contained, reviewable module** so the original author can verify correctness without touching game logic or UI.

**Requirements:**
- Single module (or small package) with no dependencies on React, Supabase, or game code
- Interface uses essay notation (Σ, Γ, T, δ, μ, etc.) and maps directly to Part 2–4 equations
- Pure functions: given state + decision → new state; no side effects
- Inline comments cite essay sections (e.g. "Part 2.2, Eq. (3)")
- Standalone test suite: run model with known inputs, assert outputs match hand calculations

**Interface sketch (essay-aligned):**

```ts
// State: x = (Σ, T_eq, E_res, D) per Part 4.2
interface State {
  Σ: number;      // assembly stock
  T_eq: number;   // equilibrium temperature
  E_res: number;  // exergy reserves
  D: number;      // debt stock
  t: number;      // year
}

// Parameters: p from control surface (ε, A, T_hab, Γ components)
interface Parameters { ε, A, T_hab, α, η_II, δ, ξ, μ: number }

// Decision: allocation → Δ(Parameters)
interface Decision { allocation: Record<string, number> }

// step(x, p, u, Δt) → x'  [Part 2.3, 4.2 dynamics]
function step(state: State, params: Parameters, decision: Decision, Δt: number): State

// inKernel(x, p) → boolean  [Part 4.2 constraint set K]
function inKernel(state: State, params: Parameters): boolean

// distanceToBoundary(x, p) → years  [braking boundary Σ_phys*]
function distanceToBoundary(state: State, params: Parameters): number
```

**Deliverable for review:** The model package plus a short spec document mapping each equation to its implementation (e.g. "dΣ/dt = C − δΣ → line 47 of dynamics.ts").

---

## 7. Roadmap

| Phase | Deliverable |
|-------|-------------|
| **1. Prototype** | Single scenario, 2D (Σ,T), 100-yr steps, 100 rounds, ~30 min, no backend |
| **2. Core loop** | All 8 parameters, events, viability check, extinction |
| **3. Scenarios** | World Today + 3 others; custom configurator |
| **4. Leaderboard** | Backend, challenge mode, scoring |
| **5. Polish** | Achievements, tutorials, strategy hints, variable step size, mobile layout |

---

## 8. Educational Goals

- Players learn that **the ceiling is physics**, the trajectory is dynamics, the levers are parameters
- **μ is the discriminant:** Strategies that neglect μ-reduction fail; this emerges from play
- **Nostos-then-kleos:** Successful runs will typically follow this pattern
- **Debt matters:** Runs with high D fail faster; reform widens the kernel
- **Biosphere coupling:** Degrading Σ_bio contracts the kernel; preservation pays off

---

## 9. Name Ideas

- **Corridor**
- **Kernel**
- **Viability**
- **Thermodynamic Run**
- **10K** (survive 10,000 years)
