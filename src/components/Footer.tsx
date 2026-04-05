import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => (
  <footer className="py-20 px-6 bg-black text-white">
    <div className="max-w-7xl mx-auto">
      {/* CTA & Newsletter Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 pb-24 border-b border-white/10">
        <div>
          <h2 className="text-4xl md:text-6xl font-light tight-tracking mb-8 leading-tight">
            Ready to start your <span className="font-serif italic text-brand-accent">tranquil</span> journey?
          </h2>
          <p className="text-gray-400 text-lg font-light max-w-md mb-10">
            Join our exclusive community of visionaries and receive the latest architectural insights and project updates.
          </p>
          <button className="px-12 py-6 bg-brand-accent text-white rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-all">
            Start a project
          </button>
        </div>
        <div className="flex flex-col justify-end">
          <div className="eyebrow text-gray-500 mb-6">Newsletter subscription</div>
          <form className="relative group" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full !bg-transparent border-b border-white/20 py-6 px-0 text-xl font-light !text-white focus:outline-none focus:bg-transparent focus:border-brand-accent transition-colors placeholder:text-white/20 newsletter-input autofill:bg-black appearance-none autofill:shadow-none autofill:text-white [-webkit-box-shadow:0_0_0_1000px_#000_inset_!important] [transition:background-color_5000s_ease-in-out_0s] [-webkit-text-fill-color:white_!important] [background-color:transparent_!important] [color:white_!important]"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-accent hover:text-white transition-colors">
              <ArrowUpRight className="w-8 h-8" />
            </button>
          </form>
          <p className="mt-6 text-[10px] text-gray-600 uppercase tracking-widest">
            By subscribing, you agree to our privacy policy and terms of service.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 mb-20">
        <div className="col-span-1 sm:col-span-2 lg:col-span-2">
          <div className="text-2xl font-light font-serif tracking-tight mb-8 text-white">
            Tranquil <span className="font-black italic text-brand-accent">Holdings</span>
          </div>
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
            Leading the way in architecture-led real estate development and high-end construction services. Creating spaces that inspire.
          </p>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-6">Navigation</h4>
          <ul className="space-y-4 text-sm font-thin">
            <li><Link to="/about" className="hover:text-gray-400 transition-colors">About Us</Link></li>
            <li><Link to="/projects" className="hover:text-gray-400 transition-colors">Projects</Link></li>
            <li><Link to="/services" className="hover:text-gray-400 transition-colors">Services</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400 transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-6">Social</h4>
          <ul className="space-y-4 text-sm font-thin">
            <li><a href="#" className="hover:text-gray-400 transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors">Pinterest</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors">Twitter</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-6">Legal</h4>
          <ul className="space-y-4 text-sm font-thin">
            <li><a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-500">
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
          <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
          <a href="#" className="hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
          <a href="#" className="hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
        </div>
        <div>© 2026 Tranquil Holdings. All rights reserved.</div>
      </div>
    </div>
  </footer>
);
