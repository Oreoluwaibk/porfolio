import React, { useState, useEffect } from 'react';
import Container from '../container/Container';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ProfilePhoto } from '@/asset/images';
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
      {loadingComplete && (
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
                <h5 className="text-gray-300 text-lg">Hi, I’m glad you’re here.</h5>
                <h1 className="text-5xl md:text-6xl text-gray-300 font-bold leading-tight">
                  I’m Oreoluwa Ibikunle,
                </h1>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#58A6FF] leading-snug">
                  I bring your ideas to life — with code, creativity, and intention.
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I’m a passionate software engineer crafting immersive digital experiences that don’t just look good — they work beautifully.
                  From websites to mobile apps, I help you go from “what if” to “it’s live”.
                </p>
                <Link href="/projects">
                  <button className="mt-4 w-fit px-6 py-3 bg-[#58A6FF] text-black font-semibold rounded hover:bg-white transition">
                    View My Projects
                  </button>
                </Link>
              </motion.div>

              {/* Right Side - Image */}
              <motion.div
                className="flex-1 flex items-center justify-end mt-10 md:mt-0"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[500px]">
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
