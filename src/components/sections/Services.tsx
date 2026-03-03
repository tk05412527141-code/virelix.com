import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";
import { BrainCircuit, Smartphone, Globe, Cloud } from "lucide-react";

const services = [
    {
        title: "AI & Automation Systems",
        description: "Highly intelligent neural systems tailored to automate complex business workflows and enhance decision processes.",
        icon: BrainCircuit,
        color: "text-purple-500",
    },
    {
        title: "Mobile Application Development",
        description: "Premium, cross-platform mobile experiences designed with precision using Flutter and high-performance native engines.",
        icon: Smartphone,
        color: "text-blue-500",
    },
    {
        title: "Web Platform Engineering",
        description: "Scalable, blazing-fast web platforms built on modern stacks like Next.js, optimized for global user bases.",
        icon: Globe,
        color: "text-teal-500",
    },
    {
        title: "Cloud & Scalable Infrastructure",
        description: "Architecting zero-downtime, globally distributed cloud systems that grow effortlessly with your business.",
        icon: Cloud,
        color: "text-red-500",
    },
];

export const Services = () => {
    return (
        <Section id="services">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold font-space">Global Solutions</h2>
                <p className="text-white/60 max-w-xl mx-auto">Scaling technology at the speed of thought.</p>
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
