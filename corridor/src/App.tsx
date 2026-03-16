import { useEffect, useRef, useState } from 'react';
import { useGame } from './hooks/useGame';
import { useAuth } from './hooks/useAuth';
import { StateHUD } from './components/StateHUD';
import { DecisionPanel } from './components/DecisionPanel';
import { TrajectoryPlot } from './components/TrajectoryPlot';
import { AuthModal } from './components/AuthModal';
import { Leaderboard } from './components/Leaderboard';
import { BUDGET_PER_TURN } from './model/constants';
import { supabase } from './lib/supabase';
import './App.css';

function App() {
  const [showAuth, setShowAuth] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const { user, signOut } = useAuth();
  const {
    game,
    Γ,
    dK,
    Σ_crit,
    setAllocation,
    commitTurn,
    reset,
    budgetUsed,
  } = useGame();
  const prevPhase = useRef(game.phase);

  useEffect(() => {
    if (prevPhase.current === 'playing' && (game.phase === 'extinct' || game.phase === 'victory')) {
      if (supabase && user) {
        const score = Math.round(game.state.Σ * 1000 + game.state.T_eq * 10);
        supabase.from('runs').insert({
          user_id: user.id,
          score,
          survived_years: game.state.t,
          final_state: game.state,
        });
      }
    }
    prevPhase.current = game.phase;
  }, [game.phase, game.state, user]);

  return (
    <div className="app">
      <header className="header">
        <h1>Corridor — survive 10,000 years</h1>
        <div className="header-actions">
          <button className="btn" onClick={() => setShowLeaderboard(!showLeaderboard)}>
            Leaderboard
          </button>
          {supabase && (
            user ? (
              <button className="btn" onClick={signOut}>Sign out</button>
            ) : (
              <button className="btn" onClick={() => setShowAuth(true)}>Sign in</button>
            )
          )}
          <button className="btn" onClick={reset}>
            New game
          </button>
        </div>
      </header>
      {showAuth && (
        <AuthModal
          onClose={() => setShowAuth(false)}
          onSuccess={() => setShowAuth(false)}
        />
      )}

      <StateHUD
        Σ={game.state.Σ}
        T_eq={game.state.T_eq}
        Γ={Γ}
        dK={dK}
        Σ_crit={Σ_crit}
        round={game.round}
        phase={game.phase}
      />

      <main className="main">
        {game.currentEvent && (
          <div className="event-card">
            <h4>{game.currentEvent.name}</h4>
            <p>{game.currentEvent.description}</p>
          </div>
        )}
        <TrajectoryPlot
          trajectory={game.trajectory}
          T_hab={game.params.T_hab}
        />
      </main>

      <DecisionPanel
        allocation={game.allocation}
        setAllocation={setAllocation}
        budgetUsed={budgetUsed}
        budgetTotal={BUDGET_PER_TURN}
        phase={game.phase}
      />

      <footer className="footer">
        <span>Year {game.state.t} · Round {game.round}/100</span>
        <button
          className="btn btn-primary"
          onClick={commitTurn}
          disabled={game.phase !== 'playing'}
        >
          Advance
        </button>
      </footer>
      {showLeaderboard && (
        <div className="leaderboard-panel">
          <Leaderboard />
        </div>
      )}
    </div>
  );
}

export default App;
