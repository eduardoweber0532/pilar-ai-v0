
import React from 'react';
import { cn } from '../lib/utils';

const Guarantee: React.FC = () => {
  return (
    <section className="py-40 bg-[#050505] px-6 relative overflow-hidden">
      {/* Background Atmosphere - More subtle and expanded */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[var(--brand)]/5 blur-[160px] rounded-full pointer-events-none opacity-50"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="relative">
          {/* Main Card: Institutional and Clean */}
          <div className="relative bg-[#080808] border border-white/[0.05] p-12 md:p-20 rounded-[3rem] shadow-2xl backdrop-blur-sm overflow-hidden text-center">
            
            {/* Minimalist Security Icon: Symbol of integrity */}
            <div className="flex justify-center mb-10">
              <div className="w-16 h-16 rounded-3xl bg-white/[0.02] border border-white/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>

            <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-500 uppercase tracking-[0.4em] mb-12">
              COMPROMISSO OPERACIONAL
            </div>

            <div className="space-y-10">
              {/* Conditional: Soft bridge text */}
              <p className="text-lg md:text-xl text-zinc-400 font-medium leading-relaxed max-w-2xl mx-auto">
                Se após <span className="text-white font-bold">90 dias</span> de implementação a sua infraestrutura não apresentar os resultados projetados no diagnóstico...
              </p>
              
              {/* Formal Declaration: Reduced size, better spacing, no italics */}
              <h3 className="text-2xl md:text-4xl font-semibold text-white leading-[1.3] tracking-tight text-balance max-w-3xl mx-auto">
                Continuamos trabalhando <br className="hidden md:block" />
                <span className="text-[var(--brand)]">sem cobrar a otimização</span> <br className="hidden md:block" />
                até que os indicadores sejam atingidos.
              </h3>
              
              {/* Sign-off: Elegant and quiet */}
              <div className="pt-12 flex flex-col items-center">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>
                <p className="text-sm md:text-base font-medium text-zinc-500 uppercase tracking-[0.3em]">
                  Nós assumimos o risco por você.
                </p>
              </div>
            </div>

            {/* Subtle Institutional Overlays */}
            <div className="absolute top-0 right-0 p-10 opacity-20 hidden lg:block">
              <div className="text-[9px] font-mono text-zinc-600 vertical-rl tracking-[0.4em] uppercase">
                Protocolo de Performance Pilar v.2025
              </div>
            </div>
            <div className="absolute bottom-0 left-0 p-10 opacity-20 hidden lg:block">
              <div className="text-[9px] font-mono text-zinc-600 tracking-[0.4em] uppercase">
                Validação Técnica Independente
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
