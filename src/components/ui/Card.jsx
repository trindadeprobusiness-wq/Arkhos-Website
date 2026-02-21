import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, ...props }) => {
    return (
        <motion.div
            className={`bg-[#1F1F1F] border border-white/5 rounded-lg p-6 relative overflow-hidden group ${className}`}
            whileHover={hover ? { y: -4, borderColor: '#00C896', boxShadow: '0 8px 32px rgba(0,200,150,0.08)' } : {}}
            transition={{ duration: 0.3 }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
