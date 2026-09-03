// Arquivo: app/layout.tsx
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { siteInfo } from '@/config/site-info';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FisioVitalitá - Sua Saúde em Equilíbrio',
  description: 'Clínica especializada em Fisioterapia, Pilates, Acupuntura, Massoterapia, Nutrição e Terapias Holísticas em Porto Alegre. Recupere seu bem-estar com a Dra. Daiane Borges.',
  metadataBase: new URL(siteInfo.siteUrl),
  keywords: ['Fisioterapia', 'Pilates', 'Acupuntura', 'Massoterapia', 'Nutrição', 'Terapias Holísticas', 'Porto Alegre', 'Zona Sul', 'Dra. Daiane Borges', 'FisioVitalitá'],
  openGraph: {
    title: 'FisioVitalitá - Sua Saúde em Equilíbrio',
    description: 'Buscando Fisioterapia, Pilates ou Nutrição em Porto Alegre? Conheça a FisioVitalitá. Atendimento personalizado e humanizado.',
    url: siteInfo.siteUrl,
    siteName: siteInfo.name,
    images: [
      {
        url: '/gallery/fachada.jpg',
        width: 1200,
        height: 630,
        alt: 'Fachada FisioVitalitá',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FisioVitalitá - Sua Saúde em Equilíbrio',
    description: 'Clínica especializada em Fisioterapia, Pilates, Acupuntura, Massoterapia, Nutrição e Terapias Holísticas em Porto Alegre.',
    images: ['/gallery/fachada.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={outfit.className}>{children}</body>
      <Analytics />
    </html>
  );
}