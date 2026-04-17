import React, { useState, useEffect } from 'react';
import Container from '../container/Container';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ImageNew, ProfilePhoto } from '@/asset/images';
import PageLoader from '../Pageloader';

const Homepage = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PageLoader />
      {(
        <Container active="Home">
          <div className="m-0 p-0 relative flex flex-col justify-between min-h-screen bg-black text-white">
            <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 overflow-hidden">

              {/* Left Side - Text */}
              <motion.div
                className="flex-1 flex flex-col gap-6 max-w-3xl text-text"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {/* Professional Tagline */}
                <h5 className="text-[#58A6FF] font-mono text-lg tracking-widest uppercase">
                  Senior Engineer & Medical Doctor (MBBS)
                </h5>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-7xl text-gray-100 font-bold leading-tight">
                  Oreoluwa Ibikunle.
                </h1>

                {/* Value Proposition */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-400 leading-snug">
                  Building high-trust systems and scalable digital infrastructure at the intersection of <span className="text-[#58A6FF]">Health and Technology.</span>
                </h2>

                {/* Quantitative Bio */}
                <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                  With over 3 years of experience and a background in clinical medicine, I specialize in
                  crafting secure LMS platforms, complex dashboards, and logistics engines that serve thousands of users.
                  I bridge technical craftsmanship with clinical precision to solve ambiguous problems.
                </p>

                {/* Call to Actions */}
                <div className="flex flex-wrap gap-4 mt-4">
                  <Link href="/projects">
                    <button className="px-8 py-3 bg-[#58A6FF] text-black font-bold rounded shadow-lg hover:shadow-[#58A6FF]/20 hover:scale-105 transition-all">
                      View My Projects
                    </button>
                  </Link>
                  
                  {/* Highlighting the Fellowship/Research fit */}
                  <Link href="/about">
                    <button className="px-8 py-3 border border-gray-600 text-gray-300 font-bold rounded hover:bg-gray-800 transition-all">
                      Research & Background
                    </button>
                  </Link>
                </div>
              </motion.div>

              {/* Right Side - Image */}
              <motion.div
                className="flex-1 flex items-center justify-center mt-10 md:mt-0"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <div className="relative w-full h-[300px] md:w-[400px] md:h-[500px]">
                  <div className="absolute -top-8  w-full h-full bg-gradient-to-br from-[#1f2937] via-[#58A6FF] to-[#1f2937] rounded-full blur-3xl opacity-30 z-0" />
                  <Image
                    src={ProfilePhoto.src}
                    alt="Oreoluwa portrait"
                    fill
                    className="object-cover rounded-[2rem] shadow-lg"
                    priority
                  />
                </div>
              </motion.div>

            </section>
          </div>
        </Container>
      )}
    </>
  );
};

export default Homepage;
