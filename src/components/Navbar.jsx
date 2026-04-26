import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';

// Navbar Component
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Soluções', path: '/portfolio' },
        { name: 'Cases', path: '/portfolio' },
        { name: 'Metodologia', path: '/#metodologia' },
        { name: 'Comunidade', path: '/comunidade' },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 h-[80px] flex items-center transition-colors duration-300 border-b
                ${location.pathname.toLowerCase().includes('comunidade')
                    ? 'bg-black border-transparent'
                    : 'bg-black/10 backdrop-blur-lg border-white/5'
                }`}
            >
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <img
                            src="/image-removebg-preview.png"
                            alt="ARKHOS"
                            className="h-10 md:h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(0,200,150,0.15)] transition-transform duration-300 group-hover:scale-105"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-all duration-200 hover:text-[#00C896] relative group ${location.pathname === link.path ? 'text-[#00C896]' : 'text-[#F1F1F1]'
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00C896] transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`} />
                            </Link>
                        ))}
                        <Link to="/orcamentos" className="relative group">
                            <Button variant="outline" className="px-5 py-2 text-sm flex items-center gap-2">
                                Agendar Diagnóstico
                                <span className="w-1.5 h-1.5 rounded-full bg-[#00C896] animate-pulse" />
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-[#F1F1F1] hover:text-[#00C896]"
                        onClick={() => setIsOpen(true)}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] bg-[#040404] flex flex-col items-center justify-center gap-8"
                    >
                        <button
                            className="absolute top-6 right-6 text-[#F1F1F1] hover:text-[#00C896]"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={32} />
                        </button>

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-2xl font-['Sora'] font-semibold text-[#F1F1F1] hover:text-[#00C896] transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <Link to="/orcamentos" onClick={() => setIsOpen(false)}>
                            <Button variant="primary" className="mt-4 flex items-center gap-2">
                                Agendar Diagnóstico
                                <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                            </Button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
