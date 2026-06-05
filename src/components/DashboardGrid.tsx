'use client';

import { motion } from 'framer-motion';
import { Course } from '@/types/database';
import { DynamicIcon } from './DynamicIcon';
import { Calendar, Flame, GraduationCap } from 'lucide-react';

interface DashboardGridProps {
  courses: Course[];
}

// Stagger variants for entry execution
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

const springHover = {
  type: 'spring',
  stiffness: 300,
  damping: 20
};

export function DashboardGrid({ courses }: DashboardGridProps) {
  return (
    <motion.main 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto w-full"
    >
      {/* HERO BENTO TILE */}
      <motion.section
        variants={itemVariants}
        whileHover={{ scale: 1.015 }}
        transition={springHover}
        className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-8 md:col-span-2 lg:col-span-3 min-h-[220px] flex flex-col justify-between"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(124,58,237,0.12),transparent_70%)]" />
        <div className="relative z-10 flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Welcome back, Dev
          </h1>
          <p className="text-zinc-400 max-w-md text-sm sm:text-base">
            Ready to accelerate your engineering framework knowledge today?
          </p>
        </div>
        
        <div className="relative z-10 mt-6 flex items-center gap-6 border-t border-zinc-900 pt-6">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-orange-500 fill-orange-500/20" />
            <span className="text-sm font-semibold text-zinc-200">12 Day Learning Streak</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <Calendar className="h-4 w-4" />
            <span className="text-xs">Next goal evaluation: Midnight</span>
          </div>
        </div>
      </motion.section>

      {/* DYNAMIC COURSE TILES */}
      {courses.map((course) => (
        <motion.article
          key={course.id}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={springHover}
          className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 flex flex-col justify-between min-h-[190px] transition-all hover:border-violet-500/30"
        >
          {/* Subtle Abstract Grain/Mesh Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(39,39,42,0.3),transparent_50%)]" />
          
          <div className="relative z-10 flex items-start justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-violet-500/40 transition-colors">
              <DynamicIcon name={course.icon_name} className="h-6 w-6 text-violet-400" />
            </div>
            <span className="text-xs font-mono text-zinc-500">RSC Verified</span>
          </div>

          <div className="relative z-10 mt-4">
            <h3 className="font-semibold text-zinc-100 tracking-tight text-base mb-3 group-hover:text-white">
              {course.title}
            </h3>
            
            {/* Custom Animated Progress Indicator */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono text-zinc-400">
                <span>Progress</span>
                <span className="text-violet-400">{course.progress}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-900 border border-zinc-800/50">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${course.progress}%` }}
                  transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.3 }}
                />
              </div>
            </div>
          </div>
        </motion.article>
      ))}

      {/* ACTIVITY GRAPH MOCK TILE */}
      <motion.section
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        transition={springHover}
        className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 md:col-span-2 lg:col-span-3 flex flex-col justify-between min-h-[200px]"
      >
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="h-5 w-5 text-zinc-400" />
            <h3 className="font-semibold text-zinc-200">Weekly Engine Velocity</h3>
          </div>
          {/* Mock Grid Matrix to look like a Contribution Chart */}
          <div className="flex flex-wrap gap-1.5">
            {Array.from({ length: 35 }).map((_, i) => {
              const alpha = [0.1, 0.2, 0.4, 0.7, 0.9][i % 5];
              return (
                <div
                  key={i}
                  className="h-4 w-4 rounded-sm"
                  style={{ backgroundColor: `rgba(139, 92, 246, ${alpha})` }}
                />
              );
            })}
          </div>
        </div>
        <span className="text-xs font-mono text-zinc-500 mt-4 block">Metrics gathered over past trailing 35 cycles</span>
      </motion.section>
    </motion.main>
  );
}