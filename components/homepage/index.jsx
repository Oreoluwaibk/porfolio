import React from 'react';
import Container from '../container/Container';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ProfilePhoto } from '@/asset/images';
import PageLoader from '../Pageloader';

const featured = [
  { name: 'BioClerk', href: 'https://bioclerk.com/', tag: 'Product' },
  { name: 'Quikwrk', href: 'https://play.google.com/store/apps/details?id=com.oreoluwaibk.handiwork', tag: 'Mobile' },
  { name: 'OI Question Bank', href: 'https://play.google.com/store/apps/details?id=com.oreoluwacreatives.questionapp', tag: 'Mobile' },
];

const Homepage = () => {
  return (
    <>
      <PageLoader />
      <Container active="Home">
        <div className="relative min-h-[calc(100vh-100px)] bg-black text-white overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(88,166,255,0.14),transparent_45%),radial-gradient(ellipse_at_10%_90%,rgba(17,24,39,0.9),transparent_40%)]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />

          <section className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center px-6 md:px-20 py-16 md:py-24 max-w-7xl mx-auto">
            <motion.div
              className="lg:col-span-7 flex flex-col gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#58A6FF]">
                  Available for remote roles · Ibadan · GMT+1
                </p>
              </div>

              <h5 className="text-[#58A6FF] font-mono text-sm md:text-base tracking-widest uppercase">
                Senior Software Engineer
              </h5>

              <h1 className="text-5xl md:text-6xl xl:text-7xl text-gray-100 font-bold leading-[1.05] tracking-tight">
                Oreoluwa Ibikunle.
              </h1>

              <h2 className="text-xl md:text-2xl font-medium text-gray-400 leading-snug max-w-xl">
                Full-stack engineer shipping production web and mobile products —
                marketplaces, dashboards, LMS platforms, and privacy-first tools.
              </h2>

              <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-lg">
                4+ years across React, Next.js, TypeScript, Node.js, and React Native.
                Clear architecture, RBAC, performance, and interfaces that hold up under
                real users.
              </p>

              <div className="flex flex-wrap gap-2.5 mt-1 font-mono text-[11px] uppercase tracking-wider">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'React Native', 'PostgreSQL'].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="border border-gray-800 bg-gray-950/60 px-3 py-1.5 rounded text-gray-400"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                <Link href="/projects">
                  <button className="px-8 py-3 bg-[#58A6FF] text-black font-bold rounded hover:bg-[#79b8ff] transition-colors">
                    View Projects
                  </button>
                </Link>
                <Link href="/experience">
                  <button className="px-8 py-3 border border-gray-700 text-gray-300 font-bold rounded hover:border-[#58A6FF] hover:text-[#58A6FF] transition-colors">
                    Experience
                  </button>
                </Link>
                <a href="/oreoluwa-resume.pdf" download>
                  <button className="px-8 py-3 border border-gray-800 text-gray-500 font-mono text-sm rounded hover:border-gray-600 hover:text-gray-300 transition-colors">
                    Resume
                  </button>
                </a>
              </div>
            </motion.div>

            <motion.aside
              className="lg:col-span-5 w-full"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#58A6FF]/20 via-transparent to-transparent blur-2xl" />

                <div className="relative overflow-hidden rounded-3xl border border-gray-800 bg-[#0d1117]/90 backdrop-blur-sm">
                  <div className="relative h-64 sm:h-72 w-full">
                    <Image
                      src={ProfilePhoto.src}
                      alt="Oreoluwa Ibikunle"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/20 to-transparent" />
                  </div>

                  <div className="relative -mt-12 px-5 pb-5">
                    <div className="rounded-2xl border border-gray-800 bg-black/70 backdrop-blur-md p-4">
                      <div className="flex items-end justify-between gap-3 mb-4">
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#58A6FF] mb-1">
                            Selected work
                          </p>
                          <p className="text-sm text-gray-400">Recent shipped products</p>
                        </div>
                        <Link
                          href="/projects"
                          className="font-mono text-[10px] uppercase tracking-widest text-gray-500 hover:text-[#58A6FF] transition-colors"
                        >
                          All →
                        </Link>
                      </div>

                      <ul className="space-y-2">
                        {featured.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center justify-between gap-3 rounded-xl border border-gray-800/80 bg-gray-950/50 px-3 py-2.5 hover:border-[#58A6FF]/40 hover:bg-[#58A6FF]/5 transition-colors group"
                            >
                              <span className="text-sm font-medium text-gray-200 group-hover:text-white">
                                {item.name}
                              </span>
                              <span className="font-mono text-[10px] uppercase tracking-wider text-gray-600 group-hover:text-[#58A6FF]">
                                {item.tag}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.aside>
          </section>
        </div>
      </Container>
    </>
  );
};

export default Homepage;
