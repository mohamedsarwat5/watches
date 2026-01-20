import { motion } from 'framer-motion';
import React from 'react';
import logo from '/logo.png';

export default function Footer() {

    return (
        <div className='font-poppins bg-main p-4 '>
            <div className='grid gap-y-3 lg:gap-0 lg:grid-cols-12 grid-cols-1  text-white/70  border border-main/25 rounded-lg lg:w-11/12 lg:h-[200px] p-4 mx-auto bg-[#323232]'>
                <div className='col-span-1  lg:col-span-2 lg:row-span-2 w-full h-full flex items-center justify-center border-r border-main'>
                    <img className='w-36' src={logo} alt="" />
                </div>
                <div className='col-span-1 lg:col-span-5 hidden lg:flex flex-col lg:flex-row items-center justify-center h-full w-full space-x-3 border-r border-b border-main'>
                    <h4>Our World</h4>
                    <h4>Watches</h4>
                    <h4>Contact Us</h4>
                    <h4>Testimonies</h4>
                    <h4>Tracking</h4>
                </div>
                <div className='col-span-1 lg:col-span-5 flex items-center justify-center font-bold border-b border-main order-1 lg:order-0'>
                    <h2>Chronos@gmail.com</h2>
                </div>
                <div className='col-span-1 lg:col-span-3 hidden lg:flex items-center justify-center border-r border-main'>
                    <h2> <i className='fa-solid fa-pen text-xs'></i> Services</h2>
                </div>
                <div className='col-span-1 lg:col-span-4 flex items-center justify-center space-x-3 border-r border-main'>
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
                <div className='col-span-1 lg:col-span-3 flex items-center justify-center text-sm order-2 lg:order-0'>
                    <h2>© 2025 Sakr-Soft. All rights reserved</h2>
                </div>
            </div>
        </div>
    );
}