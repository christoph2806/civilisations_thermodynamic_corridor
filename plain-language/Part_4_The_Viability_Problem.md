# Civilisation's Thermodynamic Corridor
## Plain-Language Version — Part 4: The Viability Problem

*For readers with undergraduate physics but no thermodynamics background.*

---

## 4.1 The Temporal Hierarchy of Constraints

### Not all constraints bite at once

Parts 1–3 established several constraints: the maintenance floor, the waste heat ceiling, the evolutionary ratchet, inertia, financial amplifiers, the Landauer floor. Each was derived independently. How do they interact? Which binds first? Which binds last?

**Two temporal concepts:** The *decision window* is when action must start to avoid future violation. The *constraint bite* is when the constraint actually becomes binding. These can differ by decades or centuries. Conflating them overstates near-term urgency and understates long-term inescapability.

### The greenhouse constraint

**Most urgent decision window.** Atmospheric CO₂ ~425 ppm, radiative forcing ~2.9 W/m², ~1.3 K above pre-industrial. At current trajectories, 1.5 K within the decade, 2 K before mid-century.

**Distinct from waste heat:** The greenhouse effect is a constraint on the *composition* of entropy export (CO₂, CH₄, N₂O), not on total power throughput. Waste heat is source-independent—every joule contributes regardless of origin. A civilisation that replaced all energy with zero-carbon sources would eliminate greenhouse forcing while leaving the waste heat trajectory untouched.

**Partially compliant:** Radiative transfer is Tier 1. The source (fossil combustion) is Tier 3—changeable. The maintenance floor demands power, not carbon. Decision window: decades. Constraint bite: roughly a century (ocean thermal equilibration).

**Tipping points:** Ice-sheet collapse, permafrost methane, Amazon dieback can irreversibly reduce effective emissivity ε in step functions. The smooth model understates risk; tipping points make the kernel contract faster.

### The ecological constraint

Biodiversity loss, soil degradation, freshwater depletion, nutrient disruption narrow the corridor on decadal timescales. Two mechanisms: (1) Ecosystem services (pollination, water purification, soil formation) operate on solar exergy outside the technospheric budget. When they degrade, civilisation must replace them with engineered infrastructure at Γ_tech ≫ Γ_bio—the burden-transfer mechanism. (2) Biosphere disruption can reduce carbon sink capacity, lowering the threshold at which the greenhouse constraint bites. The ecological constraint amplifies both greenhouse and waste heat constraints through the same coupling parameters.

### The financial solvency constraint

**Y ≥ (r + δ)·W** must hold for virtual wealth to remain redeemable against real wealth. Here Y = annual economic output, r = real interest rate, δ = physical decay rate of assembly, W = accumulated wealth (monetary proxy for Σ). Decision window: decades to a century. Constraint bite: when solvency raises the minimum viable growth rate above zero, forcing the trajectory toward the ceiling.

**Entirely compliant:** δ (the decay rate) is physics—the Second Law operating on assembled matter. r (the interest rate) is convention—a rule humans invented. A civilisation that restructured its monetary architecture could eliminate r from the inequality, leaving only Y ≥ δ·W (output must at least match the thermodynamic decay of existing stock)—the thermodynamic minimum. Eliminating r substantially widens the viable corridor.

**Interaction with greenhouse:** The financial growth imperative compels expansion of W (wealth) → P (power throughput) → fossil combustion. Decarbonisation without financial reform still requires exponential energy growth to service debt. Financial reform without decarbonisation still emits carbon. The two interventions are complementary, not substitutable.

### The evolutionary ratchet

**Always operating.** Not a constraint that binds at a moment. It biases the trajectory toward the ceiling continuously. Decision window and constraint bite are one: always present.

**Tier 2:** Stiff but not physics. Competitive selection favours maximum throughput. Jevons recycles efficiency into demand. Overriding requires civilisation-scale coordination—no precedent at required scale. The ratchet is why the waste heat ceiling cannot be dismissed even when the timeline is centuries.

### The waste heat ceiling

**Σ_max = (εσ A T_hab⁴ − P_☉) / Γ**

where ε = effective emissivity, σ = Stefan–Boltzmann constant, A = radiating area, T_hab = habitability temperature limit, P_☉ = absorbed solar flux, Γ = power per unit assembly. Set by Stefan–Boltzmann on a finite radiating surface. Tier 1. Fixed. Expandable only by increasing A beyond the planet.

---

## 4.2 Viability Theory

### Why optimality is the wrong framework

Standard climate-economy models (Nordhaus DICE, Stern) treat the civilisational predicament as an optimisation problem: maximise discounted utility subject to constraints. That framing assumes civilisation can, in principle, reach any region of "state space"—the space of all possible combinations of assembly stock, temperature, debt, and so on. The question is then: which trajectory is best?

**The error:** The physics of Parts 1–3 shows that large regions of state space are not merely suboptimal—they are lethal. A planetary temperature beyond wet-bulb survivability is not a "cost" to be discounted. Assembly below the minimum for critical infrastructure (power grids, food distribution, medical systems) is not a "welfare loss." These are hard boundaries. Cross them and the system ceases to exist in any form recognisable as civilisation. Optimisation treats such regions as bad outcomes. Viability treats them as non-outcomes: the system is gone.

**Viability theory (Aubin, 1990s):** The mathematician Jean-Pierre Aubin developed a framework for exactly this class of problem. Instead of asking "what is best?", viability theory asks "from which states can we survive at all, and what controls keep us there?" The solution is not a single optimal path. It is a *set*—the largest subset of state space from which there exists at least one trajectory that never violates the constraints. This set is called the *viability kernel*. The policy question shifts from "what is the best thing to do?" to "from which states is survival still possible, and what actions keep us inside that region?"

### The formal structure

In formal terms, the civilisation's state x(t)—a vector of assembly stock, temperature, reserves, debt—evolves according to dynamics **dx/dt ∈ F(x,u)**. Here u is the control: the levers civilisation can pull (monetary policy, fiscal policy, energy mix, allocation decisions). The dynamics F describe how the state changes given the current state and the control applied.

**Constraint set K:** Define K as the set of all states that satisfy the survival constraints: temperature below habitability limit, assembly above minimum viable level, and so on. States outside K are non-viable by definition—they violate at least one constraint.

**Viability kernel:** The viability kernel Viab_F(K) is the set of states *inside* K from which there exists at least one control trajectory u(·) that keeps the system inside K forever. In words: from these states, survival is possible. From states outside the kernel but still inside K, survival is not possible—no matter what controls are applied, the system will eventually exit K.

**Zone of false security:** The gap between K and the viability kernel is crucial. States in this gap satisfy all constraints *today*. They look viable. But they are doomed: every possible trajectory eventually violates a constraint. By the time the system has drifted into this zone, it is already too late. The essay calls this the *zone of false security*.

**Local criterion:** At the boundary of K, the "tangent cone" defines which directions of motion keep the trajectory inside K for at least an instant. Viability requires that the dynamics, at each point, allow at least one such direction. If not, the state is outside the kernel.

### The civilisational state vector

To apply this to civilisation, the state must be specified. The essay uses a four-dimensional state vector:

**x = (Σ, T_eq, E_res, D)**

- **Σ (assembly stock):** Total assembled matter maintained by civilisation. Its dynamics are dΣ/dt = C(t) − δΣ: construction C adds, decay δ subtracts. Maintenance power P = Γ·Σ (power scales with stock).

- **T_eq (planetary equilibrium temperature):** Set by the Stefan–Boltzmann balance. Responds to waste heat with thermal inertia (the ocean heats and cools slowly).

- **E_res (exergy reserves):** Fossil fuels, fissile materials, accessible renewable potential. Depletes at a rate set by throughput and energy return on investment.

- **D (debt stock):** Aggregate debt. Grows via interest and new lending; shrinks via repayment. From Part 3's amplifiers analysis.

The control vector u includes monetary policy (interest rates, credit regulation), fiscal policy (taxation, public investment), energy mix decisions, and allocation across sectors. The admissible set U(x)—which controls are actually available—depends on the current state. A civilisation with depleted reserves has fewer options than one with abundant reserves; one in debt crisis has fewer degrees of freedom than one with fiscal headroom.

### The constraint set and three tiers

The constraint set K is the intersection of all survival constraints. The three-tier ontology from Part 2–3 organises them:

**Tier 1 (hard physics):** T_eq ≤ T_max (habitability ceiling); Σ ≥ Σ_min (minimum viable civilisation—below this, critical infrastructure cannot be sustained); Landauer floor on computation. No technology, no institutional reform, no act of collective will can alter these. They define the arena.

**Tier 2 (evolutionary dynamics):** The Lotka attractor (trajectory biased toward maximum power) and Jevons recycling (efficiency gains expand demand). These bias the dynamics within the geometry defined by Tier 1. They do not create hard boundaries in the same way, but overriding them has no precedent at civilisational scale.

**Tier 3 (human conventions):** Debt growth floor Y ≥ (r+δ)W; governance frequency mismatch. Real and binding today, but reformable. Y = output, r = interest rate, δ = decay rate, W = wealth.

### The two-dimensional worked example

The full four-dimensional state space is not tractable in closed form. The essay reduces to two dimensions—assembly stock Σ and temperature T—to exhibit the core mechanism: how the coupling between assembly growth and thermal loading shapes the viability kernel.

**Dynamics:** Assembly evolves as dΣ/dt = C(t) − δΣ. Temperature evolves as C_th·dT/dt = P_☉ + Γ·Σ − εσ A T⁴: solar input plus civilisational waste heat (Γ·Σ) minus radiative losses. The coupling is through Γ·Σ: more assembly means more power, more power means more waste heat, more waste heat means higher temperature.

**Constraint set:** K = {(Σ,T) | Σ ≥ Σ_min and T ≤ T_max}. A rectangular region: a vertical wall on the left (minimum viable civilisation), a horizontal ceiling above (habitability limit). Everything below and to the right is admissible. Everything above or to the left is lethal.

**Steady-state locus:** If construction exactly balances decay (C = δΣ), assembly is constant. If radiation exactly balances input, temperature is constant. The curve T*(Σ) = (P_☉ + Γ·Σ)/(εσA))^(1/4) gives the equilibrium temperature for each assembly stock. It rises monotonically: more assembly → more waste heat → higher temperature. This curve intersects the ceiling T_max at Σ_max, the maximum steady-state assembly stock.

**Key result—the viability boundary is inside the ceiling:** The viability kernel boundary is *not* the vertical line Σ = Σ_max. It is a curve Σ_crit(T) that lies strictly to the left of Σ_max for all T < T_max. Why? Because of thermal inertia. Assembly decays slowly (time constant ~50 years). Temperature responds slowly (~30 years). Suppose civilisation is at a state with Σ large enough that the equilibrium temperature T*(Σ) would exceed T_max. Even if we apply maximum braking—cease all construction, let Σ decay—the temperature keeps rising for a while as the heat already in the system works its way through the ocean. The system heats up faster than it can shed mass. By the time Σ has decayed enough to reduce the equilibrium temperature, T may already have exceeded T_max. So states with Σ large enough that T*(Σ) > T_max are outside the viability kernel even though they are below the ceiling today. They are in the zone of false security.

**Numerical illustration:** The ratio of thermal relaxation time to assembly decay time is r = τ_T/τ_Σ ≈ 0.6. The false-security zone is roughly 1.5× the thermal buffer. The viability boundary sits at approximately Σ_max/2.5—not at the ceiling, but well inside it. At 2.3% annual growth, the state vector reaches the viability boundary in ~40 years. That is decades before the constraint set boundary (the naive ceiling) would be reached. The message: delay destroys options. Each year of inaction permanently eliminates states from the kernel.

### Dynamic kernel contraction

The constraint set K is not fixed. It evolves. Greenhouse gas accumulation reduces effective emissivity ε, tightening the thermal ceiling. The state vector also moves: each year of growth adds to Σ, driving T toward the equilibrium locus. The state moves rightward and upward in the (Σ,T) plane—toward the boundary, not away from it. Because the viability boundary curves toward the vertical near T_max, the final approach is rapid. The last few doublings before the boundary consume the remaining viable space far faster than the earlier ones. Martin and colleagues (socio-ecological viability studies): systems with strong inertia and delayed feedback lose viable states faster than the constraint boundaries move. Each year of inaction permanently eliminates options.

### The braking boundary

The analysis can be made quantitative. Under maximum braking (C = 0), assembly decays exponentially as Σ(t) = Σ₀ e^(−δt). The temperature response to this decaying source has an exact solution (a linearised ODE). The *braking boundary* Σ_phys*(T) is the maximum assembly stock from which maximum braking—the most aggressive physically possible deceleration—keeps the trajectory below the habitability threshold T_hab. States with Σ > Σ_phys* are outside the physical viability kernel.

**Properties:** (1) Σ_phys* lies strictly inside Σ_max—the naive ceiling. The gap is the physical false-security zone. (2) The gap widens as the ratio τ_T/τ_Σ increases: when the planet radiates slowly relative to the rate at which assembly decays, the overshoot is worse. (3) The gap narrows as temperature approaches T_hab: when the thermal budget is nearly exhausted, even a small overshoot triggers exceedance.

### Two boundaries: physical and institutional

If institutions impose a minimum construction rate C_min > 0—because debt service requires continued growth, or political stability requires employment—then civilisation cannot achieve maximum braking. The achievable braking rate is slower. The *institutional* viability boundary Σ_inst*(T) therefore lies strictly inside the physical boundary Σ_phys*(T). The gap between them is what institutional reform buys: the additional viable region that becomes accessible when debt architecture, governance timescales, and growth compulsions are reformed to permit a wider range of braking trajectories.

**Three nested boundaries:** Σ_max (naive ceiling) ⊃ Σ_phys* (physical kernel boundary under maximum braking) ⊃ Σ_inst* (institutional kernel boundary under current debt and governance constraints). The first gap is Tier 1, immutable—no reform can close it. The second is Tier 3, reformable. The distinction between the merely difficult and the physically impossible runs through the gap between these two surfaces.

### Solvency-constrained controls

**U_adm(Σ,D) = {u | Y(u,Σ) ≥ rD + δW}**

The admissible control set is restricted to those controls for which output Y covers both debt service rD (r = interest rate, D = debt stock) and maintenance δW (δ = decay rate, W = wealth). Any control that fails this condition leads to insolvency, credit contraction, and cascading loss of maintenance capacity.

**Proposition:** Debt narrows the viability kernel. K_inst(r,D) ⊂ K_phys whenever rD > 0. Restricting the admissible set can only eliminate trajectories, never create new ones. The gap is monotone in rD/δW: the ratio of debt service to maintenance obligation.

**Critical decomposition:** The solvency obligation rD + δW contains two terms of fundamentally different status. δW (maintenance obligation) is Tier 1—physics. Concrete carbonates at the rate concrete carbonates regardless of the interest rate. rD (debt service) is Tier 3—convention. Debt can be forgiven; interest can be zero or negative. Conflating them—treating growth as physically necessary—is the most dangerous analytical error. Only maintenance is physically necessary; the growth compulsion above it is institutional.

**Current magnitudes:** δW ≈ 15% of gross world product; rD ≈ 10–15%. The institutional constraint is not negligible. Substantial viable trajectory space is being excluded by the financial architecture.

---

## 4.3 Competitive Viability

### From single agent to N agents

The viability framework in §4.2 treated civilisation as a single agent facing fixed constraints. This section extends it to the competitive case: N agents (firms, nations, technologies, species) sharing a finite energy gradient. The extension is the formal centrepiece of the essay. It derives the maximum power principle—that total dissipation saturates the available gradient—as a *theorem* of the viability apparatus, not an empirical import from ecology. The Jevons rebound, competitive exclusion, and landscape dependence follow as corollaries. The axiom set contains no ecological imports and no behavioural assumptions: every axiom is either derived from the maintenance analysis of Part 2 or is a minimal physical realism condition.

### Setup: five axioms

**A5 (Finite gradient):** Total power available satisfies Σ P_i ≤ P_total < ∞. For a surface-bound civilisation, P_total is the waste heat ceiling—the maximum sustainable dissipation. It is fixed by physics (Tier 1) and expandable only by increasing radiating area A beyond the planet.

**A6 (Per-agent dynamics):** Each agent i has assembly stock Σ_i with dynamics dΣ_i/dt = C_i − δ_iΣ_i. Construction C_i is bounded by allocated power: 0 ≤ C_i ≤ α_i P_i. This follows from the maintenance analysis: surplus power funds construction; α_i captures the conversion efficiency from power to new assembly steps.

**A7 (Minimum viable stock):** Each agent has a threshold Σ_i,min > 0 below which it ceases to function. This is the thermodynamic collapse threshold: the minimum assembly stock whose maintenance can sustain critical functions.

**A8 (Monotone share):** Each agent's power P_i = s_i(Σ)·P_total, where the share function s_i is nondecreasing in Σ_i (more stock → more claim), nonincreasing in Σ_j for j≠i (competitors' stock reduces your share), and Σ s_i ≤ 1 (the gradient is finite). Motivated by the maintenance coupling: each agent's minimum claim is Γ_iΣ_i; the gradient is finite, so shares must sum to at most one.

**A9 (Stochastic perturbation):** Each agent's state is subject to recurring perturbations—resource shocks, climate variability, geopolitical disruption—drawn from a well-behaved distribution. This is a physical property of the environment, not a behavioural assumption. No agent is exempt from shocks.

### The monotonicity lemma

**L1:** The viability kernel K_i(P_i) is monotone increasing in P_i. More allocated power → larger kernel. This follows directly from the maintenance analysis: construction authority is bounded by allocated power, so higher P_i expands the set of achievable velocities (rates of change of Σ_i), which enlarges the set of states from which survival is possible.

The lemma is foundational. Without it, the competitive argument has no mechanism. With it, every subsequent step follows from the geometry.

### Geometric persistence

**L2 (Survival monotonicity):** Larger kernel → strictly higher survival probability under perturbation. An agent with more viable states has more buffer against random shocks.

**P4 (Differential persistence):** Consider a population of agent types. At each perturbation epoch, each agent survives with probability proportional to the size of its kernel (at its operating state). Types with higher survival probability dominate at exponential rate per epoch. Types with smaller kernels are eliminated.

**L3 (Self-reinforcing dynamics):** The competitive coupling amplifies kernel-size differences. When an agent exits its kernel, its stock declines; its share falls; competitors' shares rise. Surviving agents' kernels enlarge. Between perturbations, agents with larger power allocations can build faster, further enlarging their kernels. No mechanism favours smaller-kernel agents.

**T2 (Geometric persistence principle):** Over sufficient time with recurring perturbations, the population measure concentrates on large-kernel types. No cognition is required. Bacteria don't compute their viability kernels. They persist longer when their viable operating range is wider, because random environmental fluctuations are less likely to push them into a lethal regime. The same logic applies to firms, nations, and civilisations.

### Gradient saturation

**T3 (Gradient saturation):** Any configuration that persists dynamically—that survives recurring perturbations—satisfies **Σ P_i = P_total**. Unused gradient is unstable. Suppose Σ P_i < P_total, leaving surplus ΔP > 0. Any agent that expands into the surplus gains more power, hence a larger kernel (L1), hence higher survival probability (L2). Non-expanding agents are eliminated (P4). The only persistent configurations are those that saturate the gradient.

**T4 (Below-saturation transience):** Configurations with Σ P_i < P_total are transient. The expected time to saturation or elimination of non-expanders is finite. The convergence timescale is decades to a century—short relative to civilisational decision windows. Gradient saturation is not a distant asymptotic; it operates within planning horizons.

### Corollaries

**C1 (Jevons):** An efficiency gain that increases α_i (construction per unit power) expands the agent's kernel. Under gradient saturation and below-saturation transience, the freed gradient is captured by competitors or recycled into growth. Aggregate power does not fall. The rebound is not a market failure; it is a geometric consequence of competitive allocation on a finite gradient.

**C2 (Competitive exclusion):** Agents operating below maximum power have smaller kernels, hence lower survival probability. They are more vulnerable to perturbation. The population measure concentrates on agents operating at or near their power frontier. This is geometric filtering: the shape of the viable region determines which configurations persist.

**C3 (Garrett's stable Γ):** At equilibrium, the aggregate coupling between power and accumulated structure should be approximately stable. This is what the empirical record confirms: λ ≈ 5.9 mW per 2019 US dollar, roughly constant 1970–2019. The stability is not a coincidence; it is the expected signature of a system at or near gradient saturation.

**C4 (Landscape dependence):** Gradient saturation (Σ P_i = P_total) is structural—Tier 2. The *location* of the attractor—which value of Γ the system converges to—depends on the institutional landscape (Tier 3). Hanley's pre-1970 instability confirms: the attractor shifted when Bretton Woods collapsed. The biosphere demonstrates that low-Γ equilibria exist (biology maintains vastly more assembly per watt than the technosphere). The task is to redesign the landscape so competition converges there.

### Scope and limitations

The derivation assumes A5–A9. It does not establish uniqueness of the equilibrium allocation, behaviour under coalition formation, or sharp convergence bounds. Cooperative solutions are not ruled out. The essay's position: gradient saturation is the generic noncooperative outcome; override requires coordination with no precedent at civilisational scale.
