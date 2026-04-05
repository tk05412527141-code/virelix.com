"use client";

import React from "react";
import { motion } from "framer-motion";

export const CTA = () => {
  return (
    <section className="py-24 px-8 relative z-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-primary-container to-[#5a00c6] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary-container/20 group"
      >
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-white mb-8 tracking-tighter leading-tight">
            Dönüşümünüzü Bugün Başlatın
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-xl mb-10 font-medium">
            İşletmenizin yapay zeka potansiyelini keşfetmek için uzmanlarımızla bir görüşme planlayın.
          </p>
          <button className="bg-white text-primary-container px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-2xl active:scale-95 duration-200">
            Hemen Ücretsiz Danışmanlık Alın
          </button>
        </div>

        {/* Abstract patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="10" cy="10" fill="white" r="30"></circle>
            <circle cx="90" cy="90" fill="white" r="40"></circle>
            <path d="M0,100 L100,0 L100,100 Z" fill="white" opacity="0.1" />
          </svg>
        </div>
        
        {/* Glow Effects */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-container/40 rounded-full blur-[120px] animate-pulse delay-500"></div>
      </motion.div>
    </section>
  );
};
