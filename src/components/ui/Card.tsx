import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'primary' | 'secondary';
}

export const Card = ({ children, className, glowColor }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={cn(
        'glass-card rounded-2xl p-6 transition-all duration-500',
        glowColor === 'primary' && 'hover:border-primary/30 hover:shadow-[0_0_30px_-10px_rgba(124,58,237,0.3)]',
        glowColor === 'secondary' && 'hover:border-secondary/30 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]',
        className
      )}
    >
      {children}
    </motion.div>
  );
};
