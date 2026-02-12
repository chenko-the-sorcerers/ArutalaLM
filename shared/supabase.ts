import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || 'https://srxjfxpfcwyongqyewis.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'sb_publishable_BmkwP5CGvqp0EG99LDNWbA_SNhq23si';

export const supabase = createClient(supabaseUrl, supabaseKey);
