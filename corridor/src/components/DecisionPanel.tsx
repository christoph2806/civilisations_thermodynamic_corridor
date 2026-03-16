import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import type { Parameters } from '../model/types';

const TOOLTIP_DELAY_MS = 100;

function ParamHelp({ text }: { text: string }) {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    timeoutRef.current = setTimeout(() => setVisible(true), TOOLTIP_DELAY_MS);
  };
  const hide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
    setVisible(false);
  };

  return (
    <span
      className="param-help"
      onMouseEnter={show}
      onMouseLeave={hide}
      aria-label={text}
    >
      <span className="param-help-icon">
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
          <circle cx="7" cy="7" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <text x="7" y="9.5" textAnchor="middle" fontSize="8" fill="currentColor" fontWeight="bold">?</text>
        </svg>
      </span>
      {visible && (
        <span className="param-help-tooltip" role="tooltip">
          {text}
        </span>
      )}
    </span>
  );
}

const PARAM_TOOLTIPS: Record<keyof Parameters, string> = {
  ε: 'Decarbonisation: improves emissivity—how well the planet radiates heat. No-regrets.',
  A: 'Space expansion: raises the radiating ceiling by increasing area beyond Earth (kleos).',
  T_hab: 'Adaptation / SAI: shifts the effective habitability temperature threshold.',
  α: 'Albedo engineering: strategic reserve; fastest-acting but not for sustained deployment.',
  η_II: 'Efficiency: lowers power per output. Subject to Jevons—gains may recycle into growth.',
  δ: 'Durability: engineering for longer-lived infrastructure; lowers decay rate.',
  ξ: 'Process innovation: lowers exergy cost per repair step.',
  μ: 'Institutional reform: metabolic multiplier. The discriminant—neglect it and strategies fail.',
};

interface DecisionPanelProps {
  allocation: Partial<Record<keyof Parameters, number>>;
  setAllocation: (param: keyof Parameters, value: number) => void;
  budgetUsed: number;
  budgetTotal: number;
  phase: string;
}

const PARAMS: (keyof Parameters)[] = ['ε', 'μ', 'η_II', 'δ', 'ξ', 'A', 'T_hab', 'α'];

export function DecisionPanel({
  allocation,
  setAllocation,
  budgetUsed,
  budgetTotal,
  phase,
}: DecisionPanelProps) {
  const remaining = budgetTotal - budgetUsed;

  return (
    <motion.section
      className="decision-panel"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <h3>Allocate ({remaining} pts left)</h3>
      <div className="param-grid">
        {PARAMS.map((p) => (
          <div key={p} className="param-row">
            <span className="param-label">
              <label>{p}</label>
              <ParamHelp text={PARAM_TOOLTIPS[p]} />
            </span>
            <input
              type="range"
              min={0}
              max={5}
              value={allocation[p] ?? 0}
              onChange={(e) => setAllocation(p, +e.target.value)}
              disabled={phase !== 'playing'}
            />
            <span className="param-value">{allocation[p] ?? 0}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
