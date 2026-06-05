import { createClient } from '@/utils/supabase';
import { DashboardGrid } from '@/components/DashboardGrid';
import { Course } from '@/types/database';

// Opt into dynamic server side execution mechanics per page cycle
export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const supabase = createClient();

  // Fetch course payloads directly on the React Server Component (RSC) thread
  const { data: courses, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: true });

  if (error || !courses) {
    throw new Error('Supabase execution error payload encountered');
  }

  return <DashboardGrid courses={courses as Course[]} />;
}