// Arquivo: /src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// 1. IMPORTE SEUS COMPONENTES
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AccessibilityToolbar from '@/components/AccessibilityToolbar';
import JsonLd from '@/components/JsonLd';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FisioVitalitá - Sua Saúde em Equilíbrio',
  description: 'Clínica especializada em Fisioterapia, Pilates, Acupuntura, Massoterapia e Terapias Holísticas em Porto Alegre. Recupere seu bem-estar com a Dra. Daiane Borges.',
  keywords: ['Fisioterapia', 'Pilates', 'Acupuntura', 'Massoterapia', 'Porto Alegre', 'Zona Sul', 'Dra. Daiane Borges', 'FisioVitalitá'],
  openGraph: {
    title: 'FisioVitalitá - Sua Saúde em Equilíbrio',
    description: 'Buscando Fisioterapia ou Pilates em Porto Alegre? Conheça a FisioVitalitá. Atendimento personalizado e humanizado.',
    url: 'https://fisioVitalitá.com.br', // Substituir pela URL real quando tiver
    siteName: 'FisioVitalitá',
    images: [
      {
        url: '/gallery/fachada.jpg', // Usando a foto da fachada como preview
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
      <body className={inter.className}>
        <JsonLd />
        {/* 2. ADICIONE O HEADER AQUI */}
        <Header />

        {/* O {children} é onde o conteúdo da sua página (ex: page.tsx) será renderizado */}
        <main>{children}</main>

        <WhatsAppButton />
        <AccessibilityToolbar />

        {/* 3. ADICIONE O FOOTER AQUI */}
        <Footer />
      </body>
    </html>
  );
}