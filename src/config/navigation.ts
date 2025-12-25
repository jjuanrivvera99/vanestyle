export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const navLinks: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
];

export const footerLinks = {
  social: [
    {
      label: 'Instagram',
      href: 'https://instagram.com/vanestyle.peluqueria',
      icon: 'instagram',
    },
    {
      label: 'Facebook',
      href: 'https://facebook.com/vanestyle.peluqueria',
      icon: 'facebook',
    },
  ],
  legal: [
    { label: 'Política de Privacidad', href: '/privacidad' },
    { label: 'Términos y Condiciones', href: '/terminos' },
  ],
};
