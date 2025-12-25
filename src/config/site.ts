export const siteConfig = {
  // Basic info
  name: 'Vane Style',
  tagline: 'Tu estilo, tus uñas',
  description:
    'Servicios profesionales de manicure, pedicure, uñas acrílicas y polygel a domicilio en Cali, Colombia',

  // URLs
  url: 'https://vanestyle.com.co',
  ogImage: '/img/og-image.png',

  // Contact
  contact: {
    whatsapp: {
      number: '573157299583',
      display: '+57 315 729 9583',
      defaultMessage: 'Hola! Me gustaría agendar una cita',
    },
    email: {
      contact: 'contact@vanestyle.com.co',
      support: 'soporte@vanestyle.com.co',
    },
  },

  // Social media
  social: {
    instagram: {
      url: 'https://instagram.com/vanestyle.peluqueria',
      handle: '@vanestyle.peluqueria',
    },
    facebook: {
      url: 'https://facebook.com/vanestyle.peluqueria',
      handle: 'vanestyle.peluqueria',
    },
  },

  // Business info
  business: {
    type: 'NailSalon',
    foundedYear: 2020,
    location: 'Cali, Colombia',
    city: 'Cali',
    region: 'Valle del Cauca',
    country: 'Colombia',
    serviceArea: ['Cali', 'Valle del Cauca'],
    serviceType: 'Domicilio / En casa',
    priceRange: '$20.000 - $95.000+ COP',
    schedule: {
      weekdays: '9:00 AM - 6:00 PM',
      saturday: '9:00 AM - 4:00 PM',
      sunday: 'Cerrado',
    },
  },

  // SEO
  seo: {
    titleTemplate: '%s | Vane Style',
    defaultTitle: 'Vane Style - Uñas Profesionales a Domicilio en Cali',
    keywords: [
      'manicure Cali',
      'pedicure Cali',
      'uñas acrílicas Cali',
      'polygel Cali',
      'nail art',
      'uñas a domicilio Cali',
      'salón de uñas Cali',
      'manicure a domicilio Cali',
      'Valle del Cauca',
      'Colombia',
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;

// Helper to generate WhatsApp URL
export function getWhatsAppUrl(message?: string): string {
  const msg = message || siteConfig.contact.whatsapp.defaultMessage;
  return `https://wa.me/${siteConfig.contact.whatsapp.number}?text=${encodeURIComponent(msg)}`;
}
