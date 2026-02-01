
import React from 'react';
import { TOUR_STEPS, BOOKING_URL, ASSETS } from '../constants';
import { Award, ChevronRight, Clock, Users, Leaf } from 'lucide-react';

const TourSection: React.FC = () => {
  return (
    <section id="tour" className="py-16 sm:py-24 lg:py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header - SEO Optimizado */}
        <header className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <span className="text-brand-pink text-xs uppercase tracking-[0.4em] font-bold mb-4 block">La Experiencia</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-dark mb-4 sm:mb-6">
            Tu Día en la Finca Cafetera
          </h2>
          <p className="text-neutral-600 font-light text-sm sm:text-base">
            Sumérgete en el mundo de los cafés especiales. Desde la cereza en el árbol hasta la taza perfecta.
          </p>

          {/* Quick Info Badges */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600">
              <Clock className="w-4 h-4 text-brand-pink" />
              <span>6-8 horas</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600">
              <Users className="w-4 h-4 text-brand-pink" />
              <span>Grupos pequeños</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600">
              <Leaf className="w-4 h-4 text-brand-pink" />
              <span>Agricultura regenerativa</span>
            </div>
          </div>
        </header>

        {/* Tour Steps Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TOUR_STEPS.map((step, idx) => (
            <article
              key={idx}
              className="group bg-white rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={step.image}
                  alt={`Paso ${idx + 1} del Coffee Tour: ${step.title} - La Palma & El Tucán`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-8 lg:p-10">
                <span className="text-brand-pink font-bold text-[10px] uppercase tracking-widest mb-3 sm:mb-4 block">
                  Paso {idx + 1}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-brand-dark mb-3 sm:mb-4">
                  {step.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Processing Station Feature - Responsive */}
        <div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center bg-brand-pink/5 rounded-2xl sm:rounded-[3rem] p-6 sm:p-10 lg:p-20">
          {/* Image - Mobile Optimized */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden aspect-[3/4] sm:aspect-[2/3] max-h-[500px] lg:max-h-[650px] w-full border-4 border-white">
              <img
                src={ASSETS.PLANTA_CAFE}
                alt="Planta de procesamiento de café especial - World Class Processing Station La Palma & El Tucán"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            {/* Award Badge - Hidden on small mobile */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hidden sm:block border border-brand-beige/20">
              <div className="flex items-center gap-2 sm:gap-3">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-brand-pink" />
                <div>
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-brand-dark">World Class</p>
                  <p className="text-[10px] sm:text-xs text-neutral-500 italic">Processing Station</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-brand-dark mb-4 sm:mb-6 leading-tight">
              Innovación técnica en <br className="hidden sm:block"/>
              <span className="italic text-brand-pink">cada grano</span>
            </h3>
            <p className="text-neutral-600 mb-6 sm:mb-8 leading-relaxed font-light text-base sm:text-lg">
              Nuestro Coffee Tour no es solo una caminata; es una inmersión técnica y sensorial profunda. Conoce nuestros procesos únicos de fermentación que nos han posicionado como líderes en la industria del café de especialidad.
            </p>

            {/* Features List - Responsive Grid */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {['Visita al Beneficio', 'Degustación de Lotes', 'Recorrido Cafetales', 'Bio-Sostenibilidad'].map(item => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-brand-dark bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl border border-brand-beige/10 shadow-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-brand-pink flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={BOOKING_URL}
              className="inline-flex items-center gap-2 text-brand-pink font-bold uppercase text-[10px] tracking-widest border-b-2 border-brand-pink pb-2 hover:gap-4 transition-all"
              aria-label="Reservar mi lugar en el Coffee Tour"
            >
              Reservar Mi Lugar <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourSection;
