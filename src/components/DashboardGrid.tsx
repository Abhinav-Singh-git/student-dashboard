'use client';

import { motion, Transition } from 'framer-motion';
import { Course } from '@/types/database';
import { DynamicIcon } from './DynamicIcon';
import { Calendar, Flame, GraduationCap, Inbox, Terminal, Activity, ArrowUpRight, Zap } from 'lucide-react';

interface DashboardGridProps {
  courses: Course[];
}

// Stagger entry configurations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 }
};

const springHover: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 15,
}; 

export function DashboardGrid({ courses }: DashboardGridProps) {
  return (
    <motion.main 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto w-full text-white min-h-screen bg-black"
    >
      {/* HERO BENTO TILE */}
      <motion.section
        variants={itemVariants}
        whileHover={{ scale: 1.01 }}
        transition={springHover}
        className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-950 via-zinc-950 to-zinc-900/40 p-8 md:col-span-2 lg:col-span-3 min-h-[240px] flex flex-col justify-between shadow-2xl"
      >
        {/* Deep ambient blur back-glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,rgba(139,92,246,0.18),transparent_65%)]" />
        <div className="absolute -right-10 -top-10 h-40 w-40 bg-indigo-500/10 blur-[80px] rounded-full" />
        
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-400">
              <Terminal className="h-3.5 w-3.5" /> Engine Cluster Active
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent sm:text-4xl mt-2">
              Welcome back, Dev
            </h1>
            <p className="text-zinc-400 max-w-md text-xs sm:text-sm">
              Your server component pipelines are active. Ready to accelerate your framework milestones today?
            </p>
          </div>
          
          {/* Real-time system state badge */}
          <div className="hidden sm:flex items-center gap-2 bg-zinc-900 border border-zinc-800/80 rounded-xl p-3 text-right font-mono text-[11px] text-zinc-500">
            <div>
              <p className="text-zinc-400">Latency</p>
              <p className="text-emerald-400 font-bold">14 ms</p>
            </div>
          </div>
        </div>
        
        <div className="relative z-10 mt-8 flex flex-wrap items-center gap-6 border-t border-zinc-900/80 pt-6">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-orange-500 fill-orange-500/10" />
            <span className="text-xs font-semibold text-zinc-200 tracking-wide">12 Day Learning Streak</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-500">
            <Calendar className="h-4 w-4" />
            <span className="text-[11px] font-mono">Next checkpoint evaluation: Midnight</span>
          </div>
        </div>
      </motion.section>

      {/* MID-ROW STATS TILES (Adds technical density) */}
      <motion.div variants={itemVariants} className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5 flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Hydration State</p>
          <p className="text-lg font-bold text-zinc-200">SSR Enforced</p>
        </div>
        <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-violet-400">
          <Zap className="h-4 w-4" />
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5 flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Active Modules</p>
          <p className="text-lg font-bold text-zinc-200">{courses.length} Tracks</p>
        </div>
        <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-indigo-400">
          <Activity className="h-4 w-4" />
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5 flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Database Source</p>
          <p className="text-lg font-bold text-zinc-200">Supabase Rest</p>
        </div>
        <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </motion.div>

      {/* DYNAMIC COURSE TILES OR EMPTY STATE */}
      {courses.length === 0 ? (
        <motion.div
          variants={itemVariants}
          className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col items-center justify-center border border-dashed border-zinc-800 rounded-2xl bg-zinc-950/20 p-12 text-zinc-400 min-h-[250px]"
        >
          <Inbox className="h-8 w-8 text-zinc-700 mb-3 animate-pulse" />
          <p className="text-sm font-semibold text-zinc-300">No active frameworks found</p>
          <p className="text-xs text-zinc-500 max-w-xs text-center mt-1 font-mono">
            Please append records to your database table to populate layout modules.
          </p>
        </motion.div>
      ) : (
        courses.map((course) => (
          <motion.article
            key={course.id}
            variants={itemVariants}
            whileHover={{ scale: 1.015, y: -2 }}
            transition={springHover}
            className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 flex flex-col justify-between min-h-[195px] transition-all hover:border-violet-500/20 shadow-lg"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(39,39,42,0.15),transparent_60%)]" />
            
            <div className="relative z-10 flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-violet-500/30 transition-colors">
                <DynamicIcon name={course.icon_name} className="h-5 w-5 text-violet-400" />
              </div>
              <span className="text-[10px] font-mono text-zinc-600 bg-zinc-900/60 border border-zinc-850 px-2 py-0.5 rounded">RSC Verified</span>
            </div>

            <div className="relative z-10 mt-4">
              <h3 className="font-semibold text-zinc-200 tracking-tight text-sm md:text-base mb-4 group-hover:text-white transition-colors">
                {course.title}
              </h3>
              
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                  <span>Compilation Progress</span>
                  <span className="text-violet-400 font-bold">{course.progress}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-900 border border-zinc-850">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${course.progress}%` }}
                    transition={{ type: 'spring', stiffness: 75, damping: 14, delay: 0.2 }}
                  />
                </div>
              </div>
            </div>
          </motion.article>
        ))
      )}

      {/* ACTIVITY GRAPH COMPONENT */}
      <motion.section
        variants={itemVariants}
        whileHover={{ scale: 1.005 }}
        transition={springHover}
        className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6 md:col-span-2 lg:col-span-3 flex flex-col justify-between min-h-[220px]"
      >
        <div className="relative z-10 w-full">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-zinc-400" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Weekly Activity Engine Velocity</h3>
            </div>
            <span className="text-[10px] font-mono text-zinc-600">35 Cycles Telemetry</span>
          </div>
          
          {/* Clean contribution matrix grids */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {Array.from({ length: 42 }).map((_, i) => {
              const alpha = [0.08, 0.2, 0.35, 0.6, 0.85][i % 5];
              return (
                <div
                  key={i}
                  className="h-4 w-4 rounded-sm transition-all duration-300 hover:scale-110 hover:brightness-125 cursor-pointer"
                  style={{ 
                    backgroundColor: `rgba(139, 92, 246, ${alpha})`,
                    boxShadow: alpha > 0.5 ? '0 0 8px rgba(139, 92, 246, 0.15)' : 'none'
                  }}
                />
              );
            })}
          </div>
        </div>
        <span className="text-[10px] font-mono text-zinc-600 mt-6 block">Logs synchronized via global cluster node updates</span>
      </motion.section>
    </motion.main>
  );
}