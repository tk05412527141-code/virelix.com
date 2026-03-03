import dynamic from "next/dynamic";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";

// Dynamic imports for below-the-fold components to improve initial load speed
const Services = dynamic(() => import("@/components/sections/Services").then(mod => mod.Services));
const Projects = dynamic(() => import("@/components/sections/Projects").then(mod => mod.Projects));
const WhyVirelix = dynamic(() => import("@/components/sections/WhyVirelix").then(mod => mod.WhyVirelix));
const About = dynamic(() => import("@/components/sections/About").then(mod => mod.About));
const Contact = dynamic(() => import("@/components/sections/Contact").then(mod => mod.Contact));
const Footer = dynamic(() => import("@/components/sections/Footer").then(mod => mod.Footer));

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
