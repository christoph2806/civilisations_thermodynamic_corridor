import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL ?? '';
const key = import.meta.env.VITE_SUPABASE_ANON_KEY ?? '';

export const supabase = url && key ? createClient(url, key) : null;

export interface Run {
  id: string;
  user_id: string;
  score: number;
  survived_years: number;
  final_state: unknown;
  created_at: string;
}
