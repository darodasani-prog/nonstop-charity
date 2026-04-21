import { cn } from '@/src/lib/utils';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ImpactCardProps {
  number: string;
  label: string;
  icon: LucideIcon;
  className?: string;
}

export function ImpactCard({ number, label, icon: Icon, className }: ImpactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn('bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col items-center text-center', className)}
    >
      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-4xl font-display font-bold text-neutral-900 mb-2">{number}</h3>
      <p className="text-neutral-500 font-medium uppercase tracking-wider text-sm">{label}</p>
    </motion.div>
  );
}
