"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function WhyUsPage() {
    return (
        <main className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-white overflow-x-hidden min-h-screen">
            <Navbar />

            <div className="pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto relative z-10">
                {/* Hero Section */}
                <section className="mb-16 md:mb-24">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary text-xs font-bold tracking-[0.2em] uppercase"
                    >
                        Yapay Zeka Liderliği
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-headline text-6xl md:text-8xl font-bold text-white leading-[1.05] tracking-tighter mb-8"
                    >
                        Neden <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-tertiary to-primary-fixed">Virelix?</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-on-surface-variant text-xl md:text-2xl leading-relaxed max-w-2xl font-light"
                    >
                        Geleceğin mimarisini bugünden inşa ediyoruz. Ethereal Architect yaklaşımıyla yapay zekayı sadece bir araç değil, bir vizyon olarak konumluyoruz.
                    </motion.p>
                </section>

                {/* Value Props - Bento Cards */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {[
                        { 
                            title: "Gelişmiş Algoritmalar", 
                            desc: "Derin öğrenme modellerimizle karmaşık verileri saniyeler içinde anlamlı stratejilere dönüştürüyoruz.",
                            icon: "psychology",
                            color: "bg-primary-container/10"
                        },
                        { 
                            title: "Güvenli Altyapı", 
                            desc: "Askeri düzeyde şifreleme ve merkeziyetsiz veri protokolleri ile tam koruma sağlıyoruz.",
                            icon: "shield_lock",
                            color: "bg-secondary-container/10"
                        },
                        { 
                            title: "Hızlı Ölçeklendirme", 
                            desc: "İşletmeniz büyüdükçe altyapımız saniyeler içinde yeni yüklere uyum sağlar, kesintisiz hizmet sunar.",
                            icon: "rocket_launch",
                            color: "bg-tertiary-container/10"
                        }
                    ].map((card, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#1f1d34]/60 backdrop-blur-xl rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group shadow-2xl"
                        >
                            <div className={`absolute -right-4 -top-4 w-32 h-32 ${card.color} rounded-full blur-[80px] transition-all group-hover:scale-110`}></div>
                            <span className="material-symbols-outlined text-primary-container text-4xl mb-6">{card.icon}</span>
                            <h3 className="font-headline text-2xl font-bold mb-4 text-white">{card.title}</h3>
                            <p className="text-on-surface-variant text-lg leading-relaxed">{card.desc}</p>
                        </motion.div>
                    ))}
                </section>

                {/* Performance Metrics */}
                <motion.section 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 bg-surface-container-lowest/80 backdrop-blur-2xl rounded-[3rem] p-10 md:p-16 border border-white/5 shadow-2xl"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-headline font-bold text-primary mb-3">99.9%</div>
                            <div className="text-xs uppercase tracking-[0.4em] text-on-surface-variant font-bold">Uptime Oranı</div>
                        </div>
                        <div className="text-center md:border-l border-white/5">
                            <div className="text-5xl md:text-6xl font-headline font-bold text-primary mb-3">0.02ms</div>
                            <div className="text-xs uppercase tracking-[0.4em] text-on-surface-variant font-bold">Gecikme Süresi</div>
                        </div>
                    </div>
                    <div className="mt-12 pt-12 border-t border-white/5 text-center">
                        <div className="text-5xl md:text-6xl font-headline font-bold text-primary mb-3">500TB+</div>
                        <div className="text-xs uppercase tracking-[0.4em] text-on-surface-variant font-bold">Günlük Veri İşleme</div>
                    </div>
                </motion.section>

                {/* Our Mission: Ethereal Architect */}
                <section className="mb-20 relative px-4">
                    <div className="absolute inset-0 bg-primary-container/5 rounded-[4rem] -m-8 blur-[100px] pointer-events-none"></div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative bg-[#1f1d34]/40 backdrop-blur-md rounded-[3rem] p-10 md:p-16 border border-primary-container/10 shadow-2xl overflow-hidden"
                    >
                        <h2 className="font-headline text-3xl font-bold mb-6 tracking-tight text-white">Misyonumuz: Ethereal Architect</h2>
                        <p className="text-on-surface-variant text-xl leading-[1.8] italic mb-10 max-w-3xl">
                            "Teknolojiyi bir araç değil, bir sanat formu olarak görüyoruz. Karmaşıklığı estetikle birleştirerek dijital bir sığınak yaratıyoruz."
                        </p>
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-container to-tertiary flex items-center justify-center shadow-lg shadow-primary-container/20">
                                <span className="material-symbols-outlined text-white text-2xl">architecture</span>
                            </div>
                            <div>
                                <div className="text-lg font-bold text-white font-headline">Virelix Çekirdek Ekibi</div>
                                <div className="text-sm text-primary-container font-medium tracking-widest uppercase">Vizyon 2025</div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Trust Signals */}
                <section className="mb-8">
                    <h4 className="text-xs uppercase tracking-[0.5em] text-primary font-bold mb-10 text-center opacity-70">Güvenlik Standartlarımız</h4>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 transition-all">
                        {[
                            { icon: "verified_user", name: "ISO 27001" },
                            { icon: "gpp_good", name: "SOC2 Tip II" },
                            { icon: "privacy_tip", name: "GDPR Uyumlu" }
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-3 hover:opacity-100 transition-opacity cursor-default">
                                <span className="material-symbols-outlined text-primary text-2xl">{s.icon}</span>
                                <span className="text-sm font-bold text-white tracking-widest">{s.name}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
