import { motion } from 'framer-motion';
import React from 'react';
import w1 from '/w1.webp';
import w2 from '/w22.webp';
import w3 from '/w3.webp';
import w4 from '/w4.webp';
import w5 from '/w5.webp';
import w6 from '/w6.webp';
import Header from '../../Header/Header';


export default function Watches({id,className}) {

    const watches = [
        { img: w1, price: "320$", desc: "The Eclipse Minimalist Watch | Matte Black Edition" },
        { img: w2, price: "799$", desc: "The Oceanic Diver Luminous Watch Sport Rubber Strap" },
        { img: w3, price: "750$", desc: "The Deep Sea Automatic Diver Black Serina Dial" },
        { img: w4, price: "320$", desc: "The Eclipse Minimalist Watch Matte Black Edition" },
        { img: w5, price: "345$", desc: "The Eclipse Mono Watch	Brushed Black Metal Bracelet)" },
        { img: w6, price: "499$", desc: "The Fugitive Ultra-Black Chronograph Watch	Brushed Metal Bracelet" },
    ];

    return (
        <div className={` min-h-dvh w-full overflow-hidden bg-main lg:px-32 relative py-4`} id={id}>
            <Header text={`Our Watches`} desc={`Made for those who value more`} desc2={"Explore our signature designs for those who value more than time"} />
            <h2 className='font-bold banner whitespace-nowrap text-center mx-auto uppercase text-[11vw] lg:text-[10vw] absolute lg:-top-10 top-0 left-1/2 -translate-x-1/2 '>Our Watches</h2>


            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:mt-20 mt-5 md:mt-10 px-4 '>

                {
                    watches.map((item, i) => (
                        <motion.div key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.2 }}
                        className='bg-[#252525] aspect-square border border-white/15 rounded-lg relative overflow-hidden group'>
                            <img className=' object-cover m-auto group-hover:scale-125 transition-all duration-300' src={item.img} alt="" />
                            <div className='absolute inset-0 bg-black/25 p-4 group-hover:bg-black/50 transition-all duration-300 '>
                                <div className='flex flex-col space-y-3 absolute bottom-4 left-4 right-4'>
                                    <h2 className='text-white lg:text-lg text-md'>{item.desc}</h2>
                                    <div className='flex justify-between items-center '>
                                        <span className='text-white font-semibold lg:text-xl text-lg'>{item.price}</span>
                                        <button className='bg-white/15 text-white border border-white/15 backdrop-blur-xl py-2 px-3 lg:px-6 lg:py-2 text-sm rounded-lg ml-4'>Buy Now <i className='fa-solid fa-cart-shopping text-xs'></i></button>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))
                }

            </div>

        </div>
    );
}