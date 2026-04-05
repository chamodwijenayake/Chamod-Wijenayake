import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
import { projects } from '../constants/projects';
import { Counter } from '../components/Counter';

const Hero = () => (
  <section className="pt-32 md:pt-48 pb-16 px-6 overflow-hidden bg-brand-stone">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 md:gap-20 mb-16 md:mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl sm:text-8xl md:text-9xl lg:text-[140px] leading-[1] md:leading-[0.95] font-light tight-tracking max-w-5xl"
        >
          Crafting <span className="font-black italic text-brand-accent inline-block mb-2 md:mb-4">serenity</span> <br />
          through design
        </motion.h1>
        
        <div className="max-w-sm space-y-8 md:space-y-12">
          <p className="text-base text-brand-muted leading-relaxed font-light">
            When seeking a professional architectural design for your home, you deserve to collaborate with visionaries who deeply comprehend your lifestyle and aesthetic aspirations.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="px-10 py-5 border border-black/20 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all text-center whitespace-nowrap">
              Get in touch
            </button>
            <button className="px-10 py-5 bg-brand-accent text-white rounded-full text-[11px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:opacity-90 transition-all whitespace-nowrap">
              Services <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="relative aspect-video md:aspect-[21/9] overflow-hidden rounded-3xl shadow-2xl"
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
  <section className="py-24 px-6 border-y border-black/5 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 mb-24 md:mb-32">
        <h2 className="text-5xl md:text-6xl font-light tight-tracking max-w-lg leading-tight">
          We have created more than <span className="font-serif italic text-brand-accent">700</span> unique designs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-base text-brand-muted leading-relaxed font-light">
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
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="aspect-square border-r border-b border-black/10 flex flex-col items-center justify-center text-center p-8 sm:p-12"
          >
            <div className="text-5xl sm:text-6xl md:text-7xl font-light mb-4 tight-tracking leading-none">
              <Counter value={stat.value} />
            </div>
            <div className="eyebrow max-w-[120px]">{stat.label}</div>
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
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-8 shadow-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
          <button className="bg-white text-black px-10 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.2em]">
            View Project
          </button>
        </div>
      </div>
      <div className="flex justify-between items-start px-2">
        <div>
          <div className="eyebrow mb-2">{category}</div>
          <h3 className="text-2xl font-light font-serif italic">{title}</h3>
        </div>
        <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </Link>
  </motion.div>
);

const FeaturedProjects = () => (
  <section className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 mb-24">
        <h2 className="text-5xl md:text-6xl font-light tight-tracking">Featured projects</h2>
        <p className="max-w-md text-base text-brand-muted leading-relaxed font-light">
          Each project is uniquely crafted to meet the specific needs of our clients. Whether big or small, we are prepared to tackle any type of project with enthusiasm and expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
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

const DesignProcess = () => (
  <section className="py-32 px-6 border-t border-black/5">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <div className="eyebrow mb-8">Our Process</div>
          <h2 className="text-5xl md:text-7xl font-light tight-tracking mb-12 leading-tight">
            From initial <span className="font-serif italic text-brand-accent">vision</span> to final outcome
          </h2>
          <div className="space-y-12">
            {[
              { step: "01", title: "Conceptualization", desc: "We begin by understanding your lifestyle, needs, and the unique characteristics of the site to develop a core design philosophy." },
              { step: "02", title: "Detailed Design", desc: "Our architects translate the concept into precise technical drawings, selecting materials that harmonize with the environment." },
              { step: "03", title: "Execution & Delivery", desc: "We oversee every detail of the construction process to ensure the final outcome exceeds your expectations of luxury and serenity." }
            ].map((item, i) => (
              <div key={i} className="flex gap-8">
                <span className="text-brand-accent font-serif italic text-2xl">{item.step}</span>
                <div>
                  <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                  <p className="text-brand-muted font-light leading-relaxed max-w-md">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000" 
              alt="Architectural Process"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-12 -left-12 bg-white p-12 rounded-3xl shadow-xl hidden md:block max-w-[280px]">
            <div className="text-brand-accent font-serif italic text-4xl mb-4">100%</div>
            <div className="eyebrow text-[10px]">Commitment to excellence and sustainable design practices.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-32 px-6 bg-brand-stone">
    <div className="max-w-7xl mx-auto">
      <div className="eyebrow mb-16 text-center">Client testimonials</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
        {[
          {
            quote: "The level of detail and commitment to our vision was unparalleled. Tranquil Holdings didn't just build a house; they crafted a sanctuary.",
            author: "Sarah J.",
            location: "Malibu, CA",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
          },
          {
            quote: "Collaborating with their team was a masterclass in professional design. Every corner of our new home reflects our personality perfectly.",
            author: "Michael R.",
            location: "Greenwich, CT",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
          },
          {
            quote: "They have a rare ability to blend modern technical excellence with a deep sense of peace and harmony. Truly visionary work.",
            author: "Elena V.",
            location: "Aspen, CO",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="flex flex-col"
          >
            <div className="mb-8">
              <img 
                src={item.image} 
                alt={item.author}
                className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-4xl font-serif italic mb-8 leading-tight">"{item.quote}"</div>
            <div className="mt-auto">
              <div className="font-bold text-xs uppercase tracking-widest mb-1">{item.author}</div>
              <div className="eyebrow text-[9px] text-brand-accent">{item.location}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const PressLogo = ({ brand, i }: { brand: { name: string, logo: string }, i: number }) => {
  const [error, setError] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: i * 0.05 }}
      className="flex items-center justify-center px-4"
    >
      {!error ? (
        <img 
          src={brand.logo} 
          alt={brand.name}
          className="h-6 md:h-8 w-auto object-contain grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-default"
          referrerPolicy="no-referrer"
          onError={() => setError(true)}
        />
      ) : (
        <span className="text-xl md:text-2xl font-serif font-light tracking-tight opacity-40 hover:opacity-100 transition-opacity cursor-default">
          {brand.name}
        </span>
      )}
    </motion.div>
  );
};

const Press = () => (
  <section className="py-24 px-6 border-t border-black/5">
    <div className="max-w-7xl mx-auto">
      <div className="eyebrow mb-16 text-center opacity-50">As seen in</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-12 items-center">
        {[
          { name: "The New York Times", logo: "https://upload.wikimedia.org/wikipedia/commons/7/77/The_New_York_Times_logo.png" },
          { name: "Architectural Digest", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Architectural_Digest_logo.svg" },
          { name: "Vogue Living", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Vogue_logo.svg" },
          { name: "Wallpaper*", logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/Wallpaper_magazine_logo.svg" },
          { name: "Elle Decor", logo: "https://upload.wikimedia.org/wikipedia/commons/0/03/Elle_Decor_logo.svg" },
          { name: "Dwell", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Dwell_magazine_logo.svg" },
          { name: "The Wall Street Journal", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/The_Wall_Street_Journal_Logo.svg" },
          { name: "Forbes", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Forbes_logo.svg" }
        ].map((brand, i) => (
          <PressLogo key={i} brand={brand} i={i} />
        ))}
      </div>
    </div>
  </section>
);

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Press />
      <Stats />
      <FeaturedProjects />
      <DesignProcess />
      <Testimonials />
    </>
  );
};
