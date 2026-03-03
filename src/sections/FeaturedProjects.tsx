import { motion } from 'motion/react';

const projects = [
  {
    title: 'Nexus AI Dashboard',
    description: 'Real-time predictive analytics platform for supply chain optimization.',
    tags: ['AI', 'Node', 'React'],
    image: 'https://picsum.photos/seed/nexus/800/600',
  },
  {
    title: 'Velo Mobile App',
    description: 'Next-gen fintech experience with biometric security and instant transfers.',
    tags: ['Flutter', 'Firebase', 'Go'],
    image: 'https://picsum.photos/seed/velo/800/600',
  },
  {
    title: 'CloudScale Infra',
    description: 'Automated infrastructure provisioning for high-traffic e-commerce platforms.',
    tags: ['Cloud', 'Terraform', 'Python'],
    image: 'https://picsum.photos/seed/cloud/800/600',
  },
];

export const FeaturedProjects = () => {
  return (
    <section id="work" className="py-24 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
            <p className="text-text/60 max-w-xl">
              A selection of our most impactful digital transformations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-card">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>
              
              <div className="flex gap-2 mb-3">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-md bg-white/5 border border-white/10 text-text/40">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-text/50 text-sm">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
