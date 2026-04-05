"use client";

import React from "react";
import { motion } from "framer-motion";

export const ConsultHero = () => {
    return (
        <section className="relative pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto text-left z-10 w-full">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary-container text-xs font-bold uppercase tracking-[0.2em] mb-10 shadow-lg"
            >
                <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-container"></span>
                </span>
                Danışmanlık Protokolü
            </motion.div>
            
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-headline font-bold leading-[1.05] tracking-tighter mb-10 max-w-4xl text-white"
            >
                Geleceğinizi <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-tertiary to-primary-fixed block mt-2">
                    Bizimle Şekillendirin
                </span>
            </motion.h1>
            
            <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed font-light font-body"
            >
                Virelix'in derin teknoloji mimarisi ve yapay zeka uzmanlığı ile tanışın. Karmaşık sistemleri optimize etmek için özel stratejiler geliştiriyoruz.
            </motion.p>
            
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
        </section>
    );
};
