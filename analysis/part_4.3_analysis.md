# Analysis: Part 4.3 - Competitive Viability

## Document Purpose
**Formal centrepiece**: Derives maximum power principle from viability geometry; gradient saturation as theorem; Jevons, competitive exclusion, landscape dependence as corollaries. No ecological imports.

---

## AXIOMS (Competitive Extension)

**A5 (Finite gradient)**: ΣPᵢ ≤ P_total < ∞
**A6 (Per-agent dynamics)**: dΣᵢ/dt = Cᵢ - δᵢΣᵢ; Cᵢ ≤ αᵢPᵢ
**A7 (Minimum viable stock)**: Σᵢ,min > 0
**A8 (Monotone share)**: Pᵢ = sᵢ(Σ)·P_total; sᵢ↑Σᵢ, sᵢ↓Σⱼ; Σsᵢ ≤ 1
**A9 (Stochastic perturbation)**: Recurring ξₖ from μ; absolutely continuous; q(ξ)>0 near 0

---

## LEMMAS

**L1 (Monotonicity)**: Kᵢ(Pᵢ') ⊆ Kᵢ(Pᵢ'') when Pᵢ' ≤ Pᵢ''
- *Proof*: Velocity set [−δᵢΣᵢ, αᵢPᵢ−δᵢΣᵢ] expands with Pᵢ; Aubin monotonicity

**L2 (Survival monotonicity)**: K₁ ⊆ K₂ ⇒ s(x,K₁,μ) ≤ s(x,K₂,μ)
- *Proof*: Measure monotonicity; strict when positive-measure difference

**L3 (Self-reinforcing)**: Larger-kernel agents favoured; no mechanism reverses

---

## THEOREMS

**T4.4 (T2: Geometric Persistence)**
- Agents with larger kernels persist with higher probability
- *Proof*: L1→L2→P4 (differential persistence)→L3

**T4.5 (T3: Gradient Saturation)**
- Dynamically persistent ⇒ ΣPᵢ = P_total
- *Proof*: Surplus gradient → expanders get larger kernels → non-expanders eliminated

**T4.6 (T4: Below-Saturation Transience)**
- Configurations with ΣPᵢ < P_total are transient
- *Proof*: Expanding agents dominate at exponential rate

---

## COROLLARIES

**C4.1**: Jevons = viability expansion + competition (efficiency → αᵢ↑ → kernel↑ → gradient captured)
**C4.2**: Competitive exclusion = geometric filtering (below-frontier → smaller kernel → eliminated)
**C4.3**: Garrett stable Γ = equilibrium signature
**C4.4**: Landscape dependence—attractor value of Γ is Tier 3; stiffness is Tier 2

---

## CRITICAL REVIEW

**Validation**: A8 structural axiom—is share function sᵢ = ΓᵢΣᵢ/ΣΓₖΣₖ the only possibility?
**A9**: Absolute continuity + recurrence—are civilisational perturbations well-modeled?
**Key achievement**: Maximum power derived, not assumed
