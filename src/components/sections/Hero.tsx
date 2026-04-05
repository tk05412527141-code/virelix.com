"use client";

import React from "react";
import Image from "next/image";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-surface">
            {/* Background Image & Overlays */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface to-surface z-10"></div>
                <div className="relative w-full h-full opacity-40 mix-blend-screen bg-no-repeat bg-cover">
                    <Image 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_RRs8FhVqhjvLSJWIUSCsgyEoUr66zkDFBMuT2gIhLzs9e8KgE0J-riv7atzwgfpNlCwreq50l3OTKjFUL1Vch8oUVbj9qZzqMiL7kvw3kL88yYYA2E9hQdPSe956BxNOFT4SzcNS3jxhGpfSn2KNMepNAnlGqmlgNUeHK3zUcbksztkFuxmEzbCTlqQequre6N_KWH0YsAuTzuBxlk2sVGJvOk21l9_4ml3vobwNro6LyfHrFCGwE8iJ0VQFu-uQQD4aTRO6pTA"
                        alt="Abstract neural network"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
            </div>

            <div className="relative z-10 px-6 md:px-12 max-w-[1920px] mx-auto w-full grid grid-cols-12 gap-8 font-headline">
                <div className="col-span-12 lg:col-span-8">
                    <h1 className="text-[4rem] md:text-[7rem] lg:text-[8rem] font-bold leading-[1] tracking-tighter text-white mb-8">
                        Zekayı <br/>
                        <span className="text-primary-container inline-block animate-pulse">Güçlendiriyoruz</span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed font-body font-medium">
                        Merkezi olmayan sinirsel ağlar üzerinden yeni nesil yapay zeka altyapısını inşa ediyoruz. 
                        Verimliliği en üst düzeye çıkarın ve geleceği bugün şekillendiren protokollerle tanışın.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <button className="px-10 py-5 bg-primary-container text-white rounded-2xl font-bold text-xl hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-2xl shadow-primary-container/40 group">
                            Çekirdeği Başlat 
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">rocket_launch</span>
                        </button>
                        <button className="px-10 py-5 bg-surface-container-highest text-primary rounded-2xl font-bold text-xl hover:bg-surface-container-high transition-all border border-white/5">
                            Dokümantasyon
                        </button>
                    </div>
                </div>
            </div>

            {/* Decorative Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-50">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">Scroll</span>
                <div className="w-px h-16 bg-gradient-to-b from-primary-container to-transparent"></div>
            </div>
        </section>
    );
};
