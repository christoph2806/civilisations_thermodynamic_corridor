# Analysis: Part 2.2 - The Maintenance Requirement

## Document Purpose
Derives full power-assembly coupling P = Γ(t)·Σ; introduces metabolic multiplier μ; establishes composite Γ = μδξ/η_II and its tier structure.

---

## DEFINITIONS

**D2.4: Metabolic Multiplier μ**
- μ = P / P_maint; μ ≥ 1
- Maintenance-equivalent activity ~40–60% of throughput → μ ≈ 1.7–2.5

**D2.5: Composite Coupling Γ(t)**
- Γ(t) = μδξ/η_II
- P = Γ(t)·Σ

---

## THEOREMS

**T2.4: Full Power-Assembly Coupling**
- P = (μδξ/η_II)·Σ = Γ(t)·Σ
- *Proof*: P_maint ≥ δξΣ/η_II; real civilisation does more → μ; P = μ·P_maint
- *Dependencies*: T2.1, D2.4

**T2.5: Γ Components Tier Structure**
- δ, ξ: Tier 1 floors (positive); Tier 2 stiff (engineering)
- η_II: Tier 1 ceiling (<1); Tier 2 stiff (Jevons resists)
- μ: Tier 3 compliant (institutional) + Tier 2 stiff (competitive)

---

## OBSERVATIONS

**O2.7**: η_II ~10–15% globally (Cullen & Allwood 2010; Brockway et al. 2014)
**O2.8**: Durability engineering reduces δ → reduces Γ; historical trend opposite (higher δ)

---

## PROPOSITIONS

**P2.4**: Ceiling argument requires only Γ > 0 (bounded below); not constancy
**P2.5**: Decay-rate engineering is Tier 2/3 intervention with Tier 1 consequences

---

## CRITICAL REVIEW

**μ calibration (40–60% maintenance-equivalent)**: *Verification: Partial collapse.* Essay explains reasoning: depreciation (15% GDP) is lower bound; physical accounting includes repair, operational upkeep, supply-chain energy, service-sector upkeep. Cites BEA 2023, Bath ICE, IEA (30–50% energy). No single meta-analysis for 40–60% economic throughput. See WEAK_POINTS_VERIFICATION.md.
**Key claim**: "The waste heat analysis needs only existence and positivity of coupling"—verified; ceiling derivation in 2.3 uses this.
