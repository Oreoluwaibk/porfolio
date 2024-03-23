import React, { useState } from 'react';
import Footer from '../reusable/Footer';
import Header from '../reusable/Header';
import $ from "jquery";
import { Carousel } from 'antd';
import Image from 'next/image';
import { ProfilePhoto } from '@/asset/images';
import Link from 'next/link';


const Projects = () => {
    const [ active, setActive ] = useState(null);
    const list = [1,2,3,4]

    const toggleActiveNum = (num) => {
        if(active === num){
            setActive(null)
            $(`#work${num}`).toggleClass("show").slideUp(1000);
        }else{
            setActive(num)
            $(`#work${num}`).toggleClass("show").slideDown(1000);
            list.map((numb) => {
                if(num === numb) return;
                $(`#work${numb}`).toggleClass("show").slideUp(1000);
            })
        }
    }

    const handleClick = (number) => {
        toggleActiveNum(number);
    }

    return (
    <div className="m-0 p-0 relative h-screen flex flex-col">
        <Header active="experience" />
        <div className="px-4 md:px-52 py-1 flex flex-col overflow-y-scroll no-scroll-bar">
            <Carousel autoplay dots={false} autoplaySpeed={10000} className="text-sec mb-8 md:mb-12">
                <div className="flex flex-col text-center gap-4">
                    <p className="text-4xl italic font-light md:px-12 mb-2">"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it."</p>
                    <h2 className="text-3xl italic font-semibold">Patrick McKenzie</h2>
                </div>
                <div className="flex flex-col text-center gap-4">
                    <p className="text-4xl italic font-light md:px-12 mb-2">"Imagination is the beginning of creation. You imagine what you desire, you will what you imagine, and at last, you create what you will."</p>
                    <h2 className="text-3xl italic font-semibold">George Bernard Shaw</h2>
                </div>
            </Carousel>
            
            <div className="mb-16">
                <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-4xl italic font-semibold text-gray-300">Where I've worked </h2> 
                        <hr className="w-3/5 border-sec" />
                </div>

                <ul className="flex flex-col gap-4 text-gray-300">
                    <li className="flex flex-col gap-2">
                        <div className={`flex items-center gap-2 cursor-pointer text-2xl  transition-all duration-[1.5s] ${active === 1 ? "pl-1" : "pl-0" }`} onClick={() => handleClick(1)}>
                            <i className={`bi ${active === 1 ? "bi-caret-down" : "bi-caret-right" }`} id="arrow1"></i>
                            <p className="italic font-normal text-xl">Smartsafe consulting limited</p>
                        </div>
                        
                        <div className="flex-col gap-2 ml-4 md:ml-12 hidden" id="work1">
                            <h2 className="text-2xl font-semibold">Lead Frontend Engineer @Smartsafe UK</h2>
                            <p className="italic">February 2023 - Present</p>
                            <ul className="flex flex-col gap-2">
                                <li className="flex items-start gap-3"> <i className="bi bi-circle text-xs block mt-1"></i> Architect and develop secure web applications with a focus on resilience, scalability, and performance. Utilized technologies such as Javascript, TypeScript, JQuery, and EJS to create intuitive and responsive user interfaces while adhering to security standards and guidelines</li>
                                <li className="flex items-start gap-3"> <i className="bi bi-circle text-xs block mt-1"></i>Integrate cybersecurity principles and best practices into the frontend development process, ensuring that security is prioritized at every stage of the software development lifecycle. Implemented robust security measures to protect against common vulnerabilities such as cross-site scripting (XSS), injection attacks, and data breaches</li>
                                <li className="flex items-start gap-3"> <i className="bi bi-circle text-xs block mt-1"></i>Proactively identify and mitigate potential security threats and vulnerabilities in web applications. Conducted regular code reviews and security audits to ensure adherence to security best practices and compliance requirements</li>
                                <li className="flex items-start gap-3"> <i className="bi bi-circle text-xs block mt-1"></i>Collaborate with cross-functional teams, including cybersecurity experts, backend developers, and UX/UI designers, to successfully deliver projects on time and within budget. Utilized agile methodologies to manage project timelines, prioritize tasks, and adapt to changing requirements</li>
                            </ul>

                            <ul className="flex items-center gap-6 mt-2 ml-5 no-scroll-bar py-1 overflow-x-scroll">
                                <li className="code-tool">Javascript</li>
                                <li className="code-tool">EJS</li>
                                <li className="code-tool">JQuery</li>
                                <li className="code-tool">Express</li>
                                <li className="code-tool">Bootstraps</li>
                            </ul>
                        </div>
                    </li>
                    <li className="flex flex-col gap-2">
                        <div className={`flex items-center gap-2 cursor-pointer text-2xl  transition-all duration-[1.5s] ${active === 2 ? "pl-1" : "pl-0" }`} onClick={() => handleClick(2)}>
                            <i className={`bi ${active === 2 ? "bi-caret-down" : "bi-caret-right" }`} id="arrow2"></i>
                            <p className="italic font-normal text-xl">Loystar Inc.</p>
                        </div>
                        
                        <div className="hidden flex-col gap-2 ml-4 md:ml-12" id="work2">
                            <h2 className="text-2xl font-semibold">Full Stack Developer @Loystar Inc.</h2>
                            <p className="italic">December 2022 - Present</p>
                            <ul className="flex flex-col gap-2">
                                <p className="flex items-start gap-3"> <i className="bi bi-circle text-xs block mt-1"></i>As a Full Stack Developer at Loystar Inc, I play a key role in designing, developing, and maintaining innovative solutions for our customers. Here are some of my primary responsibilities and achievements</p>
                                <li className="flex items-start gap-3"> <i className="bi bi-circle text-xs block mt-1"></i>Lead the end-to-end development of web applications, from concept and design to deployment and maintenance. Collaborate closely with cross-functional teams to understand requirements and translate them into scalable and efficient software solutions</li>
                                <li className="flex items-start gap-3"> <i className="bi bi-circle text-xs block mt-1"></i>Utilize a diverse technology stack to build robust and responsive applications. On the frontend, leverage frameworks such as React.js and Angular.js to create intuitive user interfaces. On the backend, harness the power of Node.js and Express.js to develop scalable server-side logic and APIs.</li>
                                <li className="flex items-start gap-3"> <i className="bi bi-circle text-xs block mt-1"></i>Implement and optimize database solutions using SQL and NoSQL databases such as MySQL, MongoDB, and PostgreSQL. Design efficient database schemas, perform data migrations, and ensure data integrity and security.</li>
                                <li className="flex items-start gap-3"> <i className="bi bi-circle text-xs block mt-1"></i>Integrate third-party APIs and services to enhance functionality and interoperability of web applications. Develop custom APIs and microservices to facilitate seamless communication between frontend and backend components.</li>
                            </ul>

                            <ul className="flex items-center gap-6 mt-2 ml-5 no-scroll-bar py-1 overflow-x-scroll">
                                <li className="code-tool">Typescript</li>
                                <li className="code-tool">TS-Node</li>
                                <li className="code-tool">React</li>
                                <li className="code-tool">Sass</li>
                                <li className="code-tool">Express</li>
                                <li className="code-tool">TypeOrm</li>
                                <li className="code-tool">Postgress</li>
                            </ul>
                        </div>
                    </li>
                    
                    <li className="flex flex-col gap-2">
                        <div className={`flex items-center gap-2 cursor-pointer text-2xl  transition-all duration-[1.5s] ${active === 3 ? "pl-1" : "pl-0" }`} onClick={() => handleClick(3)}>
                            <i className={`bi ${active === 3 ? "bi-caret-down" : "bi-caret-right" }`} id='arrow3'></i>
                            <p className="italic font-normal text-xl">Betty HR limited</p>
                        </div>
                       
                        <div className="hidden flex-col gap-2 ml-4 md:ml-12" id="work3">
                            <h2 className="text-2xl font-semibold">Frontend Developer @Betty HR limited</h2>
                            <p className="italic">October 2022 - December 2022</p>
                            <ul className="flex flex-col gap-2">
                                <p className="flex items-start gap-3"> <i className="bi bi-circle text-xs block mt-1"></i>Design and develop visually appealing and user-friendly interfaces using modern frontend technologies and frameworks such as React.js, Angular.js, and Vue.js. Collaborate closely with UX/UI designers to translate design mockups and wireframes into interactive web pages.</p>
                                <li className="flex items-start gap-3"> <i className="bi bi-circle text-xs block mt-1"></i>Ensure seamless user experiences across various devices and screen sizes through responsive web design techniques and mobile-first development principles. Optimize performance and loading times to deliver fast and fluid user interactions.</li>
                                <li className="flex items-start gap-3"> <i className="bi bi-circle text-xs block mt-1"></i>Test and optimize web applications for cross-browser compatibility, ensuring consistent performance and functionality across popular web browsers such as Chrome, Firefox, Safari, and Edge. Address compatibility issues and implement fallback solutions as needed.</li>
                                <li className="flex items-start gap-3"> <i className="bi bi-circle text-xs block mt-1"></i> Conduct thorough frontend testing using testing frameworks such as Jest, Mocha, or Jasmine to identify and address bugs and issues. Implement automated testing scripts and perform manual testing to validate frontend functionality and behavior.</li>
                                <li className="flex items-start gap-3"> <i className="bi bi-circle text-xs block mt-1"></i>Use version control systems such as Git to manage code repositories and collaborate with team members on code changes and updates. Participate in code reviews to ensure code quality, consistency, and adherence to coding standards.</li>
                            </ul>

                            <ul className="flex items-center gap-6 mt-2 ml-5 no-scroll-bar py-1 overflow-x-scroll">
                                <li className="code-tool">React</li>
                                <li className="code-tool">Bootstraps</li>
                                <li className="code-tool">Ant design</li>
                                <li className="code-tool">Sass</li>
                            </ul>
                        </div>
                    </li>

                    <li className="flex flex-col gap-2">
                        <div className={`flex items-center gap-2 cursor-pointer text-2xl  transition-all duration-[1.5s] ${active === 4 ? "pl-1" : "pl-0" }`} onClick={() => handleClick(4)}>
                            <i className={`bi ${active === 4 ? "bi-caret-down" : "bi-caret-right" }`} id="arrow4"></i>
                            <p className="italic font-normal text-xl">Oluwatosin0</p>
                        </div>
                        <div className="hidden flex-col gap-2 ml-4 md:ml-12" id="work4">
                            <h2 className="text-2xl font-semibold">Full Stack Developer @Oluwatosin0</h2>
                            <p className="italic">June 2021 - October 2022</p>
                            <ul className="flex flex-col gap-2">
                                <p className="flex items-start gap-3"> <i className="bi bi-circle text-xs block mt-1"></i>Lead the end-to-end development of web applications for the ecommerce platform, from conceptualization and design to implementation and deployment. Collaborate closely with cross-functional teams including designers, product managers, and backend developers to deliver high-quality solutions.</p>
                                <li className="flex items-start gap-3"> <i className="bi bi-circle text-xs block mt-1"></i>Implement essential ecommerce functionality such as product catalog management, shopping cart functionality, checkout processes, and payment gateway integrations. Ensure seamless integration with third-party APIs and services to enhance functionality and user experience.</li>
                                <li className="flex items-start gap-3"> <i className="bi bi-circle text-xs block mt-1"></i>Design and optimize database schemas using database such as MongoDB. Implement efficient data models and indexing strategies to support high-volume transaction processing and reporting requirements.</li>
                                <li className="flex items-start gap-3"> <i className="bi bi-circle text-xs block mt-1"></i>Collaborate closely with clients and stakeholders to understand requirements, gather feedback, and address concerns. Strive to exceed client expectations by delivering high-quality ecommerce</li>
                            </ul>

                            <ul className="flex items-center gap-6 mt-2 ml-5 no-scroll-bar py-1 overflow-x-scroll">
                                <li className="code-tool">NextJS</li>
                                <li className="code-tool">Typescript</li>
                                {/* <li className="code-tool">Ant design</li> */}
                                <li className="code-tool">Tailwind</li>
                                <li className="code-tool">Mongo DB</li>
                                <li className="code-tool">Mongoose</li>
                                <li className="code-tool">Node</li>
                                <li className="code-tool">Express</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>

            
            <div className="pb-12">
                <div className="flex items-center gap-4 mb-10">
                    <h2 className="text-4xl italic font-semibold text-gray-300">
                        Somethings I've built
                    </h2> 
                    <hr className="w-1/2 border-sec" />
                </div>
                
                <ul className="flex flex-col gap-16 md:gap-36 text-gray-300">
                    <li className="flex gap-4">
                        <div className="hidden md:block w-3/5 h-72 z-10 relative">
                            <Image 
                                src={ProfilePhoto}
                                alt='Project Image'   
                                className="object-cover object-right-top w-full opacity-80 h-full"
                            />
                            <div className="h-full w-full absolute top-0 bg-black opacity-70 transition-opacity duration-[2s] ease-in-out hover:opacity-0"></div>
                        </div>
                        
                        <div 
                            className="flex flex-col gap-8 py-8 p-4 md:p-0 rounded-lg shadow-lg md:bg-transparent bg-pri md:border-0 md:gap-1 justify-between w-full md:w-2/5 z-10 relative"
                        > 
                            <div className="md:hidden absolute top-0 h-full w-full bg-cover opacity-40 left-0 transition-opacity duration-1000 hover:opacity-60" style={{backgroundImage: `url(${ProfilePhoto.src})`}}></div>

                            <h4 className="text-2xl italic font-semibold text-gray-300">Full fledge Ecommerce webite</h4>

                            <div className="bg-sec p-4 w-fit text-sm relative cardpad"><p className="text-white font-thin">a sleek, modern online store designed and developed to deliver seamless shopping experiences. From intuitive product browsing to secure checkout processes, every aspect of the ecommerce platform is meticulously crafted to enhance user satisfaction and drive conversions. Explore the future of online retail with this dynamic showcase of innovation and excellence.</p>
                            <div className="h-full w-full bg-black absolute top-0 opacity-20" style={{marginLeft: "-16px"}}></div>
                            </div>

                            <ul className="text-sec flex items-center text-sm italic font-semibold gap-2 techused">
                                <li>Nextjs</li>
                                <li>TS-Node</li>
                                <li>Tailwind css</li>
                                <li>Mongoose</li>
                                <li>MongoDB</li>
                            </ul>
                            <div className="flex items-center gap-8">
                                <Link href="#" ><i className="bi bi-github"></i></Link>
                                <Link href="#"><i className="bi bi-box-arrow-up-right"></i></Link>
                            </div>
                        </div>
                    </li>

                    <li className="flex flex-row-reverse gap-4">
                        <div className="hidden md:block w-3/5 h-72 z-10 relative">
                            <Image 
                                src={ProfilePhoto}
                                alt='Project Image'   
                                className="object-cover object-right-top w-full opacity-80 h-full"
                            />
                            <div className="h-full w-full absolute top-0 bg-black opacity-70 transition-opacity duration-[2s] ease-in-out hover:opacity-0"></div>
                        </div>
                        
                        <div className="flex flex-col gap-8 py-8 p-4 md:p-0 rounded-lg shadow-lg md:bg-transparent bg-pri md:border-0 md:gap-1 justify-between w-full md:w-2/5 z-10 relative"> 

                            <div className="md:hidden absolute top-0 h-full w-full bg-cover opacity-40 left-0 transition-opacity duration-1000 hover:opacity-60" style={{backgroundImage: `url(${ProfilePhoto.src})`}}></div>

                            <h4 className="text-2xl italic font-semibold text-gray-300">Movie Review App</h4>

                            <div className="bg-sec p-4 w-fit text-sm relative cardpadright"><p className="text-white font-thin">a cutting-edge web review app built for both iOS and Android platforms. Seamlessly blending performance and versatility, this app empowers users to discover and share reviews for their favorite websites. With its sleek design and intuitive navigation, the app provides a seamless browsing experience, fostering engagement and interaction among users.</p>
                            <div className="h-full w-full bg-black absolute top-0 opacity-20" style={{marginLeft: "-16px"}}></div>
                            </div>

                            <ul className="text-sec flex items-center text-sm italic font-semibold gap-2 techused">
                                <li>React Native</li>
                                <li>TS-Node</li>
                                <li>Tailwind css</li>
                            </ul>
                            <div className="flex items-center gap-8">
                                <Link href="#" ><i className="bi bi-github"></i></Link>
                                <Link href="#"><i className="bi bi-box-arrow-up-right"></i></Link>
                            </div>
                        </div>
                    </li>

                    <li className="flex gap-4">
                        <div className="hidden md:block w-3/5 h-72 z-10 relative">
                            <Image 
                                src={ProfilePhoto}
                                alt='Project Image'   
                                className="object-cover object-right-top w-full opacity-80 h-full"
                            />
                            <div className="h-full w-full absolute top-0 bg-black opacity-70 transition-opacity duration-[2s] ease-in-out hover:opacity-0"></div>
                        </div>
                        
                        <div className="flex flex-col gap-8 py-8 p-4 md:p-0 rounded-lg shadow-lg md:bg-transparent bg-pri md:border-0 md:gap-1 justify-between w-full md:w-2/5 z-10 relative">

                            <div className="md:hidden absolute top-0 h-full w-full bg-cover opacity-40 left-0 transition-opacity duration-1000 hover:opacity-60" style={{backgroundImage: `url(${ProfilePhoto.src})`}}></div>

                            <h4 className="text-2xl italic font-semibold text-gray-300">A worship center site</h4>

                            <div className="bg-sec p-4 w-fit text-sm relative cardpad" ><p className="text-white font-thin">a vibrant and engaging website designed for a local church community. This dynamic platform serves as a digital hub for congregation members and visitors alike, providing essential information, event updates, and resources for spiritual growth.</p>
                            <div className="h-full w-full bg-black absolute top-0 opacity-20" style={{marginLeft: "-16px"}}></div>
                            </div>

                            <ul className="text-sec flex items-center text-sm italic font-semibold gap-2 techused">
                                <li>Javascript</li>
                                <li>EJS</li>
                                <li>Node</li>
                                <li>Express</li>
                                <li>Mongoose</li>
                                <li>Mongo DB</li>
                            </ul>

                            <div className="flex items-center gap-8">
                                <Link href="#" ><i className="bi bi-github"></i></Link>
                                <Link href="#"><i className="bi bi-box-arrow-up-right"></i></Link>
                            </div>
                        </div>
                    </li>
                </ul>
              
            </div>
        </div>
        <Footer />
    </div>)
}

export default Projects;