import { cn } from '@/src/lib/utils';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  location: string;
  tag: string;
  path: string;
}

export function ProjectCard({ title, description, image, location, tag, path }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-primary shadow-sm">
            {tag}
          </span>
        </div>
      </div>
      <div className="p-8">
        <div className="flex items-center gap-2 text-neutral-500 text-sm mb-3">
          <MapPin className="w-4 h-4" />
          {location}
        </div>
        <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-neutral-600 line-clamp-2 mb-6 leading-relaxed">
          {description}
        </p>
        <Link
          to={path}
          className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all"
        >
          Read Story <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </motion.div>
  );
}
