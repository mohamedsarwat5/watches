import { motion } from 'framer-motion';
import React from 'react';

export default function Footer() {

    return (
        <div className='font-poppins bg-main p-4 '>
            <div className='grid gap-0 grid-cols-12  text-white/70  border border-main/25 rounded-lg lg:w-10/12 h-[200px] mx-auto bg-[#323232]'>
                <div className='col-span-2 row-span-2 w-full h-full flex items-center justify-center border-r border-main'>
                    hello
                </div>
                <div className='col-span-5 flex items-center justify-center h-full w-full space-x-3 border-r border-b border-main'>
                    <h4>Our World</h4>
                    <h4>Watches</h4>
                    <h4>Contact Us</h4>
                    <h4>Testimonies</h4>
                    <h4>Tracking</h4>
                </div>
                <div className='col-span-5 flex items-center justify-center font-bold border-b border-main'>
                    <h2>Chronos@gmail.com</h2>
                </div>
                <div className='col-span-3 flex items-center justify-center border-r border-main'>
                    <h2>Services</h2>
                </div>
                <div className='col-span-4 flex items-center justify-center space-x-3 border-r border-main'>
                    <div className=' w-10 h-10 rounded-full bg-main flex items-center justify-center'>
                        <i className='fa-brands fa-facebook-f'></i>
                    </div>
                    <div className=' w-10 h-10 rounded-full bg-main flex items-center justify-center'>
                        <i className='fa-brands fa-instagram'></i>
                    </div>
                    <div className=' w-10 h-10 rounded-full bg-main flex items-center justify-center'>
                        <i className='fa-brands fa-twitter'></i>
                    </div>
                    <div className=' w-10 h-10 rounded-full bg-main flex items-center justify-center'>
                        <i className="fa-regular fa-envelope"></i>
                    </div>
                </div>
                <div className='col-span-3 flex items-center justify-center text-sm'>
                    <h2>© 2025 Sakr-Soft. All rights reserved</h2>
                </div>
            </div>
        </div>
    );
}