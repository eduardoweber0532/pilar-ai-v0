
import React from 'react';
import { Section, Container } from './ui/layout';
import { Heading, Text } from './ui/typography';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

interface ProofProps {
  onCtaClick?: () => void;
}

const Proof: React.FC<ProofProps> = ({ onCtaClick }) => {
  const metrics = [
    { 
      label: "Atendimento", 
      before: "Lento e manual", 
      after: "Imediato / IA", 
      type: "label",
      trend: "up" 
    },
    { 
      label: "Taxa de No-show", 
      before: "28%", 
      after: "16%", 
      type: "number",
      trend: "down" 
    },
    { 
      label: "Conversão de Vendas", 
      before: "12%", 
      after: "31%", 
      type: "number",
      trend: "up" 
    },
    { 
      label: "Modelo de Escala", 
      before: "Aumento de time", 
      after: "Custos estáveis", 
      type: "label",
      trend: "neutral" 
    },
  ];

  return (
    <Section className="bg-[#050505] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#6A4CFF]/20 to-transparent"></div>
      
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#6A4CFF]/10 border border-[#6A4CFF]/20 rounded-md mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)] animate-pulse"></span>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--brand)]">Relatório de Performance Executiva</span>
                </div>
                <Heading as="h2" className="text-4xl md:text-6xl uppercase tracking-tighter italic leading-none">
                  PROVA <span className="text-white/20">LÓGICA</span>
                </Heading>
              </div>
              <div className="max-w-xs">
                <p className="text-zinc-500 text-sm font-medium leading-relaxed border-l border-zinc-800 pl-6">
                  Benchmarks baseados em implementação real de infraestrutura Pilar em operações de escala.
                </p>
              </div>
            </div>
          </div>

          {/* Dashboard Table Component */}
          <div className="relative group mb-24">
            {/* Table Shadow/Glow */}
            <div className="absolute -inset-4 bg-[#6A4CFF]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="relative bg-[#0A0A0C] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
              {/* Header Row */}
              <div className="grid grid-cols-12 bg-zinc-900/40 border-b border-white/5 p-8 md:p-10">
                <div className="col-span-5 md:col-span-6">
                  <span className="text-[11px] font-black text-zinc-500 uppercase tracking-[0.2em]">Indicador de Eficiência</span>
                </div>
                <div className="col-span-3 md:col-span-3">
                  <span className="text-[11px] font-black text-blue-500/60 uppercase tracking-[0.2em]">Status Legado</span>
                </div>
                <div className="col-span-4 md:col-span-3 text-right">
                  <span className="text-[11px] font-black text-[var(--brand)] uppercase tracking-[0.2em]">Otimização Pilar</span>
                </div>
              </div>

              {/* Metric Rows */}
              <div className="divide-y divide-white/[0.03]">
                {metrics.map((m, idx) => (
                  <div key={idx} className="grid grid-cols-12 items-center p-8 md:p-10 hover:bg-white/[0.01] transition-all group/row">
                    <div className="col-span-12 md:col-span-6 mb-4 md:mb-0">
                      <p className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover/row:text-[var(--brand)] transition-colors">{m.label}</p>
                    </div>
                    
                    <div className="col-span-6 md:col-span-3">
                      <div className="flex flex-col">
                        <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-1 md:hidden">Antes</span>
                        <p className={cn(
                          "font-semibold text-zinc-500 transition-colors group-hover/row:text-zinc-400",
                          m.type === 'number' ? "text-2xl md:text-3xl" : "text-lg"
                        )}>
                          {m.before}
                        </p>
                      </div>
                    </div>

                    <div className="col-span-6 md:col-span-3 text-right">
                      <div className="flex flex-col items-end">
                        <span className="text-[9px] font-bold text-[var(--brand)]/60 uppercase tracking-widest mb-1 md:hidden">Pilar AI</span>
                        {m.type === 'number' ? (
                          <div className="flex items-center gap-3">
                            <span className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none">
                              {m.after}
                            </span>
                            <div className="w-2 h-2 rounded-full bg-[var(--brand)] shadow-[0_0_15px_#6A4CFF]"></div>
                          </div>
                        ) : (
                          <span className="inline-block px-5 py-2 bg-[#6A4CFF]/10 border border-[#6A4CFF]/30 rounded-full text-sm md:text-base font-black text-white uppercase tracking-wider shadow-lg shadow-[#6A4CFF]/5">
                            {m.after}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Conclusion & Projection Section */}
          <div className="mb-20 pt-16 border-t border-white/5">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8">
                <h4 className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tight text-balance">
                  Conclusão: A estrutura gera mais <span className="text-[var(--brand)]">margem</span>, 
                  retenção de <span className="text-[var(--brand)]">clientes</span> e um 
                  <span className="text-[var(--brand)]"> crescimento sustentável</span>.
                </h4>
              </div>
              
              <div className="lg:col-span-4 flex justify-end">
                <div className="relative group">
                  {/* Seal Glow */}
                  <div className="absolute inset-0 bg-[var(--brand)]/20 blur-2xl rounded-full scale-90 group-hover:scale-110 transition-transform duration-700"></div>
                  
                  <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-double border-white/10 bg-[#0A0A0C] flex flex-col items-center justify-center text-center p-6 shadow-2xl">
                    <div className="absolute inset-2 border border-white/5 rounded-full"></div>
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-2">Confiança da<br/>Projeção</span>
                    <span className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none">
                      94.8<span className="text-[var(--brand)]">%</span>
                    </span>
                    <div className="mt-3 flex gap-1">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-[var(--brand)] shadow-[0_0_5px_#6A4CFF]"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <Button onClick={onCtaClick} size="lg" variant="vibrant" className="px-16 py-6 uppercase tracking-wider">
              Obter estes resultados
            </Button>
            <p className="text-zinc-600 text-[10px] uppercase tracking-[0.4em] font-bold">Inicie sua transformação em 90 dias</p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Proof;
