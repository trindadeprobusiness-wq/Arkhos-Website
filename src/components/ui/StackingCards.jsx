import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function StackingCards({ cards }) {
    const containerRef = useRef(null);
    const cardsWrapperRef = useRef(null);

    useGSAP(() => {
        const cardElements = gsap.utils.toArray('.js-stack-card', containerRef.current);
        if (cardElements.length === 0) return;

        // Initialize state of the cards below the first one
        gsap.set(cardElements.slice(1), { yPercent: 120 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: () => `+=${cardElements.length * 150}vh`,
                scrub: 2.5,
                pin: true,
            }
        });

        cardElements.forEach((card, index) => {
            if (index === 0) return;

            // Animate the next card coming up
            tl.to(card, {
                yPercent: 0,
                duration: 1,
                ease: "power3.inOut"
            }, index);

            // Animate earlier cards moving backwards
            cardElements.slice(0, index).forEach((prevCard, prevIndex) => {
                const depth = index - prevIndex;
                const overlay = prevCard.querySelector('.js-card-overlay');

                tl.to(prevCard, {
                    scale: 1 - (0.05 * depth),
                    y: -(20 * depth),
                    duration: 1,
                    ease: "power3.inOut"
                }, index);

                tl.to(overlay, {
                    opacity: 0.3 * depth,
                    duration: 1,
                    ease: "power3.inOut"
                }, index);
            });
        });

        return () => {
            if (tl.scrollTrigger) {
                tl.scrollTrigger.kill();
            }
            tl.kill();
        }
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full h-[100vh] flex items-center justify-center bg-black overflow-hidden">
            <div ref={cardsWrapperRef} className="relative w-[90vw] max-w-[1000px] h-[75vh] max-h-[750px]" style={{ perspective: '1000px' }}>
                {cards.map((item, index) => (
                    <div
                        key={item.id || index}
                        className="js-stack-card absolute top-0 left-0 w-full h-full rounded-[2rem] border border-white/10 overflow-hidden bg-[#111] transform-origin-top will-change-transform shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover z-0"
                        />
                        {/* Overlay with class we modify */}
                        <div className="js-card-overlay absolute inset-0 bg-black opacity-0 z-10 pointer-events-none will-change-opacity"></div>
                        
                        {/* Content Container */}
                        <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none">
                            <div className="max-w-[85%] md:max-w-full pointer-events-auto flex flex-col md:flex-row md:items-end justify-between w-full h-full">
                                <div className="mt-auto">
                                   <div className="flex items-center gap-4 mb-4">
                                        <h3 className="text-3xl lg:text-4xl font-bold font-mono text-[#00C896]/80">
                                            {String(index + 1).padStart(2, "0")}
                                        </h3>
                                        <h2 className="text-3xl md:text-5xl font-['Sora'] font-bold text-white tracking-tight text-wrap balance">
                                            {item.title}
                                        </h2>
                                   </div>
                                    <p className="text-[#F1F1F1]/70 leading-relaxed text-sm md:text-lg max-w-2xl mt-4 hidden md:block">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="mt-4 md:mt-auto block md:hidden">
                                     <p className="text-[#F1F1F1]/70 leading-relaxed text-sm max-w-2xl">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
