import React, { forwardRef, useState } from 'react';
import { Button, Image, Layout, Tooltip } from "antd";
import Link from 'next/link';
import { newLogoNoBackground } from '@/asset/logos';
import { CloseOutlined, GithubOutlined, InstagramFilled, LinkedinFilled, MenuOutlined, WhatsAppOutlined } from '@ant-design/icons';
import $ from "jquery";
import { AnimatePresence, motion } from 'framer-motion';


export const NavItem = ({ href, label, active, mobile }) => (
  <li className={mobile ? "ml-0 text-xl mb-4" : "ml-5"}>
    <Link href={href}>
      <span className={`menu-link ${active ? 'active' : ''} text-text`}>{label}</span>
    </Link>
  </li>
);

const { Header, Footer } = Layout;

const Container = forwardRef(({ children, active, ...props }, ref) => {
    const [ showMenu, setShowMenu ] = useState(false);
    const handleShowMenu = () => {
        setShowMenu(!showMenu);
        $("#menu").slideToggle(1000); 
    }

  return (
    <Layout className='bg-prim'>
        
        <Header className="bg-black/80 backdrop-blur-md border-b border-gray-800 h-[100px] text-white sticky top-0 z-50 px-4 md:px-20  transition-all duration-300">
            <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
                
                {/* Logo Section */}
                <div className="flex-shrink-0 mt-6">
                    <Link href="/home">
                        <Image
                            src={newLogoNoBackground.src}
                            width={100}
                            height={40}
                            preview={false}
                            alt="Oreoluwa's logo"
                            className="hover:opacity-80 transition-opacity"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <ul className="flex gap-8 items-center font-mono text-sm tracking-tight">
                        <NavItem href="/about" label="01. About" active={active === 'about'} />
                        <NavItem href="/experience" label="02. Experience" active={active === 'experience'} />
                        <NavItem href="/projects" label="03. Projects" active={active === 'projects'} />
                        <li>
                        <a href="/oreoluwa-resume.pdf" download>
                            <Button 
                            className="bg-transparent border border-[#58A6FF] text-[#58A6FF] hover:bg-[#58A6FF]/10 h-10 px-6 font-bold transition-all rounded"
                            >
                            Resume
                            </Button>
                        </a>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center">
                    <button 
                        onClick={handleShowMenu} 
                        className="text-[#58A6FF] p-2 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {showMenu ? <CloseOutlined className="text-2xl text-white!" /> : <MenuOutlined className="text-2xl text-white!" />}
                    </button>
                </div>
                <AnimatePresence>
                {showMenu && (
                    <motion.nav
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-screen w-[75%] bg-[#0d1117] border-l border-gray-800 shadow-2xl z-50 flex flex-col justify-center items-center md:hidden"
                    >
                        <CloseOutlined onClick={() => setShowMenu(false)} className="text-2xl text-[#58A6FF] absolute right-10 top-10" />
                        <ul className="flex flex-col gap-10 font-mono text-lg items-center">
                            <NavItem href="/about" label="01. About" active={active === 'about'} onClick={handleShowMenu} mobile />
                            <NavItem href="/experience" label="02. Experience" active={active === 'experience'} onClick={handleShowMenu} mobile />
                            <NavItem href="/projects" label="03. Projects" active={active === 'projects'} onClick={handleShowMenu} mobile />
                            <li className="mt-4">
                                <a href="/oreoluwa-resume.pdf" download>
                                    <Button className="h-14 w-44 border border-[#58A6FF] text-[#58A6FF] bg-transparent text-xl font-bold">
                                    Resume
                                    </Button>
                                </a>
                            </li>
                        </ul>
                    </motion.nav>
                )}
                </AnimatePresence>
            </div>
        </Header>
        <Layout>
            {/* <div ref={ref} className='bg-[#0a0a0a] text-text'  {...props}>
                {children}
            </div> */}
            <div
                ref={ref}
                className="relative overflow-hidden text-text group transition-all duration-700 ease-in-out "
                {...props}
                >
                {/* Gradient Overlay with Soft Shimmer */}
                <div className="absolute inset-0 bg-gradient-radial from-[#111] via-[#0a0a0a] to-[#000] opacity-70 z-0 pointer-events-none shimmer-fade" />

                {/* Main Content Layer */}
                <div className="relative z-10">
                    {children}
                </div>
            </div>


            {/* sticky bottom-0  */}
        </Layout>

        <Footer className="bg-black border-t border-gray-800 py-12 px-4 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            
            {/* Left Side: Branding & Copyright */}
            <div className="flex flex-col items-center md:items-start gap-2">
            <div className="font-mono text-sm text-white font-bold tracking-tighter">
                OREOLUWA IBIKUNLE <span className="text-[#58A6FF]">MBBS</span>
            </div>
            <p className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">
                © 2026 Designed & Built by Oreoluwa
            </p>
            </div>

            {/* Center: Social Links with Hover Effects */}
            <div className="flex items-center gap-8">
            <Link href="https://www.github.com/Oreoluwaibk" target="_blank" className="group">
                <GithubOutlined className="text-xl text-gray-400 group-hover:text-[#58A6FF] transition-all transform group-hover:-translate-y-1" />
            </Link>
            
            <Link href="https://www.linkedin.com/in/oreoluwa-ibikunle-306761158" target="_blank" className="group">
                <LinkedinFilled className="text-xl text-gray-400 group-hover:text-[#58A6FF] transition-all transform group-hover:-translate-y-1" />
            </Link>

            <Link href="https://wa.me/+2348132088506" target="_blank" className="group">
                <WhatsAppOutlined className="text-xl text-gray-400 group-hover:text-[#58A6FF] transition-all transform group-hover:-translate-y-1" />
            </Link>

            <Link href="https://www.instagram.com/oreoluwaibk" target="_blank" className="group">
                <InstagramFilled className="text-xl text-gray-400 group-hover:text-[#58A6FF] transition-all transform group-hover:-translate-y-1" />
            </Link>
            </div>

            {/* Right Side: Tech Stack Credit */}
            <div className="hidden lg:flex flex-col items-end">
            <p className="text-gray-500 text-[10px] font-mono uppercase tracking-widest mb-1">Built with</p>
            <div className="flex gap-3 text-gray-400 text-xs font-mono">
                <span>Next.js</span>
                <span className="text-gray-800">/</span>
                <span>TypeScript</span>
                <span className="text-gray-800">/</span>
                <span>Framer Motion</span>
            </div>
            </div>
        </div>
        </Footer>
    </Layout>
    
  );
});

export default Container;
