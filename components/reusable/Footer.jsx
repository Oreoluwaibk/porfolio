import React from 'react';
import { Facebook, Instagram, Whatsapp, Linkedin, Github } from '@/asset/logos';
import Image from 'next/image';
import Link from 'next/link';


const Footer = () => {
  return (
    <>
        <div className="static bottom-0 px-8 md:px-52 py-9 w-full">
            <ul className="flex justify-between gap-6 md:justify-start items-center w-full">
                <li><Link href='#'>
                    <Image
                        src={Facebook}
                        width={20}
                        height={20}
                        alt="facebook logo"
                    />
                </Link></li>
                <li className="ml-4"><Link href='https://www.instagram.com/oreoluwaibk' target="_blank">
                    <Image
                      src={Instagram}
                      width={20}
                      height={20}
                      alt="instagram logo"
                    />
                </Link></li>
                <li className="ml-4"><Link href='https://www.github.com/Oreoluwaibk' target="_blank">
                    <Image
                      src={Github}
                      width={20}
                      height={20}
                      alt="github logo"
                    />
                </Link></li>
                <li className="ml-4"><Link href="https://www.linkedin.com/in/oreoluwa-ibikunle-306761158" target="_blank">
                    <Image
                      src={Linkedin}
                      width={20}
                      height={20}
                      alt="linkedin logo"
                    />
                </Link></li>
                <li className="ml-4"><Link href='https://wa.me/+2348132088506' target="_blank">
                    <Image
                      src={Whatsapp}
                      width={20}
                      height={20}
                      alt="whatsapp logo"
                    />
                </Link></li>
            </ul>
        </div>
    </>
  )
}

export default Footer