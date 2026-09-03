// Arquivo: app/agendamento/page.tsx
"use client"; // IMPORTANTE! O widget do Calendly é interativo

// 1. Importe o widget do pacote que instalamos
import { InlineWidget } from "react-calendly";

export default function AgendamentoPage() {
  const calendlyUrl = "https://calendly.com/daianeborges/avaliacao-fisio";

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors">

      {/* === Seção Hero === */}
      <section className="bg-white dark:bg-slate-900 py-20 text-center transition-colors">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary dark:text-white">
            Agende sua Consulta
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Escolha o melhor horário para você. Nossa agenda é sincronizada 
            em tempo real com nossos profissionais.
          </p>
        </div>
      </section>

      {/* === Seção do Widget === */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden border border-gray-200 dark:border-slate-700">
            <InlineWidget 
              url={calendlyUrl} 
              styles={{
                height: '800px',
                minWidth: '320px',
              }}
              pageSettings={{
                backgroundColor: 'ffffff',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: '5B21B6',
                textColor: '1F2937',
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}