import React, { useRef, useState } from 'react';

export default function TiltCard({ children, href, className }) {
    const cardRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const div = cardRef.current;
        const rect = div.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const rotateX = (mouseY - height / 2) / height * -20; // Max rotation deg
        const rotateY = (mouseX - width / 2) / width * 20;

        setRotation({ x: rotateX, y: rotateY });
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
        setOpacity(0);
    };

    return (
        <a
            href={href}
            className={`tilt-card-container ${className || ''}`}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)`,
            }}
        >
            <div className="tilt-content">
                {children}
            </div>

            {/* Glossy reflection effect */}
            <div
                className="tilt-glare"
                style={{
                    opacity: opacity,
                    background: `radial-gradient(circle at ${50 - rotation.y * 2}% ${50 - rotation.x * 2}%, rgba(255,255,255,0.2), transparent 50%)`
                }}
            />
        </a>
    );
}
