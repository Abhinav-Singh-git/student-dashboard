export default function Loading() {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto w-full animate-pulse">
      {/* Hero skeleton */}
      <div className="h-[220px] rounded-3xl bg-zinc-900/60 border border-zinc-800/50 md:col-span-2 lg:col-span-3" />
      {/* Card skeletons */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="h-[190px] rounded-2xl bg-zinc-900/60 border border-zinc-800/50" />
      ))}
      {/* Activity matrix skeleton */}
      <div className="h-[200px] rounded-2xl bg-zinc-900/60 border border-zinc-800/50 md:col-span-2 lg:col-span-3" />
    </div>
  );
}