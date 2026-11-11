'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Carousel } from 'antd';
import Container from '../container/Container';
import ProjectLoader from '../loaders/ProjectLoader';

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const experiences = [
    {
      id: 1,
      company: 'Independent / Product Engineering',
      role: 'Full Stack Engineer',
      date: '2025 – Present',
      category: 'Product & Platforms',
      responsibilities: [
        'Built and shipped BioClerk — offline dictation with on-device speech recognition and privacy-first desktop workflows.',
        'Launched OI Question Bank (web, admin, Google Play) for AI-assisted study materials and timed practice tests.',
        'Delivered OI Book Review — catalog search, reading progress, public reviews, and shared Scripture studies.',
      ],
      stack: ['Next.js', 'TypeScript', 'React Native', 'Node.js', 'Privacy Engineering'],
    },
    {
      id: 2,
      company: 'Smartsafe Consulting Limited',
      role: 'Lead Frontend Developer',
      date: 'Feb 2023 – Aug 2026',
      category: 'Engineering & Leadership',
      responsibilities: [
        'Architected ImoVarsity, a multi-role LMS with course enrollment, tutor analytics, payments, and certificate issuance.',
        'Built a secure internal Admin Dashboard for user management and analytics across Smartsafe platforms.',
        'Upgraded Smartlearning LMS with modern UI/UX, dark mode, Framer Motion animations, and automated certificates.',
        'Modernized Smartsafe’s corporate website for clarity, trust, and accessibility (smartsafeuk.com).',
        'Led code reviews, CI/CD adoption, and scalable React/TypeScript patterns across production platforms.',
      ],
      stack: ['React', 'Next.js', 'Redux', 'TypeScript', 'Ant Design', 'Python'],
    },
    {
      id: 3,
      company: 'Techwitsclan Solutions',
      role: 'Frontend Engineer / Instructor',
      date: 'Apr 2024 – Aug 2025',
      category: 'Engineering & Education',
      responsibilities: [
        'Shipped Commutor — a project management mobile app with milestone tracking, vendor collaboration, and in-app payments (Google Play).',
        'Co-developed and launched Quikwrk, expanding production mobile deployment and marketplace UX experience.',
        'Led frontend training for 4 cohorts (~48 students), achieving an 85% placement rate for graduates.',
        'Mentored 50+ junior developers through code reviews and modern JavaScript best practices.',
      ],
      stack: ['React', 'React Native', 'Tailwind CSS', 'Git', 'Mentorship'],
    },
    {
      id: 4,
      company: 'Loystar Inc',
      role: 'Full Stack Developer (Contract)',
      date: 'Dec 2022 – May 2025',
      category: 'Engineering & Systems',
      responsibilities: [
        'Developed the Loystar B2B/B2C sales platform with products, transactions, reporting, and role-based access for Admin, Manager, and Staff.',
        'Built the Vamooze white-label delivery/logistics frontend with multi-dashboard, multi-role support.',
        'Optimized backend performance in Node.js and Python, reducing perceived API latency by ~40%.',
        'Implemented secure data-handling protocols for high-volume financial and logistics transactions.',
      ],
      stack: ['Node.js', 'Python', 'RBAC', 'PostgreSQL', 'React', 'Next.js'],
    },
    {
      id: 5,
      company: 'Betty Holdings Ltd',
      role: 'Frontend Developer',
      date: 'Oct 2022 – Dec 2022',
      category: 'Engineering',
      responsibilities: [
        'Developed reusable UI components in React, reducing development time for new features by ~25%.',
        'Migrated legacy CSS systems to modern Tailwind architecture for better maintainability.',
        'Collaborated with UX designers to ensure technical feasibility of redesigned platform interfaces.',
      ],
      stack: ['React', 'Tailwind CSS', 'JavaScript', 'UI Implementation'],
    },
  ];

  return (
    <Container active="experience">
      <ProjectLoader type="experiences" />
      <div className="min-h-screen text-white flex flex-col">
        <main className="px-4 md:px-20 pb-10 flex-1 overflow-y-auto no-scroll-bar">
          <Carousel autoplay dots={false} autoplaySpeed={8000} className="my-12">
            <div className="text-center">
              <p className="text-xl md:text-2xl text-gray-300 font-light mb-2">
                Engineering is not just about writing code; it&apos;s about building
                reliable systems that people can depend on.
              </p>
              <h2 className="text-sm font-mono text-[#58A6FF] tracking-widest uppercase">
                Engineering Philosophy
              </h2>
            </div>
            <div className="text-center">
              <p className="text-xl md:text-2xl text-gray-300 font-light mb-2">
                Clear architecture, thoughtful UX, and ownership from API to release.
              </p>
              <h2 className="text-sm font-mono text-[#58A6FF] tracking-widest uppercase">
                How I Work
              </h2>
            </div>
          </Carousel>

          <section className="mb-16">
            <motion.h2
              className="text-4xl mb-12 font-bold text-gray-100 flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="h-1 w-12 bg-[#58A6FF]" />
              Professional Timeline
            </motion.h2>

            <ul className="space-y-8">
              {experiences.map((exp) => (
                <motion.li
                  key={exp.id}
                  className="border-l-2 border-gray-800 hover:border-[#58A6FF] pl-6 transition-all group"
                  onClick={() => setActiveIndex(activeIndex === exp.id ? null : exp.id)}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center cursor-pointer py-2 transition">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#58A6FF] mb-1">
                        {exp.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-semibold group-hover:text-[#58A6FF] transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">{exp.role}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-2 md:mt-0">
                      <span className="text-gray-500 text-sm font-mono">{exp.date}</span>
                      <i
                        className={`bi ${
                          activeIndex === exp.id ? 'bi-dash-lg' : 'bi-plus-lg'
                        } text-[#58A6FF]`}
                      />
                    </div>
                  </div>

                  <AnimatePresence>
                    {activeIndex === exp.id && (
                      <motion.div
                        className="p-5 rounded-xl bg-[#0d1117] border border-gray-800 mt-4 shadow-2xl"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ul className="list-none space-y-3 text-gray-400 text-sm mb-6">
                          {exp.responsibilities.map((point, idx) => (
                            <li key={idx} className="flex gap-3">
                              <span className="text-[#58A6FF] mt-1">▹</span>
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800/50">
                          {exp.stack.map((t) => (
                            <span
                              key={t}
                              className="bg-gray-900/50 border border-gray-700 text-gray-300 px-3 py-1 text-[11px] font-mono rounded-full hover:border-[#58A6FF] hover:text-[#58A6FF] transition-all"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </Container>
  );
};

export default Experience;
