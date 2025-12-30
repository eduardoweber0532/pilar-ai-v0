
"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import confetti from 'canvas-confetti';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

type FormStep = 1 | 2;

const LeadFormModal: React.FC<LeadFormModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [step, setStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    revenue: '',
    bottleneck: [] as string[],
  });
  
  const [errors, setErrors] = useState({
    email: false,
    phone: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputPhoneRef = useRef<HTMLInputElement>(null);

  const WEBHOOK_STEP_1 = 'https://n8n-n8n.aow7sp.easypanel.host/webhook/lp-pilar';
  const WEBHOOK_STEP_2 = 'https://n8n-n8n.aow7sp.easypanel.host/webhook/lp-pilar-2';

  const applyPhoneMask = (value: string) => {
    let digits = value.replace(/\D/g, '');
    if (digits.startsWith('55')) digits = digits.substring(2);
    digits = digits.substring(0, 11);
    if (digits.length === 0) return '';
    let formatted = '+55 ';
    if (digits.length > 0) formatted += '(' + digits.substring(0, 2);
    if (digits.length > 2) formatted += ') ' + digits.substring(2, 3);
    if (digits.length > 3) formatted += ' ' + digits.substring(3, 7);
    if (digits.length > 7) formatted += '-' + digits.substring(7, 11);
    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = applyPhoneMask(e.target.value);
    setFormData(prev => ({ ...prev, phone: maskedValue }));
    const rawDigits = maskedValue.replace(/\D/g, '');
    const isInvalid = rawDigits.length > 0 && rawDigits.length !== 13;
    setErrors(prev => ({ ...prev, phone: isInvalid }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setFormData(prev => ({ ...prev, email: value }));
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setErrors(prev => ({ ...prev, email: value.length > 0 && !emailRegex.test(value) }));
  };

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      bottleneck: prev.bottleneck.includes(value)
        ? prev.bottleneck.filter(i => i !== value)
        : [...prev.bottleneck, value]
    }));
  };

  const isStep1Valid = () => {
    const rawPhone = formData.phone.replace(/\D/g, '');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return (
      formData.name.trim().length >= 3 &&
      emailRegex.test(formData.email) &&
      rawPhone.length === 13 &&
      !errors.email &&
      !errors.phone
    );
  };

  const isStep2Valid = () => {
    return formData.company.trim().length > 1 && formData.revenue !== '' && !isSubmitting;
  };

  const fireWebhook = async (url: string, data: any) => {
    const payload = {
      ...data,
      source: 'Landing Page Pilar AI',
      timestamp: new Date().toISOString(),
      rawPhone: formData.phone.replace(/\D/g, '')
    };
    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        mode: 'cors',
        keepalive: true
      });
    } catch (err) {
      fetch(url, { method: 'POST', body: JSON.stringify(payload), mode: 'no-cors', keepalive: true }).catch(() => {});
    }
  };

  const handleNextStep = () => {
    if (!isStep1Valid()) return;
    fireWebhook(WEBHOOK_STEP_1, { name: formData.name, email: formData.email, phone: formData.phone, event: 'lead_capture_step1' });
    setStep(2);
  };

  const handleSubmitFinal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStep2Valid()) return;
    setIsSubmitting(true);
    
    await fireWebhook(WEBHOOK_STEP_2, { ...formData, event: 'lead_qualification_full' });

    // Animação de Fogos de Artifício (Confetti)
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 300 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    setIsSubmitting(false);
    onClose();
    if (onSuccess) onSuccess();
    
    setTimeout(() => {
      setStep(1);
      setFormData({ name: '', email: '', phone: '', company: '', revenue: '', bottleneck: [] });
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence mode="wait">
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 overflow-y-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/98 backdrop-blur-3xl" />
        <motion.div initial={{ opacity: 0, scale: 0.98, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98, y: 40 }} className="relative w-full max-w-5xl bg-[#050507] border border-white/20 rounded-[3.5rem] shadow-[0_0_150px_rgba(0,0,0,1)] overflow-hidden flex flex-col my-auto">
          <div className="absolute top-0 left-0 right-0 h-3 bg-white/5 z-20">
            <motion.div initial={{ width: '0%' }} animate={{ width: step === 1 ? '50%' : '100%' }} transition={{ type: "spring", stiffness: 80, damping: 20 }} className="h-full bg-gradient-to-r from-[var(--brand)] via-[#FF4CF4] to-[var(--cta)] shadow-[0_0_30px_rgba(106,76,255,1)]" />
          </div>
          <div className="flex-1 p-8 md:p-24 overflow-y-auto">
            <div className="flex justify-between items-start mb-20">
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                   <div className={cn("px-6 py-2.5 rounded-full text-[12px] font-black uppercase tracking-[0.3em] transition-all duration-700 border-2", step === 1 ? "bg-[var(--brand)] border-[var(--brand)] text-white shadow-[0_0_30px_rgba(106,76,255,0.6)]" : "bg-zinc-900 border-white/5 text-zinc-600")}>Identificação</div>
                   <div className="w-16 h-px bg-zinc-800"></div>
                   <div className={cn("px-6 py-2.5 rounded-full text-[12px] font-black uppercase tracking-[0.3em] transition-all duration-700 border-2", step === 2 ? "bg-[var(--brand)] border-[var(--brand)] text-white shadow-[0_0_30px_rgba(106,76,255,0.6)]" : "bg-zinc-900 border-white/5 text-zinc-600")}>Qualificação</div>
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-[0.8] text-balance">{step === 1 ? 'RESERVAR MEU DIAGNÓSTICO' : 'DETALHES DA OPERAÇÃO'}</h2>
              </div>
              <button onClick={onClose} className="p-5 text-white hover:text-[var(--brand)] transition-all hover:rotate-90 duration-500 bg-white/10 rounded-full border border-white/20">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div key="step1" initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 60 }} className="space-y-12">
                  <p className="text-white text-3xl font-black leading-tight max-w-3xl border-l-4 border-[var(--brand)] pl-8">Inicie o mapeamento da sua infraestrutura. Precisamos dos seus dados básicos para validar seu canal de atendimento exclusivo.</p>
                  <div className="grid grid-cols-1 gap-12">
                    <div className="space-y-5">
                      <label className="text-sm font-black text-white uppercase tracking-widest ml-1 block">Nome Completo</label>
                      <input required type="text" placeholder="Seu nome completo" className="w-full bg-[#111113] border-2 border-white/40 rounded-[2rem] px-10 py-9 text-white placeholder:text-zinc-600 focus:border-[var(--brand)] focus:bg-black focus:ring-8 focus:ring-[var(--brand)]/10 transition-all text-3xl font-black shadow-2xl" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                    </div>
                    <div className="space-y-5">
                      <label className="text-sm font-black text-white uppercase tracking-widest ml-1 block">E-mail Corporativo</label>
                      <input required type="email" placeholder="seuemail@empresa.com" className={cn("w-full bg-[#111113] border-2 rounded-[2rem] px-10 py-9 text-white placeholder:text-zinc-600 focus:bg-black focus:ring-8 transition-all text-3xl font-black shadow-2xl", errors.email ? "border-rose-600 focus:ring-rose-600/10" : "border-white/40 focus:border-[var(--brand)] focus:ring-[var(--brand)]/10")} value={formData.email} onChange={handleEmailChange} />
                    </div>
                    <div className="space-y-5">
                      <label className="text-sm font-black text-white uppercase tracking-widest ml-1 block">WhatsApp Direto (com DDD)</label>
                      <input required ref={inputPhoneRef} type="tel" placeholder="+55 (00) 9 0000-0000" className={cn("w-full bg-[#111113] border-2 rounded-[2rem] px-10 py-9 text-white placeholder:text-zinc-600 focus:bg-black focus:ring-8 transition-all text-3xl font-black shadow-2xl", errors.phone ? "border-rose-600 focus:ring-rose-600/10" : "border-white/40 focus:border-[var(--brand)] focus:ring-[var(--brand)]/10")} value={formData.phone} onChange={handlePhoneChange} />
                      {errors.phone && <p className="text-rose-500 text-sm font-black uppercase tracking-widest ml-2">Preencha o número completo com DDD</p>}
                    </div>
                  </div>
                  <button onClick={handleNextStep} disabled={!isStep1Valid()} className={cn("w-full font-black uppercase tracking-[0.35em] py-14 rounded-[3.5rem] transition-all transform active:scale-95 flex items-center justify-center gap-10 text-4xl mt-12 shadow-[0_60px_100px_-20px_rgba(0,0,0,1)]", isStep1Valid() ? "bg-gradient-to-r from-[var(--brand)] to-[#FF4CF4] text-white hover:scale-[1.03] shadow-[0_25px_60px_rgba(106,76,255,0.6)]" : "bg-zinc-900 text-zinc-700 cursor-not-allowed border-2 border-white/5")}>Próxima Etapa <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></button>
                </motion.div>
              ) : (
                <motion.div key="step2" initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -60 }} className="space-y-16">
                  <p className="text-white text-3xl font-black leading-tight max-w-3xl border-l-4 border-[var(--cta)] pl-8">Personalize sua análise técnica. Estes dados são cruciais para definirmos a viabilidade de escala do seu projeto.</p>
                  <div className="space-y-12">
                    <div className="space-y-5">
                      <label className="text-sm font-black text-white uppercase tracking-widest ml-1 block">Nome da Empresa</label>
                      <input required type="text" placeholder="Nome do seu negócio" className="w-full bg-[#111113] border-2 border-white/40 rounded-[2.5rem] px-10 py-9 text-white placeholder:text-zinc-600 focus:border-[var(--brand)] focus:bg-black transition-all text-3xl font-black shadow-2xl" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                    </div>
                    <div className="space-y-8">
                      <label className="text-sm font-black text-white uppercase tracking-widest ml-1 block">Faturamento Mensal Estimado</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {["R$50k a R$100k", "R$100k a R$300k", "R$300k a R$1M", "Acima de R$1M"].map((opt) => (
                          <button key={opt} type="button" onClick={() => setFormData({...formData, revenue: opt})} className={cn("px-10 py-10 rounded-[3rem] border-4 text-xl font-black uppercase tracking-widest transition-all text-center flex items-center justify-center min-h-[140px] shadow-2xl", formData.revenue === opt ? "bg-[var(--brand)] border-[var(--brand)] text-white shadow-[0_25px_50px_rgba(106,76,255,0.7)] scale-105" : "bg-[#111113] border-white/20 text-zinc-500 hover:border-white/50 hover:text-white")}>{opt}</button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-8">
                      <label className="text-sm font-black text-white uppercase tracking-widest ml-1 block">Qual seu maior gargalo operacional?</label>
                      <div className="grid grid-cols-1 gap-8">
                        {["Atendimento Lento / Perda de Leads", "Vendas dependem 100% de pessoas", "Excesso de tarefas manuais repetitivas", "Falta de clareza nos dados de lucro"].map((opt) => (
                          <button key={opt} type="button" onClick={() => handleCheckboxChange(opt)} className={cn("px-12 py-12 rounded-[3.5rem] border-4 text-3xl font-black transition-all text-left flex justify-between items-center group/opt shadow-2xl", formData.bottleneck.includes(opt) ? "bg-white/5 border-white/70 text-white" : "bg-[#111113] border-white/20 text-zinc-500 hover:bg-zinc-900 hover:border-white/50")}>
                            <span className="flex-1 pr-12 leading-[1.1]">{opt}</span>
                            <div className={cn("w-16 h-16 rounded-2xl border-4 transition-all flex items-center justify-center shrink-0 shadow-inner", formData.bottleneck.includes(opt) ? "bg-[var(--cta)] border-[var(--cta)] shadow-[0_0_30px_rgba(0,245,212,0.6)]" : "border-zinc-700 group-hover/opt:border-zinc-500")}>
                               {formData.bottleneck.includes(opt) && <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" d="M5 13l4 4L19 7" /></svg>}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="pt-12 space-y-12">
                    <button onClick={handleSubmitFinal} disabled={!isStep2Valid() || isSubmitting} className={cn("w-full font-black uppercase tracking-[0.35em] py-16 rounded-[4rem] transition-all transform active:scale-95 text-5xl shadow-[0_80px_120px_-30px_rgba(0,0,0,1)]", isStep2Valid() ? "bg-[var(--cta)] text-black hover:scale-[1.03] shadow-[0_30px_70px_rgba(0,245,212,0.7)]" : "bg-zinc-900 text-zinc-700 cursor-not-allowed border-2 border-white/10")}>{isSubmitting ? 'Finalizando...' : 'Concluir Diagnóstico'}</button>
                    <button type="button" onClick={() => setStep(1)} className="w-full text-xl font-black text-zinc-500 uppercase tracking-[0.4em] hover:text-white transition-all flex items-center justify-center gap-6 py-8"><svg className="w-10 h-10 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>Corrigir dados de contato</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="mt-32 pt-24 border-t-4 border-white/10 flex flex-col md:flex-row items-center justify-between gap-16">
              <div className="flex items-center gap-10">
                <div className="flex -space-x-8">{[1,2,3,4,5].map(i => (<div key={i} className="w-24 h-24 rounded-full bg-zinc-900 border-4 border-[#08080A] flex items-center justify-center shadow-3xl relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50"></div><div className="w-4 h-4 rounded-full bg-[var(--brand)] animate-pulse shadow-[0_0_20px_var(--brand)]"></div></div>))}</div>
                <div className="space-y-3"><p className="text-xl font-black text-white uppercase tracking-[0.3em] leading-none">Monitoramento 24/7</p><p className="text-sm font-bold text-zinc-500 uppercase tracking-[0.2em] max-w-[320px] leading-relaxed">Infraestrutura monitorada por especialistas em IA.</p></div>
              </div>
              <div className="flex items-center gap-8 bg-emerald-500/10 px-12 py-8 rounded-[3rem] border-4 border-emerald-500/20 shadow-inner"><span className="w-5 h-5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_20px_rgba(16,185,129,1)]" /><span className="text-base font-black text-emerald-500 uppercase tracking-[0.3em]">Criptografia SSL Ativa</span></div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LeadFormModal;
