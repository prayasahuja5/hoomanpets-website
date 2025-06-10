import { createClient } from '@supabase/supabase-js'

// Environment variables (create .env.local file with these values for production)
// NEXT_PUBLIC_SUPABASE_URL=https://gmyyxaondtvduejxbeey.supabase.co
// NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
// RESEND_API_KEY=your_resend_api_key (get from https://resend.com)

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey) 