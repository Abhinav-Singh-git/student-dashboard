import { BarChart3, Clock, CheckCircle2, Flame } from 'lucide-react';

export default function AnalyticsPage() {
  const stats = [
    { label: 'Total Study Time', value: '42.5 hrs', icon: Clock, color: 'text-blue-400' },
    { label: 'Daily Streak', value: '12 Days', icon: Flame, color: 'text-orange-500' },
    { label: 'Modules Completed', value: '8/12', icon: CheckCircle2, color: 'text-emerald-400' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto w-full text-white">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Performance Analytics</h1>
      <p className="text-zinc-400 text-sm mb-8">Telemetry readouts for your weekly velocity updates.</p>

      {/* Grid of Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-500">{stat.label}</p>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-xl bg-zinc-900 border border-zinc-800 ${stat.color}`}>
                <Icon className="h-6 w-6" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Analytics Graph Card */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
        <div className="flex items-center gap-2 mb-6">
          <BarChart3 className="h-5 w-5 text-violet-400" />
          <h3 className="font-semibold text-zinc-200">Engine Velocity History</h3>
        </div>
        <div className="h-48 w-full flex items-end gap-3 pt-4 border-b border-zinc-800 px-2">
          {/* Mock Bar Chart */}
          {[40, 65, 35, 85, 55, 95, 70].map((height, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
              <div 
                className="w-full bg-gradient-to-t from-violet-600 to-indigo-500 rounded-t-md transition-all duration-500 hover:from-violet-500"
                style={{ height: `${height}%` }}
              />
              <span className="text-xs font-mono text-zinc-600 mt-2">M daughtersWThFSS`[i]`</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}