import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../constants/projects';

const ProjectItem = ({ id, title, category, image, year }: { id: string, title: string, category: string, image: string, year: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group border-b border-black/10 py-12"
  >
    <Link to={`/projects/${id}`} className="flex flex-col md:flex-row md:items-center justify-between gap-8">
      <div className="flex-1">
        <div className="text-[10px] font-bold uppercase tracking-widest text-brand-muted mb-2">{category} — {year}</div>
        <h2 className="text-3xl md:text-5xl font-black tight-tracking group-hover:translate-x-4 transition-transform duration-500">{title}</h2>
      </div>
      <div className="w-full md:w-72 aspect-video overflow-hidden rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
        <img src={image} alt={title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
      <ArrowUpRight className="w-8 h-8 group-hover:rotate-45 transition-transform duration-500" />
    </Link>
  </motion.div>
);

export const Projects: React.FC = () => {
  return (
    <div className="pt-40 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
          <h1 className="text-6xl md:text-8xl font-black tight-tracking">Portfolio</h1>
          <div className="max-w-md space-y-6">
            <div className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">Track Record</div>
            <p className="text-lg leading-relaxed text-brand-text">
              With over 200 completed masterpieces across three continents, our portfolio represents a legacy of architectural excellence. Each project is a testament to our commitment to precision, luxury, and the pursuit of tranquility.
            </p>
          </div>
        </div>
        
        <div className="space-y-0">
          {projects.map((project) => (
            <ProjectItem 
              key={project.id}
              id={project.id}
              title={project.title} 
              category={project.category} 
              year={project.year}
              image={project.mainImage} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};
