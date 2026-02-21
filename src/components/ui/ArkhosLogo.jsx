import React from 'react';

const ArkhosLogo = ({ className = "w-10 h-10", color = "#00C896" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className={className}
            fill="none"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {/* Ionic Column Capital */}
            <path d="M30 25 C30 20, 20 20, 20 25 C20 30, 30 30, 30 25 Z" /> {/* Left Scroll */}
            <path d="M70 25 C70 20, 80 20, 80 25 C80 30, 70 30, 70 25 Z" /> {/* Right Scroll */}
            <path d="M30 22 L70 22" /> {/* Top bar */}
            <path d="M30 28 L70 28" /> {/* Bottom bar of capital */}

            {/* Column Shaft */}
            <path d="M35 30 L35 75" />
            <path d="M42 30 L42 75" />
            <path d="M50 30 L50 75" />
            <path d="M58 30 L58 75" />
            <path d="M65 30 L65 75" />

            {/* Column Base */}
            <path d="M32 75 L68 75" />
            <path d="M30 78 L70 78" />

            {/* Laurel Wreath - Left */}
            <path d="M20 70 Q 10 60, 15 45" strokeOpacity="0.8" />
            <path d="M15 45 Q 12 50, 18 55" strokeOpacity="0.8" />
            <path d="M20 70 Q 25 65, 22 55" strokeOpacity="0.8" />
            <path d="M25 75 Q 15 80, 50 85" strokeOpacity="0.6" />

            {/* Laurel Wreath - Right */}
            <path d="M80 70 Q 90 60, 85 45" strokeOpacity="0.8" />
            <path d="M85 45 Q 88 50, 82 55" strokeOpacity="0.8" />
            <path d="M80 70 Q 75 65, 78 55" strokeOpacity="0.8" />
            <path d="M75 75 Q 85 80, 50 85" strokeOpacity="0.6" />
        </svg>
    );
};

export default ArkhosLogo;
