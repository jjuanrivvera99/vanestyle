export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  priceFrom?: boolean;
  duration?: string;
  category: ServiceCategory;
  popular?: boolean;
}

export type ServiceCategory = 'manicure' | 'pedicure' | 'sistemas' | 'combos' | 'adicionales';

export const categoryLabels: Record<ServiceCategory, string> = {
  manicure: 'Manicure',
  pedicure: 'Pedicure',
  sistemas: 'Sistemas (Acrílico/Polygel)',
  combos: 'Combos Especiales',
  adicionales: 'Adicionales',
};

export const services: Service[] = [
  // Manicure
  {
    id: 'manicure-tradicional',
    name: 'Manicura Tradicional',
    description: 'Limpieza profunda + esmaltado tradicional',
    price: 20000,
    duration: '45 min',
    category: 'manicure',
  },
  {
    id: 'manicure-semipermanente',
    name: 'Manicure Semipermanente',
    description: 'Limpieza profunda + esmaltado en gel de larga duración',
    price: 45000,
    duration: '60 min',
    category: 'manicure',
    popular: true,
  },

  // Pedicure
  {
    id: 'pedicure-tradicional',
    name: 'Pedicure Tradicional',
    description: 'Limpieza, exfoliación básica + esmaltado tradicional',
    price: 25000,
    duration: '60 min',
    category: 'pedicure',
  },
  {
    id: 'pedicure-semipermanente',
    name: 'Pedicure Semipermanente',
    description: 'Limpieza, exfoliación básica + esmaltado en gel',
    price: 50000,
    duration: '75 min',
    category: 'pedicure',
  },

  // Sistemas
  {
    id: 'set-acrilico',
    name: 'Set Nuevo Acrílico / Polygel',
    description: 'Uñas esculpidas desde cero. Largo corto #1-#2',
    price: 95000,
    priceFrom: true,
    duration: '2-3 horas',
    category: 'sistemas',
    popular: true,
  },
  {
    id: 'bano-acrilico',
    name: 'Baño de Acrílico / Polygel',
    description: 'Capa de refuerzo sobre el largo de tu uña natural',
    price: 70000,
    duration: '90 min',
    category: 'sistemas',
  },
  {
    id: 'retoque-sistemas',
    name: 'Retoque de Sistemas',
    description: 'Mantenimiento hasta 21 días',
    price: 70000,
    duration: '90 min',
    category: 'sistemas',
  },

  // Combos
  {
    id: 'combo-tradicional',
    name: 'Combo Tradicional',
    description: 'Manicure + Pedicure tradicional',
    price: 40000,
    duration: '90 min',
    category: 'combos',
  },
  {
    id: 'combo-semipermanente',
    name: 'Combo Full Color Semipermanente',
    description: 'Manicure + Pedicure semipermanente',
    price: 90000,
    duration: '2 horas',
    category: 'combos',
    popular: true,
  },
];

export const additionalServices = [
  {
    id: 'retiro-semi',
    name: 'Retiro de Semipermanente',
    description: 'Sin set nuevo',
    price: 10000,
  },
  {
    id: 'retiro-sistemas',
    name: 'Retiro de Sistemas',
    description: 'Acrílico / Polygel',
    price: 25000,
  },
  {
    id: 'reparacion',
    name: 'Reparación de Uña',
    description: 'Sistemas / Uña rota (c/u)',
    price: 8000,
  },
];

export const decorationLevels = [
  {
    level: 1,
    name: 'Toque de Diseño',
    price: 12000,
    description: 'Diseños simples: puntos, líneas, stickers en 2-4 uñas',
  },
  {
    level: 2,
    name: 'Diseño Medio',
    price: 18000,
    description: 'Mano alzada sencilla, encapsulados básicos, 6-8 uñas',
  },
  {
    level: 3,
    name: 'Diseño Avanzado',
    price: null,
    description: 'Se cotiza antes de iniciar el servicio',
  },
];

export const classicDesigns = [
  { name: 'Diseño Francesa', price: 10000 },
  { name: 'Baby Boomer', price: 15000 },
  { name: 'Efectos (Ojo de Gato, Aurora, etc.)', price: 10000 },
];

// Helpers
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category);
}

export function getPopularServices(): Service[] {
  return services.filter((s) => s.popular);
}

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}
