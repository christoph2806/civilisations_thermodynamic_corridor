# Analysis: Part 2.4 - Information Entropy and the Landauer Floor

## Document Purpose
Closes dematerialisation escape route by establishing information as physical; Landauer limit; Jevons applies to computation; reversible computing caveat.

---

## AXIOMS / OBSERVATIONS

**O2.13**: Landauer limit E_min = k_BT ln2 per irreversible bit operation
- *Source*: Landauer 1961; experimental confirmation Bérut et al. 2012, Jun et al. 2014, Hong et al. 2016

**O2.14**: Brillouin: information entropy ↔ thermodynamic entropy via k_BT ln2
- *Source*: Brillouin 1951, 1956; Szilard 1929 (Maxwell's demon)

---

## PROPOSITIONS

**P2.10: Information is Physical**
- Every bit stored requires substrate; every bit erased dissipates ≥ k_BT ln2
- Dematerialisation thesis rests on category error

**P2.11: Reversible Computing Caveat**
- Bennett 1973: computation can be reversible in principle
- Counter: (1) most workloads irreversible; (2) I/O inherently irreversible; (3) 9-order gap to Landauer; (4) maximum power selects against quasi-static operation

**P2.12: Computation Follows Jevons**
- 10¹⁰ efficiency gain (4004→H100); total compute energy exploded
- Koomey's Law = computational Jevons
- AI: 50 GWh per frontier model; inference load scaling

**P2.13: Quantum Computing Not Escape**
- Still dissipates; Landauer applies to measurement/error correction; Jevons applies to speedups

---

## THEOREMS

**T2.8: Γ Couples to Total Σ Regardless of Composition**
- Power-assembly coupling does not distinguish steel mills from server farms
- Information sector accelerates toward ceiling

**T2.9: Landauer is Floor for Next Expansion**
- At Landauer limit, 10³⁰ ops/s ≈ 2.87 GW—manageable
- But Jevons: civilisation would compute 9 orders more, not hold constant

---

## CRITICAL REVIEW

**Validation**: Verify Bérut et al., Patterson et al., de Vries AI energy estimates
**Key move**: Bennett's result acknowledged but deflected on four grounds—assess completeness
