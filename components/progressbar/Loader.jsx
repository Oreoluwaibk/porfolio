import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter';
import { useRouter } from 'next/router';

const AnimatedIntro = () => {
  const router = useRouter();

  // Track current step
  const [step, setStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  // Typing hook for step 2
  const [typedText] = useTypewriter({
    words: [
      "I design and build unique digital experiences that blend creativity with performance.",
      "Clean code. Thoughtful design. Real results."
    ],
    loop: 1,
    typeSpeed: 45,
    deleteSpeed: 0,
    delaySpeed: 1500,
    onLoopDone: () => {
      setTimeout(() => {
        setStep(2); // move to step 3
      }, 1000);
    },
  });

  useEffect(() => {
    if (step === 0) {
      const timer = setTimeout(() => {
        setStep(1);
        setIsTyping(true);
      }, 4000); // display step 1 for 4 seconds
      return () => clearTimeout(timer);
    }

    if (step === 2) {
      // Stay on final message for 3.5s then redirect
      const redirect = setTimeout(() => {
        router.push('/home');
      }, 3500);
      return () => clearTimeout(redirect);
    }
  }, [step]);

  const messages = [
    [
      "Tired of websites that look like everyone else’s?",
      "Want to stand out online?",
      "Have a vision but need someone to bring it to life?"
    ],
    // step 1 is typing, no need here
    [
      "Hi, I’m Oreoluwa — developer, designer, and problem-solver.",
      "Let’s build something meaningful together."
    ]
  ];

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white text-center px-6">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="step-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl space-y-3 font-medium"
          >
            {messages[0].map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="step-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-4xl font-medium max-w-3xl mx-auto"
          >
            {isTyping && <span>{typedText}</span>}
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl font-medium space-y-3"
          >
            {messages[1].map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedIntro;
