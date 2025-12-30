
import React, { useState, useCallback } from 'react';
import ScarcityBar from '../components/ScarcityBar';
import SocialProofToast from '../components/SocialProofToast';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Gargalos from '../components/Gargalos';
import Comparison from '../components/Comparison';
import Results from '../components/Results';
import ModularDeliverables from '../components/ModularDeliverables';
import FooterCTA from '../components/FooterCTA';
import Proof from '../components/Proof';
import WhatIsPilar from '../components/WhatIsPilar';
import CoreDeliverables from '../components/CoreDeliverables';
import ImplementationPhases from '../components/ImplementationPhases';
import Guarantee from '../components/Guarantee';
import TargetAudience from '../components/TargetAudience';
import LeadFormModal from '../components/LeadFormModal';
import ThankYou from '../components/ThankYou';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);
  const handleSuccess = useCallback(() => {
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen selection:bg-[var(--brand)] selection:text-white">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="thank-you"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ThankYou onBack={() => setIsSubmitted(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ScarcityBar />
            <Header onCtaClick={openModal} />
            <main>
              <Hero onCtaClick={openModal} />
              <Gargalos onCtaClick={openModal} />
              <Comparison />
              <Proof onCtaClick={openModal} />
              <WhatIsPilar />
              <CoreDeliverables onCtaClick={openModal} />
              <ModularDeliverables onCtaClick={openModal} />
              <ImplementationPhases onCtaClick={openModal} />
              <Results onCtaClick={openModal} />
              <Guarantee />
              <TargetAudience />
              <FooterCTA onCtaClick={openModal} />
            </main>

            <footer className="py-12 border-t border-white/5 text-center text-xs text-gray-500 bg-black">
              <p className="tracking-widest uppercase">
                © {new Date().getFullYear()} Pilar AI Growth System. <br className="md:hidden" />
                A infraestrutura de crescimento para a nova economia.
              </p>
            </footer>

            <SocialProofToast />
          </motion.div>
        )}
      </AnimatePresence>

      <LeadFormModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSuccess={handleSuccess}
      />
    </div>
  );
};

export default App;
