import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
import { projects } from '../constants/projects';
import { Counter } from '../components/Counter';

const Hero = () => (
  <section className="pt-32 md:pt-40 pb-16 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 mb-8 md:mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[120px] leading-[0.9] font-black tight-tracking max-w-4xl break-words"
        >
          Crafting Serenity <br />
          Through Design
        </motion.h1>
        
        <div className="max-w-sm space-y-6 md:space-y-8">
          <p className="text-sm text-brand-muted leading-relaxed">
            When seeking a professional architectural design for your home, you deserve to collaborate with visionaries who deeply comprehend your lifestyle and aesthetic aspirations.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 border border-black rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all text-center whitespace-nowrap">
              Get in touch
            </button>
            <button className="px-8 py-4 bg-black text-white rounded-full text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-80 transition-all whitespace-nowrap">
              Services <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative aspect-video md:aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl"
      >
        <img 
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2000" 
          alt="Sophisticated Modern Luxury Home"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </div>
  </section>
);

const Stats = () => (
  <section className="py-16 px-6 border-y border-black/5 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-16 md:mb-20">
        <h2 className="text-4xl md:text-5xl font-black tight-tracking max-w-md">
          We have created more than 700 unique designs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-brand-muted leading-relaxed">
          <p>
            We are a team of passionate and creative architects dedicated to transforming spaces into beautiful and functional environments. We specialize in developing innovative as well as sustainable spaces that reflect unique character.
          </p>
          <p>
            Our approach combines technical precision with artistic vision, ensuring every project is not just a building, but a statement of excellence and a legacy for the future.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 border-l border-t border-black/10">
        {[
          { label: "Years of experience", value: "10+" },
          { label: "Completed projects", value: "212+" },
          { label: "Design awards won", value: "12+" },
          { label: "Team members", value: "10+" },
        ].map((stat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="aspect-square border-r border-b border-black/10 flex flex-col items-center justify-center text-center p-6 sm:p-8"
          >
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2 tight-tracking leading-none">
              <Counter value={stat.value} />
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-brand-muted max-w-[120px]">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ProjectCard = ({ id, title, category, image }: { id: string, title: string, category: string, image: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group cursor-pointer"
  >
    <Link to={`/projects/${id}`}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-6 shadow-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="bg-white text-black px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest">
            View Project
          </button>
        </div>
      </div>
      <div className="flex justify-between items-end">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-brand-muted mb-1">{category}</div>
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </Link>
  </motion.div>
);

const FeaturedProjects = () => (
  <section className="py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-16">
        <h2 className="text-4xl md:text-5xl font-black tight-tracking">Featured Projects</h2>
        <p className="max-w-md text-sm text-brand-muted leading-relaxed">
          Each project is uniquely crafted to meet the specific needs of our clients. Whether big or small, we are prepared to tackle any type of project with enthusiasm and expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.slice(0, 4).map((project) => (
          <ProjectCard 
            key={project.id}
            id={project.id}
            title={project.title} 
            category={project.category} 
            image={project.mainImage} 
          />
        ))}
      </div>
    </div>
  </section>
);

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedProjects />
    </>
  );
};
