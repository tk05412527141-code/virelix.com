"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    containerClassName?: string;
}

export const Section = ({ children, className, id, containerClassName }: SectionProps) => {
    return (
        <section id={id} className={cn("py-20 md:py-32 overflow-hidden", className)}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={cn("container mx-auto px-6 md:px-12", containerClassName)}
            >
                {children}
            </motion.div>
        </section>
    );
};
