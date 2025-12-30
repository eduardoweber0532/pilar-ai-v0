
import React from 'react';
import { cn } from '../lib/utils';
import { Button } from './ui/button';
import { GlowingEffect } from './ui/glowing-effect';

interface ResultsProps {
  onCtaClick?: () => void;
}

const Results: React.FC<ResultsProps> = ({ onCtaClick }) => {
  const outcomes = [
    { 
      title: "Redução de custos fixos", 
      icon: "M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2 .9 2 2-.9 2-2 2m0-8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m-1 9V7h2v10h-2z",
      theme: {
        text: "text-purple-400",
        bg: "bg-purple-500/5",
        border: "group-hover:border-purple-500/30",
        glow: "shadow-[0_20px_40px_-15px_rgba(168,85,247,0.15)]",
        iconBg: "group-hover:bg-purple-500/10",
        bar: "bg-purple-500"
      }
    },
    { 
      title: "Aumento de produtividade", 
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      theme: {
        text: "text-cyan-400",
        bg: "bg-cyan-500/5",
        border: "group-hover:border-cyan-500/30",
        glow: "shadow-[0_20px_40px_-15px_rgba(6,182,212,0.15)]",
        iconBg: "group-hover:bg-cyan-500/10",
        bar: "bg-cyan-500"
      }
    },
    { 
      title: "Atendimento mais rápido", 
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      theme: {
        text: "text-emerald-400",
        bg: "bg-emerald-500/5",
        border: "group-hover:border-emerald-500/30",
        glow: "shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)]",
        iconBg: "group-hover:bg-emerald-500/10",
        bar: "bg-emerald-500"
      }
    },
    { 
      title: "Mais leads aproveitados", 
      icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
      theme: {
        text: "text-amber-400",
        bg: "bg-amber-500/5",
        border: "group-hover:border-amber-500/30",
        glow: "shadow-[0_20px_40px_-15px_rgba(245,158,11,0.15)]",
        iconBg: "group-hover:bg-amber-500/10",
        bar: "bg-amber-500"
      }
    },
    { 
      title: "Melhor conversão", 
      icon: "M7 11l5-5m0 0l5 5m-5-5v12",
      theme: {
        text: "text-rose-400",
        bg: "bg-rose-500/5",
        border: "group-hover:border-rose-500/30",
        glow: "shadow-[0_20px_40px_-15px_rgba(244,63,94,0.15)]",
        iconBg: "group-hover:bg-rose-500/10",
        bar: "bg-rose-500"
      }
    },
    { 
      title: "Clareza na decisão", 
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      theme: {
        text: "text-indigo-400",
        bg: "bg-indigo-500/5",
        border: "group-hover:border-indigo-500/30",
        glow: "shadow-[0_20px_40px_-15px_rgba(99,102,241,0.15)]",
        iconBg: "group-hover:bg-indigo-500/10",
        bar: "bg-indigo-500"
      }
    },
  ];

  return (
    <section className="py-32 bg-[#050505] px-6 relative overflow-hidden">
      {/* Visual Background Elements & Neon Aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute top-[10%] left-[20%] w-[600px] h-[300px] bg-[var(--brand)]/10 blur-[150px] rounded-full pointer-events-none -rotate-12"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <div className="relative inline-block">
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-[80px] md:text-[140px] font-black text-white/[0.03] select-none tracking-tighter leading-none uppercase">
              Outcomes
            </span>
            <div className="relative px-4">
              <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-500 uppercase tracking-[0.4em] mb-6">
                Impacto Mensurável
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-none">
                RESULTADOS <span className="text-[var(--brand)]">REAIS</span>
              </h2>
            </div>
          </div>
        </div>
        
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {outcomes.map((res, idx) => (
            <div key={idx} className="relative group rounded-[3rem]">
              <GlowingEffect
                spread={50}
                glow={true}
                disabled={false}
                proximity={80}
                inactiveZone={0.01}
                borderWidth={3}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div 
                className={cn(
                  "relative h-full bg-[#0A0A0A] backdrop-blur-sm p-10 rounded-[3rem] border border-white/5 transition-all duration-500 hover:-translate-y-2 overflow-hidden",
                  res.theme.glow
                )}
              >
                {/* Card Decoration */}
                <div className={cn("absolute top-0 right-10 w-px h-20 bg-gradient-to-b from-current to-transparent opacity-0 group-hover:opacity-100 transition-all", res.theme.text)}></div>
                
                <div className="flex justify-between items-start mb-10">
                  <div className={cn("w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center transition-all group-hover:scale-110", res.theme.iconBg, res.theme.border)}>
                    <svg className={cn("w-7 h-7 transition-colors", res.theme.text)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={res.icon} />
                    </svg>
                  </div>
                  <span className={cn("text-sm font-black opacity-10 group-hover:opacity-40 transition-opacity uppercase tracking-widest", res.theme.text)}>
                    0{idx + 1}
                  </span>
                </div>
                
                <h3 className="text-2xl font-black text-white tracking-tighter leading-tight uppercase group-hover:text-white transition-colors">
                  {res.title}
                </h3>
                
                {/* Bottom line indicator */}
                <div className="mt-8 w-12 h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className={cn("w-0 group-hover:w-full h-full transition-all duration-700", res.theme.bar)}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mb-24">
          <Button onClick={onCtaClick} size="lg" variant="vibrant" className="px-16 py-7 text-xl shadow-[0_30px_70px_-10px_rgba(0,245,212,0.6)]">
            Desejo estes resultados no meu negócio
          </Button>
        </div>

        {/* Footer Quote Section */}
        <div className="mt-24 pt-16 border-t border-white/5">
          <div className="relative max-w-2xl mx-auto text-center">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-10">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM5.01695 21L5.01695 18C5.01695 16.8954 5.91239 16 7.01695 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.01695C6.46467 8 6.01695 8.44772 6.01695 9V12C6.01695 12.5523 5.56923 13 5.01695 13H3.01695V21H5.01695Z" />
              </svg>
            </div>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-medium italic px-4">
              "Cada negócio tem seus números, mas a estrutura passa a trabalhar a favor do crescimento sustentável."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
