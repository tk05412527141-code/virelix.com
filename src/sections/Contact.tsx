import { motion } from 'motion/react';
import { Button } from '@/src/components/ui/Button';
import { Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass-card rounded-[2rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Let's Build <br /> Something Great.</h2>
              <p className="text-text/60 text-lg mb-8">
                Ready to scale your digital infrastructure? Get in touch with our engineering team today.
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-text/40 mb-1">Email Us</span>
                  <span className="text-lg font-medium">hello@virelix.ai</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-text/40 mb-1">Visit Us</span>
                  <span className="text-lg font-medium">San Francisco, CA</span>
                </div>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-text/40 font-bold ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-text/40 font-bold ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-text/40 font-bold ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                />
              </div>
              <Button className="w-full" size="lg">
                Send Message <Send size={18} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
