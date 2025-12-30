
import React from 'react';
import { cn } from '../lib/utils';
import { Button } from './ui/button';

interface CoreDeliverablesProps {
  onCtaClick?: () => void;
}

const CoreDeliverables: React.FC<CoreDeliverablesProps> = ({ onCtaClick }) => {
  const core = [
    { 
      title: "Atendimento AI-Powered", 
      desc: "Contato rápido, consistente e organizado.", 
      num: "01", 
      icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
      theme: "text-[#6A4CFF] bg-[#6A4CFF]/10 border-[#6A4CFF]/30 glow:from-[#6A4CFF]/20"
    },
    { 
      title: "Follow-up inteligente", 
      desc: "A maioria das vendas acontece após vários contatos. Automatizamos essa persistência.", 
      num: "02", 
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      theme: "text-[#FF4CF4] bg-[#FF4CF4]/10 border-[#FF4CF4]/30 glow:from-[#FF4CF4]/20"
    },
    { 
      title: "Centralização CRM", 
      desc: "Dados organizados, histórico completo e visão clara do funil.", 
      num: "03", 
      icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2",
      theme: "text-[#4CC9FF] bg-[#4CC9FF]/10 border-[#4CC9FF]/30 glow:from-[#4CC9FF]/20"
    },
  ];

  return (
    <section className="py-32 bg-[#080808] px-6 relative overflow-hidden border-b border-white/5">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">Módulo de Fundação</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter text-white">
              O CORE INEGOCIÁVEL
            </h2>
          </div>
          <div className="max-w-xl">
            <p className="text-white text-xl md:text-2xl font-bold leading-tight tracking-tight">
              Antes de qualquer automação avançada, toda empresa precisa de uma base sólida. Por isso, todo projeto da Pilar começa com três pilares obrigatórios:
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-1 bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden">
          {core.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative bg-black p-12 transition-all duration-500 hover:bg-zinc-900/40"
            >
              <div className={cn("absolute top-0 left-12 w-24 h-px bg-gradient-to-r from-current to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700", item.theme.split(' ')[0])}></div>
              
              <div className="flex justify-between items-start mb-12">
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center border transition-colors", item.theme.split(' ').slice(1, 3).join(' '))}>
                  <svg className={cn("w-7 h-7 transition-colors", item.theme.split(' ')[0])} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon} />
                  </svg>
                </div>
                <span className={cn("text-4xl font-black opacity-5 group-hover:opacity-20 transition-opacity leading-none", item.theme.split(' ')[0])}>
                  {item.num}
                </span>
              </div>

              <h3 className="text-2xl font-black mb-4 text-white group-hover:text-gray-200 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed font-medium">
                {item.desc}
              </p>

              <div className="mt-12 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className={cn("h-full w-0 group-hover:w-full transition-all duration-1000 ease-out", item.theme.split(' ')[1].replace('bg-', 'bg-').replace('/10', ''))}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-10">
          <div className="bg-zinc-950 px-10 py-6 rounded-2xl border border-white/10 text-center">
            <p className="text-xl font-bold text-gray-400 tracking-tight">
              Sem essa base, <span className="text-white">não existe escala sustentável.</span>
            </p>
          </div>
          
          <Button onClick={onCtaClick} variant="vibrant" size="lg" className="px-14">
            Garantir minha fundação
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoreDeliverables;
