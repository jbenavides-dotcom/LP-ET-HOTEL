
import React from 'react';
import { NavLink, RoomType } from './types';
import { 
  Coffee, 
  MapPin, 
  Utensils,
  Sun,
  Wind,
  Glasses,
  Footprints,
  Waves
} from 'lucide-react';

export const ASSETS = {
  HERO_BG: "https://res.cloudinary.com/dsylu9a7k/image/upload/lpet/hero-aerial.png",
  CAFETALES: "https://res.cloudinary.com/dsylu9a7k/image/upload/lpet/cafetales.png",
  DEGUSTACION_CAFE: "https://res.cloudinary.com/dsylu9a7k/image/upload/lpet/degustacion-cafe.png",
  PLANTA_CAFE: "https://res.cloudinary.com/dsylu9a7k/image/upload/a_-90/lpet/processing-station.png",
  TUCAN: "https://res.cloudinary.com/dsylu9a7k/image/upload/lpet/tucan.png",
  COMIDA: "https://res.cloudinary.com/dsylu9a7k/image/upload/lpet/comida-farm-to-table.png",
  CABANA: "https://res.cloudinary.com/dsylu9a7k/image/upload/lpet/cabana-interior.png",
  CAMINATA: "https://res.cloudinary.com/dsylu9a7k/image/upload/lpet/caminata-bosque.png",
  CASCADA: "https://res.cloudinary.com/dsylu9a7k/image/upload/lpet/cascada.png",
  LAGUNA: "https://res.cloudinary.com/dsylu9a7k/image/upload/lpet/laguna-pedro-palo.png",
  HUERTA: "https://res.cloudinary.com/dsylu9a7k/image/upload/lpet/huerta.png",
  YOGA: "https://res.cloudinary.com/dsylu9a7k/image/upload/lpet/yoga.png",
  CABALGATA: "https://res.cloudinary.com/dsylu9a7k/image/upload/lpet/cabalgata.png",
  EVENTOS: "https://res.cloudinary.com/dsylu9a7k/image/upload/lpet/eventos.png",
};

// LINKS PRINCIPALES DE RESERVA - WhatsApp directo
export const WHATSAPP_BOOKING = "https://wa.me/573209306834?text=Hola%2C%20quiero%20reservar%20el%20Coffee%20Tour%20%F0%9F%8C%BF%E2%98%95";
export const BOOKING_URL = WHATSAPP_BOOKING;

// Cloudbeds solo para alojamiento
export const CLOUDBEDS_URL = "https://hotels.cloudbeds.com/en/reservation/yB0fEt";

// INFORMACIÓN DE CONTACTO
export const CONTACT_INFO = {
  email: "reservations@lapalmayeltucan.com",
  phone: "+573209306834",
  phoneDisplay: "(+57) 320 930 6834",
  address: "Zipacón, Cundinamarca, Colombia",
  googleMaps: "https://maps.app.goo.gl/v8NZcqQDGpFoUfPV7",
  whatsapp: "https://wa.me/573209306834"
};

// REDES SOCIALES
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/lapalmayeltucan_hotel/",
  facebook: "https://www.facebook.com/lapalmayeltucan/",
  website: "https://www.lapalmayeltucanhotel.com"
};

// MENÚ DE NAVEGACIÓN
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Coffee Tour', href: '#tour' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Ubicación', href: '#location' },
  { label: 'Contacto', href: '#footer' },
];

// INFORMACIÓN DEL COFFEE TOUR
export const COFFEE_TOUR_INFO = {
  price: "$492.000 COP",
  priceNumber: 492000,
  duration: "~3 horas",
  schedule: "Todos los días 10:00 AM",
  minPax: 2,
  varieties: ["Gesha", "Sidra", "Mokka", "Java", "Bourbon Amarillo"],
  includes: [
    "Recorrido guiado por finca cafetera",
    "Proceso completo del café",
    "Degustación profesional de cafés especiales",
    "Introducción a prácticas regenerativas",
    "Bebida de bienvenida",
    "Almuerzo completo farm-to-table",
    "Tiempo libre en espacios naturales",
    "Transporte desde Bogotá (min. 2 pax)",
    "Impuestos incluidos"
  ]
};

export const TOUR_STEPS = [
  {
    title: "Recorrido por el Cafetal",
    description: "Caminata guiada entre cafetales de especialidad. Conoce variedades como Gesha, Sidra y Bourbon Amarillo, el ciclo de vida del cafeto y nuestras prácticas de agricultura regenerativa.",
    image: ASSETS.CAFETALES
  },
  {
    title: "Proceso del Café",
    description: "Descubre la cosecha manual, selección, fermentación y secado. Aprende cómo cada proceso crea perfiles de sabor únicos que nos han posicionado como finca de clase mundial.",
    image: ASSETS.PLANTA_CAFE
  },
  {
    title: "Cata de Especialidad",
    description: "Degustación guiada de cafés Gesha, Sidra, Mokka, Java y Bourbon Amarillo. Identifica aromas, notas sensoriales y aprende a preparar café de especialidad en casa.",
    image: ASSETS.DEGUSTACION_CAFE
  }
];

export const EXPERIENCE_HIGHLIGHTS = [
  { icon: <Coffee className="w-5 h-5" />, label: 'Degustación de 5 Variedades Premium', image: ASSETS.DEGUSTACION_CAFE },
  { icon: <Utensils className="w-5 h-5" />, label: 'Almuerzo Completo Farm-to-Table', image: ASSETS.COMIDA },
  { icon: <Footprints className="w-5 h-5" />, label: 'Recorrido por Finca Cafetera', image: ASSETS.CAFETALES },
];

export const DIRECTIONS = [
  "Salida desde Bogotá por Calle 13 o Carrera 80 hacia Cachipay.",
  "Punto de referencia: Restaurante San Angelo Gourmet (antes de Cachipay).",
  "Desvío en el cruce de Macondo (500 mts).",
  "Paso por el cruce del Camino Real (Km 3.7 - Fundación Erika Verde).",
  "A 1km aprox. encontrarás el desvío señalizado hacia el hotel.",
];

export const ROOMS: RoomType[] = [
  {
    id: 'cabana-1',
    name: 'Cabaña Eco-Luxury',
    description: 'Nuestras cabañas insignia cuentan con materiales reciclables, tina privada, ducha al aire libre y una malla catamarán para relajarse sobre el bosque de niebla.',
    price: '$220',
    image: ASSETS.CABANA,
    amenities: ['Tina', 'Ducha Outdoor', 'Malla Catamarán']
  },
  {
    id: 'cabana-2',
    name: 'Suite del Cafetal',
    description: 'Rodeada de cafetales de agricultura regenerativa, esta suite ofrece total privacidad y una conexión profunda con el entorno natural de la finca.',
    price: '$280',
    image: ASSETS.CAFETALES,
    amenities: ['King Bed', 'Coffee Station', 'Malla Catamarán']
  },
  {
    id: 'cabana-3',
    name: 'Refugio de Niebla',
    description: 'Ubicada en la parte alta de la finca, ofrece vistas panorámicas impresionantes de las montañas de Zipacón y el místico bosque nuboso.',
    price: '$250',
    image: ASSETS.HERO_BG,
    amenities: ['Vista Panorámica', 'Tina', 'Diseño Eco']
  }
];
