import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const highlights = [
  'Scalable Architecture',
  'AI-First Approach',
  'Performance-Driven Development',
  'Security by Design',
  'Global Standards',
];

export const WhyVirelix = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
              Why Global Leaders <br />
              <span className="text-secondary text-glow-secondary">Choose Virelix.</span>
            </h2>
            <p className="text-text/60 text-lg mb-10 leading-relaxed">
              We don't just build software; we engineer competitive advantages. Our methodology combines deep technical rigor with product-led innovation.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <CheckCircle2 className="text-secondary" size={20} />
                  <span className="font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-card border border-white/10 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute w-1/2 h-1/2 border border-white/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute w-24 h-24 bg-primary blur-3xl opacity-50" />
              </div>
              <div className="absolute bottom-8 left-8 right-8 p-6 glass-card rounded-2xl">
                <p className="text-sm font-medium italic text-text/80">
                  "Virelix transformed our legacy systems into a high-performance AI ecosystem in record time."
                </p>
                <p className="mt-4 text-xs uppercase tracking-widest text-text/40">— CTO, Fortune 500 Tech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
