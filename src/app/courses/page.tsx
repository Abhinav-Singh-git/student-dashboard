import { createClient } from '@/utils/supabase';
import { DashboardGrid } from '@/components/DashboardGrid';

export const dynamic = 'force-dynamic';

export default async function CoursesPage() {
  const supabase = createClient();

  try {
    const { data: courses, error } = await supabase
      .from('courses')
      .select('*');

    if (error) {
      return <div className="p-8 text-red-500">Database Error: {error.message}</div>;
    }

    return (
      <div className="p-8 max-w-7xl mx-auto w-full text-white">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight mb-2">My Enrolled Courses</h1>
          <p className="text-zinc-400 text-sm">Review your active academic tracks and engineering milestones.</p>
        </div>
        
        {/* Reusing your grid logic to show the courses cleanly */}
        <DashboardGrid courses={courses || []} />
      </div>
    );
  } catch (err) {
    return <div className="p-8 text-zinc-500">Server Component Crash</div>;
  }
}