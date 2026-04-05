import React from 'react';
import { motion } from 'motion/react';
import { Ruler, Building2, Paintbrush, ShieldCheck } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, features }: { icon: any, title: string, description: string, features: string[] }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-12 bg-white border border-black/5 rounded-3xl shadow-sm hover:shadow-xl transition-shadow"
  >
    <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-8">
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">{title}</h3>
    <p className="text-brand-muted text-sm leading-relaxed mb-8">{description}</p>
    <ul className="space-y-3">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-black/60">
          <div className="w-1.5 h-1.5 bg-black rounded-full" />
          {f}
        </li>
      ))}
    </ul>
  </motion.div>
);

export const Services: React.FC = () => {
  return (
    <div className="pt-40 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black tight-tracking mb-24">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
