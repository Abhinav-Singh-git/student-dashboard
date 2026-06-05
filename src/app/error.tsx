'use client';

import { AlertTriangle, RotateCcw } from 'lucide-react';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center p-6 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 mb-4">
        <AlertTriangle className="h-6 w-6" />
      </div>
      <h2 className="text-xl font-bold text-white mb-2">Database Streaming Pipeline Dropped</h2>
      <p className="text-sm text-zinc-400 max-w-sm mb-6">
        Could not construct a stable link with Supabase PostgreSQL infrastructure. Verify credentials or connection state.
      </p>
      <button
        onClick={() => reset()}
        className="flex items-center gap-2 rounded-xl bg-zinc-900 border border-zinc-800 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 transition-colors"
      >
        <RotateCcw className="h-4 w-4" />
        Retry Pipeline Link
      </button>
    </div>
  );
}