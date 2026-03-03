"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

import Image from "next/image";

const links = [
    { name: "Hizmetler", href: "#services" },
    { name: "Projeler", href: "#projects" },
    { name: "Hakkımızda", href: "#about" },
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
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6",
            isScrolled ? "py-4" : "py-8"
        )}>
            <div className={cn(
                "container mx-auto flex items-center justify-between transition-all duration-300",
                isScrolled ? "glass rounded-full px-6 py-2" : "px-0"
            )}>
                <div className="flex items-center gap-3">
                    <div className="relative w-14 h-14">
                        <Image
                            src="/logo.png"
                            alt="Virelix Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-2xl font-black font-space tracking-tight hidden sm:block">VIRELIX</span>
                </div>


                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-medium text-white/60 hover:text-white transition-colors">
                            {link.name}
                        </a>
                    ))}
                    <Button size="sm" variant="primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        Bize Ulaşın
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-24 left-6 right-6 glass rounded-2xl p-8 flex flex-col gap-6 md:hidden"
                    >
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-bold"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button className="w-full" variant="primary" onClick={() => setIsMobileMenuOpen(false)}>
                            İletişime Geçin
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
