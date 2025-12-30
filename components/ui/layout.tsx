
import React from 'react';
import { cn } from '../../lib/utils';

export const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("max-w-7xl mx-auto px-6 w-full", className)}>
    {children}
  </div>
);

export const Section = ({ 
  children, 
  id, 
  className, 
  variant = 'default' 
}: { 
  children: React.ReactNode; 
  id?: string; 
  className?: string;
  variant?: 'default' | 'dark' | 'brand';
}) => {
  const variants = {
    default: 'bg-[#050505]',
    dark: 'bg-black',
    brand: 'bg-[#2D1B69]'
  };

  return (
    <section id={id} className={cn("py-[var(--section-py)] relative overflow-hidden", variants[variant], className)}>
      {children}
    </section>
  );
};
