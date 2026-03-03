import React from "react";
import { Section } from "@/components/ui/Section";

export const About = () => {
    return (
        <Section className="py-24 md:py-40">
            <div className="max-w-4xl mx-auto text-center space-y-12">
                <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />

                <p className="text-3xl md:text-5xl font-bold font-space leading-tight text-white/90">
                    Virelix, küresel ölçekte büyümek üzere tasarlanmış akıllı dijital ekosistemler inşa eder. Mühendislik hassasiyetini ürün inovasyonuyla birleştiriyoruz.
                </p>

                <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                        <div className="text-primary font-bold text-2xl font-space">2026</div>
                        <div className="text-white/40 text-xs uppercase tracking-widest">Geleceğe Hazır</div>
                    </div>
                    <div className="w-[1px] h-12 bg-white/10" />
                    <div className="text-center">
                        <div className="text-secondary font-bold text-2xl font-space">PA</div>
                        <div className="text-white/40 text-xs uppercase tracking-widest">Palo Alto Merkezi</div>
                    </div>
                </div>

                <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto" />
            </div>
        </Section>
    );
};
