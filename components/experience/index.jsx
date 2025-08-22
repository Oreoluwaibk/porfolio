'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Carousel } from 'antd';
import Container from '../container/Container';
import ProjectLoader from '../loaders/ProjectLoader';

const Experience = () => {
  const [loadingDone, setLoadingDone] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoadingDone(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const experiences = [
    {
      id: 1,
      role: 'Lead Frontend Developer',
      company: 'Smartsafe Consulting Limited – London, United Kingdom (Remote)',
      date: 'Dec 2022 – Present',
      responsibilities: [
        'Led development of enterprise-grade applications remotely using React, TypeScript, and modern tooling.',
        'Managed a distributed frontend team, conducted async code reviews, and enforced scalable coding standards.',
        'Collaborated with designers in different time zones via Figma and Slack to translate UI/UX into production-ready components.',
        'Integrated APIs, implemented testing workflows, and ensured responsiveness across all device types.',
      ],
      stack: ['React', 'TypeScript', 'Figma', 'Jest'],
    },
    {
      id: 2,
      role: 'Frontend Engineer | Mentor & Instructor',
      company: 'Techwitsclan Solutions – Abuja, Nigeria (Remote)',
      date: 'Feb 2023 – July 2025',
      responsibilities: [
        'Built and deployed mobile/web apps using React Native, Firebase, and TypeScript.',
        'Mentored over 50 students on HTML, CSS, JS, React, and Git in live and practical sessions.',
        'Developed project-based curricula and provided personalized career support.',
      ],
      stack: ['React Native', 'Firebase', 'TypeScript'],
    },
    {
      id: 3,
      role: 'Full Stack Developer',
      company: 'Loystar Inc. – Lagos, Nigeria (Contract/Remote)',
      date: 'Dec 2022 – April 2025',
      responsibilities: [
        'Developed a logistics management platform with real-time tracking using Next.js, Node.js, and MongoDB.',
        'Designed and implemented a secure authentication flow and user dashboard.',
        'Enhanced user experience with data visualization and Tailwind CSS styling.',
      ],
      stack: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    },
    {
      id: 4,
      role: 'Frontend Developer',
      company: 'Betty Holdings Ltd – Lagos, Nigeria',
      date: 'Oct 2022 – Dec 2022',
      responsibilities: [
        'Improved existing UI features and built new components across web platforms.',
        'Ensured accessibility and performance optimization across browsers and devices.',
        'Participated in UX discussions and offered technical feasibility input.',
      ],
      stack: ['React', 'Bootstrap', 'Ant Design', 'Sass'],
    },
  ];

  return (
    <Container active="experience">
      <ProjectLoader type="projects" />
      {loadingDone && (
        <div className="min-h-screen text-white flex flex-col">
          <main className="px-4 md:px-20 pb-10 flex-1 overflow-y-auto no-scroll-bar">
            {/* Quotes Carousel */}
            <Carousel autoplay dots={false} autoplaySpeed={10000} className="my-12">
              <div className="text-center text-[#a3847f]">
                <p className="text-3xl md:text-4xl italic font-light mb-2">
                  "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it."
                </p>
                <h2 className="text-2xl italic font-semibold">– Patrick McKenzie</h2>
              </div>
              <div className="text-center text-[#a3847f]">
                <p className="text-3xl md:text-4xl italic font-light mb-2">
                  "Imagination is the beginning of creation. You imagine what you desire, you will what you imagine, and at last, you create what you will."
                </p>
                <h2 className="text-2xl italic font-semibold">– George Bernard Shaw</h2>
              </div>
            </Carousel>

            {/* Experience Section */}
            <section className="mb-16">
              <motion.h2
                className="text-4xl mb-8 font-semibold"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Where I've Worked
              </motion.h2>
              <ul className="space-y-6">
                {experiences.map((exp) => (
                  <motion.li
                    key={exp.id}
                    className="border-l-2 border-[#58A6FF] pl-4 rounded-md transition-all"
                    onClick={() =>
                      setActiveIndex(activeIndex === exp.id ? null : exp.id)
                    }
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  >
                    <div className="flex justify-between items-center cursor-pointer hover:bg-[#1f2937] p-3 rounded-md transition">
                      <h3 className="text-xl md:text-2xl font-medium">{exp.company}</h3>
                      <i
                        className={`bi ${
                          activeIndex === exp.id
                            ? 'bi-caret-down-fill'
                            : 'bi-caret-right-fill'
                        } text-lg`}
                      />
                    </div>

                    <AnimatePresence>
                      {activeIndex === exp.id && (
                        <motion.div
                          className="p-3 rounded-md bg-[#111827] mt-2"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: 'easeInOut' }}
                        >
                          <h4 className="text-lg font-semibold">{exp.role}</h4>
                          <p className="italic text-sm mb-3">{exp.date}</p>
                          <ul className="list-disc ml-5 text-sm space-y-1">
                            {exp.responsibilities.map((point, idx) => (
                              <li key={idx}>{point}</li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {exp.stack.map((t, idx) => (
                              <span
                                key={idx}
                                className="bg-[#1f2937] px-3 py-1 text-sm rounded"
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
      )}
    </Container>
  );
};

export default Experience;
