import { useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
} from 'recharts';
import type { TrajectoryPoint } from '../hooks/useGame';
import { gamma } from '../model/types';

interface TrajectoryPlotProps {
  trajectory: TrajectoryPoint[];
  T_hab: number;
}

const COLORS = {
  Σ: '#22c55e',
  T: '#38bdf8',
  Γ: '#f59e0b',
};

export function TrajectoryPlot({ trajectory, T_hab }: TrajectoryPlotProps) {
  const data = useMemo(() => {
    return trajectory.map(({ state, params }) => ({
      year: Math.max(1, state.t), // log scale needs positive values
      yearDisplay: state.t,
      Σ: state.Σ,
      T: state.T_eq,
      Γ: gamma(params),
    }));
  }, [trajectory]);

  return (
    <div className="trajectory-plot">
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data} margin={{ top: 10, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis
            dataKey="year"
            type="number"
            scale="log"
            domain={[1, 10000]}
            ticks={[1, 10, 100, 1000, 10000]}
            name="Year"
            tickFormatter={(v) => v.toLocaleString()}
          />
          <YAxis
            yAxisId="left"
            tickFormatter={(v) => v.toFixed(1)}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tickFormatter={(v) => v.toFixed(0)}
          />
          <ReferenceLine
            yAxisId="right"
            y={T_hab}
            stroke="#ef4444"
            strokeDasharray="4 4"
            label={{ value: 'T_hab', position: 'right' }}
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="Σ"
            stroke={COLORS.Σ}
            strokeWidth={2}
            dot={false}
            connectNulls
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="T"
            stroke={COLORS.T}
            strokeWidth={2}
            dot={false}
            connectNulls
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="Γ"
            stroke={COLORS.Γ}
            strokeWidth={2}
            dot={false}
            connectNulls
          />
          <Tooltip
            formatter={(value, name) => [
              name === 'T' ? `${Number(value).toFixed(1)} K` : Number(value).toFixed(2),
              name,
            ]}
            labelFormatter={(_, payload) =>
              payload?.[0]?.payload?.yearDisplay !== undefined
                ? `Year ${payload[0].payload.yearDisplay.toLocaleString()}`
                : ''
            }
          />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
