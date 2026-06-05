import { BarChart3, Clock, CheckCircle2, Flame, RefreshCcw, Cpu, Network } from 'lucide-react';

export default function AnalyticsPage() {
  const stats = [
    { label: 'Total Study Time', value: '42.5 hrs', subtext: '+4.2 hrs this cycle', icon: Clock, color: 'text-blue-400', glow: 'group-hover:border-blue-500/20' },
    { label: 'Engine Streak', value: '12 Days', subtext: 'Top 5% of engineers', icon: Flame, color: 'text-orange-500', glow: 'group-hover:border-orange-500/20' },
    { label: 'Modules Solved', value: '8 / 12', subtext: '83% pass velocity', icon: CheckCircle2, color: 'text-emerald-400', glow: 'group-hover:border-emerald-500/20' },
  ];

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto w-full text-white min-h-screen bg-black">
      {/* Top Deck Title */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            System Analytics
          </h1>
          <p className="text-zinc-400 text-xs md:text-sm mt-0.5">Real-time compilation progress metrics and code engine states.</p>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white transition-colors cursor-pointer">
          <RefreshCcw className="h-4 w-4 animate-spin-slow" />
        </div>
      </div>

      {/* Modern Metrics Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className={`group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-950 ${stat.glow}`}>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium text-zinc-500 tracking-wider uppercase">{stat.label}</p>
                  <p className="text-3xl font-bold text-white mt-2 tracking-tight">{stat.value}</p>
                  <p className="text-xs text-zinc-500 mt-1 font-mono">{stat.subtext}</p>
                </div>
                <div className={`p-3 rounded-xl bg-zinc-900 border border-zinc-800/80 ${stat.color} transition-transform group-hover:scale-105`}>
                  <Icon className="h-5 w-5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Secondary Row Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Graph Card */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-violet-400" />
              <h3 className="text-sm font-semibold text-zinc-200">Execution Velocity Matrix</h3>
            </div>
            <span className="text-xs font-mono text-zinc-500 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-md">Scale: 7 Cycles</span>
          </div>
          
          <div className="h-52 w-full flex items-end gap-3 pt-4 border-b border-zinc-900 px-2">
            {[45, 68, 32, 88, 52, 98, 74].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                <div 
                  className="w-full bg-gradient-to-t from-violet-600/60 via-violet-500 to-indigo-400 rounded-t-lg transition-all duration-300 group-hover:brightness-125"
                  style={{ height: `${height}%` }}
                />
                <span className="text-[10px] font-mono text-zinc-600 mt-2">CYC-0{i+1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* System Health Card */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="h-4 w-4 text-indigo-400" />
              <h3 className="text-sm font-semibold text-zinc-200">Core Telemetry Status</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                <span className="text-xs text-zinc-500">Database Engine</span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Connected
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                <span className="text-xs text-zinc-500">API Pipeline State</span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Nominal
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-500">Component Pipeline</span>
                <span className="text-xs font-mono text-violet-400">Next.js SSR v15</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center gap-2 text-zinc-600">
            <Network className="h-3.5 w-3.5" />
            <span className="text-[10px] font-mono tracking-wider uppercase">Node Location: Vercel Edge Cache</span>
          </div>
        </div>
      </div>
    </div>
  );
}