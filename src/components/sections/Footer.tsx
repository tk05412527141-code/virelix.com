import React from "react";

export const Footer = () => {
    return (
        <footer className="py-12 px-6 border-t border-white/5">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-2 opacity-60">
                    <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold text-sm italic">V</div>
                    <span className="font-space font-bold">VIRELIX</span>
                </div>

                <div className="text-white/40 text-sm">
                    © 2026 Virelix Systems. Engineered for Excellence.
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
