
import React from 'react';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  year: string;
  index: string;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  category, 
  image, 
  year, 
  index,
  className 
}) => {
  return (
    <div className={cn("group relative border border-ink/10 bg-white p-2 hover:border-oxblood/50 transition-colors duration-500", className)}>
      {/* Header Metadata */}
      <div className="flex justify-between items-end border-b border-ink/10 pb-2 mb-2 font-mono text-[10px] text-ink/60 uppercase tracking-wider">
        <span>IDX_{index}</span>
        <span>{year}</span>
      </div>

      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
        <div className="absolute inset-0 bg-oxblood/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
        />
        
        {/* Overlay Text */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-vellum/90 z-20 border-t border-oxblood">
          <div className="flex justify-between items-center">
            <span className="text-oxblood font-mono text-xs">VIEW PROJECT</span>
            <ArrowUpRight className="w-4 h-4 text-oxblood" />
          </div>
        </div>
      </div>

      {/* Title Block */}
      <div className="pt-3">
        <div className="text-[10px] font-mono text-oxblood mb-1 uppercase tracking-widest">{category}</div>
        <h3 className="font-serif text-2xl leading-none group-hover:text-oxblood transition-colors duration-300">
          {title}
        </h3>
      </div>
    </div>
  );
};
