import React from "react";
import { Section } from "@/components/ui/Section";
import { ShieldCheck, Cpu, BarChart3, Lock, Zap } from "lucide-react";

const highlights = [
    { title: "Scalable Architecture", icon: Cpu },
    { title: "AI-First Approach", icon: Zap },
    { title: "Performance-Driven", icon: BarChart3 },
    { title: "Security by Design", icon: ShieldCheck },
    { title: "Global Standards", icon: Lock },
];

export const WhyVirelix = () => {
    return (
        <Section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold font-space leading-tight">
                        Why Visionaries Choose <br />
                        <span className="text-primary">Virelix.</span>
                    </h2>
                    <p className="text-white/70 text-lg leading-relaxed">
                        We build intelligent digital ecosystems designed to scale globally. We combine engineering precision with product innovation to ensure your future remains limitless.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {highlights.map((item, index) => (
                            <div key={index} className="flex items-center gap-4 group">
                                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/40 transition-colors">
                                    <item.icon className="text-primary" size={20} />
                                </div>
                                <span className="font-medium text-white/80">{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative aspect-square glass rounded-3xl border-primary/20 flex items-center justify-center p-8 overflow-hidden">
                    <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent)]" />
                    <div className="w-48 h-48 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
                    <div className="relative text-center space-y-4">
                        <div className="text-6xl font-black font-space text-gradient">99.9%</div>
                        <div className="text-white/40 uppercase tracking-[0.2em] text-sm">System Availability</div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
