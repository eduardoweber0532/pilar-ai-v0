
import React from 'react';
import { Section, Container } from './ui/layout';
import { Heading, Text } from './ui/typography';

const WhatIsPilar: React.FC = () => {
  return (
    <Section className="bg-[#050505] relative overflow-hidden pt-0">
      {/* Structural accent line at the top */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#6A4CFF]/30 to-transparent mb-32"></div>
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text Content */}
          <div className="relative z-10 order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-500 uppercase tracking-[0.4em] mb-8">
              Definição de Infraestrutura
            </div>
            
            <Heading as="h2" className="text-4xl md:text-6xl mb-10 leading-[0.9] tracking-tighter">
              O QUE É O <br/>
              <span className="text-[var(--brand)]">PILAR AI</span> <br/>
              GROWTH SYSTEM
            </Heading>
            
            <div className="space-y-8 max-w-xl">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium">
                O Pilar AI System é um sistema completo de <span className="text-white">diagnóstico, planejamento e implementação</span> de uma infraestrutura AI-Powered instalada no core do seu negócio.
              </p>
              
              <div className="p-6 bg-white/[0.02] border-l-2 border-[var(--brand)] rounded-r-2xl">
                <p className="text-lg text-white font-bold italic leading-snug">
                  "Não vendemos ferramentas isoladas. Não vendemos agentes de IA desconectados da sua estratégia."
                </p>
              </div>
              
              <p className="text-lg text-gray-400 leading-relaxed font-medium">
                Nós construímos a <span className="text-[var(--brand)] font-black">base estrutural</span> que sustenta e orquestra o crescimento previsível através de marketing, vendas e atendimento automatizados.
              </p>
            </div>
          </div>

          {/* Right Column: The Visual Pillar */}
          <div className="relative order-1 lg:order-2 flex justify-center items-center">
            {/* Background Glow */}
            <div className="absolute w-[400px] h-[400px] bg-[var(--brand)]/20 blur-[120px] rounded-full"></div>
            
            {/* The "Pillar" Graphic */}
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
              
              {/* Central Core (The Pillar) */}
              <div className="relative z-20 w-32 h-64 bg-zinc-900 border border-white/10 rounded-2xl flex flex-col items-center justify-around py-8 shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--brand)]/10 to-transparent opacity-50"></div>
                
                {/* Visual "Bones" of the pillar */}
                <div className="w-16 h-1 bg-[var(--brand)]/40 rounded-full shadow-[0_0_15px_var(--brand)] animate-pulse"></div>
                <div className="w-16 h-1 bg-[var(--brand)]/40 rounded-full"></div>
                <div className="w-16 h-1 bg-[var(--brand)]/40 rounded-full"></div>
                <div className="w-16 h-1 bg-[var(--brand)]/40 rounded-full"></div>
                <div className="w-16 h-1 bg-[var(--brand)]/40 rounded-full shadow-[0_0_15px_var(--brand)] animate-pulse delay-75"></div>

                {/* Vertical laser line */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-[var(--brand)] to-transparent"></div>
              </div>

              {/* Connecting Nodes (Company Parts) */}
              <div className="absolute inset-0 z-10">
                {/* Node: Marketing */}
                <div className="absolute top-[10%] left-[5%] group">
                   <div className="flex items-center gap-4 bg-zinc-950/80 backdrop-blur-md p-4 rounded-xl border border-white/10 group-hover:border-[#6A4CFF]/50 transition-all">
                     <span className="text-[10px] font-black text-[#6A4CFF] uppercase tracking-widest">Marketing</span>
                   </div>
                   <svg className="absolute top-full left-1/2 -translate-x-1/2 w-32 h-32 text-white/5 pointer-events-none" fill="none">
                     <path d="M10 0 C 10 50, 100 50, 100 100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                   </svg>
                </div>

                {/* Node: Vendas */}
                <div className="absolute bottom-[20%] left-[-10%] group">
                   <div className="flex items-center gap-4 bg-zinc-950/80 backdrop-blur-md p-4 rounded-xl border border-white/10 group-hover:border-[#FF4CF4]/50 transition-all">
                     <span className="text-[10px] font-black text-[#FF4CF4] uppercase tracking-widest">Vendas</span>
                   </div>
                </div>

                {/* Node: Atendimento */}
                <div className="absolute top-[30%] right-[0%] group">
                   <div className="flex items-center gap-4 bg-zinc-950/80 backdrop-blur-md p-4 rounded-xl border border-white/10 group-hover:border-[#4CC9FF]/50 transition-all">
                     <span className="text-[10px] font-black text-[#4CC9FF] uppercase tracking-widest">Operação</span>
                   </div>
                </div>

                {/* Node: Dados */}
                <div className="absolute bottom-[10%] right-[10%] group">
                   <div className="flex items-center gap-4 bg-zinc-950/80 backdrop-blur-md p-4 rounded-xl border border-white/10 group-hover:border-white/40 transition-all">
                     <span className="text-[10px] font-black text-white uppercase tracking-widest">Inteligência</span>
                   </div>
                </div>
              </div>

              {/* Decorative Rings */}
              <div className="absolute w-[250px] h-[250px] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute w-[350px] h-[350px] border border-white/[0.03] rounded-full animate-[spin_35s_linear_infinite_reverse]"></div>
            </div>
          </div>
          
        </div>
      </Container>
    </Section>
  );
};

export default WhatIsPilar;
