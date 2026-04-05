"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Architecture } from "@/components/sections/Architecture";
import { Protocol } from "@/components/sections/Protocol";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary-container/30">
      <Navbar />
      <article>
        <Hero />
        <Stats />
        <Services />
        <Architecture />
        <section id="protocol">
          <Protocol />
        </section>
        <CTA />
      </article>
      <Footer />
    </main>
  );
}
