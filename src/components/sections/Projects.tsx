"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
    {
        category: "Finans / Veri Analitiği",
        title: "FinTech AI Optimizer",
        description: "Yatırım stratejilerini %40 daha isabetli hale getiren otonom tahminleme sistemi.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu6C5AHWPM5UCA1sh7huD-KkMomvtVi11Tb739AUH5VFb2xevwt-JfdbJISF2mX4OEKbltfo_8GmSQISKJc5M1JJ8pJ-p2FfWvQ-mHwPPGKNUiC6A2sZj9FWvnspLmvMCFjQjUUaEymU8lIQe0Ho7m9Fb69NqqeMecMTcfpsCOnDf_nLHB-b4Xg-dATkHagpnZKX30G9I1Gk8bncyTuojPWPDlPrDbYQSsb2oCdsGATZe6hKpUo9fBJF7rcefqATAiva3dDGFmWCE",
    },
    {
        category: "SaaS / Saha Yönetimi",
        title: "The Service Editorial",
        description: "Servis yönetimi ve teknisyen takibini uçtan uca dijitalleştiren kapsamlı mobil platform.",
        image: "/projects/service-editorial.jpg",
    },
];

export const Projects = () => {
    return (
        <section className="py-24 px-8 bg-transparent relative z-10" id="projects">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-6">Başarı Hikayelerimiz</h2>
                        <p className="text-on-surface-variant max-w-xl text-lg">Küresel ölçekteki markalar için hayata geçirdiğimiz dijital dönüşüm projeleri.</p>
                    </motion.div>
                    <motion.button 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold flex items-center gap-2 hover:translate-x-2 transition-transform group text-lg"
                    >
                        Tüm Projeleri Gör <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-8 relative border border-white/10 shadow-2xl">
                                <Image 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#121027] via-[#121027]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                                <div className="absolute inset-0 bg-primary-container/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div className="space-y-3">
                                    <span className="text-primary-container font-bold text-sm uppercase tracking-widest">{project.category}</span>
                                    <h4 className="text-3xl font-bold text-white font-headline group-hover:text-primary transition-colors">{project.title}</h4>
                                    <p className="text-on-surface-variant text-lg leading-relaxed">{project.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
