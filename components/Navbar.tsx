
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, BOOKING_URL } from '../constants';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-brand-dark/95 backdrop-blur-xl py-2 sm:py-3 shadow-xl' : 'bg-transparent py-4 sm:py-6 lg:py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 group" aria-label="Ir al inicio - La Palma & El Tucán">
          <Logo variant="pink" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm md:text-base font-serif font-bold tracking-tighter text-white">
              LA PALMA & EL TUCÁN
            </span>
            <span className="text-[7px] sm:text-[8px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-brand-pink font-bold">Coffee Experience</span>
          </div>
        </a>

        <div className="flex items-center gap-10">
          <div className="hidden lg:flex items-center space-x-10">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className={`text-[10px] font-bold transition-colors uppercase tracking-[0.3em] ${scrolled ? 'text-white hover:text-brand-pink' : 'text-white/80 hover:text-white'}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block bg-brand-pink text-white px-6 sm:px-8 py-3 sm:py-3.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-brand-pink transition-all shadow-lg active:scale-95"
            aria-label="Reservar Coffee Tour"
          >
            Reservar Tour
          </a>

          <button
            className="lg:hidden text-white p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-brand-dark/98 backdrop-blur-xl border-t border-white/5 transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-[100vh]' : 'max-h-0'
      }`}>
        <div className="flex flex-col p-6 sm:p-10 space-y-6 sm:space-y-8 min-h-[60vh]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xl sm:text-2xl font-serif text-white hover:text-brand-pink transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-pink text-white px-6 py-4 sm:py-5 text-center text-xs font-bold uppercase tracking-widest mt-4 active:scale-95 transition-transform"
            onClick={() => setIsOpen(false)}
          >
            Reservar Ahora
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
