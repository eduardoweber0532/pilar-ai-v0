
import React from 'react';
import { cn } from '../../lib/utils';

export const GlassCard = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn(
    "bg-glass backdrop-blur-[var(--blur-glass)] border-glass rounded-[var(--radius-card)] transition-all duration-500",
    className
  )}>
    {children}
  </div>
);
