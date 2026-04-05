import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Contacts', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-[100] transition-all duration-300 border-b border-black/5",
      isOpen ? "bg-white shadow-md" : "bg-brand-bg/80 backdrop-blur-md"
    )}>
      {/* Header Container - Always on top with solid background when open */}
      <div className={cn(
        "relative z-[110] px-6 transition-colors duration-300",
        isOpen ? "bg-white" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between">
          <Link to="/" className="text-lg sm:text-xl font-black tracking-tighter uppercase">
            Tranquil Holdings
          </Link>
          
          <div className="flex items-center gap-4 sm:gap-8">
            {/* Hamburger Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-black/5 rounded-full transition-colors"
              aria-label="Toggle Menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-white z-[105] flex flex-col pt-20 shadow-2xl"
          >
            <div className="flex-1 overflow-y-auto custom-scrollbar px-6 pb-12">
              <div className="max-w-7xl mx-auto w-full flex flex-col pt-12">
                <div className="flex flex-col gap-4 md:gap-8">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                    >
                      <Link 
                        to={link.path}
                        className="group flex items-center justify-between py-4 md:py-6 border-b border-black/5"
                      >
                        <span className="text-4xl sm:text-6xl md:text-8xl font-black tight-tracking uppercase">
                          {link.name}
                        </span>
                        <ArrowRight className="w-8 h-8 md:w-12 md:h-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
