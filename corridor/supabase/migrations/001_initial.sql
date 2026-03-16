-- runs table for leaderboard
create table runs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users not null,
  score bigint not null,
  survived_years int not null,
  final_state jsonb,
  created_at timestamptz default now()
);

alter table runs enable row level security;

create policy "Users can insert own runs"
  on runs for insert with check (auth.uid() = user_id);

create policy "Anyone can read runs (leaderboard)"
  on runs for select using (true);
