import React from 'react';
import { motion } from 'motion/react';
import { Ruler, Building2, Paintbrush, ShieldCheck } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, features }: { icon: any, title: string, description: string, features: string[] }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-16 bg-brand-stone border border-black/5 rounded-[40px] hover:shadow-2xl transition-all duration-500 group"
  >
    <div className="w-20 h-20 bg-black text-white rounded-3xl flex items-center justify-center mb-12 group-hover:bg-brand-accent transition-colors">
      <Icon className="w-10 h-10" />
    </div>
    <h3 className="text-3xl font-light font-serif italic mb-6">{title}</h3>
    <p className="text-brand-muted text-base leading-relaxed mb-12 font-light">{description}</p>
    <ul className="space-y-4">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-4 eyebrow text-black/40">
          <div className="w-2 h-2 bg-brand-accent rounded-full" />
          {f}
        </li>
      ))}
    </ul>
  </motion.div>
);

export const Services: React.FC = () => {
  return (
    <div className="pt-48 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-7xl md:text-9xl font-light tight-tracking mb-32">Our <span className="font-black italic text-brand-accent">services</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ServiceCard 
            icon={Ruler}
            title="Architectural Design"
            description="From initial sketches to detailed technical drawings, we provide comprehensive architectural solutions for luxury residences and commercial spaces."
            features={["Concept Development", "3D Visualization", "Technical Planning", "Permit Management"]}
          />
          <ServiceCard 
            icon={Building2}
            title="Real Estate Development"
            description="We identify high-potential locations and develop architecture-led properties that offer exceptional value and lifestyle."
            features={["Market Analysis", "Site Acquisition", "Investment Strategy", "Project Management"]}
          />
          <ServiceCard 
            icon={Paintbrush}
            title="Interior Architecture"
            description="We create bespoke interior environments that harmonize with the building's architecture and the client's unique lifestyle."
            features={["Custom Furniture", "Lighting Design", "Material Selection", "Space Optimization"]}
          />
          <ServiceCard 
            icon={ShieldCheck}
            title="Construction Management"
            description="Our construction team ensures that every design is executed with surgical precision and the highest quality materials."
            features={["Quality Control", "Budget Management", "Timeline Oversight", "Safety Standards"]}
          />
        </div>
      </div>
    </div>
  );
};
