import { createClient } from '@/utils/supabase';
import { DashboardGrid } from '@/components/DashboardGrid';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const supabase = createClient();

  try {
    const { data: courses, error } = await supabase
      .from('courses')
      .select('*');

    if (error) {
      console.error("❌ CRITICAL SUPABASE ERROR:", error.message, error.details, error.hint);
      return (
        <div className="flex h-screen items-center justify-center bg-black text-zinc-400">
          <p>Database Error: {error.message}</p>
        </div>
      );
    }

    // Pass the fetched courses array into your layout component
    return <DashboardGrid courses={courses || []} />;

  } catch (err) {
    console.error("❌ SERVER CRASH ERROR:", err);
    return (
      <div className="flex h-screen items-center justify-center bg-black text-zinc-400">
        <p>Server Component Crash</p>
      </div>
    );
  }
}