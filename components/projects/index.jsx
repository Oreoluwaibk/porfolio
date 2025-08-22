'use client';
import React, { useState, useEffect } from 'react';
import Header from '../reusable/Header';
import Footer from '../reusable/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Carousel } from 'antd';
import ProjectLoader from '../loaders/ProjectLoader';
import Container from '../container/Container';
import Lightbox from 'react-image-lightbox';
import { OneStop } from '@/asset/images';
import { Commutor, CommutorDash, ComWebsite, Imovarsity, Smartlearning, Smartsafe, Vamooze } from '@/asset/images/projects';

const Projects = () => {
  const [loadingDone, setLoadingDone] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoadingDone(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: 'Smartlearning',
      description:
        'A custom-built LMS for Smartsafe UK, streamlining student registration, payment, and access to learning materials.',
      tech: ['EJS', 'Node.js', 'Express', 'jQuery', 'Firebase', 'HTML/CSS'],
      live: 'https://www.smartlearninguk.com/',
      images: [Smartlearning],
    },
    {
      title: 'Imo Varsity',
      description:
        'A fully deployed LMS that allows tutors to upload and sell courses. Includes dashboards, quizzes, and assignment features.',
      tech: ['Next.js', 'React', 'Firebase', 'Tailwind CSS', 'Ant Design', 'SASS'],
      live: 'https://imovarsity.com/',
      images: [Imovarsity],
    },
    {
      title: 'Smartsafe',
      description:
        'Corporate website for a UK cybersecurity firm, built for performance and responsiveness.',
      tech: ['Next.js', 'Tailwind CSS', 'Redux', 'Ant Design', 'TypeScript'],
      live: 'https://www.smartsafeuk.com/',
      images: [Smartsafe],
    },
    {
      title: 'Commutor App',
      description:
        'A project management app connecting users with vendors to build out ideas collaboratively.',
      tech: ['React Native', 'Firebase', 'CSS', 'GitHub'],
      live: 'https://play.google.com/store/apps/details?id=com.techwitsclanfrontend.commutorapp',
      images: [Commutor],
    },
    {
      title: 'Commutor',
      description:
        'Landing page for the Commutor app with elegant, clean design.',
      tech: ['Next.js', 'Tailwind CSS', 'SASS', 'TypeScript'],
      live: 'https://www.commutor.net/',
      images: [ComWebsite],
    },
    {
      title: 'Commutor Dashboard',
      description:
        'Admin interface for managing the Commutor platform, with project tracking and analytics.',
      tech: ['Next.js', 'Ant Design', 'Tailwind CSS', 'TypeScript'],
      live: 'https://main.dyciktlkjkd8t.amplifyapp.com/auth/login',
      images: [CommutorDash],
    },
    {
      title: 'Vamooze Platform',
      description:
        'A business monitoring and logistics platform with 6 user roles and real-time tracking.',
      tech: ['Next.js', 'Socket.io', 'TypeScript', 'Ant Design', 'SASS'],
      live: 'https://web.vamooze.com',
      images: [Vamooze],
    },
  ];

  return (
    <Container active="projects">
      <ProjectLoader type="projects" />
      {loadingDone && (
        <div className="min-h-screen  flex flex-col">
          <main className="px-4 md:px-20 pb-10 flex-1 overflow-y-auto no-scroll-bar">
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

            <motion.h2
              className="text-4xl mb-10 font-semibold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Featured Projects
            </motion.h2>

            <div className="grid gap-12 md:grid-cols-2">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  className="bg-[#111827] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                //   onClick={() => {
                //     setLightboxImages(project.images);
                //     setLightboxIndex(0);
                //     setLightboxOpen(true);
                //   }}
                >
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    className="rounded mb-4 object-cover w-full h-48"
                    width={600}
                    height={300}
                  />
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-sm mt-2">{project.description}</p>
                  <ul className="flex flex-wrap gap-2 mt-4 text-sm text-gray-400">
                    {project.tech.map((tech, techIdx) => (
                      <li key={techIdx} className="bg-[#1f2937] px-3 py-1 rounded">{tech}</li>
                    ))}
                  </ul>
                  <div className="flex gap-4 mt-4">
                    {project.live && (
                      <Link href={project.live} target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-box-arrow-up-right text-xl hover:text-gray-300" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </main>

        <div className='mb-4 menu-link'>
        <Link href='https://www.github.com/Oreoluwaibk'>
            <p className='text-[#58A6FF] text-center text-2xl font-bold'>View More</p>
        </Link>
            
        </div>
        </div>
      )}
    </Container>
  );
};

export default Projects;
