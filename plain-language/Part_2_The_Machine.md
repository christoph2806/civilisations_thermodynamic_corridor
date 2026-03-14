# Civilisation's Thermodynamic Corridor
## Plain-Language Version — Part 2: The Machine

*For readers with undergraduate physics but no thermodynamics background.*

---

## 2.1 Civilisation as Assembled Matter

### What is civilisation, physically?

Civilisation isn't just what we do—it's what we've built. Roads, buildings, power grids, factories, servers, cultivated land. All of it is *assembled matter*: structure held in an ordered state against the tendency of the universe to spread things out. The Second Law says isolated systems run toward equilibrium (maximum disorder). But civilisation is an *open* system. It can maintain order by exporting more entropy than it generates—as long as it keeps processing energy.

**Key idea:** The order isn't free. It's rented. Cut the energy flow and it decays.

### Measuring civilisation in physics terms

GDP and wealth are monetary measures. A billion dollars of derivatives and a billion dollars of semiconductor fabs look the same in the accounts but are very different physically. We need a measure whose properties come from physics, not accounting.

The essay defines a quantity **Σ** (sigma)—the *assembly stock*—via four simple rules:

1. **Additivity:** The total maintenance burden is the sum of the parts. Maintaining a bridge plus a data centre costs the sum of both.

2. **Maintenance always costs something:** Every component—steel, concrete, circuits—is unstable. Restoring it requires work. There is no free maintenance. (This follows from the same physics that says you can't reverse an irreversible process without paying.)

3. **Decay without upkeep:** If we stop maintaining, Σ shrinks. Steel corrodes, concrete spalls, code rots. The rate of shrinkage is proportional to how much we have: $\frac{d\Sigma}{dt} = C(t) - \delta\Sigma$. Construction $C(t)$ adds; decay $\delta\Sigma$ subtracts ($\delta$ = decay rate, fraction of stock lost per year).

4. **What counts:** Only things maintained by civilisation's energy flows. The test: if civilisation's power went to zero, would it fall apart on a human timescale? If yes, it's in Σ. If no (e.g. a wild forest maintained by sunlight), it's not.

### Technosphere vs biosphere vs geosphere

- **Geosphere:** Rock, ocean, atmosphere. Structure from geology, not civilisation. Not part of Σ.
- **Biosphere:** Living things. Huge assembly (a single cell has thousands of "assembly steps"). But maintained by photosynthesis and ecology, not by civilisation. Not part of Σ.
- **Technosphere:** Everything we build and maintain—roads, buildings, servers, farms that depend on our energy. This is Σ.

The biosphere actually has *more* assembly than the technosphere (by orders of magnitude) and maintains it on ~130 TW of solar capture. The technosphere maintains far less on ~20 TW. Biology is vastly more efficient at maintaining complexity per watt. That gap matters later.

### The maintenance floor

Σ decays at rate δ (roughly 2–5% per year for the US technosphere). To hold Σ constant, we must supply power. The *minimum* power is:

$$P_{\mathrm{maint}} \geq \frac{\delta\xi}{\eta} \cdot \Sigma$$

where $\delta$ = decay rate, $\xi$ = energy cost per "assembly step" restored, $\eta$ = conversion efficiency (currently ~10–15%), $\Sigma$ = assembly stock. The product $\delta\xi/\eta$ is always positive. No technology can make it zero. This is the *maintenance floor*: the irreducible power needed just to prevent things from falling apart.

**Empirical check:** US "Consumption of Fixed Capital" (depreciation) was ~15% of GDP in 2023. Infrastructure investment gaps, rising maintenance share—the data match. Economic depreciation is the Second Law in accounting disguise.

### Tainter's insight

Joseph Tainter (1988) showed that societies add complexity to solve problems, but each new increment yields less benefit while the maintenance cost stays the same. Eventually, maintenance exceeds the surplus. The Roman Empire didn't fall to barbarians alone—it fell to the cost of maintaining its own structure. The thermodynamics and the history line up.

---

## 2.2 The Full Power Bill

### We do more than maintain

Real civilisation also builds, transports, computes, governs, and grows. Total power P exceeds the maintenance floor by a factor **μ** (the *metabolic multiplier*), typically ~1.7–2.5. So:

$$P = \frac{\mu\delta\xi}{\eta} \cdot \Sigma = \Gamma \cdot \Sigma$$

The composite $\Gamma$ (gamma) $= \mu\delta\xi/\eta$ captures how much power we need per unit of assembly stock. Here $\mu$ = metabolic multiplier (total power / maintenance power), $\delta$ = decay rate, $\xi$ = exergy cost per repair, $\eta$ = efficiency. It depends on technology, materials, and institutions—but it's always positive and bounded below.

### The four components of Γ

Each has a different "status":

- **δ (decay rate):** Physics says δ > 0. Engineering can lower it (build more durable stuff). But the trend has been toward *higher* δ—more electronics, software, short-lived goods—which raises the burden.

- **ξ (energy cost per repair):** Always positive. Varies by material and process.

- **η (efficiency):** Always < 1. We waste most of the energy we use. Current aggregate ~10–15%.

- **μ (metabolic multiplier):** Ratio of total power to maintenance power. Partly institutional (interest rates, military spending, etc.)—reformable. Partly evolutionary (competitive pressure to grow)—harder to change.

**Bottom line:** The ceiling argument only needs that $\Gamma > 0$. The exact value affects *when* we hit the ceiling, not *when* it exists.

---

## 2.3 The Waste Heat Ceiling

### Where does the power go?

Every watt we use ends up as heat. Nuclear, wind, solar, fusion—all of it. That heat must be radiated to space. The rate is set by the Stefan–Boltzmann law: $P_{\mathrm{rad}} = \varepsilon\sigma A T^4$. At steady state:

$$P_{\mathrm{sun}} + P_{\mathrm{civ}} = \varepsilon\sigma A T^4$$

So if P_civilisation grows, T must rise. No technology, fuel, or policy changes this. It's geometry and radiative physics.

### Solar: three cases

1. **Surface solar, matched albedo:** Panels that replace a surface with similar reflectivity add no net heat—the sunlight was already heating the planet. Dominant case. Solar is largely exempt from the waste heat budget in this form.

2. **Surface solar, albedo mismatch:** Dark panels on light sand absorb more. That *is* a net addition. Small now; could matter at huge scale.

3. **Beamed solar from space:** Energy collected off-planet and beamed down = net addition, same as nuclear or fossil.

### The ceiling formula

If T must stay below some habitability limit T_hab, then there's a maximum power we can dissipate:

$$P_{\max} = \varepsilon\sigma A T_{\mathrm{hab}}^4 - P_{\mathrm{sun}}$$

Since $P = \Gamma\cdot\Sigma$ ($\Gamma$ = power per unit assembly), the maximum sustainable assembly stock is:

$$\Sigma_{\max} = \frac{\varepsilon\sigma A T_{\mathrm{hab}}^4 - P_{\mathrm{sun}}}{\Gamma}$$

where $\varepsilon$ = emissivity, $\sigma$ = Stefan–Boltzmann constant, $A$ = radiating area, $T_{\mathrm{hab}}$ = habitability temperature limit, $P_{\mathrm{sun}}$ = absorbed solar flux. This is the *central result* of Part 2. The numerator is radiative physics (how much extra power the planet can radiate before overheating). The denominator is thermodynamics (how much power we need per unit of assembly). The ceiling is finite, calculable, and applies to any energy source.

### Waste heat ≠ greenhouse

The greenhouse effect is about *which* gases are in the atmosphere. We can change that (in principle) by switching fuels. The waste heat ceiling is about *total power*. It doesn't matter what we burn. Carbon taxes don't touch it. Efficiency gains don't remove it—they historically increase total consumption (Part 3).

### Where we are now

Global power ~20 TW. The ceiling (at ~4–10 K above pre-industrial) is roughly 7,000–18,000 TW. We're at ~0.3% of the corridor. But at 2.3% annual growth, doubling time ~30 years. ~8–10 doublings to the ceiling = 250–400 years. The ceiling is distant; it's also not infinitely far.

**Caveat:** These projections assume growth continues. If growth slows or stops, the timeline stretches. The ceiling is physics. The timeline is scenario.

### The viable region

We now have two bounds:

- **Floor:** $P \geq (\delta\xi/\eta)\cdot\Sigma$ ($\delta$ = decay rate, $\xi$ = exergy cost, $\eta$ = efficiency). Below this, $\Sigma$ decays.
- **Ceiling:** $\Sigma \leq \Sigma_{\max}$. Above this, the planet overheats.

The space between is the *viable region*—where civilisation can, in principle, persist. Both bounds are set by physics. Neither is negotiable.

---

## 2.4 Information and the "Dematerialisation" Escape

### The objection

"Civilisation is shifting to an information economy. Software and services use less energy than steel and concrete. We'll dematerialise."

### The reply: information is physical

Information isn't free. Landauer (1961) showed that *erasing* a bit—the irreversible step in computation—must dissipate at least $k_B T \ln 2$ of energy per bit. At room temperature, that's ~3×10⁻²¹ J per bit. This has been experimentally confirmed (Bérut et al. 2012, others). It's a fundamental limit, like the Carnot limit for heat engines.

**Reversible computing:** In principle, computation can avoid erasure (Bennett 1973). But: (1) most useful computation is irreversible; (2) inputs and outputs are inherently irreversible; (3) reversible computing trades energy for speed—you'd compute infinitely slowly and be outcompeted; (4) even at the Landauer limit, the Jevons effect would mean we'd just compute vastly more—the limit is a floor for the next expansion, not a ceiling on demand.

### The data

- Intel 4004 (1971): ~90,000 ops/sec, 0.5 W. Modern GPU: ~10¹⁵ ops/sec, 700 W. Energy per op fell by ~10¹⁰. Total computational energy *consumption* exploded.
- Lighting: ~3,000× improvement in efficiency. Total light consumption increased ~40,000×. The world spends ~0.7% of GDP on light—same as before.
- AI: Training a frontier model ~50 GWh. Inference load scaling. The sector that was supposed to dematerialise is the fastest-growing energy consumer.

**Pattern:** Efficiency gains get recycled into more consumption. The power–assembly coupling $\Gamma$ doesn't care whether the assembly is in steel mills or server farms. It couples to the total. The information economy doesn't escape the constraint—it accelerates toward it.
