
import React from 'react';
import { cn } from '../../lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Heading = ({ children, className, as: Component = 'h2' }: TypographyProps) => (
  <Component className={cn("font-black tracking-tighter leading-none text-white", className)}>
    {children}
  </Component>
);

export const Text = ({ children, className, as: Component = 'p' }: TypographyProps) => (
  <Component className={cn("text-gray-400 leading-relaxed text-balance", className)}>
    {children}
  </Component>
);
