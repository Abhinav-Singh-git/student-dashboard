'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard', href: '/' },
  { id: 'courses', label: 'My Courses', icon: 'GraduationCap', href: '/courses' },
  { id: 'analytics', label: 'Analytics', icon: 'BarChart3', href: '/analytics' },
  { id: 'settings', label: 'Settings', icon: 'Settings', href: '/settings' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-800 bg-zinc-950/80 p-4 backdrop-blur-md md:sticky md:top-0 md:h-screen md:w-20 md:border-r md:border-t-0 lg:w-64">
      <div className="flex h-full items-center justify-around md:flex-col md:justify-start md:gap-8 md:pt-8">
        <div className="hidden items-center gap-3 px-3 lg:flex w-full mb-6">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-600" />
          <span className="font-bold text-white tracking-wide">NextGen Learn</span>
        </div>

        <ul className="flex w-full justify-around gap-2 md:flex-col md:justify-start">
          {navItems.map((item) => {
            const IconComponent = (Icons as any)[item.icon] || Icons.HelpCircle;
            
            // Matches active tab state directly against the real browser route address
            const isActive = pathname === item.href;

            return (
              <li key={item.id} className="relative w-full list-none">
                <Link
                  href={item.href}
                  className={`relative flex w-full items-center justify-center gap-4 rounded-xl p-3 text-sm font-medium transition-colors hover:text-white md:justify-center lg:justify-start ${
                    isActive ? 'text-white' : 'text-zinc-400'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-highlight"
                      className="absolute inset-0 rounded-xl bg-zinc-900 border border-zinc-800"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">
                    <IconComponent className="h-5 w-5" />
                  </span>
                  <span className="relative z-10 hidden lg:block">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}