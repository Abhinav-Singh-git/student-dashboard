import { Settings, Shield, User, Bell, KeyRound, Terminal, AlertTriangle } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto w-full text-white min-h-screen bg-black">
      {/* Page Title Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
          Workspace Settings
        </h1>
        <p className="text-zinc-400 text-xs md:text-sm mt-0.5">
          Configure account telemetry preferences, authorization keys, and subsystem layouts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Side Quick-Navigation Tab List (Visual Polish) */}
        <div className="space-y-1 lg:col-span-1">
          {[
            { label: 'Profile Node', icon: User, active: true },
            { label: 'Security & Keys', icon: Shield, active: false },
            { label: 'Telemetry Alerts', icon: Bell, active: false },
            { label: 'Engine Terminal', icon: Terminal, active: false },
          ].map((tab, idx) => {
            const Icon = tab.icon;
            return (
              <button
                key={idx}
                className={`flex w-full items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-medium tracking-wide transition-all ${
                  tab.active
                    ? 'bg-zinc-900 border border-zinc-800 text-white'
                    : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-950/40'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Side Settings Panels Panel */}
        <div className="space-y-6 lg:col-span-3">
          
          {/* Section 1: User Parameters Card */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-2 pb-4 mb-6 border-b border-zinc-900">
              <User className="h-4 w-4 text-violet-400" />
              <h3 className="text-sm font-semibold text-zinc-200">Developer Profile</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono tracking-wider uppercase text-zinc-500">Node Identifier</label>
                <input
                  type="text"
                  defaultValue="Abhinav Singh"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-2.5 text-sm text-zinc-200 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono tracking-wider uppercase text-zinc-500">Routing Address (Email)</label>
                <input
                  type="email"
                  defaultValue="dev@nextgenlearn.io"
                  disabled
                  className="w-full rounded-xl border border-zinc-900 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-600 font-mono cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Integration Variable Parameters */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-2 pb-4 mb-6 border-b border-zinc-900">
              <KeyRound className="h-4 w-4 text-indigo-400" />
              <h3 className="text-sm font-semibold text-zinc-200">Subsystem Token Authorization</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/40 border border-zinc-850">
                <div>
                  <p className="text-xs font-semibold text-zinc-300">Supabase Connection State</p>
                  <p className="text-[11px] font-mono text-zinc-500 mt-0.5">Sync environment variables on runtime deployment clusters.</p>
                </div>
                {/* Simulated Custom Toggle Switch */}
                <div className="h-5 w-9 rounded-full bg-violet-600 p-0.5 flex items-center justify-end cursor-pointer transition-colors">
                  <div className="h-4 w-4 rounded-full bg-white shadow-md" />
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/40 border border-zinc-850">
                <div>
                  <p className="text-xs font-semibold text-zinc-300">Strict Component Hydration</p>
                  <p className="text-[11px] font-mono text-zinc-500 mt-0.5">Enforces edge server cache verification on telemetry views.</p>
                </div>
                <div className="h-5 w-9 rounded-full bg-zinc-800 p-0.5 flex items-center justify-start cursor-pointer transition-colors">
                  <div className="h-4 w-4 rounded-full bg-zinc-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Danger Framework Cluster Area */}
          <div className="rounded-2xl border border-red-900/30 bg-red-950/5 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-2 pb-4 mb-4 border-b border-red-950/40">
              <AlertTriangle className="h-4 w-4 text-red-400" />
              <h3 className="text-sm font-semibold text-red-200">Terminal Danger Zone</h3>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-zinc-300">Purge Local Course Metrics Cache</p>
                <p className="text-[11px] text-zinc-500 mt-0.5">
                  Resets the current layout telemetry tracking stream counters back to zero.
                </p>
              </div>
              <button className="px-4 py-2 bg-red-950/40 border border-red-900/50 hover:bg-red-900/30 text-red-400 rounded-xl text-xs font-medium font-mono tracking-wide transition-all whitespace-nowrap">
                Purge Telemetry Cache
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}