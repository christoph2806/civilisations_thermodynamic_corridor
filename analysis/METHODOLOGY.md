# Analysis Methodology for "Civilisation's Thermodynamic Corridor"

## Purpose
This document defines the structured analytical framework for decomposing the philosophical/physical argument into verifiable logical components, similar to a mathematical textbook proof structure.

---

## Classification System

Each claim in the work is categorized by its epistemological status and role in the logical chain:

### **AXIOMS (A)**
- Fundamental laws of physics or mathematics
- **Not proven within the work** - assumed as foundation
- Must be universally accepted or cite authoritative source
- Format: `A{part}.{number}: {Name}`
- Example: `A1.1: Second Law of Thermodynamics`

### **DEFINITIONS (D)**
- Precise technical terms introduced by the work
- Stipulative definitions that establish vocabulary
- Not true/false, but clear/unclear or useful/not useful
- Format: `D{part}.{number}: {Term}`
- Example: `D1.1: Dissipative Structure`

### **OBSERVATIONS (O)**
- Empirical facts from measurements or established science
- Must cite source (paper, measurement, dataset)
- Can be verified against external evidence
- Format: `O{part}.{number}: {Claim}`
- Example: `O1.2: Earth's Solar Energy Budget`

### **PROPOSITIONS (P)**
- Derived claims that require justification
- Built from axioms, definitions, and observations
- Smaller logical steps, supporting roles
- Format: `P{part}.{number}: {Claim}`
- Example: `P1.5: All Power Consumption Becomes Waste Heat`

### **LEMMAS (L)**
- Intermediate results needed for theorems
- Proven claims used as building blocks
- More significant than propositions, less central than theorems
- Format: `L{part}.{number}: {Claim}`
- Example: `L2.3: Maintenance Rate Scales with Assembly Stock`

### **THEOREMS (T)**
- Major claims - the core contributions of each section
- Full logical chains from axioms/observations to conclusion
- The "headlines" of the argument
- Format: `T{part}.{number}: {Claim}`
- Example: `T1.1: The Sink Constraint is Fundamental`

### **COROLLARIES (C)**
- Direct consequences of theorems
- Require minimal additional justification
- Format: `C{part}.{number}: {Claim} (from T{x}.{y})`
- Example: `C1.1: Technology Cannot Remove the Ceiling (from T1.1)`

### **CONJECTURES (J)**
- Claims presented as likely but not rigorously proven
- May have supporting evidence but logical gaps remain
- Format: `J{part}.{number}: {Claim}`
- Example: `J5.2: Modal Galactic Outcome is Ignorance Strategy`

### **IMPLICATIONS (I)**
- Consequences for the broader argument structure
- Meta-level observations about what has been established
- Format: `I{part}.{number}: {Implication}`

---

## Analysis Document Structure

Each part_X.Y.md gets a corresponding analysis/part_X.Y_analysis.md with:

### 1. Header
```markdown
# Analysis: Part X.Y - {Title}
## Document Purpose
{1-2 sentence summary of the section's role}
```

### 2. Classified Claims
Each category in order, with:
- **Identifier** (e.g., T2.3)
- **Claim** (the statement being made)
- **Justification/Proof sketch** (how it's derived)
- **Dependencies** (which other items it relies on)
- **Source/Citation** (for observations)
- **Status** (assessment: rigorous/plausible/speculative/questionable)

### 3. Critical Review Notes
```markdown
### Requires Validation:
{List claims that need checking}

### Potential Gaps:
{List logical leaps or missing steps}

### Rhetorical Choices:
{Note persuasive vs. logical elements}
```

### 4. Logical Dependencies Graph
```markdown
```
{ASCII or description of dependency tree}
```
```

### 5. Summary
Brief assessment of what this section establishes and its role in the larger proof.

---

## Validation Checklist

For each claim, assess:

### Logical Validity
- [ ] **Dependencies clear**: All premises identified
- [ ] **Inference valid**: Conclusion follows from premises
- [ ] **No hidden assumptions**: All steps explicit

### Empirical Validity (for O, observations)
- [ ] **Source cited**: Paper, measurement, or authority given
- [ ] **Data accessible**: Can the claim be independently verified?
- [ ] **Context appropriate**: Is the data used within its valid range?

### Definitional Clarity (for D, definitions)
- [ ] **Unambiguous**: Term has clear boundaries
- [ ] **Consistent**: Used same way throughout
- [ ] **Operational**: Can be applied/measured

### Theoretical Soundness (for T, theorems)
- [ ] **Complete proof**: All steps from axioms to conclusion
- [ ] **No circular reasoning**: Doesn't assume what it proves
- [ ] **Scope clear**: Boundary conditions and limitations stated

---

## Special Categories

### Coupling Claims
When the argument connects different domains (physics → economics, thermodynamics → game theory):
- Mark with `[COUPLING]`
- Extra scrutiny on whether the mapping is valid
- Check units, analogies, and domain applicability

### Quantitative Claims
When specific numbers or formulas are given:
- Mark with `[QUANT]`
- Verify units and dimensional analysis
- Check order-of-magnitude plausibility
- Note error bounds or uncertainties

### Empirical Claims
When empirical studies are cited (Garrett, Jevons, etc.):
- Mark with `[EMPIRICAL]`
- Verify citation accuracy
- Check sample size, methodology, replication status
- Assess whether interpretation matches original paper

---

## Final Synthesis

After analyzing all parts, create:

### `PROOF_STRUCTURE.md`
- The complete logical chain from axioms to final conclusion
- Full dependency graph
- Critical path (minimum set of claims needed)

### `WEAK_POINTS.md`
- Claims with questionable justification
- Empirical claims that need verification
- Logical gaps that need filling
- Alternative interpretations

### `VALIDATION_REPORT.md`
- Overall assessment: Does the proof hold?
- Which theorems are solid?
- Which require additional support?
- What empirical work would strengthen/falsify the claims?

---

## Example Entry Format

```markdown
**T2.4: Γ-Coupling Links Power to Assembly Stock**
- *Claim*: P = Γ(t) · Σ, where Γ(t) = μδξ/η_II
- *Justification*:
  1. Assembly stock Σ decays at rate δ [D2.1, O2.3]
  2. Maintenance requires exergy at cost ξ per step [D2.2]
  3. Conversion efficiency limited by η_II [A1.1, Second Law]
  4. Metabolic multiplier μ accounts for above-minimum demand [D2.5]
  5. Therefore: P = μ · δΣ · ξ / η_II = Γ(t) · Σ
- *Dependencies*: D2.1, D2.2, D2.5, O2.3, A1.1
- *Empirical support*: Garrett et al. (2022) - 5.9 mW/$ over 50 years [EMPIRICAL]
- *Status*: **Core claim** - entire edifice depends on this coupling being real
- *Validation needs*:
  - [ ] Verify Garrett citation and methodology
  - [ ] Check if other studies replicate finding
  - [ ] Assess whether economic $ genuinely proxies for Σ
  - [ ] Examine whether μ, δ, ξ, η_II are truly separable parameters
```

---

## Usage Notes

1. **Start with executive summary** to understand the main thesis
2. **Work sequentially** through parts to build dependency chain
3. **Flag forward references** when a part cites results not yet proven
4. **Track definitions** - ensure terms don't shift meaning
5. **Note rhetorical vs. logical** elements - persuasive language vs. actual proof steps
6. **Build skeptically** - prove it wrong if you can; if you can't, tentatively accept

The goal is not to agree or disagree, but to **make the logical structure transparent** so that:
- Valid arguments can be recognized as such
- Invalid arguments can be identified and potentially corrected
- Gaps can be filled with additional evidence or reasoning
- The work's contribution can be fairly assessed
