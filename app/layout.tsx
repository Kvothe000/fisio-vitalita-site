import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FisioVitalitá - Sua Saúde em Equilíbrio',
  description: 'Clínica especializada em Fisioterapia, Pilates, Acupuntura, Massoterapia e Terapias Holísticas em Porto Alegre. Recupere seu bem-estar com a Dra. Daiane Borges.',
  keywords: ['Fisioterapia', 'Pilates', 'Acupuntura', 'Massoterapia', 'Porto Alegre', 'Zona Sul', 'Dra. Daiane Borges', 'FisioVitalitá'],
  openGraph: {
    title: 'FisioVitalitá - Sua Saúde em Equilíbrio',
    description: 'Buscando Fisioterapia ou Pilates em Porto Alegre? Conheça a FisioVitalitá. Atendimento personalizado e humanizado.',
    url: 'https://fisioVitalitá.com.br',
    siteName: 'FisioVitalitá',
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
    </html>
  );
}