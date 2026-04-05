"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { submitContactForm } from "@/app/actions/contact";

export const Contact = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState("");
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            vision: formData.get('vision') as string,
        };

        if (!data.name || !data.email || !data.vision) {
            setStatus('error');
            setErrorMessage("Lütfen tüm alanları doldurun.");
            return;
        }

        const result = await submitContactForm(data);

        if (result.success) {
            setStatus('success');
            formRef.current?.reset();
        } else {
            setStatus('error');
            setErrorMessage(result.error || "Bir hata oluştu.");
        }
    };

    return (
        <section className="py-24 px-8 bg-transparent relative z-10" id="contact">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                {/* Left Side: Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-8">Bizimle İletişime Geçin</h2>
                    <p className="text-on-surface-variant mb-12 text-lg leading-relaxed max-w-lg">
                        Bir projeniz mi var? Veya sadece yapay zekanın size nasıl yardımcı olabileceğini mi merak ediyorsunuz? Kahve içmeye bekleriz.
                    </p>
                    
                    <div className="space-y-8">
                        {[
                            { icon: "mail", title: "E-posta", content: "hello@virelix.ai" },
                            { icon: "call", title: "Telefon", content: "+90 212 999 00 00" },
                            { icon: "location_on", title: "Adres", content: "Levent Plaza, No: 123, Kat: 15\nBeşiktaş, İstanbul" },
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-6 group">
                                <div className="h-14 w-14 rounded-xl bg-[#1f1d34]/80 flex items-center justify-center text-primary-container shrink-0 border border-white/5 group-hover:scale-110 transition-transform shadow-lg">
                                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                </div>
                                <div className="pt-1">
                                    <div className="text-white font-bold text-xl font-headline">{item.title}</div>
                                    <div className="text-on-surface-variant text-lg whitespace-pre-line tracking-wide">{item.content}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#1f1d34]/60 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 to-transparent opacity-50"></div>
                    
                    {status === 'success' ? (
                        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                            <div className="w-20 h-20 bg-primary-container/20 rounded-full flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined text-primary-container text-5xl">check_circle</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white font-headline">Mesaj Alındı!</h3>
                            <p className="text-on-surface-variant text-lg">En kısa sürede sizinle iletişime geçeceğiz.</p>
                            <button 
                                onClick={() => setStatus('idle')}
                                className="bg-primary-container text-white px-8 py-3 rounded-xl font-bold"
                            >
                                Yeni Mesaj Gönder
                            </button>
                        </div>
                    ) : (
                        <form ref={formRef} className="relative z-10 space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest pl-1">Ad Soyad</label>
                                    <input name="name" className="w-full bg-[#0d0b22]/50 border border-white/5 rounded-2xl p-4 text-white focus:ring-2 focus:ring-primary-container focus:bg-[#0d0b22]/80 transition-all outline-none" placeholder="Adınız Soyadınız" type="text" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest pl-1">E-posta</label>
                                    <input name="email" className="w-full bg-[#0d0b22]/50 border border-white/5 rounded-2xl p-4 text-white focus:ring-2 focus:ring-primary-container focus:bg-[#0d0b22]/80 transition-all outline-none" placeholder="E-posta Adresiniz" type="email" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest pl-1">Vizyonunuz</label>
                                <textarea name="vision" className="w-full bg-[#0d0b22]/50 border border-white/5 rounded-2xl p-4 text-white focus:ring-2 focus:ring-primary-container focus:bg-[#0d0b22]/80 transition-all outline-none resize-none" placeholder="Bize nasıl yardımcı olabiliriz?" rows={5} required></textarea>
                            </div>
                            
                            {status === 'error' && (
                                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm flex items-center gap-2">
                                    <span className="material-symbols-outlined">error</span>
                                    {errorMessage}
                                </div>
                            )}

                            <button 
                                disabled={status === 'loading'}
                                className="w-full bg-primary-container hover:scale-[1.02] text-white py-5 rounded-2xl font-bold transition-all text-xl shadow-xl shadow-primary-container/20 group disabled:opacity-50"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    {status === 'loading' ? "Gönderiliyor..." : "Mesajı Gönder"}
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                                </span>
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};
