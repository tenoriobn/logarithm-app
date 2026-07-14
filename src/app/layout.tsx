import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://logarithm.com.br/'),

  title: {
    default: 'Logarithm | Tecnologia para problemas reais',
    template: '%s | Logarithm',
  },

  description:
    'Consultoria especializada em desenvolvimento de software, automação de processos, integração de sistemas e soluções digitais sob medida para empresas que desejam crescer com eficiência.',

  applicationName: 'Logarithm',

  referrer: 'origin-when-cross-origin',

  keywords: [
    'Logarithm',
    'consultoria em tecnologia',
    'desenvolvimento de software',
    'software sob medida',
    'automação de processos',
    'integração de sistemas',
    'integração de APIs',
    'desenvolvimento web',
    'desenvolvimento mobile',
    'sistemas embarcados',
    'transformação digital',
    'arquitetura de software',
    'soluções digitais',
    'tecnologia empresarial',
    'startup de tecnologia',
  ],

  authors: [
    {
      name: 'Logarithm',
      url: 'https://logarithm.com.br/',
    },
  ],

  creator: 'Logarithm',
  publisher: 'Logarithm',

  category: 'technology',

  classification:
    'Consultoria em tecnologia, desenvolvimento de software, automação e transformação digital',

  alternates: {
    canonical: 'https://logarithm.com.br/',
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://logarithm.com.br/',
    siteName: 'Logarithm',

    title: 'Logarithm | Tecnologia para problemas reais',

    description:
      'Desenvolvemos soluções digitais que automatizam processos, conectam sistemas e impulsionam o crescimento de empresas através da tecnologia.',

    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Logarithm — Tecnologia para problemas reais',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Logarithm | Tecnologia para problemas reais',

    description:
      'Soluções digitais, automação, integração de sistemas e desenvolvimento de software sob medida.',

    images: ['/images/og-image.jpg'],

    creator: '@logarithm',
  },

  icons: {
    icon: [{ url: '/icons/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: ['/icons/favicon.svg'],
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: '#080F15',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${plusJakartaSans.className} h-full antialiased`}>
      <body className={`${plusJakartaSans.className} flex min-h-full flex-col`}>{children}</body>
    </html>
  );
}
