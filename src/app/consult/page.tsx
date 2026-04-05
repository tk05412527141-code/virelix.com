"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ConsultHero } from "@/components/sections/ConsultHero";
import { ConsultSection } from "@/components/sections/ConsultSection";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function ConsultPage() {
    return (
        <main className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-white overflow-x-hidden min-h-screen">
            {/* Standard Navbar for consistency */}
            <Navbar />

            <div className="relative pt-12">
                <ConsultHero />
                <ConsultSection />
            </div>

            <Footer />

            {/* Mobile Bottom Navigation Bar (Floating) */}
            <motion.nav 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-50 bg-[#1F1D34]/70 backdrop-blur-2xl rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 flex justify-around items-center p-2"
            >
                <Link href="/" className="flex flex-col items-center justify-center text-slate-400 py-3 px-4 hover:bg-white/5 transition-all active:scale-95 duration-200">
                    <span className="material-symbols-outlined text-2xl">insights</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest mt-1">Vision</span>
                </Link>
                <Link href="/" className="flex flex-col items-center justify-center text-slate-400 py-3 px-4 hover:bg-white/5 transition-all active:scale-95 duration-200">
                    <span className="material-symbols-outlined text-2xl">psychology</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest mt-1">AI Solutions</span>
                </Link>
                <Link href="/" className="flex flex-col items-center justify-center text-slate-400 py-3 px-4 hover:bg-white/5 transition-all active:scale-95 duration-200">
                    <span className="material-symbols-outlined text-2xl">hub</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest mt-1">Network</span>
                </Link>
                <Link href="/consult" className="flex flex-col items-center justify-center bg-gradient-to-b from-primary-container to-[#5a00c6] text-white rounded-2xl py-3 px-6 shadow-lg shadow-primary-container/20 active:scale-95 duration-200">
                    <span className="material-symbols-outlined text-2xl">mail</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest mt-1">Consult</span>
                </Link>
            </motion.nav>
        </main>
    );
}
