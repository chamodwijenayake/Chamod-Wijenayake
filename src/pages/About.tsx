import React from 'react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  return (
    <div className="pt-40 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h1 className="text-6xl md:text-8xl font-black tight-tracking mb-12">Our Story</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <p className="text-xl leading-relaxed">
              Tranquil Holdings was founded on the belief that architecture should be more than just buildings; it should be an experience of serenity and a reflection of the soul.
            </p>
            <p className="text-brand-muted leading-relaxed">
              With over a decade of experience in the luxury real estate and construction sector, we have redefined modern living by blending technical excellence with visionary design. Our team of world-class architects and designers work tirelessly to push the boundaries of what's possible.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
              alt="Team Member" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-xl md:mt-12">
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800" 
              alt="Team Member" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-xl md:mt-24">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800" 
              alt="Team Member" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="bg-black text-white p-12 md:p-24 rounded-3xl">
          <h2 className="text-4xl md:text-6xl font-black mb-12 tight-tracking">Our Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-widest">Innovation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">We embrace the latest technologies and sustainable practices to create future-proof architecture.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-widest">Precision</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Every detail is meticulously planned and executed to ensure the highest quality of construction.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-widest">Serenity</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Our designs prioritize peace, light, and harmony with the surrounding environment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
