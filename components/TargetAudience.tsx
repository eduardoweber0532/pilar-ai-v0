
import React from 'react';
import { cn } from '../lib/utils';
import { GlowingEffect } from './ui/glowing-effect';

const TargetAudience: React.FC = () => {
  return (
    <section className="py-32 bg-[#050505] px-6 relative overflow-hidden">
      {/* Dynamic Background Atmosphere */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#6A4CFF]/10 blur-[150px] rounded-full pointer-events-none animate-pulse"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24">
          {/* Headline with adjusted padding and display to fix italic clipping of 'É' */}
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6A4CFF] to-[#4CC9FF] inline-block pr-6 pb-2">
              PARA QUEM É
            </span>
            <span className="block md:inline-block text-white/30">
              (E PARA QUEM NÃO É)
            </span>
          </h2>
          <p className="text-lg md:text-2xl text-zinc-400 font-medium tracking-tight">
            Isso garante que a implementação funcione de verdade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          
          {/* IS FOR - Primary Focus */}
          <div className="relative group h-full rounded-[3.5rem]">
            <GlowingEffect
              spread={60}
              glow={true}
              disabled={false}
              proximity={100}
              inactiveZone={0.01}
              borderWidth={4}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            />
            <div className="relative h-full bg-[#0C081A] p-12 md:p-16 rounded-[3.5rem] shadow-[0_30px_100px_-20px_rgba(106,76,255,0.3)] border border-white/5 overflow-hidden transition-all duration-500">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#6A4CFF]/30 blur-[60px] rounded-full"></div>

              <div className="flex items-center gap-5 mb-14">
                <div className="w-14 h-14 rounded-2xl bg-[#6A4CFF] flex items-center justify-center shadow-[0_0_30px_rgba(106,76,255,0.4)]">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-widest italic">
                  É para empresas que:
                </h3>
              </div>

              <ul className="space-y-10">
                <li className="flex items-start gap-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#6A4CFF] mt-2.5 shrink-0 shadow-[0_0_12px_#6A4CFF]"></div>
                  <p className="text-white text-xl leading-snug font-medium">
                    Faturam acima de <span className="inline-block text-[#FF4CF4] font-black px-3 py-1 bg-[#FF4CF4]/20 border border-[#FF4CF4]/40 rounded-lg shadow-[0_0_20px_rgba(255,76,244,0.2)] mx-1">R$100 mil/mês</span>
                  </p>
                </li>
                <li className="flex items-start gap-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#6A4CFF] mt-2.5 shrink-0 shadow-[0_0_12px_#6A4CFF]"></div>
                  <p className="text-zinc-200 text-xl leading-snug font-medium">Já possuem operação ativa</p>
                </li>
                <li className="flex items-start gap-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#6A4CFF] mt-2.5 shrink-0 shadow-[0_0_12px_#6A4CFF]"></div>
                  <p className="text-zinc-200 text-xl leading-snug font-medium">Querem escalar com estrutura</p>
                </li>
                <li className="flex items-start gap-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#6A4CFF] mt-2.5 shrink-0 shadow-[0_0_12px_#6A4CFF]"></div>
                  <p className="text-zinc-200 text-xl leading-snug font-medium">Tomam decisões estratégicas</p>
                </li>
              </ul>
              
              <div className="mt-20 pt-10 border-t border-white/5">
                <div className="flex items-center gap-4">
                  <span className="text-[11px] font-black text-[#6A4CFF] uppercase tracking-[0.4em]">Infraestrutura de Elite</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#6A4CFF]/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* IS NOT FOR - More Vivid & Sharp Contrast */}
          <div className="relative group h-full rounded-[3.5rem]">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={80}
              inactiveZone={0.01}
              borderWidth={2}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="relative h-full bg-[#111113] p-12 md:p-16 rounded-[3.5rem] border border-white/5 overflow-hidden transition-all duration-500">
              <div className="flex items-center gap-5 mb-14">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/20 flex items-center justify-center shadow-lg group-hover:bg-zinc-800 group-hover:border-white/40 transition-all">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-widest italic">
                  Não é para:
                </h3>
              </div>

              <ul className="space-y-10">
                <li className="flex items-start gap-6 group/item">
                  <div className="w-2 h-2 rounded-full bg-zinc-600 mt-2.5 shrink-0 group-hover/item:bg-white transition-colors"></div>
                  <p className="text-zinc-200 text-xl leading-snug font-medium transition-colors group-hover/item:text-white">Quem busca solução mágica</p>
                </li>
                <li className="flex items-start gap-6 group/item">
                  <div className="w-2 h-2 rounded-full bg-zinc-600 mt-2.5 shrink-0 group-hover/item:bg-white transition-colors"></div>
                  <p className="text-zinc-200 text-xl leading-snug font-medium transition-colors group-hover/item:text-white">Empresas muito pequenas (iniciantes)</p>
                </li>
                <li className="flex items-start gap-6 group/item">
                  <div className="w-2 h-2 rounded-full bg-zinc-600 mt-2.5 shrink-0 group-hover/item:bg-white transition-colors"></div>
                  <p className="text-zinc-200 text-xl leading-snug font-medium transition-colors group-hover/item:text-white">Quem não quer mudar processos</p>
                </li>
              </ul>

              <div className="mt-20 pt-10 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <span className="text-[11px] font-black text-zinc-400 uppercase tracking-[0.4em] group-hover:text-zinc-200 transition-colors">Filtro de Alinhamento Ativo</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
