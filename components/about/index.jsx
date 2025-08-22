import React, { useEffect, useState } from 'react';
import { ProfilePhoto } from '@/asset/images';
import Image from 'next/image';
import Container from '../container/Container';
import ProjectLoader from '../loaders/ProjectLoader';

const About = () => {
    const [loadingDone, setLoadingDone] = useState(false);
    
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
        {loadingDone && <div className="px-8 md:px-32 pb-8 no-scroll-bar" style={style}>
        <div className="flex flex-col-reverse md:flex-row items-center mb-12">
            <Image 
            src={ProfilePhoto} 
            alt="profile photo of Oreoluwa" 
            className="rounded-lg object-cover object-right-top md:float-left md:p-4 md:pr-10 w-full md:w-3/5 transition-opacity opacity-0 duration-[2s]"
            style={{ height: "400px" }}
            onLoadingComplete={(image) => image.classList.remove("opacity-0")}
            />
            <div className="w-full mb-4 md:mb-0 md:w-2/5 flex flex-col gap-3 text-gray-300">
            <p className="text-3xl font-bold italic">Hey there, I’m Oreoluwa!</p>
            <p className="text-xl font-normal">
                I’m a full-stack engineer with a strong focus on frontend development. What began as curiosity about how the web works has grown into a career creating elegant, scalable, and impactful digital experiences.
            </p>
            </div>
        </div>

        <div className="text-gray-300">
            <ul>
            <li className="mb-8">
                <h3 className="text-2xl font-bold flex items-center gap-3 mb-4">
                <i className="bi bi-circle text-sm"></i> Skills & Expertise
                </h3>
                <p className="ml-6 mb-3">
                I specialize in frontend technologies like <strong>React</strong>, <strong>TypeScript</strong>, <strong>Next.js</strong>, and <strong>React Native</strong>. My UI work is powered by <strong>Tailwind CSS</strong>, and I frequently leverage <strong>jQuery</strong> for interactive enhancements.
                </p>
                <p className="ml-6 mb-3">
                On the backend, I work confidently with <strong>Node.js</strong>, <strong>Express</strong>, and <strong>NestJS</strong>, building robust APIs and scalable architectures.
                </p>
                <p className="ml-6">
                I’m also experienced with both SQL and NoSQL databases — including <strong>MongoDB</strong>, <strong>PostgreSQL</strong>, and <strong>MySQL</strong> — using tools like <strong>Mongoose</strong> and <strong>TypeORM</strong> to manage data effectively.
                </p>
            </li>

            <li className="mb-8">
                <h3 className="text-2xl font-bold flex items-center gap-3 mb-4">
                    <i className="bi bi-circle text-sm"></i> Experience
                </h3>
                <p className="ml-6 mb-3">
                    Over the years, I’ve led and contributed to the development of diverse web and mobile applications — including e-learning platforms, admin dashboards, and logistics systems. From ideation to deployment, I’ve helped teams deliver user-focused software with clean interfaces and strong architectural foundations.
                </p>
                <p className="ml-6">
                    Beyond development, I’ve had the privilege of training and mentoring over <strong>100 students</strong> in software development — covering everything from frontend fundamentals (HTML, CSS, JavaScript, React) to backend technologies (Node.js, Express, MongoDB). Seeing my mentees grow into confident developers has been one of the most rewarding parts of my journey.
                </p>
            </li>

            <li className="mb-8">
                <h3 className="text-2xl font-bold flex items-center gap-3 mb-4">
                <i className="bi bi-circle text-sm"></i> Passion & Motivation
                </h3>
                <p className="ml-6">
                I’m driven by the desire to build tools that improve lives and solve real problems. Whether I'm working solo or collaborating across teams, I’m energized by learning, shipping, and iterating.
                </p>
                <p className="ml-6">
                Outside of tech, I enjoy staying active, exploring ideas through reading, and spending time with people who inspire me.
                </p>
            </li>

            <li className="mb-8">
                <h3 className="text-2xl font-bold flex items-center gap-3 mb-4">
                <i className="bi bi-circle text-sm"></i> Education & Certifications
                </h3>
                <p className="ml-6 mb-2">I hold an <strong>MBBS degree</strong> from the University of Ibadan, where I developed a deep foundation in analytical thinking and attention to detail.</p>
                <p className="ml-6 mb-2">To complement that background, I’ve earned several certifications, including:</p>
                <ul className="ml-6 list-disc space-y-1 text-sm">
                <li>Complete Web Development Bootcamp</li>
                <li>Ultimate AWS Certified Developer Associate</li>
                <li>Complete Python Pro Bootcamp</li>
                </ul>
            </li>
            </ul>

            <p className="mt-8">
            Let’s collaborate and build something amazing. Whether you need a user-friendly web experience, a mobile app, or a scalable backend — I’m ready to help bring your vision to life.
            </p>
        </div>
        </div>}

    </Container>)
}

export default About