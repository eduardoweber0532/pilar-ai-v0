
import React from 'react';
import { PillarLogo } from '../constants';

interface HeaderProps {
  onCtaClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  return (
    <header className="fixed top-10 left-0 right-0 z-[100] py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/[0.02] backdrop-blur-md border border-white/10 px-6 py-3 rounded-full">
        <div className="flex items-center gap-2">
          <PillarLogo className="w-8 h-8 text-white" />
          <span className="font-black text-lg tracking-tighter">PILAR AI</span>
        </div>
        
        <button 
          onClick={onCtaClick}
          className="bg-[var(--cta)] text-black hover:bg-[var(--cta-hover)] shadow-[0_10px_30px_-5px_rgba(0,245,212,0.3)] transition-all px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest"
        >
          Agendar consultoria
        </button>
      </div>
    </header>
  );
};

export default Header;
