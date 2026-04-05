"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhyVirelix } from "@/components/sections/WhyVirelix";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary-container/30">
      <Navbar />
      <article>
        <Hero />
        <WhyVirelix />
        <Projects />
        <Testimonials />
        <CTA />
        <Contact />
      </article>
      <Footer />
    </main>
  );
}
