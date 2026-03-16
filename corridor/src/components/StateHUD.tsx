import { motion } from 'framer-motion';

interface StateHUDProps {
  Σ: number;
  T_eq: number;
  Γ: number;
  dK: number;
  Σ_crit: number;
  round: number;
  phase: 'playing' | 'extinct' | 'victory';
}

export function StateHUD({ Σ, T_eq, Γ, dK, Σ_crit, round, phase }: StateHUDProps) {
  const zone = Σ > Σ_crit ? 'danger' : dK < 50 ? 'warning' : 'safe';

  return (
    <motion.aside
      className="state-hud"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3>State</h3>
      <dl>
        <dt>Σ (assembly)</dt>
        <dd>{Σ.toFixed(2)}</dd>

        <dt>T (K)</dt>
        <dd>{T_eq.toFixed(1)}</dd>

        <dt>Γ (coupling)</dt>
        <dd>{Γ.toFixed(3)}</dd>

        <dt>d_K (years)</dt>
        <dd className={zone}>{dK.toFixed(0)}</dd>

        <dt>Σ_crit</dt>
        <dd>{Σ_crit.toFixed(2)}</dd>

        <dt>Round</dt>
        <dd>{round}</dd>
      </dl>
      {phase !== 'playing' && (
        <div className={`phase-badge phase-${phase}`}>
          {phase === 'victory' ? '10,000 years survived' : 'Extinction'}
        </div>
      )}
    </motion.aside>
  );
}
