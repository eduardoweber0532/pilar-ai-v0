
import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'white' | 'outline' | 'ghost' | 'vibrant';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className, 
  href,
  onClick,
  ...props 
}: ButtonProps) => {
  const variants = {
    primary: "bg-[var(--brand)] text-white hover:bg-[var(--brand-hover)] shadow-[0_20px_50px_-10px_rgba(106,76,255,0.4)] border border-white/10",
    vibrant: "bg-[var(--cta)] text-black hover:bg-[var(--cta-hover)] shadow-[0_20px_50px_-10px_rgba(0,245,212,0.4)] border border-white/10",
    white: "bg-white text-black hover:bg-white/90 shadow-xl",
    outline: "bg-transparent border border-white/10 hover:border-white/40 text-white backdrop-blur-sm",
    ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-10 py-5 text-lg",
    xl: "px-12 py-6 text-xl"
  };

  const baseClasses = cn(
    "inline-flex items-center justify-center gap-3 rounded-[var(--radius-button)] font-black uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1 active:scale-[0.98]",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={baseClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
};
