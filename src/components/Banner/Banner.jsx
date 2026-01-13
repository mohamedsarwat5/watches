import { motion } from 'framer-motion';
import React from 'react';
import w2 from '/w2.png';
import line from '/line.png';
import line2 from '/line2.png';
import layer from '/layer.png';

export default function Banner() {

    return (

        <div className=' bg-main lg:h-screen h-[400px] flex items-center justify-center  w-full relative overflow-hidden '>
            {/* <img src={layer}
                className='absolute -top-28  left-0 z-30  '
                alt="" /> */}
            <motion.img
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: .5, delay: 1 }}
                className=' absolute lg:left-[420px] lg:top-[120px] left-[30px] top-[50px] w-[110px] z-20 lg:w-[180px]' src={line2} alt="" />
            <motion.h3
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: .5, delay: 1 }}
                className='text-white absolute lg:left-[350px] lg:top-[100px] left-5 top-[25px]'>
                <span className='block mb-2'>200+</span>
                <span className='font-extralight opacity-65'>Craftsmanship</span>
            </motion.h3>
            <motion.img
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className='absolute lg:w-[800px] w-[350px] -translate-y-4 z-10' src={w2} alt="Watch" />
            <motion.img
                initial={{ x: 150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: .5, delay: 1 }}
                className=' absolute right-[100px] bottom-40 lg:right-[580px] lg:bottom-[300px] w-20 lg:w-[140px] z-20 ' src={line} alt="" />
            <motion.h3
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: .5, delay: 1 }}
                className='text-white absolute lg:right-[430px] lg:top-[420px] right-2.5 top-[210px] z-50'>
                <span className='block mb-2'>100%</span>
                <span className='font-extralight opacity-65'>Water Resistance</span>
            </motion.h3>

            <h2 className='font-bold banner text-center mx-auto uppercase text-[18vw] lg:text-[18vw] '>Chronos</h2>
            {/* <img className=' w-full absolute bottom-10 lg:-bottom-32 z-20' src={layer} alt="" /> */}
        </div>
    );
}