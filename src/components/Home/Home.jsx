import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import screen from "/screen.png"
import layer from '/layer.png';
import Banner from '../Banner/Banner';

export default function Home() {
    const [loaded, setLoaded] = useState(false)
    const videoRef = useRef(null)

    useEffect(() => {

        const video = videoRef.current
        if (!video) return;

        const handleLoaded = () => setLoaded(true);
        video.addEventListener("loadeddata", handleLoaded)
        return () => video.removeEventListener("loadeddata", handleLoaded)
    }, [])

    return (
        <>
            <section className="relative min-h-dvh overflow-hidden w-full">
                {!loaded && <img
                    src={screen}
                    className='absolute inset-0 w-full h-full object-cover z-0'
                    s />}
                <div className='absolute inset-0 w-full h-full bg-black/20 z-20' />
                <img className='absolute lg:-bottom-60 -bottom-[60px]  w-full z-40 right-0' src={layer} alt="" />
                <video
                    ref={videoRef}
                    src="/vid.mp4"
                    autoPlay loop muted playsInline
                    className={`absolute top-0 left-0 h-full w-full  object-cover transition-opacity duration-100 ${loaded ? "opacity-100" : "opacity-0"}`}
                ></video>
                <div className=' text-white z-30 absolute lg:left-16 lg:bottom-16 left-4 bottom-4 '>
                    <h2 className=' font-semibold lg:mb-4 mb-2 lg:text-[32px] text-xl'>Timeless Elegance on Your Wrist</h2>
                    <p className='text-sm'>
                        <span className='block'>Discover watches crafted with precision and </span>
                        passion,where every second tells a story</p>
                    <button className='bg-white/5 border backdrop-blur-xl py-2 px-3 lg:px-4 lg:py-2 text-sm rounded-lg mt-3'>
                        Explore Collection
                    </button>
                </div>
            </section>
            <Banner/>
        </>
    );
}