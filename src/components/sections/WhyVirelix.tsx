"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
    {
        title: "Gelişmiş Algoritmalar",
        description: "Piyasadaki en güncel LLM ve derin öğrenme modellerini işinize özel olarak optimize ediyoruz.",
        icon: "psychology",
    },
    {
        title: "Güvenli Altyapı",
        description: "Verileriniz bizimle güvende. Kurumsal seviyede şifreleme ve gizlilik standartlarına tam uyum sağlıyoruz.",
        icon: "verified_user",
    },
    {
        title: "Hızlı Ölçeklendirme",
        description: "Büyüyen iş hacminize anında adapte olabilen esnek bulut tabanlı mimariler sunuyoruz.",
        icon: "rocket_launch",
    },
];

export const WhyVirelix = () => {
    return (
        <section className="py-24 px-8 bg-transparent relative z-10" id="why-us">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-headline font-bold text-white mb-6"
                    >
                        Neden Virelix?
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        Sıradan yazılım çözümlerinin ötesine geçiyoruz. Veri odaklı yaklaşımımızla somut sonuçlar üretiyoruz.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-3xl bg-[#1f1d34]/60 backdrop-blur-md border border-white/5 hover:bg-[#29273f]/80 transition-all group relative overflow-hidden flex flex-col items-start text-left"
                        >
                            <div className="mb-6 h-16 w-16 rounded-2xl bg-primary-container/20 flex items-center justify-center text-primary-container group-hover:scale-110 transition-transform shadow-inner shadow-primary-container/10">
                                <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 font-headline tracking-tight">{feature.title}</h3>
                            <p className="text-on-surface-variant leading-relaxed text-lg font-body">
                                {feature.description}
                            </p>
                            
                            {/* Decorative Icon Background */}
                            <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                                <span className="material-symbols-outlined text-9xl">{feature.icon}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
