'use client';

import * as Icons from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
}

export function DynamicIcon({ name, className }: DynamicIconProps) {
  // Fallback to a generic book icon if the specific database icon isn't matched
  const LucideIcon = (Icons as any)[name] || Icons.BookOpen;
  return <LucideIcon className={className} aria-hidden="true" />;
}