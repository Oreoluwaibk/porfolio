'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Carousel } from 'antd';
import ProjectLoader from '../loaders/ProjectLoader';
import Container from '../container/Container';
import { AAGolf, Commutor, Imovarsity, Loystar, Portfolio, Protection, Quikwrk, SafeHabour, Smartlearning, SmartlearningDashboard, SmartlearningLight, Smartsafe, SmartsafeAdminCourses, SmartsafeAdminOverview, SmartsafeAdminPta, SmartsafeAdminUsers, Vamooze } from '@/asset/images/projects';

const Projects = () => {
  const [loadingDone, setLoadingDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoadingDone(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: 'Safe Harbour',
      description:
        'A high-security marketplace and escrow platform designed for secure digital transactions. Engineered a custom escrow logic system using Python for backend validation and Redux to manage complex multi-step transaction states, ensuring zero-trust security for buyers and sellers.',
      tech: ['React', 'Redux', 'Python', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
      live: 'https://www.seosafeharbour.com/', 
      images: [SafeHabour], 
      category: 'FinTech / Security'
    },
    {
      title: 'Vamooze Logistics Ecosystem',
      description:
        'A high-concurrency logistics and monitoring platform featuring 6 distinct user roles. Implemented real-time tracking with Socket.io and high-integrity state management using Redux and Python-driven backend logic.',
      tech: ['Next.js', 'Socket.io', 'TypeScript', 'Redux', 'Python', 'Ant Design'],
      live: 'https://web.vamooze.com',
      images: [Vamooze],
      category: 'Enterprise / Logistics'
    },
    {
      title: 'Loystar Sales Platform',
      description:
        'A B2B/B2C sales platform for product catalogues, transactions, and reporting. Built role-based dashboards for Admin, Manager, and Staff with secure access controls across high-volume sales workflows.',
      tech: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'RBAC', 'Ant Design'],
      live: 'https://web.loystar.co',
      images: [Loystar],
      category: 'Enterprise / Sales'
    },
    {
      title: 'Smartsafe Cybersecurity Portal',
      description:
        'Corporate infrastructure for a UK cybersecurity firm. Engineered for maximum performance and security, featuring a customized implementation of Ant Design to match corporate branding and Core Web Vitals excellence.',
      tech: ['Next.js', 'Tailwind CSS', 'Redux', 'Ant Design', 'TypeScript'],
      live: 'https://www.smartsafeuk.com/',
      images: [Smartsafe],
      category: 'Cybersecurity'
    },
    {
      title: 'Smartsafe Admin Dashboard',
      description:
        'A secure, high-performance internal dashboard for user management and analytics. Built for Smartsafe operations with role-based access, real-time reporting, and a scalable interface for managing thousands of platform users.',
      tech: ['React', 'Next.js', 'TypeScript', 'Redux', 'Ant Design', 'Node.js'],
      images: [SmartsafeAdminOverview, SmartsafeAdminCourses, SmartsafeAdminPta, SmartsafeAdminUsers],
      category: 'Internal Tooling'
    },
    {
      title: 'Imo Varsity LMS',
      description:
        'A massive-scale Learning Management System. Built a comprehensive tutor-to-student marketplace featuring automated assignment grading, course progress analytics, and secure payment integrations.',
      tech: ['Next.js', 'React', 'Firebase', 'Ant Design', 'SASS', 'Tailwind CSS'],
      live: 'https://imovarsity.com/',
      images: [Imovarsity],
      category: 'Education Tech'
    },
    {
      title: 'AA Golf Booking System',
      description:
        'Served as Technical Lead for this UK-based booking engine. Oversaw the architecture and mentored interns through the implementation of complex scheduling logic and secure payment gateways.',
      tech: ['Next.js', 'TypeScript', 'Ant Design', 'Technical Leadership', 'SASS'],
      live: 'https://aagolf.co.uk/',
      images: [AAGolf],
      category: 'SaaS / Bookings'
    },
    {
      title: 'Commutor Mobile Ecosystem',
      description:
        'A cross-platform project management suite connecting vendors and users. Shipped to Google Play with milestone tracking, vendor collaboration, and in-app payments for on-the-go project management.',
      tech: ['React Native', 'Next.js', 'Firebase', 'TypeScript', 'Tailwind CSS'],
      live: 'https://www.commutor.net/',
      images: [Commutor],
      category: 'Productivity / Mobile'
    },
    {
      title: 'Quikwrk Mobile App',
      description:
        'Co-developed and launched a production React Native mobile app, expanding hands-on experience in mobile deployment, performance tuning, and shipping user-facing features to app stores.',
      tech: ['React Native', 'TypeScript', 'Firebase', 'Mobile Deployment'],
      images: [Quikwrk],
      category: 'Productivity / Mobile'
    },
    {
      title: 'Smartlearning LMS',
      description:
        'A bespoke internal LMS built for Smartsafe UK. Focused on streamlining student registration and learning material access, featuring a robust custom-built dashboard for administrative oversight.',
      tech: ['React', 'Node.js', 'Python', 'Firebase', 'jQuery', 'Material UI'],
      live: 'https://www.smartlearninguk.com/',
      images: [Smartlearning, SmartlearningDashboard, SmartlearningLight],
      category: 'Internal Tooling'
    },
    {
      title: 'Data Protection Academy',
      description:
        'A specialized enrollment portal for cybersecurity certifications. Optimized for high conversion and ease of use for non-technical users entering the security field.',
      tech: ['WordPress', 'PHP', 'Custom CSS', 'Data Protection'],
      live: 'https://www.dataprotectionacademy.net/',
      images: [Protection],
      category: 'CMS / Marketing'
    },
    {
      title: 'Professional Engineering Portfolio',
      description:
        'A bespoke portfolio architected to showcase the intersection of Medicine and Software Engineering. Features advanced Framer Motion animations and high-performance React patterns.',
      tech: ['Next.js', 'React', 'Framer Motion', 'Ant Design', 'Tailwind CSS'],
      live: 'https://www.oreoluwaibikunle.com/',
      images: [Portfolio], // Replace with your actual portfolio screenshot variable
      category: 'Engineering / Design'
    }
  ];
  return (
    <Container active="projects">
      <ProjectLoader type="projects" />
      {(
        <div className="min-h-screen  flex flex-col">
        <main className="px-4 md:px-20 pb-20 flex-1 overflow-y-auto no-scroll-bar">
          {/* Professional Header Section */}
          <header className="mt-16 mb-20 max-w-2xl">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Selected Works.
            </motion.h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              A collection of high-stakes digital products, from enterprise logistics platforms 
              to secure cybersecurity portals.
            </p>
          </header>

          {/* Improved Project Grid */}
          <div className="grid gap-16 md:grid-cols-2">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                className="group relative flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
              >
                {/* Image Container with Hover Zoom */}
                <div className="overflow-hidden rounded-xl bg-[#111827] border border-gray-800 transition-all duration-500 group-hover:border-[#58A6FF]/50 group-hover:shadow-[0_0_30px_rgba(88,166,255,0.1)]">
                  {project.images.length > 1 ? (
                    <Carousel autoplay dots className="project-carousel">
                      {project.images.map((image, imageIdx) => (
                        <div key={imageIdx}>
                          <Image
                            src={image}
                            alt={`${project.title} screenshot ${imageIdx + 1}`}
                            className="object-cover w-full h-64 md:h-80 opacity-80 group-hover:opacity-100"
                            width={800}
                            height={400}
                          />
                        </div>
                      ))}
                    </Carousel>
                  ) : (
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      className="object-cover w-full h-64 md:h-80 transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      width={800}
                      height={400}
                    />
                  )}
                </div>

                {/* Content Section */}
                <div className="mt-6 flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#58A6FF]">
                        {project.category || "Full-Stack Project"}
                      </span>
                      <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-[#58A6FF] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    {project.live && (
                      <Link href={project.live} target="_blank" className="p-2 bg-gray-900 rounded-full hover:bg-[#58A6FF] transition-all group/link">
                        <i className="bi bi-arrow-up-right text-white group-hover/link:text-black" />
                      </Link>
                    )}
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech, techIdx) => (
                      <span 
                        key={techIdx} 
                        className="text-[11px] font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded hover:border-gray-600 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Action */}
          <motion.div 
            className="mt-32 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <p className="text-gray-500 mb-4 font-mono text-sm uppercase tracking-widest">Wanna see the raw code?</p>
            <Link href="https://www.github.com/Oreoluwaibk" target="_blank">
              <button className="px-10 py-4 bg-transparent border-2 border-[#58A6FF] text-[#58A6FF] font-bold rounded-full hover:bg-[#58A6FF] hover:text-black transition-all duration-300">
                Browse GitHub Repositories
              </button>
            </Link>
          </motion.div>
        </main>
        </div>
      )}
    </Container>
  );
};

export default Projects;
