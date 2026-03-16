import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Run } from '../lib/supabase';

export function Leaderboard() {
  const [runs, setRuns] = useState<Run[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }
    supabase
      .from('runs')
      .select('id, user_id, score, survived_years, created_at')
      .order('survived_years', { ascending: false })
      .limit(20)
      .then(({ data, error }) => {
        if (!error) setRuns((data as Run[]) ?? []);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="leaderboard">Loading…</div>;

  return (
    <div className="leaderboard">
      <h3>Leaderboard</h3>
      <ol>
        {runs.map((r, i) => (
          <li key={r.id}>
            <span className="rank">{i + 1}</span>
            <span className="years">{r.survived_years} yr</span>
            <span className="score">V={r.score}</span>
          </li>
        ))}
      </ol>
      {runs.length === 0 && <p className="muted">No runs yet.</p>}
    </div>
  );
}
