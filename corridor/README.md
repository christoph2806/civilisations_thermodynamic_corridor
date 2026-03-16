# Corridor

Turn-based civilisation survival game based on the thermodynamic corridor analysis. Survive 10,000 years without exceeding the viability kernel.

## Stack

- React + Vite + TypeScript
- Supabase (auth, Postgres leaderboard)
- Recharts, Framer Motion

## Setup

1. `npm install`
2. Copy `.env.example` to `.env` and set Supabase credentials
3. Create Supabase project, run migration:

```bash
# If using Supabase CLI
supabase db push
# Or paste supabase/migrations/001_initial.sql into SQL Editor
```

4. `npm run dev`

## Supabase (minimal)

- **Auth:** Enable Email/Password in Authentication → Providers
- **Database:** Run `supabase/migrations/001_initial.sql`
- No triggers, Edge Functions, or custom SMTP needed

## Game

- Allocate 10 points per turn across 8 parameters (ε, μ, η_II, δ, ξ, A, T_hab, α)
- Reduce Γ (power–assembly coupling) to stay inside the viability kernel
- Win: reach year 10,000. Lose: T > T_hab or Σ < Σ_min
