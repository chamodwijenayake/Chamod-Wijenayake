import React from 'react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  return (
    <div className="pt-48 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-16 md:mb-32"
        >
          <h1 className="text-5xl md:text-9xl font-light font-serif tight-tracking mb-12 md:mb-16">Our <span className="font-black italic text-brand-accent">story</span></h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <p className="text-xl md:text-2xl leading-relaxed font-light">
              Tranquil Holdings was founded on the belief that architecture should be more than just buildings; it should be an experience of serenity and a reflection of the soul.
            </p>
            <p className="text-brand-muted text-base md:text-lg leading-relaxed font-light">
              With over a decade of experience in the luxury real estate and construction sector, we have redefined modern living by blending technical excellence with visionary design. Our team of world-class architects and designers work tirelessly to push the boundaries of what's possible.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          <div className="aspect-[4/5] overflow-hidden rounded-[40px] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
              alt="Team Member" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-[40px] shadow-2xl md:mt-20">
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800" 
              alt="Team Member" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-[40px] shadow-2xl md:mt-40">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800" 
              alt="Team Member" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="bg-black text-white p-12 md:p-32 rounded-[40px] md:rounded-[60px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/20 blur-[120px] -mr-48 -mt-48" />
          <h2 className="text-4xl md:text-7xl font-light mb-12 md:mb-20 tight-tracking font-serif italic">Our philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <div>
              <div className="eyebrow mb-6 text-brand-accent">Innovation</div>
              <p className="text-gray-400 text-base leading-relaxed font-light">We embrace the latest technologies and sustainable practices to create future-proof architecture.</p>
            </div>
            <div>
              <div className="eyebrow mb-6 text-brand-accent">Precision</div>
              <p className="text-gray-400 text-base leading-relaxed font-light">Every detail is meticulously planned and executed to ensure the highest quality of construction.</p>
            </div>
            <div>
              <div className="eyebrow mb-6 text-brand-accent">Serenity</div>
              <p className="text-gray-400 text-base leading-relaxed font-light">Our designs prioritize peace, light, and harmony with the surrounding environment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
