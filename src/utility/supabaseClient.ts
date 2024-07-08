import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = "https://nddriileedipfwesgiaa.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kZHJpaWxlZWRpcGZ3ZXNnaWFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk5NDQxNjgsImV4cCI6MjAzNTUyMDE2OH0.azOF4AUHzdwvH1xI1IjkkM9Ru2apDJu6NGIZe4cuiJE";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
