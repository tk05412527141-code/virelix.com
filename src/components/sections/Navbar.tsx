"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
    { name: "AI Çözümleri", href: "#services" },
    { name: "Protokol", href: "#protocol" },
    { name: "Dokümantasyon", href: "#docs" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 w-full z-50 transition-all duration-500",
            isScrolled 
                ? "bg-[#121027]/80 backdrop-blur-xl py-4 shadow-[0_32px_64px_rgba(12,10,39,0.1)]" 
                : "bg-transparent py-6 md:py-8"
        )}>
            <div className="flex justify-between items-center px-6 md:px-12 max-w-[1920px] mx-auto w-full font-headline">
                <div 
                    className="text-2xl font-bold tracking-tighter text-white cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    Virelix
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-12 items-center">
                    {links.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href}
                            className="text-on-surface-variant font-medium tracking-tight hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-container transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-6">
                    <button className="hidden sm:block bg-primary-container text-on-primary-container px-8 py-2.5 rounded-xl font-bold transition-all hover:brightness-110 hover:scale-105 active:scale-95 shadow-lg shadow-primary-container/20">
                        Başlat
                    </button>
                    <button 
                        className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={cn(
                "fixed inset-0 top-[72px] md:top-[88px] bg-[#121027]/95 backdrop-blur-2xl transition-all duration-500 z-40 md:hidden",
                isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
                    {links.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-3xl font-bold text-white hover:text-primary-container transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="w-full bg-primary-container text-on-primary-container py-5 rounded-2xl font-bold text-xl mt-8">
                        Başlat
                    </button>
                </div>
            </div>
        </nav>
    );
};
