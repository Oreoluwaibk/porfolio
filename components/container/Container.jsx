import React, { forwardRef, useState } from 'react';
import { Button, Image, Layout, Tooltip } from "antd";
import Link from 'next/link';
import { newLogoNoBackground } from '@/asset/logos';
import { CloseOutlined, GithubOutlined, InstagramFilled, LinkedinFilled, MenuOutlined, WhatsAppOutlined } from '@ant-design/icons';
import $ from "jquery";
import { AnimatePresence, motion } from 'framer-motion';


const NavItem = ({ href, label, active, mobile }) => (
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
        <Header className='bg-[#001f3f] h-[120px] text-text sticky top-0 z-20 px-4 md:px-20'  >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between px-0 md:pt-[20px] pb-4 relative">
            {/* Logo and mobile menu toggle */}
            <div className="flex items-center justify-between md:justify-start pt-8 md:pt-0 pb-0">
                <Link href="/home">
                    <Image
                        src={newLogoNoBackground.src}
                        width={120}
                        height={50}
                        alt="Oreoluwa's logo"
                        priority
                        preview={false}
                    />
                </Link>

                {/* Mobile menu icon */}
                <div className="md:hidden">
                    {showMenu ? <CloseOutlined onClick={handleShowMenu} className="text-3xl" /> : <MenuOutlined className="text-3xl" onClick={handleShowMenu} />}
                    {/* <Image
                    src={showMenu ? CancelIcon.src : MenuIcon.src}
                    alt={showMenu ? 'Close menu' : 'Open menu'}
                    className="cursor-pointer"
                    width={40}
                    height={40}
                    onClick={handleShowMenu}
                    preview={false}
                    /> */}
                </div>
            </div>

            {/* Desktop nav */}
            <nav className="hidden md:block mr-12 pb-[30px]">
            <ul className="flex gap-4 items-center font-medium">
                <NavItem href="/about" label="About" active={active === 'about'} />
                <NavItem href="/experience" label="Experience" active={active === 'experience'} />
                <NavItem href="/projects" label="Project" active={active === 'projects'} />
                {/* <NavItem href="/contact" label="Contact" active={active === 'contact'} /> */}
                <li>
                    <a href="/resume.pdf" download="my resume">
                        <Tooltip
                        title="Click to download my full resume"
                        color="#001529"
                        overlayInnerStyle={{ backgroundColor: "#001529" }}
                        >
                        <Button type="primary" className="h-10 w-36 button">
                            Resume
                        </Button>
                        </Tooltip>
                    </a>
                </li>
            </ul>
            </nav>

            {/* Mobile nav */}
            <AnimatePresence>
            {showMenu && (
                <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="md:hidden absolute top-full left-0 w-full bg-[#001f3f] p-4 z-50 overflow-hidden"
                id="mobile-menu"
                aria-label="Mobile navigation"
                role="navigation"
                >
                <ul className="flex flex-col gap-6 font-medium items-center pt-6">
                    <NavItem href="/about" label="About" active={active === 'about'} mobile />
                    <NavItem href="/projects" label="Experience" active={active === 'experience'} mobile />
                    {/* <NavItem href="/contact" label="Contact" active={active === 'contact'} mobile /> */}
                    <li>
                        <a href="/resume.pdf" download="my resume">
                            <Tooltip
                            title="Click to download resume"
                            color="#001529"
                            overlayInnerStyle={{ backgroundColor: "#001529" }}
                            >
                            <Button type="primary" className="h-12 w-36 button">
                                Resume
                            </Button>
                            </Tooltip>
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
        <Footer className='bg-[#001f3f] px-20'>
            <div className="flex items-center gap-6">
                <Link href='https://www.instagram.com/oreoluwaibk' target="_blank">
                    <InstagramFilled className='text-xl text-[#fff]' />  
                </Link>

                <Link href='https://www.github.com/Oreoluwaibk' target="_blank">
                    <GithubOutlined className='text-xl text-[#fff]' />
                </Link>
                <Link href="https://www.linkedin.com/in/oreoluwa-ibikunle-306761158" target="_blank">
                    <LinkedinFilled className='text-xl text-[#fff]' />
                </Link>
                <Link href='https://wa.me/+2348132088506' target="_blank">
                    <WhatsAppOutlined className='text-xl text-[#fff]' />
                </Link>
            </div>
        </Footer>
    </Layout>
    
  );
});

export default Container;
