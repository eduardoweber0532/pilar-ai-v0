
import React from 'react';
import { CheckIcon, XIcon } from '../constants';
import { cn } from '../lib/utils';

const Comparison: React.FC = () => {
  return (
    <section className="py-32 bg-[#050505] px-6 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[var(--brand)]/5 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-8">
            Benchmarks de Mercado
          </div>
          <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
            Tradição <span className="text-gray-800">vs.</span> <span className="text-[var(--brand)]">Evolução</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            O cliente de 2026 não espera mais. Empresas que levam horas para responder estão ensinando o mercado a comprar do concorrente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-24">
          {/* Traditional Panel - Optimized for readability while keeping "Legacy" vibe */}
          <div className="relative group">
            <div className="bg-[#0D0D0D] p-10 md:p-14 rounded-[3rem] border border-white/10 h-full transition-all duration-500">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center border border-white/10">
                  <XIcon />
                </div>
                <h3 className="text-sm font-black text-gray-400 uppercase tracking-[0.2em]">Negócios tradicionais</h3>
              </div>
              
              <ul className="space-y-10">
                <li className="flex items-start gap-6">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                  </div>
                  <div>
                    <p className="font-bold text-xl text-gray-100 mb-2">Atendimento lento</p>
                    <p className="text-gray-400 leading-relaxed text-lg">Resposta manual em horas ou dias, gerando frustração imediata.</p>
                  </div>
                </li>
                <li className="flex items-start gap-6">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                  </div>
                  <div>
                    <p className="font-bold text-xl text-gray-100 mb-2">Follow-up inexistente</p>
                    <p className="text-gray-400 leading-relaxed text-lg">Leads esquecidos no WhatsApp ou CRM por falta de braço humano.</p>
                  </div>
                </li>
                <li className="flex items-start gap-6">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                  </div>
                  <div>
                    <p className="font-bold text-xl text-gray-100 mb-2">Crescimento Linear</p>
                    <p className="text-gray-400 leading-relaxed text-lg">Mais vendas exigem invariavelmente mais contratações e custos fixos.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* AI-First Panel - Remains Superior and Vibrant */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            <div className="relative bg-gradient-to-b from-[#0F0A1F] to-black p-10 md:p-14 rounded-[3rem] border border-[var(--brand)]/30 h-full shadow-2xl">
              <div className="absolute top-8 right-8">
                <div className="bg-[var(--brand)] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl animate-pulse">
                  Vantagem Competitiva
                </div>
              </div>

              <div className="flex items-center gap-4 mb-12">
                <div className="w-10 h-10 rounded-xl bg-[var(--brand)]/20 flex items-center justify-center border border-[var(--brand)]/30">
                  <CheckIcon />
                </div>
                <h3 className="text-sm font-black text-[var(--brand)] uppercase tracking-[0.2em]">Negócios AI-First</h3>
              </div>

              <ul className="space-y-10">
                <li className="flex items-start gap-6">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-[var(--brand)]/20 border border-[var(--brand)]/30 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--brand)] shadow-[0_0_10px_var(--brand)]"></div>
                  </div>
                  <div>
                    <p className="font-bold text-xl text-white mb-2">Atendimento Imediato 24/7</p>
                    <p className="text-gray-300 leading-relaxed text-lg">Qualificação instantânea e precisa, sem fadiga e em qualquer idioma.</p>
                  </div>
                </li>
                <li className="flex items-start gap-6">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-[var(--brand)]/20 border border-[var(--brand)]/30 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--brand)] shadow-[0_0_10px_var(--brand)]"></div>
                  </div>
                  <div>
                    <p className="font-bold text-xl text-white mb-2">Follow-up Autônomo</p>
                    <p className="text-gray-300 leading-relaxed text-lg">Persistência inteligente até a conversão, sem depender de memória humana.</p>
                  </div>
                </li>
                <li className="flex items-start gap-6">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-[var(--brand)]/20 border border-[var(--brand)]/30 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--brand)] shadow-[0_0_10px_var(--brand)]"></div>
                  </div>
                  <div>
                    <p className="font-bold text-xl text-white mb-2">Escala Exponencial</p>
                    <p className="text-gray-300 leading-relaxed text-lg">Uma operação que escala infinitamente sem precisar inflar a folha de pagamento.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Prediction Box - Enhanced for high-end insight feel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent)] to-transparent rounded-[2.5rem] opacity-20"></div>
            <div className="relative bg-zinc-950 p-10 md:p-14 rounded-[2.5rem] border border-white/5 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)]/5 blur-[60px] rounded-full"></div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
                    <span className="text-[var(--accent)] font-black uppercase tracking-tighter mr-3">Previsão Estratégica:</span> 
                    35% das PMEs sem IA perderão mais de 40% de Market Share para concorrentes <span className="text-white italic font-bold">“biônicos”</span> que operam com menos custos fixos e entregam mais valor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
