"use client";

import React from "react";

export const Footer = () => {
    return (
        <footer className="bg-[#0D0B22] w-full mt-24 border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-16 max-w-[1920px] mx-auto w-full">
                <div className="mb-8 md:mb-0 text-center md:text-left">
                    <div className="text-xl font-bold text-white font-headline mb-2 tracking-tighter">Virelix</div>
                    <p className="font-body leading-relaxed text-sm text-slate-500">
                        © 2026 Virelix AI Systems. Her hakkı saklıdır.
                    </p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-8 md:gap-10">
                    <a className="text-slate-500 font-body text-sm hover:text-white transition-all underline-offset-4 hover:underline" href="/gizlilik-politikasi">Gizlilik Politikası</a>
                    <a className="text-slate-500 font-body text-sm hover:text-white transition-all underline-offset-4 hover:underline" href="/kullanim-kosullari">Kullanım Koşulları</a>
                    <a className="text-slate-500 font-body text-sm hover:text-white transition-all underline-offset-4 hover:underline" href="#">Güvenlik</a>
                    <a className="text-slate-500 font-body text-sm hover:text-white transition-all underline-offset-4 hover:underline" href="#">Sistem Durumu</a>
                </div>
                
                <div className="mt-8 md:mt-0 flex gap-6">
                    <span className="material-symbols-outlined text-slate-500 hover:text-primary-container cursor-pointer transition-all hover:scale-110" title="Public">public</span>
                    <span className="material-symbols-outlined text-slate-500 hover:text-primary-container cursor-pointer transition-all hover:scale-110" title="Terminal">terminal</span>
                    <span className="material-symbols-outlined text-slate-500 hover:text-primary-container cursor-pointer transition-all hover:scale-110" title="Code">code</span>
                </div>
            </div>
        </footer>
    );
};
