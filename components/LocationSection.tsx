
import React from 'react';
import { ASSETS } from '../constants';
import { Navigation } from 'lucide-react';

const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 sm:py-24 lg:py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Location Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          <div className="relative rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] overflow-hidden group aspect-[4/5] sm:aspect-[3/4] lg:h-[500px]">
            <img
              src={ASSETS.LAGUNA}
              alt="Laguna de Pedro Palo cerca de La Palma & El Tucán - entorno natural ancestral"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 lg:bottom-10 lg:left-10">
              <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-serif mb-1 sm:mb-2 italic">Laguna de Pedro Palo</h3>
              <p className="text-white/70 text-xs sm:text-sm uppercase tracking-widest">Entorno Ancestral</p>
            </div>
          </div>
          <div className="relative rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] overflow-hidden group aspect-[4/5] sm:aspect-[3/4] lg:h-[500px]">
            <img
              src={ASSETS.CASCADA}
              alt="Salto de las Monjas - cascada natural cerca del hotel La Palma & El Tucán"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 lg:bottom-10 lg:left-10">
              <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-serif mb-1 sm:mb-2 italic">Salto de las Monjas</h3>
              <p className="text-white/70 text-xs sm:text-sm uppercase tracking-widest">Pureza Natural</p>
            </div>
          </div>
        </div>

        {/* Ubicación Card */}
        <div className="bg-brand-dark rounded-2xl sm:rounded-[2.5rem] lg:rounded-[4rem] p-6 sm:p-10 lg:p-16 xl:p-24 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-brand-pink/10 blur-[100px] rounded-full"></div>
            <div className="relative z-10 max-w-xl mx-auto">
                <div className="bg-white/5 p-8 sm:p-10 lg:p-16 rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] border border-white/10 flex flex-col items-center justify-center text-center">
                    <Navigation className="w-12 h-12 sm:w-14 sm:h-14 lg:w-20 lg:h-20 text-brand-pink mb-6 sm:mb-8 lg:mb-10" />
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif mb-4 sm:mb-6 italic">Ubicación Estratégica</h2>
                    <p className="text-white/60 mb-8 sm:mb-10 lg:mb-12 text-sm sm:text-base leading-relaxed max-w-md">
                        Estamos ubicados en el municipio de Zipacón, Cundinamarca. Un refugio de paz a solo 90 minutos de Bogotá.
                    </p>
                    <a
                        href="https://www.google.com/maps/search/La+Palma+y+El+Tucan+Hotel+Zipacon+Cundinamarca"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-pink text-white px-10 sm:px-12 lg:px-14 py-4 sm:py-5 font-bold uppercase text-[10px] sm:text-xs tracking-widest hover:bg-white hover:text-brand-pink transition-all shadow-xl active:scale-95 rounded-xl"
                        aria-label="Ver ubicación de La Palma & El Tucán en Google Maps"
                    >
                        Ver en Google Maps
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
