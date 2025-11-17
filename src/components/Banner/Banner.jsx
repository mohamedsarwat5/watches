import { motion } from 'framer-motion';
import React from 'react';
import w2 from '/w2.png';
import layer from '/layer.png';

export default function Banner() {

    return (

        <div className=' bg-[#1b1b1b] lg:h-screen h-[400px] flex items-center justify-center text-center w-full relative overflow-hidden'>
            <img className='absolute lg:w-[600px] w-[250px] -translate-y-4 z-10' src={w2} alt="Watch" />
            <h2 className='font-bold banner text-center mx-auto uppercase text-[18vw] lg:text-[18vw] '>Chronos</h2>
            <img className=' w-full absolute bottom-10 lg:-bottom-32 z-20' src={layer} alt="" />
        </div>
    );
}