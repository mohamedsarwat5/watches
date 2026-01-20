import { motion } from 'framer-motion';
import React from 'react';

export default function Header({ className, text, desc, desc2 }) {




    return (
        <div>
            <motion.h2
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: .5 }}
                className='text-white font-semibold uppercase text-center lg:text-2xl title w-fit mx-auto'>{text}</motion.h2>
            <motion.h2
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: .5, delay: 0.5 }}
                className={`${className} text-white text-center opacity-70 font-light hidden lg:block mt-2 z-50`}>{desc2}</motion.h2>
            <motion.h2
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: .5, delay: 0.5 }}
                className={`${className} text-white text-center opacity-70 font-light block lg:hidden mt-2`}>{desc}</motion.h2>
        </div>
    );
}