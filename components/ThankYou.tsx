
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Section, Container } from './ui/layout';

interface ThankYouProps {
  onBack: () => void;
}

const ThankYou: React.FC<ThankYouProps> = ({ onBack }) => {
  return (
    <Section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 50%, #2D1B69 0%, transparent 70%)` }} />
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <Container className="relative z-10 text-center flex flex-col items-center">
        {/* Success Pulse */}
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative w-40 h-40 mb-16 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-[var(--cta)]/20 rounded-full animate-ping"></div>
          <div className="relative w-24 h-24 bg-[var(--cta)] rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(0,245,212,0.5)]">
            <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl"
        >
          <h1 className="text-6xl md:text-9xl font-black text-white uppercase italic tracking-tighter leading-[0.8] mb-12">
            CONEXÃO <br />
            <span className="text-[var(--brand)]">ESTABELECIDA</span>
          </h1>

          <div className="space-y-6 mb-16">
            <p className="text-2xl md:text-4xl font-bold text-white leading-tight max-w-2xl mx-auto">
              Em breve, um especialista da <span className="text-[var(--brand)]">Pilar AI</span> entrará em contato com você.
            </p>
            <p className="text-xl md:text-2xl font-medium text-zinc-400 max-w-xl mx-auto">
              Nossa IA já iniciou o processamento do seu diagnóstico estratégico.
            </p>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-12 rounded-[3rem] mb-20 text-left max-w-2xl mx-auto">
            <h2 className="text-sm font-black text-white uppercase tracking-[0.4em] mb-8 border-b border-white/10 pb-4">Protocolo de Atendimento</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-8 h-8 rounded-full bg-[var(--brand)]/20 border border-[var(--brand)]/40 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-xs font-black text-[var(--brand)]">01</span>
                </div>
                <div>
                  <p className="text-white font-bold text-lg mb-1">Validação de Infraestrutura</p>
                  <p className="text-zinc-400">Estamos analisando os gargalos operacionais informados para preparar sua solução personalizada.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-8 h-8 rounded-full bg-[var(--brand)]/20 border border-[var(--brand)]/40 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-xs font-black text-[var(--brand)]">02</span>
                </div>
                <div>
                  <p className="text-white font-bold text-lg mb-1">Agendamento Estratégico</p>
                  <p className="text-zinc-400">Fique atento ao seu WhatsApp. Nosso especialista entrará em contato para alinhar os próximos passos da implementação.</p>
                </div>
              </div>
            </div>
          </div>

          <Button onClick={onBack} variant="outline" size="lg" className="px-16 py-8 opacity-60 hover:opacity-100 transition-opacity">
            Voltar ao site
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
};

export default ThankYou;
