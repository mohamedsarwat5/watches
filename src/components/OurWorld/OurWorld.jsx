import { motion } from 'framer-motion';
import React from 'react';

export default function OurWorld() {

    return (
        <div className='bg-gray-900  h-dvh flex items-center justify-center box'>
            <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 ,delay:2.5}}
            className='text-white text-4xl'>Our World</motion.h2>
        </div>
    );
}