import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => (
  <footer className="py-20 px-6 bg-black text-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 mb-20">
        <div className="col-span-1 sm:col-span-2 lg:col-span-2">
          <div className="text-2xl font-black tracking-tighter uppercase mb-8">Tranquil Holdings</div>
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
            Leading the way in architecture-led real estate development and high-end construction services. Creating spaces that inspire.
          </p>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-6">Navigation</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/about" className="hover:text-gray-400 transition-colors">About Us</Link></li>
            <li><Link to="/projects" className="hover:text-gray-400 transition-colors">Projects</Link></li>
            <li><Link to="/services" className="hover:text-gray-400 transition-colors">Services</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400 transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-6">Social</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-gray-400 transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors">Pinterest</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors">Twitter</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-6">Legal</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-500">
        <div>© 2026 Tranquil Holdings. All rights reserved.</div>
      </div>
    </div>
  </footer>
);
