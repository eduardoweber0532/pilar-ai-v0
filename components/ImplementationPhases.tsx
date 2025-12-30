
import React from 'react';
import { cn } from '../lib/utils';
import { Button } from './ui/button';

interface ImplementationPhasesProps {
  onCtaClick?: () => void;
}

const ImplementationPhases: React.FC<ImplementationPhasesProps> = ({ onCtaClick }) => {
  const phases = [
    { 
      title: "Diagnóstico estratégico", 
      desc: "Mapeamento completo da operação, gargalos e oportunidades.",
      theme: {
        text: "text-indigo-400",
        border: "group-hover:border-indigo-500/50",
        glow: "bg-indigo-500",
        bg: "group-hover:bg-indigo-500/5"
      }
    },
    { 
      title: "Arquitetura da infraestrutura", 
      desc: "Desenho do sistema AI-powered sob medida para o negócio.",
      theme: {
        text: "text-cyan-400",
        border: "group-hover:border-cyan-500/50",
        glow: "bg-cyan-500",
        bg: "group-hover:bg-cyan-500/5"
      }
    },
    { 
      title: "Implementação do core", 
      desc: "Atendimento, follow-up e CRM funcionando de forma integrada.",
      theme: {
        text: "text-emerald-400",
        border: "group-hover:border-emerald-500/50",
        glow: "bg-emerald-500",
        bg: "group-hover:bg-emerald-500/5"
      }
    },
    { 
      title: "Integrações e automações avançadas", 
      desc: "Implementação das entregas modulares conforme o diagnóstico.",
      theme: {
        text: "text-amber-400",
        border: "group-hover:border-amber-500/50",
        glow: "bg-amber-500",
        bg: "group-hover:bg-amber-500/5"
      }
    },
    { 
      title: "Treinamento e otimização", 
      desc: "Ajustes finos, capacititação do time e consolidação da operação.",
      theme: {
        text: "text-rose-400",
        border: "group-hover:border-rose-500/50",
        glow: "bg-rose-500",
        bg: "group-hover:bg-rose-500/5"
      }
    },
  ];

  return (
    <section className="py-16 bg-[#050505] px-6 relative overflow-hidden">
      {/* Structural Elements & Neon Glows */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      <div className="absolute top-[20%] right-[-15%] w-[500px] h-[500px] bg-[var(--brand)]/5 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-[var(--cta)]/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="relative mb-24 text-center">
          <div className="relative inline-block px-4 text-balance">
             <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] md:leading-[1] uppercase italic text-white">
                <span className="inline-block pr-2">AS</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 inline-block px-3">
                  5 FASES
                </span> 
                <span className="inline-block px-2">DA</span>
                <br className="hidden md:block"/>
                <span className="text-[var(--brand)] inline-block px-3 pb-2 md:pb-0">IMPLEMENTAÇÃO</span>
             </h2>
          </div>
        </div>

        <div className="relative mb-24">
          {/* Central Vertical Line (Desktop) - Compacted */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/0 via-white/10 to-white/0 -translate-x-1/2 z-0"></div>
          
          <div className="space-y-4 md:space-y-0 relative z-10">
            {phases.map((phase, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={cn(
                  "relative flex flex-col md:flex-row items-start md:items-center w-full md:min-h-[160px]",
                  isEven ? "md:flex-row-reverse" : ""
                )}>
                  
                  {/* Timeline Point */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-black border border-white/10 shadow-[0_0_0_4px_rgba(0,0,0,1)] flex items-center justify-center">
                       <div className={cn("w-1 h-1 rounded-full", phase.theme.glow)}></div>
                    </div>
                  </div>

                  {/* Empty space */}
                  <div className="hidden md:block md:w-1/2"></div>

                  {/* Card Content - Increased Text Size */}
                  <div className={cn(
                    "w-full md:w-1/2 pl-12 md:pl-0 flex",
                    isEven ? "md:pr-12 md:justify-end" : "md:pl-12 md:justify-start"
                  )}>
                    <div className={cn(
                      "group relative bg-[#080808] border border-white/5 p-8 md:p-10 rounded-[2.5rem] transition-all duration-500 w-full max-w-lg overflow-hidden hover:bg-white/[0.02]",
                      phase.theme.border,
                      phase.theme.bg,
                      isEven ? "text-left md:text-right" : "text-left"
                    )}>
                      
                      <div className={cn("flex items-center gap-2 mb-3", isEven ? "md:flex-row-reverse" : "")}>
                        <span className={cn("text-[10px] font-black uppercase tracking-widest opacity-60", phase.theme.text)}>
                          FASE 0{idx + 1}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-black text-white mb-3 tracking-tight uppercase leading-none">
                        {phase.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm md:text-lg leading-relaxed font-medium group-hover:text-gray-200 transition-colors">
                        {phase.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center">
          <Button onClick={onCtaClick} size="lg" variant="vibrant" className="px-14 py-6 font-black uppercase tracking-wider">
            Quero iniciar a fase 01
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImplementationPhases;
