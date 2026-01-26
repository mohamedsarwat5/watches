import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import screen from "/screen.png"
import bgmobile from '/bgmobile.jpg';
import bgscreen from "/bgscreen.webp"
import bgscreen1 from "/bg.jpg"
import layer from '/layer.png';
import Banner from '../Banner/Banner';
import Details from '../Details/Details';
import BackgroundVideo from '../BackgroundVideo/BackgroundVideo';
import Watches from '../Watches/Watches';
import { Typewriter } from 'react-simple-typewriter';
import { NavLink } from 'react-router-dom';
import Testimonies from '../Testimonies/Testimonies';

export default function Home() {
    const [loaded, setLoaded] = useState(false)
    const videoRef = useRef(null)

    const [showP, setShowP] = useState(false);
    useEffect(() => {

        const video = videoRef.current
        if (!video) return;

        const handleLoaded = () => setLoaded(true);
        video.addEventListener("loadeddata", handleLoaded)
        return () => video.removeEventListener("loadeddata", handleLoaded)
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowP(true);
        }, 2600);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* <div className=' fixed inset-0 bg-gray-900 z-50 box'></div> */}
            <section className="relative min-h-dvh overflow-hidden w-full bg-fixed ">
                {/* <BackgroundVideo /> */}
                <div className='absolute inset-0 bg-black/25 z-40'></div>
                <img
                    src={bgscreen}
                    className="absolute inset-0 w-full h-full object-cover bg-fixed hidden lg:block "
                    alt=""
                />
                <img
                    src={bgmobile}
                    className="absolute inset-0 w-full h-full object-cover  lg:hidden"
                    alt=""
                />
                <div className=' text-white z-50 absolute lg:left-16 lg:bottom-16 left-4 bottom-4 '>
                    <h2
                        className=' font-semibold lg:mb-4 mb-2 lg:text-[36px] text-xl uppercase whitespace-pre-line'>
                        <Typewriter
                            words={["Timeless Elegance on\nYour Wrists"]}
                            loop={1}
                            typeSpeed={70}
                            deleteSpeed={0}

                        />
                    </h2>
                    {showP && (
                        <p className="text-sm lg:text-xl whitespace-pre-line">
                            <Typewriter
                                words={[
                                    "Discover watches crafted with precision and\npassion, where every second tells a story",
                                ]}
                                loop={1}
                                typeSpeed={40}
                                deleteSpeed={0}
                            />
                        </p>
                    )}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: .5, delay: 6.5 }}
                    >
                        <NavLink
                            to={"/watches"}
                            className='bg-white/5 cursor-pointer border backdrop-blur-xl py-2 px-3 lg:px-9 lg:py-2 text-sm rounded-lg mt-3 inline-block'>
                            Explore Collection
                        </NavLink>
                    </motion.div>
                </div>

            </section>
            <Banner />
            <Details />
            <Watches />
            <Testimonies />
        </>
    );
}