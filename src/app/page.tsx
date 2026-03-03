"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { WhyVirelix } from "@/components/sections/WhyVirelix";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/30">
      <Navbar />
      <Hero />
      <div className="relative">
        <Services />
        <Projects />
        <WhyVirelix />
        <div id="about">
          <About />
        </div>
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
