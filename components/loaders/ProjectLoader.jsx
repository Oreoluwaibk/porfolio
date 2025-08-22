import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BsLightningChargeFill } from 'react-icons/bs'; // optional icon for extra fun

const words = ["Loading Projects", "Brewing Ideas", "Spinning Creativity"];

const ProjectLoader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const cycleText = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % words.length);
    }, 900);

    const timer = setTimeout(() => setIsVisible(false), 2500);

    return () => {
      clearInterval(cycleText);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Background Animation */}
          <motion.div
            className="absolute w-[200%] h-[200%] bg-gradient-to-br from-[#001f3f] via-[#0f0f0f] to-[#58A6FF] opacity-20 blur-3xl"
            animate={{ scale: [1, 1.05, 1], rotate: [0, 360, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          />

          {/* Loader Icon */}
          <motion.div
            className="text-[#58A6FF] text-4xl mb-4"
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          >
            <BsLightningChargeFill />
          </motion.div>

          {/* Text Animation */}
          <motion.h1
            key={currentTextIndex}
            className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#58A6FF] via-white to-[#58A6FF]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            {words[currentTextIndex]}...
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectLoader;
