"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // Detect if there is a hash in the URL on mount/load
        const hash = window.location.hash;
        if (hash) {
            const targetId = hash.replace("#", "");
            const element = document.getElementById(targetId);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                    setActiveSection(targetId);
                }, 100);
            }
            // Clean up hash from URL immediately
            window.history.replaceState(null, "", window.location.pathname);
        }
    }, [pathname]);

    useEffect(() => {
        if (pathname === "/why-us") {
            setActiveSection("why-us");
            return;
        }
        if (pathname === "/iletisime-gec") {
            setActiveSection("iletisime-gec");
            return;
        }
        if (pathname !== "/") {
            setActiveSection("");
            return;
        }

        const sections = ["why-us", "projects", "testimonials", "contact"];
        const observers = sections.map((id) => {
            const el = document.getElementById(id);
            if (!el) return null;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id);
                    }
                },
                {
                    rootMargin: "-30% 0px -50% 0px",
                }
            );
            observer.observe(el);
            return { observer, el };
        });

        const handleScrollCheck = () => {
            if (window.scrollY < 100) {
                setActiveSection("");
            }
        };
        window.addEventListener("scroll", handleScrollCheck);

        return () => {
            observers.forEach((obs) => {
                if (obs) {
                    obs.observer.unobserve(obs.el);
                }
            });
            window.removeEventListener("scroll", handleScrollCheck);
        };
    }, [pathname]);

    const isActive = (section: string) => {
        if (section === "why-us") return activeSection === "why-us";
        if (section === "projects") return activeSection === "projects";
        if (section === "testimonials") return activeSection === "testimonials";
        if (section === "iletisime-gec") return activeSection === "iletisime-gec" || activeSection === "contact";
        return false;
    };

    const getLinkClass = (section: string) => {
        const active = isActive(section);
        return `font-bold text-sm uppercase tracking-wider transition-all duration-200 border-b-2 pb-0.5 ${
            active 
                ? "text-primary-container border-primary-container" 
                : "text-slate-300 border-transparent hover:text-white hover:border-white/30"
        }`;
    };

    const getMobileLinkClass = (section: string) => {
        const active = isActive(section);
        return `text-2xl font-headline font-bold transition-colors ${
            active ? "text-primary" : "text-white"
        }`;
    };

    const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("/#") || href.startsWith("#")) {
            const targetId = href.split("#")[1];
            if (pathname === "/") {
                e.preventDefault();
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    setActiveSection(targetId);
                }
            }
        }
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrolled ? "bg-[#121027]/80 backdrop-blur-xl py-3 border-b border-white/5 shadow-lg shadow-black/10" : "bg-transparent py-5 md:py-6"
        }`}>
            <div className="flex justify-between items-center w-full px-6 md:px-12 max-w-7xl mx-auto font-headline tracking-tight">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                    Virelix
                </Link>

                <div className="hidden md:flex gap-10 items-center">
                    <Link href="/why-us" className={getLinkClass("why-us")}>
                        Neden Biz?
                    </Link>
                    <Link href="/#projects" className={getLinkClass("projects")} onClick={(e) => handleNavLinkClick(e, "/#projects")}>
                        Projeler
                    </Link>
                    <Link href="/#testimonials" className={getLinkClass("testimonials")} onClick={(e) => handleNavLinkClick(e, "/#testimonials")}>
                        Referanslar
                    </Link>
                    <Link href="/iletisime-gec" className={getLinkClass("iletisime-gec")}>
                        İletişim
                    </Link>
                </div>

                <div className="flex items-center gap-6">
                    <Link href="/iletisime-gec" className="hidden sm:block bg-primary-container text-white px-7 py-2.5 rounded-xl font-bold hover:scale-95 duration-200 ease-in-out transition-all shadow-lg shadow-primary-container/20 text-sm">
                        İletişime Geç
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
                        <Link onClick={() => setMobileMenuOpen(false)} href="/why-us" className={getMobileLinkClass("why-us")}>Neden Biz?</Link>
                        <Link onClick={(e) => { setMobileMenuOpen(false); handleNavLinkClick(e, "/#projects"); }} href="/#projects" className={getMobileLinkClass("projects")}>Projeler</Link>
                        <Link onClick={(e) => { setMobileMenuOpen(false); handleNavLinkClick(e, "/#testimonials"); }} href="/#testimonials" className={getMobileLinkClass("testimonials")}>Referanslar</Link>
                        <Link onClick={() => setMobileMenuOpen(false)} href="/iletisime-gec" className={getMobileLinkClass("iletisime-gec")}>İletişim</Link>
                        <Link href="/iletisime-gec" onClick={() => setMobileMenuOpen(false)} className="bg-primary-container text-white py-5 rounded-2xl font-bold text-center text-lg mt-4">İletişime Geç</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
