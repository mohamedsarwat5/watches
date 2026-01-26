import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/logo.png';
import search from '/search.png';
import user from '/user.png';
import cart from '/cart.png';
import heart from '/heart.png';

export default function Navbar() {

    const menuItems = [
        { name: 'our world', path: '/' },
        { name: 'Watches', path: '/watches' },
        { name: 'testimonies', path: '/testimonies' },
        { name: 'tracking', path: '/details' },
        { name: 'Contact Us', path: '/contact' },
    ];

    const icons = [
        { src: search, alt: 'search' },
        { src: cart, alt: 'cart' },
        { src: heart, alt: 'heart' },
        { src: user, alt: 'user' },
    ]

    const [isOpen, setIsOpen] = useState(false)

    return (<>

        <div className='fixed top-0 w-full z-99 lg:px-14 '>
            <nav className=' flex justify-between items-center py-2 px-4 lg:px-14 bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg '>

                <div className=' w-32  '>
                    <img className=' w-full object-cover h-full shrink-0' src={logo} alt="" />
                </div>

                <ul className='text-white hidden lg:flex items-center space-x-3'>
                    {menuItems.map((link, i) => (
                        <NavLink key={i} to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`uppercase font-semibold link`}
                        >{link.name}</NavLink>
                    ))}
                </ul>

                <div className='hidden lg:flex items-center space-x-4'>
                    {icons.map((icon, i) => (
                        <div key={i} className='bg-white/10 backdrop-blur-lg border border-white/15 rounded-full  p-2'>
                            <img className=' inline-block w-6 h-6 object-cover cursor-pointer' src={icon.src} alt={icon.alt} />
                        </div>
                    ))}
                </div>
                <button onClick={() => setIsOpen(true)} className={`text-white text-xl cursor-pointer ${isOpen ? 'hidden' : 'block lg:hidden'}`}>
                    <i className='fa-solid fa-bars '></i>
                </button>
            </nav>
        </div>

        <div className={`${isOpen ? "translate-x-0" : "translate-x-full"} transition-all duration-300 fixed z-9999 top-0 bottom-0 right-0 w-9/12 bg-white/5 backdrop-blur-lg`}>
            <ul className='text-white flex flex-col justify-center space-y-4 absolute top-20 left-5'>
                {menuItems.map((link, i) => (
                    <NavLink key={i} to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`uppercase font-semibold link`}
                    >{link.name}</NavLink>
                ))}
            </ul>
            <button onClick={() => setIsOpen(false)}>
                <i className='fa-solid fa-xmark text-white text-xl absolute top-9 right-6 cursor-pointer'></i>
            </button>
        </div>

    </>);
}