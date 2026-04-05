import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-40 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-thin tight-tracking mb-24">Get In Touch</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <p className="text-2xl leading-relaxed font-thin">
              Have a visionary project in mind? We'd love to hear from you. Let's create something extraordinary together.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-muted mb-1">Email Us</div>
                  <div className="font-bold">hello@tranquilholdings.com</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-muted mb-1">Call Us</div>
                  <div className="font-bold">+8 (076) 869-89-87</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-muted mb-1">Visit Us</div>
                  <div className="font-bold">123 Serenity Plaza, Architecture District, NY</div>
                </div>
              </div>
            </div>
          </div>

          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-black/5 space-y-8"
          >
            <div className="space-y-4">
              <label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">Your Name</label>
              <input type="text" className="w-full bg-white border-b border-black/10 py-4 px-6 focus:outline-none focus:border-black transition-colors rounded-t-lg text-brand-muted autofill:shadow-[0_0_0_1000px_#fff_inset] autofill:text-brand-muted" placeholder="John Doe" />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">Email Address</label>
              <input type="email" className="w-full bg-white border-b border-black/10 py-4 px-6 focus:outline-none focus:border-black transition-colors rounded-t-lg text-brand-muted autofill:shadow-[0_0_0_1000px_#fff_inset] autofill:text-brand-muted" placeholder="john@example.com" />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">Your Message</label>
              <textarea rows={4} className="w-full bg-white border-b border-black/10 py-4 px-6 focus:outline-none focus:border-black transition-colors resize-none rounded-t-lg text-brand-muted autofill:shadow-[0_0_0_1000px_#fff_inset] autofill:text-brand-muted" placeholder="Tell us about your project..." />
            </div>
            <button className="w-fit bg-black text-white py-6 px-12 rounded-2xl font-thin uppercase tracking-widest flex items-center justify-center gap-3 hover:opacity-80 transition-opacity">
              Send Message <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
            <h2 className="text-4xl md:text-6xl font-thin tight-tracking">Our Location</h2>
            <div className="max-w-xs text-sm text-brand-muted leading-relaxed">
              Visit our headquarters in the heart of the Architecture District. We welcome visionary minds.
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border border-black/5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1712254000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Tranquil Holdings Location"
              />
            </div>
            <div className="bg-black text-white p-12 rounded-3xl flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-thin mb-8 uppercase tracking-tighter">Headquarters</h3>
                <div className="space-y-6 text-gray-400 text-sm leading-relaxed">
                  <p>123 Serenity Plaza,<br />Architecture District,<br />New York, NY 10001</p>
                  <p>Mon — Fri: 9:00 AM — 6:00 PM<br />Sat — Sun: By Appointment</p>
                </div>
              </div>
              <button className="mt-12 w-full border border-white/20 py-4 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Get Directions
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
