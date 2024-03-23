import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { newLogoNoBackground } from '@/asset/logos';
import { useRouter } from 'next/router';

const ProgressBar = () => {
    const router = useRouter()
    const [ width, setWidth ] = useState(0);

    useEffect(() => {
        const increaseWidth = () => setWidth((prev) => prev + 1);

        const increaseWidthInterval = setInterval(() => {
            increaseWidth()
        }, 50)

        return () => clearInterval(increaseWidthInterval)
    });

    useEffect(() => {
        width >= 100 && setWidth(100);
        width >= 100 && router.push("/home")
    }, [width, setWidth, router]);

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-2 relative">
        <Image src={newLogoNoBackground} alt='Logo Image' className="drop-down" height={200} width={200} id="image"/>
        <div className="h-1" style={{width: "300px"}}>
            <span 
                className="h-full bg-sec inline-block transition-all duration-300 ease" 
                style={{width: `${width}%`}}
            ></span>
        </div>
    </div>
  )
}

export default ProgressBar