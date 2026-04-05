"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Can Erkin",
        role: "CTO, Nexus Global",
        text: '"Virelix ile çalışmaya başladıktan sonra operasyonel maliyetlerimizde inanılmaz bir düşüş yaşadık. Yapay zeka entegrasyonu beklediğimizden çok daha pürüzsüz geçti."',
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0Sk3ENjAH4sBzom2bD35kwcTHJnDEbYTBWsiwMFKN8m-AuKj4uqkm4hnhfjWIaKzNz-QVbl3La9uU4lxFTYpwSqR3DXwfLokgjLR7qwPbcA1tXpTAER7GspcqECkRYwbC55fS36v6kWREGiWScxhW-5oMmcrzzflZOfCO97__yB7z5LnjSLfweHi1eJrCtjY-IsTroqlLnlNeVKgnJcZrw1mcbMzwBncZ2b8mayMZBrLJaZBE85lNOxJd0F4a0xSO0v1IN2PZa7w",
    },
    {
        name: "Selma Aksoy",
        role: "Ürün Müdürü, TechSolve",
        text: '"Müşteri hizmetleri botumuz artık sadece cevap vermiyor, gerçekten anlıyor ve çözüm üretiyor. Virelix ekibi işinde gerçekten uzman."',
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDNYxXMqnYAWZoLngnb76strz2cBb4SDDm56SoH7YQ48uNIJTa92R8wS7itDdGHPfUcapiS9-boIL102_c7iT2oMkhAHSCclLbWT6v-8rzOFBABKLTzz3P9ilQRb2BvsCpnkARLmhlrt8_w3U7aBmZg8z3NdQLAIK5Ryr4FLurP3eM3sajSPOk4ActF49p-MiU51XHphttm-mkagVkrVLWv-C7csHHoUys7H0rbErokkJu3RtTghq_nZgkHTMy_7su3ucAF1of3Pk",
    },
    {
        name: "Murat Yıldız",
        role: "CEO, StarVentures",
        text: '"Veri güvenliği konusundaki hassasiyetleri bizi en çok etkileyen nokta oldu. Hem çok hızlılar hem de her adımda raporlama yapıyorlar."',
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbLVNbMoa3RPq05DwzOxwTemdwFz4LzspBKoFdSrycblM-yyTu9wL_KrzXB9buk6fRfG7cHOZisQAvu4hlp-fLW7qPHN1C6v8lhl5w5anzYO70WPt4oxWGbfKnsD6vGx4jyy82vHknsTdymqK_Fq0h0994FIHLbht6ciqoeQFxurk3tTu0CggNvDVD28FFcm_V1ATJPFcE5C8KExSUszKMpbtPe9fyNKMwJ_phmIhH3kZyoQTbOKogMFdxok4luJwLI_Gu7aNZWEc",
    },
];

export const Testimonials = () => {
    return (
        <section className="py-24 px-8 bg-transparent relative z-10" id="testimonials">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-headline font-bold text-white mb-6"
                    >
                        Müşterilerimiz Ne Diyor?
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#1f1d34]/60 backdrop-blur-md p-8 rounded-3xl border border-white/5 flex flex-col justify-between group hover:bg-[#29273f]/80 transition-all border-b-primary-container/20 border-b-2"
                        >
                            <div>
                                <div className="flex gap-1 text-primary-container mb-6">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <span key={s} className="material-symbols-outlined text-fill-1 opacity-100" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    ))}
                                </div>
                                <p className="text-on-surface leading-relaxed mb-8 italic text-lg font-body">
                                    {t.text}
                                </p>
                            </div>
                            <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                                <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-primary-container/20">
                                    <Image className="w-full h-full object-cover" src={t.image} alt={t.name} width={56} height={56} />
                                </div>
                                <div>
                                    <div className="text-white font-bold text-lg font-headline">{t.name}</div>
                                    <div className="text-xs text-on-surface-variant font-medium tracking-wide border-l border-primary-container/30 pl-2 ml-1">{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary-container/5 rounded-full blur-[100px] -z-10"></div>
        </section>
    );
};
