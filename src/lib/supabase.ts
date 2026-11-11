import { createClient } from '@supabase/supabase-js';

// Preluăm variabilele de mediu din Astro (folosind import.meta.env pentru client-side)
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Lipsește configurarea Supabase în fișierul .env!");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
