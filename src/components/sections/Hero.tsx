"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export const Hero = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    
    // Mouse Tracking - normalized values from -0.5 to 0.5
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth Spring Motion for higher quality feel
    const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

    // 3D Tilt Transforms
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

    // Parallax Transforms (Background moves slightly in opposite direction)
    const translateX = useTransform(mouseXSpring, [-0.5, 0.5], ["20px", "-20px"]);
    const translateY = useTransform(mouseYSpring, [-0.5, 0.5], ["20px", "-20px"]);

    // Content Depth (Moves slightly in the same direction)
    const contentX = useTransform(mouseXSpring, [-0.5, 0.5], ["-10px", "10px"]);
    const contentY = useTransform(mouseYSpring, [-0.5, 0.5], ["-10px", "10px"]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!targetRef.current) return;
        const rect = targetRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        x.set((mouseX / width) - 0.5);
        y.set((mouseY / height) - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section 
            ref={targetRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-surface"
            style={{ perspective: "1200px" }}
        >
            {/* Interactive 3D Background Container */}
            <motion.div 
                style={{ 
                    rotateX, 
                    rotateY, 
                    transformStyle: "preserve-3d" 
                }}
                className="absolute inset-0 z-0 pointer-events-none"
            >
                {/* Background Image with Parallax & Sub-tilt */}
                <motion.div 
                    style={{ 
                        x: translateX, 
                        y: translateY, 
                        scale: 1.1,
                        translateZ: "-50px"
                    }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/40 to-surface z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-surface/90 z-10 pointer-events-none"></div>
                    
                    <div className="relative w-full h-full opacity-50 mix-blend-screen">
                        <Image 
                            src="/virelix-hero-bg.jpg"
                            alt="Virelix Sinirsel Ağ Arka Planı"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                </motion.div>

                {/* Spotlight Cursor Follower Effect */}
                <motion.div 
                    style={{
                        background: useTransform(
                            [mouseXSpring, mouseYSpring],
                            ([latestX, latestY]) => `radial-gradient(800px circle at ${(Number(latestX) + 0.5) * 100}% ${(Number(latestY) + 0.5) * 100}%, rgba(124, 58, 237, 0.15), transparent 80%)`
                        )
                    }}
                    className="absolute inset-0 z-11"
                />
            </motion.div>

            {/* Content Layer with Individual Depth */}
            <div className="relative z-10 px-6 md:px-12 max-w-[1920px] mx-auto w-full grid grid-cols-12 gap-8 font-headline">
                <motion.div 
                    style={{ 
                        x: contentX, 
                        y: contentY,
                        translateZ: "50px"
                    }}
                    className="col-span-12 lg:col-span-8"
                >
                    <h1 className="text-[4rem] md:text-[7rem] lg:text-[8rem] font-bold leading-[1] tracking-tighter text-white mb-8">
                        Zekayı <br/>
                        <span className="text-primary-container inline-block animate-pulse">Güçlendiriyoruz</span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed font-body font-medium">
                        Merkezi olmayan sinirsel ağlar üzerinden yeni nesil yapay zeka altyapısını inşa ediyoruz. 
                        Verimliliği en üst düzeye çıkarın ve geleceği bugün şekillendiren protokollerle tanışın.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <button className="px-10 py-5 bg-primary-container text-white rounded-2xl font-bold text-xl hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-2xl shadow-primary-container/40 group">
                            Çekirdeği Başlat 
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">rocket_launch</span>
                        </button>
                        <button className="px-10 py-5 bg-surface-container-highest text-primary rounded-2xl font-bold text-xl hover:bg-surface-container-high transition-all border border-white/5">
                            Dokümantasyon
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-50">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white font-headline">Scroll</span>
                <div className="w-px h-16 bg-gradient-to-b from-primary-container to-transparent"></div>
            </div>
        </section>
    );
};
