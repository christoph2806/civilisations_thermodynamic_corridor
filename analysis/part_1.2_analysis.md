# Analysis: Part 1.2 - System Boundaries

## Document Purpose
Establishes thermodynamic primitives (entropy balance, exergy, boundary choice) and derives the boundary renormalisation principle that fixes the system boundary at top-of-atmosphere.

---

## AXIOMS

**A1.4: Entropy Balance for Open Systems**
- dS/dt = Ṡ_in - Ṡ_out + Ṡ_gen
- Ṡ_gen ≥ 0 (Second Law)
- *Source: Prigogine 1945, 1977 Nobel Lecture*

**A1.5: Gouy-Stodola Theorem**
- X_dest = T₀Ṡ_gen (exergy destroyed ∝ entropy generated)
- *Source: Gouy 1889, Stodola 1898*

---

## DEFINITIONS

**D1.4: Exergy**
- Maximum useful work as system reaches equilibrium with reference environment
- For thermal: W_max = Q × (1 - T_C/T_H) (Carnot bound)
- *Source: Gibbs 1873, Helmholtz 1882, Rant 1956*

**D1.5: Boundary Renormalisation Principle**
- If activity materially perturbs the sink assumed fixed, expand boundary until sink cannot be perturbed
- *Source: Methodological rule from entropy balance self-consistency*

---

## PROPOSITIONS

**P1.6: Heat Rejection ≠ Irreversibility**
- Reversible Carnot engine rejects heat (necessary) but Ṡ_gen = 0
- Irreversibility (friction, mixing, etc.) is the true thermodynamic cost
- *Dependencies: A1.4*

**P1.7: Waste Heat is Inescapable; Irreversibility is Reducible**
- All power consumed → waste heat (from T1.1)
- Ṡ_gen per unit output can be reduced by better engineering
- *Dependencies: T1.1, P1.6*
- *Forward ref*: "Analysis of evolutionary dynamics will show it cannot [be reduced fast enough]"

**P1.8: Civilisation Powered by Exergy, Not Energy**
- Energy conserved (First Law); exergy destroyed by every irreversible process
- Thermodynamic cost is objective, not conventional
- *Dependencies: A1.2, A1.5*

---

## THEOREMS

**T1.3: Top-of-Atmosphere is Unique Boundary**
- *Claim*: For planetary civilisation, only sink that cannot be materially perturbed is deep space
- *Proof*: Boundary renormalisation principle (D1.5) + civilisation's power is measurable against solar input
- *Dependencies: D1.5, T1.1*
- *Corollary*: Below ToA, every "sink" is intermediate reservoir; above ToA, no recoverable gradient

**T1.4: Sink Constraint is Geometry Problem**
- *Claim*: P_rad = εσAT⁴; P_☉ + P = εσAT_eq⁴ at steady state
- *Claim*: T rises monotonically with P; no technology changes this
- *Dependencies: A1.3, T1.1*
- *Status*: Restates T1.1 with explicit boundary

---

## IMPLICATIONS

- Source is choosable (solar, fission, fusion, fossil); sink is not
- Gap between source and sink constraints is the essay's subject
- Three-case partition for solar (Part 2.3): matched albedo exempt; albedo mismatch adds; beamed solar from space = net addition

---

## CRITICAL REVIEW

**Validation needed**: Boundary renormalisation principle—is "materially perturb" well-defined? What threshold?

**Gap**: Spacecraft boundary (radiator surface) mentioned but not developed.
