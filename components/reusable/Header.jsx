import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { newLogoNoBackground, CancelIcon, MenuIcon } from '@/asset/logos';
import { Button, Tooltip } from 'antd';
import $ from "jquery";
// import { Resume } from '../../asset/pdfs/';


// const Button = antd.Button;


const Header = ( { active }) => {
    const [ showMenu, setShowMenu ] = useState(false);
    const handleShowMenu = () => {
        setShowMenu(!showMenu);
        $("#menu").slideToggle(1000); 
    }

    // const downLoadPdf = () => {
    //         const pdfUrl = Resume;
    //         const link = document.createElement("a");
    //         link.href = pdfUrl;
    //         link.download = "document.pdf"; // specify the filename
    //         document.body.appendChild(link);
    //         link.click();
    //         document.body.removeChild(link);
    //         document.getElementById('my_iframe').src = "";
    // }

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 md:px-20 pt-10 md:pt-16 pb-4 relative">
        <div className="logo flex items-center justify-between pb-4">
            <div>
                <Link href="/">
                    <Image
                        src={newLogoNoBackground}
                        width={100}
                        height={100}
                        alt="oreoluwa's logo image"
                    />
                </Link>
            </div>
            <div className="md:hidden">
                {!showMenu 
                    && <Image 
                            src={MenuIcon} 
                            alt="Menu Icon" 
                            className="cursor-pointer" 
                            width={40} 
                            height={40} 
                            onClick={() => handleShowMenu()}
                />}
                {showMenu 
                    && <Image 
                            src={CancelIcon} 
                            alt="cancel Icon" 
                            width={40} 
                            height={40}
                            onClick={() => handleShowMenu()}
                />}
            </div>
        </div>


        <nav className={`links mr-12 hidden md:block`}>
            <ul className="flex gap-4 pt-0 items-center justify-around font-medium">
                <li >
                    <Link href='/about'>
                        <span className={`menu-link ${active === "about" && 'active'}`}>About</span>
                    </Link>
                </li>
                <li className="ml-5">
                    <Link href='/projects'>
                        <span className={`menu-link ${active === "experience" && 'active'}`}>Experience</span>
                    </Link>
                </li>
                <li className="ml-5">
                    <Link href='/contact'>
                        <span className={`menu-link ${active === "contact" && 'active'}`}>Contact</span>
                    </Link>
                </li>
            
                <li className="ml-5">
                    <a href="/software_engineer.pdf" download="my resume">
                        <Tooltip 
                            title="click here to download my full resume" 
                            trigger="hover"
                            overlayInnerStyle={{backgroundColor: "#a3847f"}}
                            mouseEnterDelay={0.5}
                            mouseLeaveDelay={0.5}
                            color='#a3847f'
                        >
                            <Button type="primary" className="flex justify-center items-center h-10 w-36 button">
                                Resume
                            </Button>
                        </Tooltip>
                    </a>
                </li>
            </ul>
        </nav>


        <nav className="links md:mr-12 transition-opacity duration-[5s] hidden opacity-100 bg-sec-3 p-4 md:hidden slideDown" id="menu">
            <ul className="flex flex-col gap-6 md:pt-0 md:flex-row md:items-center md:justify-around font-medium">
                <li className='ml-8 md:ml-0'>
                    <Link href='/about'>
                        <span className={`menu-link ${active === "about" && 'active'}`}>About</span>
                    </Link>
                </li>
                <li className="ml-8 md:ml-5">
                    <Link href='/projects'>
                        <span className={`menu-link ${active === "experience" && 'active'}`}>Experience</span>
                    </Link>
                </li>
                <li className="ml-8 md:ml-5">
                    <Link href='/contact'>
                        <span className={`menu-link ${active === "contact" && 'active'}`}>Contact</span>
                    </Link>
                </li>
            
                <li className="ml-8 md:ml-5">
                    <Tooltip 
                        title="click to download resume" 
                        trigger={["focus", "hover", "click", "contextMenu"]}
                        overlayInnerStyle={{backgroundColor: "#a3847f"}}
                        mouseEnterDelay={0.5}
                        mouseLeaveDelay={0.5}
                        color='#a3847f'
                    >
                        <a href="/software_engineer.pdf" download="my resume">
                            <Button 
                                // onClick={downLoadPdf} 
                                type="primary" 
                                className="flex justify-center items-center h-10 w-36 button"
                            >
                                Resume
                            </Button>
                        </a>
                    </Tooltip>
                </li>

                {/* <li className="ml-5">
                    <a href='#'>
                        <Button type='primary' className="flex-center h-12">
                            Resume
                        </Button>
                    </a>
                </li> */}
                
            </ul>
        </nav>
    </div>
  )
}

export default Header;