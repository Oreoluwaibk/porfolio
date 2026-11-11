import React, { useState } from 'react';
import { ProfilePhoto } from '@/asset/images';
import Image from 'next/image';
import Container from '../container/Container';
import ProjectLoader from '../loaders/ProjectLoader';
import { Modal } from 'antd';

const About = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <Container active="about">
      <ProjectLoader type="projects" />
      <div className="px-8 md:px-32 pb-16 no-scroll-bar pt-10 overflow-y-auto">
        <div className="flex flex-col md:flex-row items-start mb-14 gap-10">
          <div className="relative h-36 w-36 md:h-44 md:w-44 shrink-0 overflow-hidden rounded-2xl border border-gray-800 shadow-xl">
            <Image
              src={ProfilePhoto}
              alt="Oreoluwa Ibikunle"
              fill
              sizes="176px"
              className="object-cover object-top"
              loading="eager"
            />
          </div>

          <div className="flex flex-col gap-4 text-gray-300 max-w-2xl">
            <h2 className="text-4xl font-bold text-white">I&apos;m Oreoluwa Ibikunle.</h2>
            <h3 className="text-lg font-medium text-[#58A6FF] font-mono tracking-wide">
              Senior Software Engineer · Full Stack
            </h3>
            <p className="text-lg leading-relaxed">
              I design and ship end-to-end web and mobile products — from multi-role
              dashboards and LMS platforms to marketplaces and privacy-focused tools.
              My focus is reliable systems, clean interfaces, and code that scales with
              real usage.
            </p>
            <p className="text-lg leading-relaxed text-gray-400">
              Over 4 years of remote and hybrid delivery across React, Next.js, TypeScript,
              Node.js, and React Native. Comfortable owning features from API design through
              UI, auth, RBAC, payments, and deployment.
            </p>
          </div>
        </div>

        <div className="text-gray-300">
          <ul>
            <li className="mb-12">
              <h3 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
                <span className="h-2 w-2 rounded-full bg-[#58A6FF]" /> Core Competencies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-0 md:ml-6">
                <div>
                  <h4 className="text-[#58A6FF] font-semibold mb-2 font-mono text-sm uppercase tracking-wide">
                    Frontend & Mobile
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-400">
                    React, TypeScript, Next.js, and React Native. Performance-minded UI with
                    Tailwind CSS, structured state management, and production mobile releases
                    on Google Play.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#58A6FF] font-semibold mb-2 font-mono text-sm uppercase tracking-wide">
                    Backend & Systems
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-400">
                    Node.js (Express / NestJS), Python, REST and GraphQL APIs, PostgreSQL and
                    MongoDB. Role-based access, escrow and payment flows, and latency-aware
                    service design.
                  </p>
                </div>
              </div>
            </li>

            <li className="mb-12">
              <h3 className="text-2xl font-bold flex items-center gap-3 mb-4 text-white">
                <span className="h-2 w-2 rounded-full bg-[#58A6FF]" /> Professional Impact
              </h3>
              <div className="ml-0 md:ml-6 space-y-4 text-lg text-gray-400">
                <p>
                  Delivered multi-role LMS platforms, logistics dashboards, marketplace
                  products, and admin tooling used by thousands of users. Work at Loystar
                  and Techwitsclan covered sales systems, white-label delivery frontends,
                  and shipped consumer mobile apps.
                </p>
                <p>
                  Independently built and launched products including BioClerk, Quikwrk,
                  and OI Question Bank — covering product UI, APIs, auth, and store
                  distribution.
                </p>
                <p>
                  Mentored 50+ developers through code reviews and structured frontend
                  training, with strong placement outcomes across cohorts.
                </p>
              </div>
            </li>

            <li className="mb-10">
              <h3 className="text-2xl font-bold flex items-center gap-3 mb-4 text-white">
                <span className="h-2 w-2 rounded-full bg-[#58A6FF]" /> Certifications
              </h3>
              <div className="ml-0 md:ml-6 flex flex-wrap gap-3">
                {[
                  'AWS Certified Developer',
                  'Complete Python Pro',
                  'Web Development Bootcamp',
                  'UI/UX Design with Figma',
                ].map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-xs font-mono text-gray-400"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </li>
          </ul>

          <div className="mt-12 p-8 bg-gradient-to-r from-gray-900 to-black rounded-2xl border border-gray-800">
            <p className="text-xl font-medium text-white mb-4">
              Looking for a senior engineer who ships?
            </p>
            <p className="text-gray-400 mb-6">
              Open to remote or hybrid full-stack and frontend leadership roles. Happy to
              talk about product engineering, platform work, or complex dashboard systems.
            </p>
            <button
              onClick={() => setIsModalVisible(true)}
              className="px-8 py-3 bg-[#58A6FF] text-black font-bold rounded-lg hover:bg-[#79b8ff] transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      <Modal
        title="Let's Connect"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        centered
        styles={{
          body: { backgroundColor: '#111827', color: 'white' },
          content: { backgroundColor: '#111827', color: 'white' },
          header: { backgroundColor: '#111827', color: 'white' },
        }}
      >
        <div className="flex flex-col gap-4 p-4">
          <p className="text-gray-400">Choose the best way to reach me:</p>

          <a
            href="mailto:oreoluwa.ibikunle1@gmail.com"
            className="p-4 border border-gray-800 rounded-lg hover:border-[#58A6FF] flex items-center gap-4 transition-all"
          >
            <i className="bi bi-envelope text-[#58A6FF]" />
            <div>
              <div className="font-bold">Send an Email</div>
              <div className="text-xs text-gray-500">For roles and project inquiries</div>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/oreoluwa-ibikunle-306761158"
            target="_blank"
            rel="noreferrer"
            className="p-4 border border-gray-800 rounded-lg hover:border-[#58A6FF] flex items-center gap-4 transition-all"
          >
            <i className="bi bi-linkedin text-[#58A6FF]" />
            <div>
              <div className="font-bold">LinkedIn Message</div>
              <div className="text-xs text-gray-500">For professional networking</div>
            </div>
          </a>

          <a
            href="https://wa.me/2348132088506"
            target="_blank"
            rel="noreferrer"
            className="p-4 border border-gray-800 rounded-lg hover:border-[#58A6FF] flex items-center gap-4 transition-all"
          >
            <i className="bi bi-whatsapp text-[#58A6FF]" />
            <div>
              <div className="font-bold">Chat on WhatsApp</div>
              <div className="text-xs text-gray-500">For a quick conversation</div>
            </div>
          </a>

          <div className="mt-4 text-center">
            <span className="text-xs text-gray-600 font-mono uppercase tracking-widest">
              Open to select opportunities
            </span>
          </div>
        </div>
      </Modal>
    </Container>
  );
};

export default About;
