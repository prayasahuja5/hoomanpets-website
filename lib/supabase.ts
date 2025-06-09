import { createClient } from '@supabase/supabase-js'

// Environment variables (create .env.local file with these values for production)
// NEXT_PUBLIC_SUPABASE_URL=https://gmyyxaondtvduejxbeey.supabase.co
// NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
// RESEND_API_KEY=your_resend_api_key (get from https://resend.com)

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://gmyyxaondtvduejxbeey.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdteXl4YW9uZHR2ZHVlanhiZWV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0OTI4NDIsImV4cCI6MjA2NTA2ODg0Mn0.YwsO1tliJDr5lk91flSZ9mpOxYHXTBne_2Z3NGDbD6U'

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey) 