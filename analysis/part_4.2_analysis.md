# Analysis: Part 4.2 - Viability Theory

## Document Purpose
Applies Aubin viability theory; defines kernel, braking boundary, zone of false security; solvency-constrained admissible controls; physical vs institutional boundaries.

---

## DEFINITIONS

**D4.1: Viability Kernel Viab_F(K)**
- States x₀ from which ∃ u(·) such that x(t) ∈ K ∀t ≥ 0
- *Source*: Aubin 1991

**D4.2: Braking Boundary Σ_phys*(T)**
- Maximum Σ from which C=0 (max braking) avoids T > T_hab
- Implicit: T_peak(Σ_phys*, T₀) = T_hab

**D4.3: Zone of False Security**
- K \ Viab_F(K): states in K but doomed
- Gap between Σ_phys* and Σ_max

**D4.4: Admissible Control U_adm(Σ,D)**
- u: Y(u,Σ) ≥ rD + δW (solvency)

---

## THEOREMS

**T4.1: Braking Boundary (Proposition P1)**
- Σ_phys*(T₀) < Σ_max for T₀ < T_hab
- Gap ~ r/(1-r) · κ(T_hab-T₀)/Γ; r = τ_T/τ_Σ ≈ 0.6
- *Dependencies*: Thermal ODE with linearised radiative damping

**T4.2: Debt Narrows Kernel (Proposition P2)**
- K_inst(r,D) ⊂ K_phys when rD > 0
- Σ_inst*(T) < Σ_phys*(T)
- *Proof*: Solvency excludes C=0 when rD > 0

**T4.3: Solvency Decomposition**
- δW = Tier 1 (physical); rD = Tier 3 (conventional)
- Reform can eliminate rD from binding constraint

---

## PROPOSITIONS

**P4.6**: Optimality wrong framework; viability asks "from where can we survive?"
**P4.7**: At r≈0.6, false-security zone ~1.5× thermal buffer; viability boundary ≈ Σ_max/2.5
**P4.8**: ~40 years of growth to viability boundary at 2.3% (vs decades to ceiling)
**P4.9**: Dynamic kernel contraction: greenhouse tightens; state vector moves toward boundary

---

## CRITICAL REVIEW

**Validation**: Verify Aubin references; check thermal ODE derivation (β, r formulas)
**Key result**: Institutional reform buys gap between Σ_phys* and Σ_inst*
