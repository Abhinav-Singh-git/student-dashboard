'use client';

import * as Icons from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
}

export function DynamicIcon({ name, className }: DynamicIconProps) {
  const LucideIcon = (Icons as any)[name] || Icons.BookOpen;
  return <LucideIcon className={className} aria-hidden="true" />;
}