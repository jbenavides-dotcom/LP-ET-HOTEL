
import React from 'react';
import { BOOKING_URL, ASSETS } from '../constants';
import { ArrowRight, MapPin, Coffee as CoffeeIcon, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Lazy Loading */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.HERO_BG}
          className="w-full h-full object-cover"
          alt="Vista aérea de la finca cafetera La Palma & El Tucán en Zipacón, Colombia - Coffee Tour"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 py-20 sm:py-0">
        <div className="max-w-3xl">
          {/* Badge - Responsive */}
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 rounded-full bg-brand-pink text-white text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] font-bold mb-6 sm:mb-8 animate-fade-in">
            <CoffeeIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Coffee Tour de Un Día</span>
          </div>

          {/* H1 - SEO Optimizado y Responsive */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif mb-6 sm:mb-8 leading-[1.1] sm:leading-[1.05] text-white">
            El Mejor <span className="text-brand-beige">Coffee Tour</span> <br className="hidden sm:block" />
            <span className="italic">de Colombia</span>
          </h1>

          {/* Descripción - Responsive */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 max-w-xl font-light leading-relaxed">
            Descubre los secretos de una finca cafetera de talla mundial. Recorre nuestros cafetales y vive una experiencia sensorial inolvidable a solo <strong className="text-white font-medium">90 minutos de Bogotá</strong>.
          </p>

          {/* Rating Badge - Social Proof */}
          <div className="flex items-center gap-2 mb-6 sm:mb-8">
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-white/80 text-xs sm:text-sm font-medium">4.9/5 - 127+ reseñas</span>
          </div>

          {/* CTAs - Mobile First */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href={BOOKING_URL}
              className="bg-brand-pink text-white px-8 sm:px-10 py-4 sm:py-5 font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:scale-105 hover:bg-white hover:text-brand-pink transition-all shadow-2xl active:scale-95"
              aria-label="Reservar Coffee Tour ahora"
            >
              Reservar Ahora
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 text-white/80 px-4 sm:px-6 py-3 sm:py-4 glass-morphism rounded-xl">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-brand-pink flex-shrink-0" />
              <span className="text-xs uppercase tracking-widest font-medium">Zipacón, Cundinamarca</span>
            </div>
          </div>

          {/* Trust Badges - Mobile */}
          <div className="mt-8 sm:mt-12 flex flex-wrap items-center gap-4 sm:gap-6 text-white/60 text-[10px] sm:text-xs uppercase tracking-wider">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Green Travel Award
            </span>
            <span className="hidden sm:inline">•</span>
            <span>+30 países de exportación</span>
            <span className="hidden sm:inline">•</span>
            <span>Agricultura regenerativa</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on very small screens */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-4 text-white/40 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Scroll</span>
        <div className="w-px h-8 sm:h-10 bg-white/20"></div>
      </div>
    </section>
  );
};

export default Hero;
