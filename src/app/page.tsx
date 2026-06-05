import { createClient } from '@/utils/supabase';
import { DashboardGrid } from '@/components/DashboardGrid';
import { Course } from '@/types/database';

// Opt into dynamic server side execution mechanics per page cycle
export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const supabase = createClient();

 try {
  const { data, error } = await supabase
    .from('courses')
    .select('*');

  if (error) {
    console.error("❌ CRITICAL SUPABASE ERROR:", error.message, error.details, error.hint);
    return <div>Database Error: {error.message}</div>;
  }

} catch (err) {
  console.error("❌ SERVER CRASH ERROR:", err);
  return <div>Server Component Crash</div>;
}
}