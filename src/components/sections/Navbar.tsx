"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrolled ? "bg-[#121027]/80 backdrop-blur-xl py-3 border-b border-white/5 shadow-lg shadow-black/10" : "bg-transparent py-5 md:py-6"
        }`}>
            <div className="flex justify-between items-center w-full px-8 md:px-12 max-w-7xl mx-auto font-headline tracking-tight">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                    Virelix
                </Link>

                <div className="hidden md:flex gap-10 items-center">
                    <Link href="/why-us" className="text-slate-300 font-medium hover:text-white transition-colors text-sm uppercase tracking-wider">
                        Neden Biz?
                    </Link>
                    <Link href="/#projects" className="text-slate-300 font-medium hover:text-white transition-colors text-sm uppercase tracking-wider">
                        Projeler
                    </Link>
                    <Link href="/#testimonials" className="text-slate-300 font-medium hover:text-white transition-colors text-sm uppercase tracking-wider">
                        Referanslar
                    </Link>
                    <Link href="/consult" className="text-primary-container font-bold border-b-2 border-primary-container pb-0.5 text-sm uppercase tracking-wider">
                        İletişim
                    </Link>
                </div>

                <div className="flex items-center gap-6">
                    <Link href="/consult" className="hidden sm:block bg-primary-container text-white px-7 py-2.5 rounded-xl font-bold hover:scale-95 duration-200 ease-in-out transition-all shadow-lg shadow-primary-container/20 text-sm">
                        Hemen Başlayın
                    </Link>
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-white focus:outline-none"
                    >
                        <span className="material-symbols-outlined text-3xl">
                            {mobileMenuOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-[#121027]/95 backdrop-blur-2xl border-b border-white/5 p-8 flex flex-col gap-6 md:hidden glass-panel"
                    >
                        <Link onClick={() => setMobileMenuOpen(false)} href="/#why-us" className="text-2xl text-white font-headline font-bold">Neden Biz?</Link>
                        <Link onClick={() => setMobileMenuOpen(false)} href="/#projects" className="text-2xl text-white font-headline font-bold">Projeler</Link>
                        <Link onClick={() => setMobileMenuOpen(false)} href="/#testimonials" className="text-2xl text-white font-headline font-bold">Referanslar</Link>
                        <Link onClick={() => setMobileMenuOpen(false)} href="/#contact" className="text-2xl text-primary font-headline font-bold">İletişim</Link>
                        <Link href="/consult" className="bg-primary-container text-white py-5 rounded-2xl font-bold text-center text-lg mt-4">Hemen Başlayın</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
