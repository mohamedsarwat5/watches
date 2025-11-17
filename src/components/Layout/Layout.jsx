import { motion } from 'framer-motion';
import React, { use, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Layout() {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}