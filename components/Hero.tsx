
import React from 'react';
import { Spotlight } from './ui/spotlight';
import { Section, Container } from './ui/layout';
import { Heading, Text } from './ui/typography';
import { Button } from './ui/button';
import { HERO_CONTENT } from '../constants/data';

interface HeroProps {
  onCtaClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <Section className="min-h-screen flex items-center pt-32 pb-24 lg:pt-40">
      {/* Refined Background Atmosphere */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
        style={{ 
          background: `radial-gradient(circle at 50% -20%, #2D1B69 0%, transparent 60%), radial-gradient(circle at 100% 100%, #1a103d 0%, transparent 40%)` 
        }}
      />
      
      {/* Grainy Texture Overlay (Optional but premium) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <Spotlight className="-top-40 left-0 md:left-[5%] opacity-30" fill="#6A4CFF" />

      <Container className="relative z-10 text-center flex flex-col items-center">
        {/* Minimalist Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-12 animate-fade-in backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--brand)]"></span>
          </span>
          <span className="text-white/60 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
            {HERO_CONTENT.badge}
          </span>
        </div>
        
        {/* Monumental Headline */}
        <Heading as="h1" className="text-6xl md:text-8xl lg:text-[140px] mb-8 leading-[0.85] tracking-[-0.05em] transition-all text-balance">
          Pilar AI <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
            Growth System
          </span>
        </Heading>

        {/* High Contrast Subheadline */}
        <Heading as="h2" className="text-xl md:text-4xl font-medium text-[#E2E2E2] mb-12 max-w-4xl leading-tight">
          A infraestrutura <span className="text-[var(--brand)] font-extrabold relative inline-block">
            AI-powered
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--brand)]/30 blur-[1px]"></span>
          </span> que sustenta o crescimento do seu negócio.
        </Heading>

        {/* Sophisticated Description */}
        <Text className="text-base md:text-xl mb-16 max-w-2xl text-gray-400/80 leading-relaxed font-normal">
          Implementamos inteligência artificial no centro do seu marketing e vendas para reduzir custos e criar crescimento previsível em até <span className="text-white font-bold border-b border-white/20 pb-0.5">90 dias</span>.
        </Text>
        
        {/* Elevated CTA - Now with Vibrant variant */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Button onClick={onCtaClick} size="xl" variant="vibrant" className="group px-14 py-8 text-xl">
            {HERO_CONTENT.cta}
            <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-[var(--cta)] transition-all ml-2">
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </Button>
        </div>
      </Container>

      {/* Structural Grid Detail */}
      <div className="absolute inset-0 z-[-1] opacity-[0.05]" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(106, 76, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(106, 76, 255, 0.2) 1px, transparent 1px)`, 
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)'
        }}>
      </div>
    </Section>
  );
};

export default Hero;
