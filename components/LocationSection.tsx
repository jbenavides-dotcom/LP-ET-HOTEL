
import React from 'react';
import { DIRECTIONS, ASSETS } from '../constants';
import { MapPin, Navigation, Waves, Trees } from 'lucide-react';

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

        {/* Directions Card */}
        <div className="bg-brand-dark rounded-2xl sm:rounded-[2.5rem] lg:rounded-[4rem] p-6 sm:p-10 lg:p-16 xl:p-24 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-brand-pink/10 blur-[100px] rounded-full"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 relative z-10">
                <div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-6 sm:mb-8 lg:mb-10 italic">¿Cómo Llegar?</h2>
                    <div className="space-y-5 sm:space-y-6 lg:space-y-8">
                        {DIRECTIONS.map((dir, idx) => (
                            <div key={idx} className="flex gap-4 sm:gap-6 group items-start">
                                <span className="text-brand-pink font-serif text-2xl sm:text-3xl italic opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0">{idx + 1}.</span>
                                <p className="text-white/70 text-xs sm:text-sm leading-relaxed pt-1 sm:pt-2 group-hover:text-white transition-colors">{dir}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white/5 p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] border border-white/10 flex flex-col items-center justify-center text-center">
                    <Navigation className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-brand-pink mb-6 sm:mb-8 lg:mb-10" />
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif mb-4 sm:mb-6">Ubicación Estratégica</h3>
                    <p className="text-white/60 mb-8 sm:mb-10 lg:mb-12 text-xs sm:text-sm leading-relaxed">
                        Estamos ubicados en el municipio de Zipacón, Cundinamarca. Un refugio de paz a solo 90 minutos de la capital.
                    </p>
                    <a
                        href="https://www.google.com/maps/search/La+Palma+y+El+Tucan+Hotel+Zipacon+Cundinamarca"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-pink text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 font-bold uppercase text-[10px] tracking-widest hover:bg-white hover:text-brand-pink transition-all shadow-xl active:scale-95 rounded-lg"
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
