// Arquivo: app/page.tsx
import Link from 'next/link';

// 1. IMPORTE OS ÍCONES NOVOS E O CARD
import { ChevronRight, HeartPulse, Activity, Dna } from 'lucide-react'; 
import ServiceCard from '@/components/ServiceCard';

export default function Home() {
  return (
    // Vamos trocar o fundo para um cinza bem claro, para os "cards" se destacarem
    <main className="min-h-screen bg-gray-50">

      {/* === Seção Hero === */}
      {/* O fundo do Hero agora é branco, contrastando com o bg-gray-50 do <main> */}
      <section className="bg-white py-20 md:py-32"> 
        <div className="container mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-6xl font-bold text-brand-secondary mb-4">
            Sua Saúde em Equilíbrio
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Conheça a FisioVitalitá, seu novo espaço de fisioterapia, pilates e terapias holísticas. Cuidado completo para seu corpo e mente.
          </p>

          <div className="flex justify-center space-x-4">
            <Link 
              href="/agendamento" 
              // Nosso "desvio" da cor roxa:
              className="bg-[#5B21B6] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition-colors flex items-center"
            >
              Agende sua Avaliação
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>

            <Link 
              href="/servicos" 
              className="bg-gray-200 text-brand-secondary px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-300 transition-colors"
            >
              Nossos Serviços
            </Link>
          </div>
        </div>
      </section>
      {/* === Fim da Seção Hero === */}


      {/* ======================================= */}
      {/* === NOVA SEÇÃO: Destaque de Serviços === */}
      {/* ======================================= */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          {/* Título da Seção */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary">
              Nossos Principais Serviços
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Cuidado especializado para sua necessidade.
            </p>
          </div>

          {/* Grid de Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1: Fisioterapia */}
            <ServiceCard 
              Icon={HeartPulse} // Ícone que importamos
              title="Fisioterapia"
              description="Recuperação de lesões, alívio de dor crônica e reabilitação funcional."
              href="/servicos/fisioterapia" // Link para a futura página
            />

            {/* Card 2: Pilates */}
            <ServiceCard 
              Icon={Activity} // Ícone que importamos
              title="Pilates"
              description="Fortalecimento do core, melhora da postura e aumento da flexibilidade."
              href="/servicos/pilates"
            />

            {/* Card 3: Acupuntura */}
            <ServiceCard 
              Icon={Dna} // Ícone que importamos
              description="Técnica milenar para alívio da dor, redução de estresse e equilíbrio energético."
              title="Acupuntura"
              href="/servicos/acupuntura"
            />
          </div>

        </div>
      </section>
      {/* === Fim da Seção de Serviços === */}

    </main>
  );
}