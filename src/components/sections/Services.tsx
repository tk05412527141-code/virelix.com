"use client";

import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";
import { BrainCircuit, Smartphone, Globe, Cloud } from "lucide-react";

const services = [
    {
        title: "AI & Otomasyon Sistemleri",
        description: "Karmaşık iş akışlarını otomatize etmek ve karar süreçlerini iyileştirmek için tasarlanmış yüksek zekalı sinirsel sistemler.",
        icon: BrainCircuit,
        color: "text-purple-500",
    },
    {
        title: "Mobil Uygulama Geliştirme",
        description: "Flutter ve yüksek performanslı yerel motorlar kullanılarak hassasiyetle tasarlanmış premium, çapraz platform mobil deneyimler.",
        icon: Smartphone,
        color: "text-blue-500",
    },
    {
        title: "Web Platform Mühendisliği",
        description: "Küresel kullanıcı kitleleri için optimize edilmiş, Next.js gibi modern yığınlar üzerine inşa edilmiş ölçeklenebilir ve çok hızlı web platformları.",
        icon: Globe,
        color: "text-teal-500",
    },
    {
        title: "Bulut & Ölçeklenebilir Altyapı",
        description: "İşletmenizle birlikte zahmetsizce büyüyen, kesintisiz ve küresel olarak dağıtılmış bulut sistemleri mimarisi.",
        icon: Cloud,
        color: "text-red-500",
    },
];

export const Services = () => {
    return (
        <Section id="services">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold font-space">Küresel Çözümler</h2>
                <p className="text-white/60 max-w-xl mx-auto">Teknolojiyi düşünce hızında ölçeklendiriyoruz.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <GlassCard key={index} delay={index * 0.1}>
                        <div className={`p-3 rounded-xl bg-white/5 w-fit mb-6 ${service.color}`}>
                            <service.icon size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 font-space">{service.title}</h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                            {service.description}
                        </p>
                    </GlassCard>
                ))}
            </div>
        </Section>
    );
};
