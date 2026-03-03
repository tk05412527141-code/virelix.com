import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Our Vision</span>
            <h2 className="font-display text-3xl md:text-6xl font-bold mb-8 leading-tight">
              We combine engineering precision with product innovation.
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-10 rounded-full" />
            <p className="text-text/60 text-xl leading-relaxed">
              Virelix builds intelligent digital ecosystems designed to scale globally. We are a team of engineers, designers, and strategists dedicated to pushing the boundaries of what's possible with AI and cloud technology.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
