import LinkedinIcon from 'public/icons/linkedin.svg';
import InstagramIcon from 'public/icons/instagram.svg';
import WhatsappIcon from 'public/icons/whatsapp.svg';

export const SOCIAL_LINK = [
  {
    icon: LinkedinIcon,
    href: 'https://www.linkedin.com/in/logarithm.solutions/',
    ariaLabel: 'Visitar perfil da Logarithm no LinkedIn',
  },
  {
    icon: InstagramIcon,
    href: 'https://www.instagram.com/logarithm.solutions',
    ariaLabel: 'Visitar perfil da Logarithm no Instagram',
  },

  {
    icon: WhatsappIcon,
    href: 'https://wa.me/5591719041?text=Olá!%20Conheci%20a%20Logarithm%20e%20gostaria%20de%20receber%20mais%20informações.',
    ariaLabel: 'Acessar canal da Logarithm no Whatsapp',
  },
];

export const LEGAL_LINKS = [
  { href: '/politica-de-privacidade', label: 'Política de Privacidade' },
  { href: '/termos-de-uso', label: 'Termos de Uso' },
];

export const MAIS_EU_LEGAL_LINKS = [
  { href: '/mais-eu/politica-de-privacidade', label: 'Política de Privacidade' },
  { href: '/mais-eu/exclusao-de-dados', label: 'Exclusão de Dados' },
];
