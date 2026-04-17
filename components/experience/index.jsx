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
      company: "Smartsafe Consulting Limited",
      role: "Lead Frontend Developer",
      date: "Feb 2023 – Present",
      category: "Engineering & Leadership",
      responsibilities: [
        "Architected IMOVarsity, a multi-role dashboard system using Redux for complex state management across 4 distinct user archetypes.",
        "Modernized legacy LMS platforms using Ant Design and Material UI to ensure high-performance, accessible user interfaces.",
        "Implemented secure data-handling protocols and optimized frontend performance for platforms serving thousands of active users."
      ],
      stack: ["React", "Next.js", "Redux", "TypeScript", "Ant Design", "Python"]
    },
    {
      id: 2,
      company: "Bethel Specialist Hospital",
      role: "Medical Officer",
      date: "Feb 2026 – Present",
      category: "Clinical Practice",
      responsibilities: [
        "Managing high-stakes medical and surgical emergencies with rapid analytical decision-making.",
        "Ensuring data integrity in clinical records and collaborating with multidisciplinary teams for patient care.",
        "Translating clinical requirements into functional insights for internal health-tech tools."
      ],
      stack: ["Emergency Medicine", "Clinical Ethics", "High-Stakes Decision Making"]
    },
    {
      id: 3,
      company: "Loystar Inc",
      role: "Full Stack Developer (Contract)",
      date: "Dec 2022 – May 2025",
      category: "Engineering & Systems",
      responsibilities: [
        "Developed secure logistics and transaction-heavy dashboards with advanced Role-Based Access Control (RBAC).",
        "Optimized backend performance in Node.js and Python, reducing perception of API latency by 40%.",
        "Implemented secure data-handling protocols for high-volume financial and logistics transactions."
      ],
      stack: ["Node.js", "Python", "RBAC", "PostgreSQL", "React"]
    },
    {
      id: 4,
      company: "AE-FUNAI Medical Centre",
      role: "Medical Officer",
      date: "Jan 2025 – Nov 2025",
      category: "Clinical Research",
      responsibilities: [
        "Actively involved in medical research, specializing in structured data gathering and drafting research proposals.",
        // "Trained medical interns on clinical protocols and the intersection of data in modern medical practice.",
        "Applied quantitative reasoning to respond to complex medical and surgical emergencies."
      ],
      stack: ["Medical Research",]
    },
    {
      id: 5,
      company: "Techwitsclan Solutions",
      role: "Frontend Engineer / Instructor",
      date: "Apr 2024 – Aug 2025",
      category: "Engineering & Education",
      responsibilities: [
        "Contributed to the development of 'Commutor', a project management mobile app with milestone tracking.",
        "Led frontend training for 4 cohorts (~48 students), achieving an 85% placement rate for graduates.",
        "Standardized UI components using React and Tailwind CSS for scalable mobile and web development.",
        "Mentored 50+ junior developers through rigorous code reviews and modern JavaScript/Python best practices."
      ],
      stack: ["React", "React Native", "Tailwind CSS", "Git", "Mentorship"]
    },
    {
      id: 6,
      company: "Lautech Teaching Hospital",
      role: "Medical Intern",
      date: "Mar 2023 – Mar 2024",
      category: "Clinical Foundation",
      responsibilities: [
      "Applied clinical knowledge to the diagnosis and treatment of diverse diseases across surgery and medicine.",
      "Assisted in major surgical procedures in Orthopaedics, Obstetrics, and Gynaecology.",
      "Managed patient care in high-pressure environments, developing a strong foundation in detail-oriented problem solving."
      ],
      stack: ["Surgery", "Medicine", "Obstetrics & Gynaecology", "Pediatrics", "Clinical Decision Making"]
    },
    {
      id: 7,
      company: "Betty Holdings Ltd",
      role: "Frontend Developer",
      date: "Oct 2022 – Dec 2022",
      category: "Engineering",
      responsibilities: [
        "Developed reusable UI components in React, reducing development time for new features by 25%.",
        "Migrated legacy CSS systems to modern Tailwind architecture for better maintainability.",
        "Collaborated with UX designers to ensure technical feasibility of redesigned platform interfaces."
      ],
      stack: ["React", "Tailwind CSS", "JavaScript", "UI/UX Implementation"]
    }
  ];
  return (
    <Container active="experience">
      <ProjectLoader type="experiences" />
      { (
        <div className="min-h-screen text-white flex flex-col">
  <main className="px-4 md:px-20 pb-10 flex-1 overflow-y-auto no-scroll-bar">
    {/* Quotes Carousel - Slightly refined colors */}
   <Carousel autoplay dots={false} autoplaySpeed={8000} className="my-12">
  <div className="text-center">
    <p className="text-xl md:text-2xl text-gray-300 font-light mb-2">
      "Engineering is not just about writing code; it's about building reliable systems that improve human life."
    </p>
    <h2 className="text-sm font-mono text-[#58A6FF] tracking-widest uppercase">The Engineering Philosophy</h2>
  </div>
  <div className="text-center">
    <p className="text-xl md:text-2xl text-gray-300 font-light mb-2">
      "Clinical precision meets technical craftsmanship. Solving for safety, scale, and human impact."
    </p>
    <h2 className="text-sm font-mono text-[#58A6FF] tracking-widest uppercase">The Medical Intersection</h2>
  </div>
</Carousel>

    {/* Experience Section */}
    <section className="mb-16">
      <motion.h2
        className="text-4xl mb-12 font-bold text-gray-100 flex items-center gap-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="h-1 w-12 bg-[#58A6FF]"></span>
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
                {/* Category Tag */}
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#58A6FF] mb-1">
                  {exp.category}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold group-hover:text-[#58A6FF] transition-colors">
                  {exp.company}
                </h3>
              </div>
              <div className="flex items-center gap-4 mt-2 md:mt-0">
                <span className="text-gray-500 text-sm font-mono">{exp.date}</span>
                <i className={`bi ${activeIndex === exp.id ? 'bi-dash-lg' : 'bi-plus-lg'} text-[#58A6FF]`} />
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
                  <h4 className="text-lg font-bold text-gray-100 mb-1">{exp.role}</h4>
                  <p className="text-sm text-[#58A6FF] mb-4 font-mono">Core Focus: {exp.category}</p>
                  
                  <ul className="list-none space-y-3 text-gray-400 text-sm mb-6">
                    {exp.responsibilities.map((point, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-[#58A6FF] mt-1">▹</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800/50">
                    {exp.stack.map((t, idx) => (
                      <span
                        key={idx}
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
      )}
    </Container>
  );
};

export default Experience;
