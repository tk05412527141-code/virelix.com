"use client";

import React from "react";

const solutions = [
    {
        title: "Sinirsel Mimari Arama",
        description: "Özel iş yükleriniz için otonom olarak en iyi performansı gösteren katman yapılarını keşfedin ve maliyetleri minimize edin.",
        icon: "search_insights",
        bgIcon: "hub"
    },
    {
        title: "Güvenli Çıkarımlar",
        description: "Verileriniz asla çözülmeden şifrelenmiş alanlarda model çıkarımı gerçekleştirin. Gizlilikten ödün vermeden ölçeklenin.",
        icon: "shield_lock",
        bgIcon: "security"
    },
    {
        title: "Uç Optimizasyonu",
        description: "Modellerinizi doğrudan uç cihazlar (Edge Devices) için optimize ederek en düşük gecikme ve en yüksek verimliliğe ulaşın.",
        icon: "bolt",
        bgIcon: "speed"
    },
];

export const Services = () => {
    return (
        <section id="services" className="py-24 md:py-32 px-6 md:px-12 max-w-[1920px] mx-auto font-headline">
            <div className="mb-16 md:mb-20">
                <span className="text-primary-container font-bold tracking-widest text-sm uppercase block mb-4">Modüller</span>
                <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">Yapay Zeka Çözümleri</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {solutions.map((solution, index) => (
                    <div 
                        key={index} 
                        className="group relative bg-surface-container p-10 rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-white/5 hover:border-primary-container/20"
                    >
                        {/* Background Decorative Icon */}
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                            <span className="material-symbols-outlined text-9xl md:text-[10rem]">{solution.bgIcon}</span>
                        </div>
                        
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-primary-container/20 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                                <span className="material-symbols-outlined text-primary-container text-3xl">{solution.icon}</span>
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-container transition-colors">{solution.title}</h4>
                            <p className="text-on-surface-variant leading-relaxed font-body text-lg">
                                {solution.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
