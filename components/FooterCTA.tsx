
import React from 'react';
import { Button } from './ui/button';

interface FooterCTAProps {
  onCtaClick?: () => void;
}

const FooterCTA: React.FC<FooterCTAProps> = ({ onCtaClick }) => {
  return (
    <section id="cta" className="relative py-40 px-6 overflow-hidden bg-black">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6A4CFF]/20 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF4CF4]/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-block px-4 py-1 bg-[#6A4CFF]/10 border border-[#6A4CFF]/30 rounded-full text-[10px] font-bold text-[#6A4CFF] uppercase tracking-[0.4em] mb-10">
          Inicie sua Transformação
        </div>
        
        <h2 className="text-4xl md:text-7xl font-black mb-12 leading-[0.9] tracking-tighter text-balance">
          Sustente seu crescimento com <br/> 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6A4CFF] to-[#FF4CF4]">estrutura real.</span>
        </h2>
        
        <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed">
          O próximo passo é simples. Fale com um especialista da Pilar e veja se o Pilar AI Growth System é o que falta para seu próximo nível de escala.
        </p>

        <button 
          onClick={onCtaClick}
          className="inline-flex items-center gap-6 bg-[var(--cta)] hover:bg-[var(--cta-hover)] text-black font-black uppercase tracking-[0.2em] text-2xl px-16 py-8 rounded-full shadow-[0_20px_60px_-15px_rgba(0,245,212,0.4)] transition-all transform hover:scale-105 active:scale-95 group"
        >
          <span>Solicitar diagnóstico</span>
          <div className="w-10 h-10 bg-black group-hover:bg-white rounded-full flex items-center justify-center transition-colors">
            <svg className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </button>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500">Vagas Limitadas</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500">90 Dias p/ Escala</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500">AI-Powered Core</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
