import React, { useEffect, useState } from 'react';
import { ProfilePhoto } from '@/asset/images';
import Image from 'next/image';
import Container from '../container/Container';
import ProjectLoader from '../loaders/ProjectLoader';
import { Button, Modal } from 'antd';

const About = () => {
    const [loadingDone, setLoadingDone] = useState(false);
    const [ isModalVisible, setIsModalVisible] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => setLoadingDone(true), 2500);
        return () => clearTimeout(timer);
    }, []);
    const style = {
        overflowY: "scroll"
    }
    return (
    <Container active="about">
        <ProjectLoader type="projects" />
        {<div className="px-8 md:px-32 pb-8 no-scroll-bar pt-10" style={style}>
            <div className="flex flex-col-reverse md:flex-row items-center mb-12 gap-10">
                <Image 
                    src={ProfilePhoto} 
                    alt="profile photo of Oreoluwa" 
                    className="rounded-2xl object-cover object-right-top md:float-left w-full md:w-2/5 transition-opacity  duration-[2s] shadow-2xl border border-gray-800"
                    style={{ height: "450px" }}
                    // onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                />
                <div className="w-full mb-4 md:mb-0 md:w-3/5 flex flex-col gap-5 text-gray-300">
                    <h2 className="text-4xl font-bold text-white">I’m Oreoluwa Ibikunle.</h2>
                    <h3 className="text-xl font-medium text-[#58A6FF] font-mono tracking-wide">
                        Software Engineer & Medical Doctor (MBBS)
                    </h3>
                    <p className="text-lg leading-relaxed">
                        I am a uniquely positioned Engineer and Physician dedicated to building high-trust digital infrastructure. With over 3 years of full-stack experience, I specialize in transforming complex data into intuitive, scalable interfaces. 
                    </p>
                    <p className="text-lg leading-relaxed">
                        My background in clinical medicine provides me with a rare perspective on safety, data integrity, and human-centric design. Whether architecting secure dashboards or mentoring the next generation of developers, I drive projects forward with technical craftsmanship and analytical precision.
                    </p>
                </div>
            </div>

            <div className="text-gray-300">
                <ul>
                    {/* Skills & Expertise */}
                    <li className="mb-10">
                        <h3 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
                            <span className="h-2 w-2 rounded-full bg-[#58A6FF]"></span> Core Competencies
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-6">
                            <div>
                                <h4 className="text-[#58A6FF] font-semibold mb-2">Frontend & Mobile</h4>
                                <p className="text-sm leading-relaxed">
                                    Expertise in React, TypeScript, Next.js, and React Native. I focus on performance-optimized UI/UX using Tailwind CSS and structured state management.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-[#58A6FF] font-semibold mb-2">Backend & Systems</h4>
                                <p className="text-sm leading-relaxed">
                                    Confident in Node.js, Express, and NestJS, building secure APIs and role-based access control (RBAC) systems.
                                </p>
                                <p className="text-sm leading-relaxed">
                                    My backend expertise spans Node.js (NestJS/Express) and Python, which I leverage for both robust API development, frontend data processing logic and role-based access control (RBAC) systems. I am also experienced in React Native for cross-platform mobile solutions.
                                </p>
                            </div>
                        </div>
                    </li>

                    {/* Experience & Leadership */}
                    <li className="mb-10">
                        <h3 className="text-2xl font-bold flex items-center gap-3 mb-4 text-white">
                            <span className="h-2 w-2 rounded-full bg-[#58A6FF]"></span> Professional Impact
                        </h3>
                        <p className="ml-6 mb-4 text-lg">
                            I have led the development of critical platforms including multi-role LMS systems, cybersecurity portals, and live logistics engines. My work at Smartsafe and Loystar has focused on maintaining high availability and security for thousands of active users.
                        </p>
                        <p className="ml-6 mb-4 text-lg">
                            As a Lead Frontend Developer, I’ve architected multi-role systems like SakerTech, utilizing Redux for intricate state management across diverse user archetypes. My work with Ant Design and Material UI ensures that large-scale platforms like ImoVarsity remain intuitive and high-performing.
                        </p>
                        <p className="ml-6 text-lg">
                            By integrating Python into my workflow, I’ve enhanced the data-handling capabilities of logistics engines and cybersecurity portals, ensuring that high-stakes medical and financial data remain accurate and secure.
                        </p>
                        <p className="ml-6 text-lg">
                            Beyond code, I am a committed mentor. I have trained and job-readied over 100 students, translating complex software architectures into digestible learning paths.
                        </p>
                    </li>

                    {/* Education & Clinical Foundation */}
                    <li className="mb-10">
                        <h3 className="text-2xl font-bold flex items-center gap-3 mb-4 text-white">
                            <span className="h-2 w-2 rounded-full bg-[#58A6FF]"></span> Clinical Foundation
                        </h3>
                        <p className="ml-6 mb-4 text-lg">
                            I hold an MBBS degree from the University of Ibadan. This medical background informs my engineering approach, instilling a "do no harm" philosophy regarding data privacy and system reliability.
                        </p>
                        <div className="ml-6 flex flex-wrap gap-3">
                            {['AWS Certified Developer', 'Complete Python Pro', 'Web Development Bootcamp', 'UI/UX Design with Figma'].map((cert) => (
                                <span key={cert} className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs font-mono text-gray-400">
                                    {cert}
                                </span>
                            ))}
                        </div>
                    </li>
                </ul>

                <div className="mt-12 p-8 bg-gradient-to-r from-gray-900 to-black rounded-2xl border border-gray-800">
                    <p className="text-xl font-medium text-white mb-4">Let’s build the future of secure, accessible technology.</p>
                    <p className="text-gray-400 mb-6">
                        Whether you need a Lead Engineer for a high-growth startup, a Technical Researcher for AI safety, or a specialized partner for Medical Research and Data Dashboards, I bring the dual-discipline expertise needed to succeed. From complex enterprise systems to intuitive non-tech websites, I ensure every project is built with precision and intent.
                    </p>
                    <button  onClick={() => setIsModalVisible(true)} className="px-8 py-3 bg-[#58A6FF] text-black font-bold rounded-lg hover:scale-105 transition-transform">
                        Get In Touch
                    </button>
                </div>
            </div>
        </div>}

        <Modal
            title="Let's Connect"
            open={isModalVisible}
            onCancel={() => setIsModalVisible(false)}
            footer={null}
            centered
            style={{ backgroundColor: '#111827' }}
            styles={{ body: { backgroundColor: '#111827', color: 'white' }, content: { backgroundColor: '#111827', color: 'white' }, header: { backgroundColor: '#111827', color: 'white' } }}
        >
            <div className="flex flex-col gap-4 p-4">
                <p className="text-gray-400">Choose the best way to reach me:</p>
                
                <a href="mailto:oreoluwa.ibikunle1@gmail.com" className="p-4 border border-gray-800 rounded-lg hover:border-[#58A6FF] flex items-center gap-4 transition-all">
                <i className="bi bi-envelope text-[#58A6FF]"></i>
                <div>
                    <div className="font-bold">Send an Email</div>
                    <div className="text-xs text-gray-500">For project inquiries or research</div>
                </div>
                </a>

                <a href="https://linkedin.com/in/oreoluwa-ibikunle-306761158" target="_blank" className="p-4 border border-gray-800 rounded-lg hover:border-[#58A6FF] flex items-center gap-4 transition-all">
                <i className="bi bi-linkedin text-[#58A6FF]"></i>
                <div>
                    <div className="font-bold">LinkedIn Message</div>
                    <div className="text-xs text-gray-500">For professional networking</div>
                </div>
                </a>

                <div className="mt-4 text-center">
                <span className="text-xs text-gray-600 font-mono uppercase tracking-widest">Available for select collaborations</span>
                </div>
            </div>
        </Modal>

    </Container>)
}

export default About