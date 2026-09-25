import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://uvzgcspijwmxzgvoyxmg.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2emdjc3BpandteHpndm95eG1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1MDUzODksImV4cCI6MjA4NzA4MTM4OX0.Vl-UAnF21GJz8JEC_Ea8pp1KQx59nPc13sLTvXXLjsg";

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase credentials missing. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storageKey: 'kisan-dost-auth',
    // Increase timeout or handle lock issues by ensuring clean initialization
  }
});

// Test connection silently
supabase.from('scans').select('id', { count: 'exact', head: true })
  .then(({ error }) => {
    if (error && error.message === 'Failed to fetch') {
      console.warn('Supabase project is unreachable. History will be saved locally.');
    }
  });
