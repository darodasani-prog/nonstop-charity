import { cn } from '@/src/lib/utils';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ title, subtitle, eyebrow, centered, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-16', centered && 'text-center max-w-3xl mx-auto', className)}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-primary font-display font-bold tracking-widest text-sm uppercase mb-4 block"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-neutral-600 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
