import { Cpu, Smartphone, Globe, Cloud } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';

const services = [
  {
    title: 'AI & Automation Systems',
    description: 'Custom neural networks and automated workflows that drive business intelligence and efficiency.',
    icon: Cpu,
    color: 'primary' as const,
  },
  {
    title: 'Mobile Application Development',
    description: 'High-performance native and cross-platform mobile experiences built for global scale.',
    icon: Smartphone,
    color: 'secondary' as const,
  },
  {
    title: 'Web Platform Engineering',
    description: 'Scalable, secure, and lightning-fast web architectures using the latest modern stacks.',
    icon: Globe,
    color: 'primary' as const,
  },
  {
    title: 'Cloud & Scalable Infrastructure',
    description: 'Resilient cloud systems designed to handle millions of requests with zero downtime.',
    icon: Cloud,
    color: 'secondary' as const,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Our Expertise</h2>
          <p className="text-text/60 max-w-xl">
            We provide end-to-end engineering solutions for the most demanding digital challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} glowColor={service.color} className="flex flex-col gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-text/50 text-sm leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
