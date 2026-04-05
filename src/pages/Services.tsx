import React from 'react';
import { motion } from 'motion/react';
import { Ruler, Building2, Paintbrush, ShieldCheck, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const services = [
  {
    icon: Ruler,
    title: "Architectural Design",
    description: "From initial sketches to detailed technical drawings, we provide comprehensive architectural solutions for luxury residences and commercial spaces.",
    features: ["Concept Development", "3D Visualization", "Technical Planning", "Permit Management"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
    color: "bg-brand-stone"
  },
  {
    icon: Building2,
    title: "Real Estate Development",
    description: "We identify high-potential locations and develop architecture-led properties that offer exceptional value and lifestyle.",
    features: ["Market Analysis", "Site Acquisition", "Investment Strategy", "Project Management"],
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000",
    color: "bg-white"
  },
  {
    icon: Paintbrush,
    title: "Interior Architecture",
    description: "We create bespoke interior environments that harmonize with the building's architecture and the client's unique lifestyle.",
    features: ["Custom Furniture", "Lighting Design", "Material Selection", "Space Optimization"],
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000",
    color: "bg-white"
  },
  {
    icon: ShieldCheck,
    title: "Construction Management",
    description: "Our construction team ensures that every design is executed with surgical precision and the highest quality materials.",
    features: ["Quality Control", "Budget Management", "Timeline Oversight", "Safety Standards"],
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000",
    color: "bg-brand-stone"
  }
];

const ServiceSection = ({ service, index }: { service: typeof services[0], index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "py-24 md:py-40 px-6",
        service.color
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center",
          !isEven && "lg:flex-row-reverse"
        )}>
          <div className={cn(
            "space-y-12",
            !isEven && "lg:order-2"
          )}>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center">
                <service.icon className="w-8 h-8" />
              </div>
              <div className="eyebrow text-brand-accent">Service 0{index + 1}</div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-light font-serif tight-tracking leading-tight">
              {service.title.split(' ')[0]} <span className="font-black italic text-brand-accent">{service.title.split(' ').slice(1).join(' ')}</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-brand-muted leading-relaxed font-light max-w-xl">
              {service.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-black/5">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-1.5 h-1.5 bg-brand-accent rounded-full group-hover:scale-150 transition-transform" />
                  <span className="text-xs font-bold uppercase tracking-widest text-black/60 group-hover:text-black transition-colors">{feature}</span>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] group pt-8">
              Learn more about this service 
              <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
          
          <div className={cn(
            "relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl",
            !isEven && "lg:order-1"
          )}>
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export const Services: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Video Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Villa Development"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105 opacity-60"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27cf341d227e30594d1ae59d3d57acc8a874642&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="eyebrow text-white/80 mb-8 tracking-[0.4em]">Our Expertise</div>
            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[140px] font-light text-white tight-tracking leading-[0.9]">
              Elevating <br />
              <span className="font-black italic text-brand-accent">standards</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <ServiceSection key={index} service={service} index={index} />
      ))}

      {/* Final CTA Section */}
      <section className="py-40 px-6 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-7xl font-light font-serif tight-tracking">
            Let's build your <span className="font-black italic text-brand-accent">legacy</span>
          </h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            Our team is ready to bring your vision to life with the perfect blend of architectural precision and artistic soul.
          </p>
          <button className="px-16 py-8 bg-brand-accent text-white rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-all">
            Start a conversation
          </button>
        </div>
      </section>
    </div>
  );
};
