import React from 'react';
import { Facebook, Instagram, Whatsapp, Linkedin, Github } from '@/asset/logos';
import Image from 'next/image';


const Footer = () => {
  return (
    <>
        <div className="absolute bottom-0 px-52 py-16">
            <ul className="flex justify-start items-center">
                <li><a href='#'>
                    <Image
                        src={Facebook}
                        width={20}
                        height={20}
                        alt="facebook logo"
                    />
                </a></li>
                <li className="ml-4"><a href='#'>
                    <Image
                      src={Instagram}
                      width={20}
                      height={20}
                      alt="instagram logo"
                    />
                </a></li>
                <li className="ml-4"><a href='#'>
                    <Image
                      src={Github}
                      width={20}
                      height={20}
                      alt="github logo"
                    />
                </a></li>
                <li className="ml-4"><a href='#'>
                    <Image
                      src={Linkedin}
                      width={20}
                      height={20}
                      alt="linkedin logo"
                    />
                </a></li>
                <li className="ml-4"><a href='#'>
                    <Image
                      src={Whatsapp}
                      width={20}
                      height={20}
                      alt="whatsapp logo"
                    />
                </a></li>
            </ul>
        </div>
    </>
  )
}

export default Footer