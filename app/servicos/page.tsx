// Arquivo: app/servicos/page.tsx
import ServiceCard from '@/components/ServiceCard';
import { HeartPulse, Activity, Dna, Waves, Leaf } from 'lucide-react'; // Importamos todos os ícones que vamos usar

// Lista COMPLETA de serviços.
// É a "fonte da verdade" para esta página.
const allServices = [
  {
    Icon: HeartPulse,
    title: "Fisioterapia",
    description: "Recuperação de lesões, alívio de dor crônica e reabilitação funcional.",
    href: "/servicos/fisioterapia",
  },
  {
    Icon: Activity,
    title: "Pilates",
    description: "Fortalecimento do core, melhora da postura e aumento da flexibilidade.",
    href: "/servicos/pilates",
  },
  {
    Icon: Dna,
    title: "Acupuntura",
    description: "Técnica milenar para alívio da dor, redução de estresse e equilíbrio energético.",
    href: "/servicos/acupuntura",
  },
  {
    Icon: Waves,
    title: "Massoterapia",
    description: "Técnicas de massagem para relaxamento muscular, alívio de tensão e bem-estar.",
    href: "/servicos/massoterapia",
  },
  {
    Icon: Leaf,
    title: "Terapias Holísticas",
    description: "Cuidado integral que une corpo, mente e espírito para uma saúde plena.",
    href: "/servicos/terapias-holisticas",
  },
  // Adicione mais serviços aqui se for preciso
];

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* === Seção Hero da Página "Serviços" === */}
      <section className="bg-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary">
            Nossos Serviços
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Oferecemos uma abordagem completa e integrada para cuidar da sua saúde e bem-estar. Conheça nossas especialidades.
          </p>
        </div>
      </section>

      {/* === Seção da Grade de Serviços === */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          {/* Grid de Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Usamos .map() para criar um card para cada serviço */}
            {allServices.map((service) => (
              <ServiceCard 
                key={service.title}
                Icon={service.Icon}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            ))}

          </div>
        </div>
      </section>
    </main>
  );
}