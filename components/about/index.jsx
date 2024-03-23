import React from 'react';
import Footer from '../reusable/Footer';
import Header from '../reusable/Header';
import { ProfilePhoto } from '@/asset/images';
import Image from 'next/image';

const About = () => {
    const style = {
        // height: "500px",
        overflowY: "scroll",
        // "@media (max-width: '768px')": {
        //     height: "100vh"
        // },
    }
    return (
    <div className="m-0 p-0 relative overflow-y-hidden flex flex-col h-screen">
        <Header active="about"/>
        <div className="px-8 md:px-32 pb-8 no-scroll-bar" style={style}>
            <div className="flex flex-col-reverse md:flex-row items-center mb-12">
                <Image 
                    src={ProfilePhoto} 
                    alt="profile photo of Oreoluwa" 
                    className="rounded-lg object-cover object-right-top md:float-left md:p-4 md:pr-10 w-full md:w-3/5 transition-opacity opacity-0 duration-[2s]"
                    style={{height: "400px"}}
                    onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                />
                <div className="w-full mb-4 md:mb-0 md:w-2/5 flex flex-col gap-3 text-gray-300"><p className="text-3xl font-bold italic">Hey there, it's me Oreoluwa!</p><p className="text-xl font-normal">My journey started as an inquisitive student who wondered about how different web designs are made and how to make ones that will be captivating. Fast forward to today where my journey has led me to developing diverse user-friendly applications that suits your desired needs.</p> </div>
            </div>
            <div className="text-gray-300">
                <ul>
                    <li className="mb-8">
                        <h3 className="text-2xl font-bold flex items-center gap-3 mb-4"><i className="bi bi-circle text-sm"></i> Skills and Expertise</h3>
                        <p className="ml-6 mb-3">I specialize in front-end development with a strong proficiency in React, TypeScript, Next.js, and React Native. On the backend, I'm proficient in Node.js and Express, NestJS, adept at designing robust APIs and scalable server architectures. My design aesthetic is enhanced with expertise in Tailwind CSS, ensuring pixel-perfect UI/UX across all platforms. Additionally, I bring a wealth of experience in enhancing user interactions through the strategic use of jQuery.</p>
                        <p className="ml-6 mb-3"> React Native, particularly, allows me to extend my expertise to mobile software development, enabling the creation of robust and native-like applications for both iOS and Android platforms.</p>
                        <p className="ml-6">Moreover, I bring extensive experience in database management, with proficiency in MongoDB, PostgreSQL, and SQL. I've leveraged MongoDB's flexibility and scalability in numerous projects, harnessing the power of Mongoose for efficient schema management and data modeling. Additionally, I have hands-on experience with PostgreSQL, utilizing TypeORM for seamless integration and efficient ORM capabilities.</p>
                        
                    </li>
                    <li className="mb-8">
                        <h3 className="text-2xl font-bold flex items-center gap-3 mb-4"><i className="bi bi-circle text-sm"></i>Experience</h3>
                        <p className="ml-6">In my previous roles, I've led the development of several high-traffic web and mobile applications, from conception to deployment. Notable projects include a real-time collaboration platform for remote teams, which significantly improved productivity and communication. I've also contributed to the development of e-commerce solutions, integrating secure payment gateways and optimizing performance for seamless customer experiences.</p>
                    </li>
                    <li className="mb-8">
                        <h3 className="text-2xl font-bold flex items-center gap-3 mb-4"><i className="bi bi-circle text-sm"></i>Passion and Motivation</h3>
                        <p className="ml-6">What drives me in my work is the opportunity to make a tangible difference in people's lives through technology. I'm inspired by the endless possibilities that coding presents and am constantly seeking out new challenges to expand my skills and knowledge. Outside of work, you'll often find me immersed in a good book, exploring the latest advancements in software development, or enjoying outdoor events with friends and family.</p>
                    </li>
                    <li className="mb-8">
                        <h3 className="text-2xl font-bold flex items-center gap-3 mb-4"><i className="bi bi-circle text-sm"></i>Education and Certifications</h3>
                        <p className="ml-6">I hold a MBBS certificate from University of Ibadan, a certificate from  The complete 2022 Web development bootcamp by Dr Angela Yu and have continued to pursue ongoing education and certifications to stay at the forefront of the ever-evolving tech landscape.</p>
                    </li>
                </ul>

                <p>Let's connect and explore how we can collaborate to bring your ideas to life! Whether you're looking to build a sleek web application, a dynamic mobile experience, or anything in between, I'm excited to be part of your journey.</p>
                
            </div>

        </div>
        <Footer />
    </div>)
}

export default About