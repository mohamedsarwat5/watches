import React from 'react';
import Space from '../Space/Space';
import group from "/group.png";
import user from "/user.png";
import email from "/email.png";
import message from "/message.png";
import send from "/send.png";

export default function Contact() {
    
    function handleSubmit(e) {
        e.preventDefault();
        // Handle form submission logic here
    }

    return (
        <>
            <Space />
            <div className=' min-h-dvh w-full overflow-hidden bg-main lg:px-20 relative py-4'>
                <h2 className='font-bold banner whitespace-nowrap text-center mx-auto uppercase text-[11vw] lg:text-[10vw] absolute lg:-top-10 top-0 left-1/2 -translate-x-1/2 '>Contact Us</h2>

                <div className='flex flex-col lg:flex-row lg:mt-16 mt-16 relative  space-x-6'>
                    <div className='flex flex-col lg:w-1/2 w-full text-white px-5'>
                        <h2 className='text-white lg:text-2xl text-xl font-semibold mb-4 title w-fit uppercase'>Speak to the Timekeepers.</h2>
                        <p className='mb-5 mt-2'>Every question has a perfect moment, and we're here for it.</p>
                        <img className='lg:w-[400px] mx-auto' src={group} alt="" />
                    </div>

                    <div className='lg:w-1/2 w-full px-4'>
                        <form onSubmit={handleSubmit} className=" bg-[#333333c0] p-6 rounded-lg lg:mt-0 mt-10  w-full text-white">
                            <div className="mb-5">
                                <label className='text-sm  mb-2 flex items-center ' htmlFor="">
                                    <img className='w-5 mr-1.5' src={user} alt="" />
                                    Your Name</label>
                                <input type="text" placeholder='John Doe' className='border border-white/80 w-full outline-none rounded-lg p-2' />
                            </div>
                            <div className="mb-5">
                                <label className='text-sm  mb-2 flex items-center ' htmlFor="">
                                    <img className='w-5 mr-1.5' src={email} alt="" />
                                    Email Address</label>
                                <input type="email" placeholder='john@example.com' className='border border-white/80 w-full outline-none rounded-lg p-2' />
                            </div>
                            <div className="mb-5">
                                <label className='text-sm  mb-2 flex items-center ' htmlFor="">
                                    <img className='w-5 mr-1.5' src={message} alt="" />
                                    Your Message</label>
                                <textarea type="text" placeholder='Tell us about your inquiry...' className='border h-24 border-white/80 w-full outline-none rounded-lg p-2' />
                            </div>
                            <button type="submit" className='flex  items-center  justify-center  bg-white/15 text-white border border-white/15 backdrop-blur-xl w-full py-2 px-3 lg:px-6 lg:py-2 text-sm rounded-lg'>Buy Now  <img className='w-5 ml-1.5' src={send} alt="" /></button>

                        </form>

                    </div>
                </div>

            </div>
        </>
    );
}