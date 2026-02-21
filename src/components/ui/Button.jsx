import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group";

    const variants = {
        primary: "bg-[#00C896] text-[#040404] hover:bg-[#1BE2AC] shadow-[0_0_12px_rgba(0,200,150,0.2)]",
        secondary: "bg-[#1F1F1F] text-[#F1F1F1] border border-white/10 hover:border-[#00C896] hover:text-[#00C896]",
        outline: "bg-transparent border border-[#00C896] text-[#00C896] hover:bg-[#00C896]/10",
        ghost: "bg-transparent text-[#F1F1F1] hover:text-[#00C896]"
    };

    return (
        <motion.button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">{children}</span>
            {variant === 'primary' && (
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            )}
        </motion.button>
    );
};

export default Button;
