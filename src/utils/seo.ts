import { siteConfig } from '@config/site';

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
  noindex?: boolean;
}

export function generateSEO(props: SEOProps = {}) {
  const {
    title = siteConfig.seo.defaultTitle,
    description = siteConfig.description,
    image = siteConfig.ogImage,
    canonicalUrl = siteConfig.url,
    noindex = false,
  } = props;

  const fullTitle =
    title === siteConfig.seo.defaultTitle
      ? title
      : siteConfig.seo.titleTemplate.replace('%s', title);

  return {
    title: fullTitle,
    description,
    image: image.startsWith('http') ? image : `${siteConfig.url}${image}`,
    canonicalUrl,
    noindex,
    siteName: siteConfig.name,
    locale: 'es_CO',
  };
}

export function generateNailSalonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'NailSalon',
    name: siteConfig.name,
    alternateName: 'VaneStyle',
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/img/VaneStyle_logo.png`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    telephone: `+${siteConfig.contact.whatsapp.number}`,
    email: siteConfig.contact.email.contact,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CO',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Colombia',
    },
    priceRange: siteConfig.business.priceRange,
    currenciesAccepted: 'COP',
    paymentAccepted: 'Cash, Nequi, Daviplata, Bank Transfer',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '16:00',
      },
    ],
    sameAs: [siteConfig.social.instagram.url, siteConfig.social.facebook.url],
    founder: {
      '@type': 'Person',
      name: 'Vane',
    },
    foundingDate: String(siteConfig.business.foundedYear),
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
