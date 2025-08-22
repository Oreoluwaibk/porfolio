import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 3000); // show for 3s
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] bg-black text-white flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-4xl text-center md:text-6xl font-bold text-[#58A6FF]"
          >
            Welcome to Oreoluwa's Space
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
