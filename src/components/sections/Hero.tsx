"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export const Hero = () => {
    return (
        <Section className="relative min-h-[90vh] flex items-center pt-32 md:pt-40">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary/30 to-transparent blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-secondary/30 to-transparent blur-3xl animate-pulse-slow delay-1000" />
            </div>

            <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4"
                >
                    Yeni Nesil Yapay Zeka Platformu
                </motion.div>

                <motion.h1
                    className="text-6xl md:text-8xl font-bold font-space leading-tight tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Dijital Geleceği <br />
                    <span className="text-gradient">İnşa Ediyoruz.</span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Yarının vizyonerleri için ölçeklenebilir yapay zeka sistemleri, yüksek performanslı uygulamalar ve yeni nesil dijital altyapılar tasarlıyoruz.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Button size="lg" variant="primary">Çalışmalarımızı İnceleyin</Button>
                    <Button size="lg" variant="outline">Proje Başlatın</Button>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
                <div className="w-1 h-12 rounded-full border border-white/20 flex flex-col items-center">
                    <div className="w-1 h-3 bg-white/40 rounded-full mt-1 animate-ping" />
                </div>
            </div>
        </Section>
    );
};
