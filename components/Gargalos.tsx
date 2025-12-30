
import React from 'react';
import { Section, Container } from './ui/layout';
import { Heading, Text } from './ui/typography';
import { Button } from './ui/button';
import { GARGALOS_DATA } from '../constants/data';
import { cn } from '../lib/utils';
import { GlowingEffect } from './ui/glowing-effect';

interface GargalosProps {
  onCtaClick?: () => void;
}

/**
 * Utilitário para destacar números e valores no texto com uma cor específica
 */
const HighlightText = ({ text, colorClass }: { text: string; colorClass: string }) => {
  const parts = text.split(/(\d+%.*?|R\$\s?\d+\s?mil|R\$\s?\d+k?|95%|80%|5º|12º|2º|0,8%|Margem)/g);
  
  return (
    <>
      {parts.map((part, i) => {
        const isMatch = /(\d+%.*?|R\$\s?\d+\s?mil|R\$\s?\d+k?|95%|80%|5º|12º|2º|0,8%|Margem)/g.test(part);
        return isMatch ? (
          <span key={i} className={cn("font-bold", colorClass)}>{part}</span>
        ) : (
          part
        );
      })}
    </>
  );
};

const Gargalos: React.FC<GargalosProps> = ({ onCtaClick }) => {
  const cardThemes = [
    { title: "text-purple-400", highlight: "text-purple-400", border: "hover:border-purple-500/30", glow: "from-purple-500/10" },
    { title: "text-rose-400", highlight: "text-rose-400", border: "hover:border-rose-500/30", glow: "from-rose-500/10" },
    { title: "text-blue-400", highlight: "text-blue-400", border: "hover:border-blue-500/30", glow: "from-blue-500/10" },
    { title: "text-emerald-400", highlight: "text-emerald-400", border: "hover:border-emerald-500/30", glow: "from-emerald-500/10" },
    { title: "text-amber-400", highlight: "text-amber-400", border: "hover:border-amber-500/30", glow: "from-amber-500/10" },
    { title: "text-cyan-400", highlight: "text-cyan-400", border: "hover:border-cyan-500/30", glow: "from-cyan-500/10" },
  ];

  return (
    <Section id="gargalos" className="relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <Container>
        <div className="max-w-4xl mb-16">
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-md mb-6">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Análise de Eficiência</span>
          </div>
          <Heading className="text-4xl md:text-6xl mb-6 leading-tight">
            O que está travando o <br/> 
            <span className="text-gray-500">lucro do seu negócio</span>
          </Heading>
          <Text className="text-lg md:text-xl max-w-2xl text-gray-400">
            Identificamos os pontos críticos onde sua empresa perde dinheiro por falta de <span className="text-white font-medium">processos inteligentes</span>.
          </Text>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {GARGALOS_DATA.map((p, idx) => {
            const theme = cardThemes[idx % cardThemes.length];
            return (
              <div key={idx} className="relative h-full rounded-[var(--radius-card)] p-0.5 group">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className={cn(
                  "relative h-full bg-[#0A0A0C] p-8 flex flex-col rounded-[var(--radius-card)] border border-white/5 transition-all duration-300 overflow-hidden",
                )}>
                  <div className={cn("absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500", theme.glow)}></div>

                  <div className="mb-6">
                    <Heading as="h3" className={cn("text-xl md:text-2xl tracking-tight transition-transform group-hover:translate-x-1", theme.title)}>
                      {p.title}
                    </Heading>
                  </div>

                  <div className="flex-grow">
                    <p className="text-gray-200 leading-relaxed text-base md:text-lg font-medium">
                      <HighlightText text={p.desc} colorClass={theme.highlight} />
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between opacity-30 group-hover:opacity-100 transition-all">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors">Diagnóstico #0{idx + 1}</span>
                    <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse", theme.title.replace('text-', 'bg-'))}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="bg-black border border-white/10 p-10 md:p-16 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
            <div className="flex-1">
              <h2 className="text-2xl md:text-4xl font-black text-white leading-[1.2] mb-8 text-balance">
                Esses gargalos invisíveis estão drenando <span className="text-[var(--brand)]">30% a 50% do seu faturamento</span> todos os meses.
              </h2>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                Como resolver? Você precisa de uma estrutura. De um <span className="text-white font-bold border-b border-white/40 pb-0.5">Pilar AI-Powered</span> que sustente o seu negócio.
              </p>
            </div>
            
            <div className="shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/20 flex items-center justify-center transition-transform hover:scale-105 duration-500">
                <svg className="w-10 h-10 md:w-14 md:h-14 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02/003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button onClick={onCtaClick} size="lg" variant="vibrant" className="px-12 py-6">
            Estancar perdas agora
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Gargalos;
