import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter';
import { useRouter } from 'next/router';

const AnimatedIntro = () => {
  const router = useRouter();
  const [step, setStep] = useState(0);

  // High-precision, dual-identity wordings
  const [typedText] = useTypewriter({
    words: [
      "Initializing Clinical Systems...",
      "Optimizing Full-Stack Architecture...",
      "Merging Medicine with Code."
    ],
    loop: 1,
    typeSpeed: 40,
    deleteSpeed: 20,
    delaySpeed: 800,
    onLoopDone: () => {
      setTimeout(() => setStep(2), 500);
    },
  });

  const handleSkip = () => {
    router.push('/home');
  };

  useEffect(() => {
    if (step === 0) {
      const timer = setTimeout(() => setStep(1), 1800);
      return () => clearTimeout(timer);
    }

    if (step === 2) {
      const redirect = setTimeout(() => {
        router.push('/home');
      }, 2000);
      return () => clearTimeout(redirect);
    }
  }, [step, router]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white font-mono px-6 overflow-hidden relative">
      
      {/* Subtle Background "Grid" for technical feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#58A6FF 1px, transparent 1px), linear-gradient(90deg, #58A6FF 1px, transparent 1px)', size: '40px 40px', backgroundSize: '40px 40px' }} />

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="step-0"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-[#58A6FF] text-[10px] tracking-[0.5em] mb-4 uppercase">
              Authentication Success // Dr. Oreoluwa Ibikunle
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              OREOLUWA<span className="text-[#58A6FF]">.</span>IBK
            </h1>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="step-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-xl md:text-3xl text-gray-300 flex items-center gap-3"
          >
            <span className="text-[#58A6FF] animate-pulse">❯</span>
            <span>{typedText}</span>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Physician <span className="text-gray-600">&</span> Engineer
            </h2>
            <div className="h-[2px] w-24 bg-[#58A6FF] mx-auto mb-6" />
            <p className="text-gray-500 text-xs md:text-sm uppercase tracking-[0.3em]">
              High-Trust Systems for Human Impact
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modern Skip Button */}
      <motion.button
        onClick={handleSkip}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        whileHover={{ opacity: 1, x: 5 }}
        className="absolute bottom-10 right-10 flex items-center gap-2 text-xs font-mono tracking-widest text-gray-400 group"
      >
        SKIP INTRO
        <span className="text-[#58A6FF] group-hover:translate-x-1 transition-transform">→</span>
      </motion.button>
    </div>
  );
};

export default AnimatedIntro;