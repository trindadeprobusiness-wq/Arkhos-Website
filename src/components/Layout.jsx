import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Cursor from './Cursor';

const Layout = ({ children }) => {
    const location = useLocation();
    const isComunidade = location.pathname.toLowerCase().includes('comunidade');

    return (
        <div className="flex flex-col min-h-screen text-[#F1F1F1]">
            <Cursor />
            <Navbar />
            <main className={`flex-grow ${isComunidade ? '' : 'pt-[80px]'}`}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
