
import React, { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

const ScarcityBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hidden = localStorage.getItem('pilar_scarcity_hidden');
    if (hidden) setIsVisible(false);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('pilar_scarcity_hidden', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[110] animate-in fade-in duration-500">
      {/* Container: Sombrio e sofisticado */}
      <div className="h-[40px] bg-[#120404] border-b border-red-900/20 backdrop-blur-md flex items-center justify-center relative px-4">
        
        {/* Progress Background Overlay (Integrated - Subtle glow) */}
        <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
          <div className="h-full bg-gradient-to-r from-red-900/40 via-purple-900/40 to-transparent w-full"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full flex items-center justify-center gap-4 relative z-10">
          {/* Subtle Icon */}
          <svg className="w-3.5 h-3.5 text-red-500/80 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

          {/* Core Message */}
          <p className="text-[10px] md:text-xs font-bold text-zinc-100 uppercase tracking-[0.15em] text-center">
            Restam <span className="text-red-500 font-black">3 vagas</span> para projetos em andamento neste mês.
          </p>
        </div>

        {/* Close Interaction */}
        <button 
          onClick={handleClose}
          className="absolute right-4 p-1 text-zinc-600 hover:text-white transition-colors"
          aria-label="Fechar aviso"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5">
          <div className="h-full bg-red-600/30 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ScarcityBar;
