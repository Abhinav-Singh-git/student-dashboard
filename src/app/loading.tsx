export default function Loading() {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto w-full text-white min-h-screen bg-black animate-pulse">
      
      {/* Hero Tile Loader */}
      <div className="rounded-3xl border border-zinc-900 bg-zinc-950/40 p-8 md:col-span-2 lg:col-span-3 h-[240px] flex flex-col justify-between">
        <div className="space-y-3">
          <div className="h-5 w-32 rounded bg-zinc-900" />
          <div className="h-8 w-64 rounded bg-zinc-900" />
          <div className="h-4 w-96 rounded bg-zinc-900" />
        </div>
        <div className="h-5 w-48 rounded bg-zinc-900 mt-6" />
      </div>

      {/* Mini Stats Grid Loaders */}
      <div className="h-20 rounded-2xl border border-zinc-900 bg-zinc-950/40" />
      <div className="h-20 rounded-2xl border border-zinc-900 bg-zinc-950/40" />
      <div className="h-20 rounded-2xl border border-zinc-900 bg-zinc-950/40" />

      {/* Course Card Loaders */}
      <div className="h-[195px] rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 flex flex-col justify-between">
        <div className="h-11 w-11 rounded-xl bg-zinc-900" />
        <div className="space-y-2">
          <div className="h-4 w-3/4 rounded bg-zinc-900" />
          <div className="h-2 w-full rounded bg-zinc-900" />
        </div>
      </div>

      <div className="h-[195px] rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 flex flex-col justify-between">
        <div className="h-11 w-11 rounded-xl bg-zinc-900" />
        <div className="space-y-2">
          <div className="h-4 w-1/2 rounded bg-zinc-900" />
          <div className="h-2 w-full rounded bg-zinc-900" />
        </div>
      </div>

      <div className="h-[195px] rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 flex flex-col justify-between">
        <div className="h-11 w-11 rounded-xl bg-zinc-900" />
        <div className="space-y-2">
          <div className="h-4 w-2/3 rounded bg-zinc-900" />
          <div className="h-2 w-full rounded bg-zinc-900" />
        </div>
      </div>
    </div>
  );
}