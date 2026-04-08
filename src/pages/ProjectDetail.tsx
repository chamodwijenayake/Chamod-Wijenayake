import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../constants/projects';
import { ArrowLeft, ArrowRight, MapPin, Calendar, LayoutGrid } from 'lucide-react';
import { cn } from '../lib/utils';
import { Counter } from '../components/Counter';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  const [currentImage, setCurrentImage] = useState(0);

  if (!project) {
    return (
      <div className="pt-40 pb-24 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-light mb-8">
          Project Not <span className="font-black italic text-brand-accent">Found</span>
        </h1>
        <Link to="/projects" className="text-brand-muted hover:text-black font-bold uppercase tracking-widest text-xs underline">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <div className="pt-32 md:pt-40 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/projects" className="eyebrow hover:text-black transition-colors mb-6 md:mb-8 flex items-center gap-2">
              <ArrowLeft className="w-3 h-3" /> Back to Portfolio
            </Link>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-light tight-tracking break-words max-w-5xl">
              {project.title.split(' ')[0]} <span className="font-black italic text-brand-accent">{project.title.split(' ').slice(1).join(' ')}</span>
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-6 md:gap-12 eyebrow"
          >
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-brand-accent" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-brand-accent" />
              <span>{project.year}</span>
            </div>
            <div className="flex items-center gap-3">
              <LayoutGrid className="w-4 h-4 text-brand-accent" />
              <span>{project.category}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gallery Slider - Spread Full Width */}
      <div className="relative mb-24 md:mb-32 group w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="aspect-[4/3] md:aspect-[21/7] overflow-hidden shadow-2xl bg-brand-stone">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={project.gallery[currentImage]}
              alt={`${project.title} - Image ${currentImage + 1}`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
        </div>

        {/* Slider Controls */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 md:px-16 pointer-events-none">
          <button 
            onClick={prevImage}
            className="w-12 h-12 md:w-24 md:h-24 bg-white/10 backdrop-blur-2xl border border-white/20 text-white rounded-full flex items-center justify-center pointer-events-auto hover:bg-white hover:text-black transition-all transform -translate-x-2 md:-translate-x-8"
          >
            <ArrowLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button 
            onClick={nextImage}
            className="w-12 h-12 md:w-24 md:h-24 bg-white/10 backdrop-blur-2xl border border-white/20 text-white rounded-full flex items-center justify-center pointer-events-auto hover:bg-white hover:text-black transition-all transform translate-x-2 md:translate-x-8"
          >
            <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 md:bottom-16 left-1/2 -translate-x-1/2 flex gap-4 md:gap-6">
          {project.gallery.map((_, i) => (
            <button 
              key={i}
              onClick={() => setCurrentImage(i)}
              className={cn(
                "h-0.5 rounded-full transition-all duration-1000",
                currentImage === i ? "bg-white w-12 md:w-16" : "bg-white/20 w-4 md:w-6"
              )}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Project Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-32">
          <div className="lg:col-span-2 space-y-12 md:space-y-16">
            <div className="space-y-8 md:space-y-16">
              <h2 className="text-3xl md:text-5xl font-light tight-tracking font-serif italic">About the project</h2>
              <p className="text-xl md:text-3xl leading-relaxed text-brand-text font-light">
                {project.description}
              </p>
            </div>
            
            <button className="w-full sm:w-fit bg-brand-accent text-white py-6 px-12 md:px-16 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs flex items-center justify-center gap-4 hover:opacity-90 transition-opacity">
              Inquire About Similar Project
            </button>
          </div>

          <div className="space-y-16">
            <div className="eyebrow border-b border-black/10 pb-6">Project details</div>
            <div className="space-y-12">
              {project.stats.map((stat, i) => (
                <div key={i}>
                  <div className="eyebrow mb-3 text-black/40">{stat.label}</div>
                  <div className="text-3xl font-light tight-tracking">
                    <Counter value={stat.value} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
