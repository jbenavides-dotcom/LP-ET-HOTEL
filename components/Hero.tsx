
import React from 'react';
import { openConcierge, ASSETS, COFFEE_TOUR_INFO } from '../constants';
import { MessageCircle, MapPin, Coffee as CoffeeIcon, Star, Clock, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.HERO_BG}
          className="w-full h-full object-cover"
          alt="Coffee Tour en finca cafetera La Palma & El Tucán - Zipacón Colombia"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 py-20 sm:py-0">
        <div className="max-w-3xl">
          {/* Badge con precio */}
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 rounded-full bg-brand-pink text-white text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold mb-6 sm:mb-8 animate-fade-in">
            <CoffeeIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Coffee Tour – Del Árbol a la Taza</span>
          </div>

          {/* H1 - SEO Transaccional */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-4 sm:mb-6 leading-[1.1] sm:leading-[1.05] text-white">
            Reserva tu <span className="text-brand-beige">Coffee Tour</span> <br className="hidden sm:block" />
            <span className="italic">en Finca de Clase Mundial</span>
          </h1>

          {/* Propuesta de valor clara */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-xl font-light leading-relaxed">
            Vive una experiencia auténtica en una finca cafetera galardonada. Degusta cafés <strong className="text-white font-medium">Gesha, Sidra, Mokka, Java y Bourbon Amarillo</strong>. Incluye transporte desde Bogotá, almuerzo farm-to-table y recorrido guiado.
          </p>

          {/* Precio destacado */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-3 rounded-xl border border-white/20">
              <span className="text-white/70 text-xs uppercase tracking-wider block">Precio por persona</span>
              <span className="text-white text-2xl sm:text-3xl font-serif font-bold">{COFFEE_TOUR_INFO.price}</span>
            </div>
            <div className="flex flex-col gap-1 text-white/80 text-xs sm:text-sm">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-pink" />
                {COFFEE_TOUR_INFO.duration} de experiencia
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-brand-pink" />
                Todos los días 10:00 AM
              </span>
            </div>
          </div>

          {/* Rating Badge - Social Proof */}
          <div className="flex items-center gap-2 mb-6 sm:mb-8">
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-white/80 text-xs sm:text-sm font-medium">4.9/5 - 127+ reseñas</span>
          </div>

          {/* CTA Principal - WhatsApp */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button
              onClick={openConcierge}
              className="bg-brand-pink hover:bg-brand-pink/90 text-white px-8 sm:px-10 py-4 sm:py-5 font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-2xl active:scale-95 rounded-lg"
              aria-label="Reservar Coffee Tour - Hablar con Concierge"
            >
              <MessageCircle className="w-5 h-5" />
              Reservar Ahora
            </button>
            <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 text-white/80 px-4 sm:px-6 py-3 sm:py-4 glass-morphism rounded-xl">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-brand-pink flex-shrink-0" />
              <span className="text-xs uppercase tracking-widest font-medium">90 min desde Bogotá</span>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6 text-white/60 text-[10px] sm:text-xs uppercase tracking-wider">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Cupos Limitados
            </span>
            <span className="hidden sm:inline">•</span>
            <span>Transporte incluido</span>
            <span className="hidden sm:inline">•</span>
            <span>Almuerzo incluido</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-4 text-white/40 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Descubre más</span>
        <div className="w-px h-8 sm:h-10 bg-white/20"></div>
      </div>
    </section>
  );
};

export default Hero;
