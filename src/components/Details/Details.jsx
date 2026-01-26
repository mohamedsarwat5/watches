import React from 'react';
import Header from '../../Header/Header';
import comp from '/comp.png';
import { motion } from 'framer-motion';
import Space from '../Space/Space';

export default function Details() {

    const text = [
        { text1: 'The Anti-Scratch Shield', text2: 'A durable sapphire crystal protecting the dial with exceptional scratch resistance' },
        { text1: 'The Endurance Chassis', text2: 'A 316L stainless-steel body with matte black PVD coating for long-lasting strength' },
        { text1: 'The Silent Time Canvas', text2: 'A deep black, minimalist dial designed for clarity and timeless elegance' },
        { text1: 'The Kinetic Pointers', text2: 'Precision-crafted hour, minute, and second hands in polished black or gunmetal' },
        { text1: 'The Mechanical Command', text2: 'A ridged crown engineered for effortless time adjustment with refined detailing.' },
        { text1: 'The Dark Cohesion Band', text2: 'A durable metal bracelet with brushed charcoal links for a cohesive, modern finish.' },
    ]

    return (<>
    <Space />
        <div className=' min-h-dvh w-full overflow-hidden bg-main lg:px-20 relative'>
            <h2 className='font-bold banner text-center mx-auto uppercase text-[18vw] lg:text-[18vw] absolute lg:-top-[100px] -top-6 left-1/2 -translate-x-1/2 '>Details</h2>

            <Header className="text-white" text={`details`} desc={`Crafted with purpose and perfection.`} desc2={`Every detail crafted with intention, purpose, and perfection.`} />
            <div className='flex flex-col lg:flex-row items-center justify-between lg:py-10 py-4 px-4'>
                <div className='text-white/75 flex  flex-col space-y-8'>
                    {text.slice(0, 3).map(((item, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .9, delay: i * 0.2 }}
                            className='space-y-1' key={i}>
                            <h2>{item.text1}</h2>
                            <h2 className='text-xs'>{item.text2}</h2>
                        </motion.div>
                    )))}
                </div>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img src={comp} alt="" />
                </motion.div>

                <div className='text-white/75 flex  flex-col space-y-8'>
                    {text.slice(3).map(((item, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .5, delay: i * 0.1 }}
                            className='space-y-1' key={i}>
                            <h2>{item.text1}</h2>
                            <h2 className='text-xs'>{item.text2}</h2>
                        </motion.div>
                    )))}
                </div>

            </div>
        </div>
    </>);
}