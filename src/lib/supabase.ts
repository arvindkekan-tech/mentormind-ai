import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://zrqomxdwhczhzqzngmwl.supabase.co";

const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpycW9teGR3aGN6aHpxem5nbXdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1NDc2MTIsImV4cCI6MjA5NTEyMzYxMn0.cmyzFfr0j3OnIdSbFgnA1Ig33t8uyt-qRnXaKh7jlU0";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);