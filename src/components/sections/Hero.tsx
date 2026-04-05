"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export const Hero = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    
    // Mouse Tracking - normalized values from -0.5 to 0.5
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth Spring Motion for higher quality feel
    const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

    // Content Depth (Moves slightly in the same direction)
    const contentX = useTransform(mouseXSpring, [-0.5, 0.5], ["-15px", "15px"]);
    const contentY = useTransform(mouseYSpring, [-0.5, 0.5], ["-15px", "15px"]);

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
            className="relative min-h-screen flex items-center pt-24 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-8 md:px-12 w-full flex flex-col md:flex-row items-center gap-16 relative z-10">
                {/* Left Content */}
                <motion.div 
                    style={{ x: contentX, y: contentY }}
                    className="w-full md:w-1/2"
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-surface-container-high text-primary text-sm font-medium mb-6">
                        Yapay Zeka Mimarları
                    </span>
                    <h1 className="text-5xl md:text-7xl font-headline font-bold leading-[1.1] mb-8 tracking-tighter text-white">
                        İşletmenizi <br/><span className="text-primary-container">Geleceğe</span> Taşıyın.
                    </h1>
                    <p className="text-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed font-body">
                        Virelix, en karmaşık iş süreçlerinizi akıllı otomasyon ve derin öğrenme algoritmalarıyla optimize eden bir teknoloji ortağıdır.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/consult" className="bg-primary-container hover:scale-105 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary-container/20">
                            Ücretsiz Analiz Al
                        </Link>
                        <button className="bg-surface-container-highest text-primary px-8 py-4 rounded-xl font-bold hover:bg-surface-variant transition-all border border-white/5 backdrop-blur-md">
                            Çözümlerimizi İncele
                        </button>
                    </div>
                </motion.div>

                {/* Right Image Content */}
                <motion.div 
                    style={{ 
                        x: useTransform(mouseXSpring, [-0.5, 0.5], ["10px", "-10px"]), 
                        y: useTransform(mouseYSpring, [-0.5, 0.5], ["10px", "-10px"]) 
                    }}
                    className="w-full md:w-1/2 relative"
                >
                    <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative border border-white/10 group">
                        <Image 
                            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx-upZMfB2v0SEdpyB_hWonrClft3WlXx3R5k5WsnPmthVBW1DYyPRBAeg9v3hUBFo3h7ADXvm7EHZi4zOtMK73kLaVqyFiLQFjQO46ogWMcIqN2Cipg5VJ4rnS6f-aflR4cWmiapWOd27IaeJ4fIu43pNYZlRPis2GKcD0sL3_uuvYQK8C2RlsZWWIrPqybt5Ih3qBhMdoEVWFPsUHCUdAGn-I5i161yOy9J_7BbPNZu2_RbHE86XSL-VV6I353ApGfsTyF8rOKI"
                            alt="Abstract Neural Network Visualization"
                            fill
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/10 to-transparent"></div>
                    </div>

                    {/* Floating Info Card */}
                    <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-6 -left-6 bg-[#1f1d34]/90 p-6 rounded-2xl backdrop-blur-xl shadow-2xl border border-white/10 z-20"
                    >
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-primary-container flex items-center justify-center shadow-lg shadow-primary-container/30">
                                <span className="material-symbols-outlined text-white">trending_up</span>
                            </div>
                            <div>
                                <div className="text-white font-bold text-xl">%140</div>
                                <div className="text-xs text-on-surface-variant">Verimlilik Artışı</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-50">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white font-headline tracking-widest">Scroll</span>
                <div className="w-px h-16 bg-gradient-to-b from-primary-container to-transparent"></div>
            </div>
        </section>
    );
};
