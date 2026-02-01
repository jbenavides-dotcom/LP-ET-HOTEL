
import React from 'react';
import { TOUR_STEPS, openConcierge, ASSETS, COFFEE_TOUR_INFO } from '../constants';
import { Award, MessageCircle, Clock, Users, Leaf, Check, Coffee } from 'lucide-react';

const TourSection: React.FC = () => {
  return (
    <section id="tour" className="py-16 sm:py-24 lg:py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header - SEO Transaccional */}
        <header className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <span className="text-brand-pink text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Coffee Tour</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-dark mb-4 sm:mb-6">
            Del Árbol a la Taza
          </h2>
          <p className="text-neutral-600 font-light text-sm sm:text-base max-w-lg mx-auto">
            Experiencia guiada e inmersiva en fincas de café de especialidad. Descubre todo el proceso del café en un entorno de bosque de niebla.
          </p>

          {/* Quick Info Badges */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 bg-white px-4 py-2 rounded-full shadow-sm">
              <Clock className="w-4 h-4 text-brand-pink" />
              <span>{COFFEE_TOUR_INFO.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 bg-white px-4 py-2 rounded-full shadow-sm">
              <Users className="w-4 h-4 text-brand-pink" />
              <span>Todos los días 10 AM</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 bg-white px-4 py-2 rounded-full shadow-sm">
              <Coffee className="w-4 h-4 text-brand-pink" />
              <span>5 variedades premium</span>
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
              ¿Qué incluye tu <br className="hidden sm:block"/>
              <span className="italic text-brand-pink">Coffee Tour?</span>
            </h3>
            <p className="text-neutral-600 mb-6 sm:mb-8 leading-relaxed font-light text-base sm:text-lg">
              Una experiencia completa que incluye transporte, alimentación y acceso exclusivo a nuestra finca de clase mundial. Todo lo que necesitas para un día inolvidable.
            </p>

            {/* Qué incluye - Lista completa */}
            <ul className="grid grid-cols-1 gap-2 sm:gap-3 mb-8 sm:mb-10">
              {COFFEE_TOUR_INFO.includes.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-sm font-medium text-brand-dark"
                >
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Precio y CTA */}
            <div className="bg-brand-dark rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <div>
                  <span className="text-white/60 text-xs uppercase tracking-wider">Precio por persona</span>
                  <p className="text-white text-3xl sm:text-4xl font-serif font-bold">{COFFEE_TOUR_INFO.price}</p>
                </div>
                <div className="text-white/60 text-xs">
                  <p>Impuestos incluidos</p>
                  <p>Mínimo 2 personas</p>
                </div>
              </div>
              <button
                onClick={openConcierge}
                className="w-full bg-brand-pink hover:bg-brand-pink/90 text-white py-4 font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-3 transition-all rounded-xl active:scale-95"
                aria-label="Reservar Coffee Tour - Hablar con Concierge"
              >
                <MessageCircle className="w-5 h-5" />
                Reservar Ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourSection;
