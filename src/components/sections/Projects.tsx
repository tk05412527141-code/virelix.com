import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";

const projects = [
    {
        title: "Axon Sinirsel Motor",
        description: "Saniyede 1 milyondan fazla token işleyen, kendi kendini ölçeklendiren yapay zeka altyapısı.",
        stack: ["Node", "TensorFlow", "Kubernetes"],
        image: "bg-gradient-to-br from-purple-500/20 to-blue-500/20",
    },
    {
        title: "Virelix Mobil",
        description: "Güvenli ve sınır ötesi finansal işlemler için küresel standart.",
        stack: ["Flutter", "Firebase", "Rust"],
        image: "bg-gradient-to-br from-indigo-500/20 to-teal-500/20",
    },
    {
        title: "Quantum Defter",
        description: "Dağıtık sistemler için yüksek performanslı veri bütünlüğü.",
        stack: ["Go", "AWS", "AI"],
        image: "bg-gradient-to-br from-pink-500/20 to-orange-500/20",
    },
];

export const Projects = () => {
    return (
        <Section id="projects" className="bg-white/[0.02]">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold font-space">Öne Çıkan Projeler</h2>
                    <p className="text-white/60 max-w-xl">Derin mühendisliğin çığır açan inovasyonla buluştuğu nokta.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <GlassCard key={index} delay={index * 0.1} className="flex flex-col h-full border-none">
                        <div className={`aspect-[4/3] rounded-xl mb-6 overflow-hidden ${project.image} border border-white/5 flex items-center justify-center`}>
                            <div className="w-1/2 h-[70%] border-4 border-white/10 rounded-[30px] relative">
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-white/20 rounded-full" />
                                <div className="w-full h-full bg-white/5 flex items-center justify-center text-white/10 font-bold">MOCKUP</div>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.stack.map((tech) => (
                                    <span key={tech} className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-md border border-primary/20 bg-primary/5 text-primary">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-2xl font-bold mb-3 font-space">{project.title}</h3>
                            <p className="text-white/60 text-sm mb-6 leading-relaxed flex-1">
                                {project.description}
                            </p>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </Section>
    );
};
