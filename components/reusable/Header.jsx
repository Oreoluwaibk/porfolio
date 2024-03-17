import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { Button } from 'antd';
import { LogoNoBackground2, newLogoNoBackground } from '@/asset/logos';

// const Button = antd.Button;


const Header = () => {
  return (
    <div className="flex items-center justify-between px-20 pt-16 pb-4">
        <div className="logo">
            <Link href="/">
                <Image
                    src={newLogoNoBackground}
                    width={100}
                    height={100}
                    alt="oreoluwa's logo image"
                />
            </Link>
        </div>
        <nav className="links mr-12">
            <ul className="flex items-center justify-around">
                <li>
                    <Link href='about'>
                        <span>About</span>
                    </Link>
                </li>
                <li className="ml-5">
                    <Link href='/projects'>
                        <span>Projects</span>
                    </Link>
                </li>
                
                <li className="ml-5">
                    <Link href='/contact'>
                        <span>Contact</span>
                    </Link>
                </li>
            
                <li className="ml-5">
                    <Link href='/resume'>
                        <span>Resume</span>
                    </Link>
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