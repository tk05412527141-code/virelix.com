"use client";

import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="py-12 px-6 border-t border-white/5">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div
                    className="flex items-center gap-3 opacity-60 cursor-pointer group hover:opacity-100 transition-opacity"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
                        <Image
                            src="/logo.png"
                            alt="Virelix Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="font-space font-bold">VIRELIX</span>
                </div>

                <div className="text-white/40 text-sm">
                    © 2026 Virelix Sistemleri. Mükemmellik için tasarlandı.
                </div>

                <div className="flex items-center gap-6">
                    {["X", "GitHub", "LinkedIn"].map((social) => (
                        <a key={social} href="#" className="text-white/40 hover:text-primary transition-colors text-sm">
                            {social}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};
