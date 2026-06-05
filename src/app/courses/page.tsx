import { createClient } from '@/utils/supabase';
import { DashboardGrid } from '@/components/DashboardGrid';
import { BookOpen, Award, CheckCircle2 } from 'lucide-react';

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

    const completedCount = courses?.filter(c => c.progress === 100).length || 0;
    const activeCount = courses?.filter(c => c.progress > 0 && c.progress < 100).length || 0;

    return (
      <div className="p-6 md:p-10 max-w-7xl mx-auto w-full text-white min-h-screen bg-black">
        {/* Professional Header Section */}
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/40 p-8 backdrop-blur-md mb-10">
          <div className="absolute top-0 right-0 h-40 w-40 bg-violet-500/10 blur-[80px] rounded-full" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent sm:text-4xl">
                Engineering Curriculum
              </h1>
              <p className="text-zinc-400 text-sm mt-1">
                Verified framework benchmarks, cryptographic modules, and systems telemetry.
              </p>
            </div>

            {/* Quick Metrics Deck */}
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-violet-400" />
                <span className="text-xs text-zinc-400 font-mono">Active: {activeCount}</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span className="text-xs text-zinc-400 font-mono">Completed: {completedCount}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Telemetry Layout Grid */}
        <DashboardGrid courses={courses || []} />
      </div>
    );
  } catch (err) {
    return <div className="p-8 text-zinc-500">Server Component Crash</div>;
  }
}