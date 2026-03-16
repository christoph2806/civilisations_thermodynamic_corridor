import { useState, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { TurnstileWidget } from './TurnstileWidget';

interface AuthModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY ?? '';

export function AuthModal({ onClose, onSuccess }: AuthModalProps) {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState('');

  if (!supabase) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <p>Supabase not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.</p>
          <button className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }

  const onTurnstileVerify = useCallback((token: string) => setTurnstileToken(token), []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) return;
    if (mode === 'signup' && TURNSTILE_SITE_KEY && !turnstileToken) {
      setError('Complete the verification');
      return;
    }
    setError('');
    setLoading(true);
    try {
      if (mode === 'signup') {
        const { error: err } = await supabase.auth.signUp({ email, password });
        if (err) throw err;
        onSuccess();
      } else {
        const { error: err } = await supabase.auth.signInWithPassword({ email, password });
        if (err) throw err;
        onSuccess();
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Auth failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>{mode === 'signin' ? 'Sign in' : 'Sign up'}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
          />
          {mode === 'signup' && TURNSTILE_SITE_KEY && (
            <TurnstileWidget siteKey={TURNSTILE_SITE_KEY} onVerify={onTurnstileVerify} />
          )}
          {error && <p className="error">{error}</p>}
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? '…' : mode === 'signin' ? 'Sign in' : 'Sign up'}
          </button>
        </form>
        <button
          type="button"
          className="btn-link"
          onClick={() => {
            setMode(mode === 'signin' ? 'signup' : 'signin');
            setTurnstileToken('');
          }}
        >
          {mode === 'signin' ? 'Need an account?' : 'Already have an account?'}
        </button>
        <button className="btn" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
