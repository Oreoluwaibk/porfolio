import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '../container/Container';

const NotFound = () => {
    return (
    <Container active="404">
        <motion.div
        className="flex-1 flex flex-col items-center justify-center px-4 text-center h-[80vh]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-[#58A6FF] drop-shadow mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          404
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-6 max-w-xl text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Oops! The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Link
            href="/home"
            className="bg-[#58A6FF] hover:bg-[#4794dd] transition-colors duration-300 text-black font-semibold py-3 px-6 rounded-lg"
          >
            Go Home
          </Link>
        </motion.div>
      </motion.div>
    </Container>
      
    )
}

export default NotFound;