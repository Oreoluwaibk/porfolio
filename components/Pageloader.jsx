import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Keep it fast: 1.5s to 2s max for a loader.
    const timer = setTimeout(() => setIsVisible(false), 1000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] bg-[#0d1117] text-white flex flex-col items-center justify-center font-mono"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }} // Subtle zoom-out transition
          transition={{ duration: 0.8, ease: "circOut" }}
        >
          {/* Minimalist Medical/Tech Symbol (A Pulse + Code Bracket) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="text-[#58A6FF] text-5xl font-bold tracking-tighter">
              O<span className="text-white">.</span>IBK
            </div>
            
            {/* Animated Loading Bar */}
            <div className="w-48 h-[2px] bg-gray-800 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute inset-0 bg-[#58A6FF]"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.0 }}
              className="text-[10px] uppercase tracking-[0.4em] text-gray-500"
            >
              Loading Terminal
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;