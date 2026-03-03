import { motion, useScroll, useSpring } from 'motion/react';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { FeaturedProjects } from './sections/FeaturedProjects';
import { WhyVirelix } from './sections/WhyVirelix';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-bottom border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-display text-2xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
          </div>
          Virelix
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-text/60 hover:text-primary transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact">
            <button className="bg-white text-background px-5 py-2 rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-all">
              Get Started
            </button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-text" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-background border-b border-white/5 p-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-text/60"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 font-display text-xl font-bold">
            <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm rotate-45" />
            </div>
            Virelix
          </div>
          
          <div className="text-text/40 text-sm">
            © 2026 Virelix AI Systems. All rights reserved.
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-text/40 hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="text-text/40 hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="text-text/40 hover:text-primary transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-text selection:bg-primary/30">
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left" style={{ scaleX }} />
      
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <FeaturedProjects />
        <WhyVirelix />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
