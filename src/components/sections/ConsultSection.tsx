"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { submitContactForm } from "@/app/actions/contact";

export const ConsultSection = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [selectedArea, setSelectedArea] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        
        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            vision: `[${selectedArea}] ${formData.get('details') as string}`,
        };

        const result = await submitContactForm(data);
        if (result.success) {
            setStatus('success');
        } else {
            setStatus('error');
        }
    };

    return (
        <section className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Information Panel (Bento Left) */}
                <div className="lg:col-span-5 space-y-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-[2rem] bg-[#1f1d34]/70 backdrop-blur-xl border border-white/5 shadow-2xl relative overflow-hidden group"
                    >
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-container/10 blur-[100px] rounded-full group-hover:bg-primary-container/20 transition-colors"></div>
                        <h3 className="text-2xl font-headline font-bold mb-8 text-white">Uzmanlık Alanlarımız</h3>
                        <ul className="space-y-8 relative z-10">
                            {[
                                { icon: "psychology", title: "Yapay Zeka", desc: "Derin öğrenme modelleri ve nöral ağlar ile verinizi geleceğe hazırlayın." },
                                { icon: "architecture", title: "Mimari", desc: "Ölçeklenebilir, dayanıklı ve yüksek performanslı sistem altyapıları." },
                                { icon: "shield", title: "Güvenlik", desc: "Kuantum sonrası şifreleme ve gelişmiş veri koruma protokolleri." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-5">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-surface-container-highest flex items-center justify-center text-primary-container shadow-inner shadow-white/5">
                                        <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg font-headline">{item.title}</h4>
                                        <p className="text-sm text-on-surface-variant leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-8 rounded-[2rem] bg-surface-container-lowest border border-white/5 aspect-video relative overflow-hidden flex flex-col justify-end group shadow-2xl"
                    >
                        <div className="absolute inset-0 z-0">
                            <Image 
                                className="w-full h-full object-cover opacity-30 mix-blend-luminosity group-hover:scale-110 transition-transform duration-1000" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh_xiRPNzKyzX50mhCQOzWKIwtC5AuoGy83P17QeFG75DFm-0WHJG1qTVK7QqSfqRPsOWNCPZ1Z_ayFAyAnlyGw1BS7dwUn_XUxGYM1ngPhkQAEdgOchRmOmExhfS0NBBUwJbJHw-nx6tW6z8zE_jwfswn9NjA2GIZeDfkOW47udQsZDGdc2iQoJQf4qagN8GTScFt0TOjiCpqSoMFZw6DMVQOsGazQzCZzoQ2O_TdkYESbP-oQI8VMy2w9gjeSh3hoUBm37i9eiM"
                                alt="Global Network Abstract"
                                fill
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
                        </div>
                        <div className="relative z-10">
                            <p className="text-primary-container font-headline font-bold text-xl mb-2">Global Network</p>
                            <p className="text-on-surface-variant text-sm max-w-xs leading-relaxed">Virelix, 20'den fazla ülkede yüksek teknoloji danışmanlığı sunmaktadır.</p>
                        </div>
                    </motion.div>
                </div>

                {/* Form Container (Bento Right) */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-7 bg-[#1f1d34]/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-[0_32px_128px_rgba(0,0,0,0.6)]"
                >
                    {status === 'success' ? (
                        <div className="h-full flex flex-col items-center justify-center text-center py-20 space-y-6">
                            <div className="w-24 h-24 bg-primary-container/20 rounded-full flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined text-primary text-6xl">check_circle</span>
                            </div>
                            <h3 className="text-4xl font-headline font-bold text-white tracking-tight">Talebiniz Alındı!</h3>
                            <p className="text-on-surface-variant text-xl max-w-sm">Uzmanlarımız projenizi incelemeye başladı. En kısa sürede sizinle iletişime geçeceğiz.</p>
                            <button onClick={() => setStatus('idle')} className="bg-primary-container text-white px-10 py-4 rounded-2xl font-bold text-lg mt-8">Yeni Talep Gönder</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-10 group/form">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold ml-1">İsim Soyisim</label>
                                    <input 
                                        name="name"
                                        required
                                        className="w-full bg-[#0d0b22]/50 border border-white/5 rounded-2xl px-5 py-5 text-on-surface placeholder:text-outline-variant/30 focus:ring-2 focus:ring-primary-container/40 focus:bg-surface-container-highest transition-all duration-300 outline-none" 
                                        placeholder="Adınız Soyadınız" 
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold ml-1">E-posta</label>
                                    <input 
                                        name="email"
                                        required
                                        className="w-full bg-[#0d0b22]/50 border border-white/5 rounded-2xl px-5 py-5 text-on-surface placeholder:text-outline-variant/30 focus:ring-2 focus:ring-primary-container/40 focus:bg-surface-container-highest transition-all duration-300 outline-none" 
                                        placeholder="ornek@alanadi.com" 
                                        type="email"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold ml-1">Uzmanlık Alanı Seçiniz</label>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {["Yapay Zeka", "Mimari", "Güvenlik"].map((area) => (
                                        <label key={area} className="cursor-pointer group/radio relative">
                                            <input 
                                                className="hidden peer" 
                                                name="area" 
                                                type="radio" 
                                                checked={selectedArea === area}
                                                onChange={() => setSelectedArea(area)}
                                            />
                                            <div className="p-5 rounded-2xl bg-[#0d0b22]/50 text-slate-400 border border-white/5 peer-checked:border-primary-container peer-checked:bg-primary-container/10 peer-checked:text-white transition-all duration-300 text-center text-sm font-bold tracking-wide shadow-lg">
                                                {area}
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold ml-1">Proje Detayları</label>
                                <textarea 
                                    name="details"
                                    required
                                    className="w-full bg-[#0d0b22]/50 border border-white/5 rounded-2xl px-5 py-5 text-on-surface placeholder:text-outline-variant/30 focus:ring-2 focus:ring-primary-container/40 focus:bg-surface-container-highest transition-all duration-300 outline-none resize-none" 
                                    placeholder="Projenizden ve hedeflerinizden bahsedin..." 
                                    rows={5}
                                ></textarea>
                            </div>

                            <button 
                                disabled={status === 'loading'}
                                className="w-full py-6 bg-gradient-to-r from-primary-container to-[#5a00c6] text-white font-headline font-bold text-xl rounded-2xl shadow-[0_20px_50px_rgba(124,58,237,0.3)] hover:shadow-[0_25px_60px_rgba(124,58,237,0.5)] hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-4 group/btn disabled:opacity-50" 
                                type="submit"
                            >
                                {status === 'loading' ? "Talebiniz Hazırlanıyor..." : "Talebi Gönder"}
                                <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">send</span>
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};
