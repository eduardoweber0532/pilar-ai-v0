
import React from 'react';
import { cn } from '../lib/utils';
import { Button } from './ui/button';
import { GlowingEffect } from './ui/glowing-effect';

interface ModularDeliverablesProps {
  onCtaClick?: () => void;
}

const ModularDeliverables: React.FC<ModularDeliverablesProps> = ({ onCtaClick }) => {
  const themes = [
    { color: "text-cyan-400", bg: "bg-cyan-400/10", border: "group-hover:border-cyan-400/30", bar: "bg-cyan-400" },
    { color: "text-emerald-400", bg: "bg-emerald-400/10", border: "group-hover:border-emerald-400/30", bar: "bg-emerald-400" },
    { color: "text-amber-400", bg: "bg-amber-400/10", border: "group-hover:border-amber-400/30", bar: "bg-amber-400" },
    { color: "text-rose-400", bg: "bg-rose-400/10", border: "group-hover:border-rose-400/30", bar: "bg-rose-400" },
    { color: "text-indigo-400", bg: "bg-indigo-400/10", border: "group-hover:border-indigo-400/30", bar: "bg-indigo-400" },
  ];

  const items = [
    { 
      title: "Qualificação inteligente de leads", 
      icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
    },
    { 
      title: "Análise de dados estratégica", 
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
    },
    { 
      title: "Ofertas com insights de IA", 
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" 
    },
    { 
      title: "Landing pages AI-powered", 
      icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" 
    },
    { 
      title: "IA embarcada no seu site", 
      icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
    },
    { 
      title: "Dashboards interativos reais", 
      icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" 
    },
    { 
      title: "SEO assistido por IA", 
      icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
    },
    { 
      title: "Recuperação de vendas auto", 
      icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
    },
    { 
      title: "Nutrição de leads inteligente", 
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
    },
    { 
      title: "Treinamento do seu time", 
      icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" 
    },
  ];

  return (
    <section className="py-32 bg-black px-6 relative overflow-hidden">
      {/* Subtle Neon Accents */}
      <div className="absolute top-1/2 left-[-10%] w-[400px] h-[400px] bg-[var(--brand)]/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[300px] h-[300px] bg-[var(--accent)]/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Conceptual Link Component */}
        <div className="flex flex-col items-center mb-24">
          <div className="max-w-3xl text-center">
            <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-500 uppercase tracking-[0.4em] mb-8">
              Arquitetura de Expansão
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-none text-white uppercase italic">
              ENTREGAS MODULARES
            </h2>
            
            <div className="relative p-8 bg-[#0A0A0A] border border-white/5 rounded-3xl mb-12 group transition-all hover:border-[var(--brand)]/30">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black px-4 py-1 border border-white/10 rounded-full flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)] animate-pulse"></span>
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">O Gatilho de Ativação</span>
              </div>
              <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed">
                Nós não implementamos ferramentas genéricas. O <span className="text-white font-black underline decoration-[var(--brand)]/50 underline-offset-8">Diagnóstico Estratégico Inicial</span> define exatamente quais destes módulos serão ativados para destravar o lucro da sua operação específica.
              </p>
            </div>
          </div>
          
          {/* Visual flow arrow */}
          <div className="w-px h-16 bg-gradient-to-b from-[var(--brand)] to-transparent opacity-50"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5 border border-white/5 rounded-[3.5rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)] mb-20">
          {items.map((item, idx) => {
            const theme = themes[idx % themes.length];
            return (
              <div key={idx} className="relative group min-h-[280px]">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div 
                  className="relative h-full bg-black p-12 flex flex-col items-center text-center justify-between group hover:bg-zinc-950/80 transition-all duration-500"
                >
                  {/* Module Header */}
                  <div className="w-full flex justify-between items-center mb-10">
                    <div className="text-[8px] font-black text-zinc-700 tracking-widest uppercase group-hover:text-white/40 transition-colors">
                      MOD-{(idx + 1).toString().padStart(2, '0')}
                    </div>
                    <div className={cn("w-1.5 h-1.5 rounded-full opacity-30 group-hover:opacity-100 transition-opacity", theme.bar)}></div>
                  </div>

                  {/* Specific Icon */}
                  <div className={cn("mb-8 w-16 h-16 rounded-2xl border border-white/5 flex items-center justify-center transition-all duration-500 group-hover:scale-110", theme.bg, theme.border)}>
                    <svg className={cn("w-7 h-7 transition-colors", theme.color)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon} />
                    </svg>
                  </div>
                  
                  <p className="text-sm font-black uppercase tracking-[0.15em] text-gray-500 group-hover:text-white leading-tight transition-colors">
                    {item.title}
                  </p>
                  
                  <div className={cn("absolute bottom-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left opacity-20", theme.bar)}></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mb-24">
          <Button onClick={onCtaClick} size="lg" variant="vibrant" className="px-12 py-5">
            Personalizar meu setup modular
          </Button>
        </div>

        <div className="mt-24 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-6 px-12 py-10 rounded-[2.5rem] bg-[#080808] border border-white/5">
            <div className="flex -space-x-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-zinc-900 border-2 border-black flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand)] opacity-50"></div>
                </div>
              ))}
            </div>
            <p className="text-lg md:text-xl font-medium text-gray-400 leading-tight">
              Todos os módulos são <span className="text-white font-black">nativamente integrados</span> ao seu CRM e documentados para total independência do seu time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModularDeliverables;
