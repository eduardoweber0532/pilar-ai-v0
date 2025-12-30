
import React, { useState, useEffect, useCallback } from 'react';
import { cn } from '../lib/utils';

const SocialProofToast: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [hasBeenDismissed, setHasBeenDismissed] = useState(false);

  // Gera ou recupera um número estável para o dia de hoje
  const getStableCount = () => {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const storedData = localStorage.getItem('pilar_stable_count_data');
    
    if (storedData) {
      const { date, value } = JSON.parse(storedData);
      if (date === today) return value;
    }

    // Se não existir ou for de outro dia, gera um novo entre 8 e 14
    const newValue = Math.floor(Math.random() * (14 - 8 + 1)) + 8;
    localStorage.setItem('pilar_stable_count_data', JSON.stringify({
      date: today,
      value: newValue
    }));
    return newValue;
  };

  useEffect(() => {
    setCount(getStableCount());
    
    if (localStorage.getItem('pilar_social_proof_dismissed')) {
      setHasBeenDismissed(true);
    }
  }, []);

  const showToast = useCallback(() => {
    if (hasBeenDismissed) return;
    setIsVisible(true);

    // Esconde após 6 segundos
    setTimeout(() => {
      setIsVisible(false);
    }, 6000);
  }, [hasBeenDismissed]);

  useEffect(() => {
    // Primeira aparição após 7 segundos
    const initialTimer = setTimeout(() => {
      showToast();
    }, 7000);

    // Intervalo de repetição (60 a 120s)
    const intervalTime = (Math.floor(Math.random() * (120 - 60 + 1)) + 60) * 1000;
    const loopInterval = setInterval(() => {
      showToast();
    }, intervalTime);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(loopInterval);
    };
  }, [showToast]);

  const handleDismiss = () => {
    setIsVisible(false);
    setHasBeenDismissed(true);
    localStorage.setItem('pilar_social_proof_dismissed', 'true');
  };

  if (!isVisible && !hasBeenDismissed) return null;

  return (
    <div 
      className={cn(
        "fixed bottom-24 md:bottom-10 left-6 z-[90] transition-all duration-700 ease-in-out transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <div className="relative group">
        {/* Vibrant Cyan Glow Shadow */}
        <div className="absolute -inset-1 bg-[var(--cta)]/10 rounded-2xl blur-lg group-hover:bg-[var(--cta)]/30 transition-all duration-500"></div>
        
        <div className="relative bg-[#0A1010] border border-[var(--cta)]/20 rounded-2xl py-4 pl-5 pr-10 shadow-[0_20px_50px_-15px_rgba(0,245,212,0.3)] flex items-center gap-4 min-w-[260px]">
          {/* Institutional Icon with Vibrant Color */}
          <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[var(--cta)]/10 border border-[var(--cta)]/30 flex items-center justify-center shadow-[inset_0_0_10px_rgba(0,245,212,0.1)]">
            <svg className="w-5 h-5 text-[var(--cta)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          <div className="flex flex-col">
            <p className="text-[11px] font-black text-white uppercase tracking-wider leading-none mb-1">
              <span className="text-[var(--cta)] text-base font-black mr-1 drop-shadow-[0_0_8px_rgba(0,245,212,0.5)]">{count}</span> empresas
            </p>
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
              se cadastraram hoje
            </p>
          </div>

          {/* Close Button */}
          <button 
            onClick={handleDismiss}
            className="absolute top-2 right-2 p-1 text-zinc-600 hover:text-[var(--cta)] transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Bottom pulse line */}
          <div className="absolute bottom-0 left-5 right-10 h-[1px] bg-gradient-to-r from-transparent via-[var(--cta)]/40 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofToast;
