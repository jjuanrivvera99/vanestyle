// Global types for VaneStyle

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
  noindex?: boolean;
}

export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
}

// Re-export config types
export type { Service, ServiceCategory } from '@config/services';
export type { FAQItem } from '@config/faq';
export type { NavLink } from '@config/navigation';
export type { SiteConfig } from '@config/site';
