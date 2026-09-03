// Arquivo: app/servicos/layout.tsx (Com as melhorias)
import Link from 'next/link';
import { HeartPulse, Activity, Dna, Waves, Leaf, Scale, UtensilsCrossed } from 'lucide-react';

const allServices = [
  {
    Icon: HeartPulse,
    title: "Fisioterapia",
    href: "/servicos/fisioterapia",
  },
  {
    Icon: Activity,
    title: "Pilates",
    href: "/servicos/pilates",
  },
  {
    Icon: Dna,
    title: "Acupuntura",
    href: "/servicos/acupuntura",
  },
  {
    Icon: Waves,
    title: "Massoterapia",
    href: "/servicos/massoterapia",
  },
  {
    Icon: Leaf,
    title: "Terapias Holísticas",
    href: "/servicos/terapias-holisticas",
  },
  {
    Icon: Scale,
    title: "Fisioterapia Forense",
    href: "/servicos/fisioterapia-forense",
  },
  {
    Icon: UtensilsCrossed,
    title: "Nutrição",
    href: "/servicos/nutricao",
  },
];

export default function ServicosLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors">
      <section className="py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* === Conteúdo Principal (75%) === */}
          <div className="md:col-span-3 bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg border border-transparent dark:border-slate-700 transition-colors">
            {children}
          </div>

          {/* === Sidebar (25%) === */}
          <aside className="md:col-span-1 space-y-8 self-start sticky top-28">

            {/* Card do Menu de Serviços */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border border-transparent dark:border-slate-700 transition-colors">
              <h3 className="text-xl font-bold text-brand-secondary dark:text-white mb-4">
                Nossos Serviços
              </h3>
              <ul className="space-y-1">
                {allServices.map((service) => (
                  <li key={service.title}>
                    <Link
                      href={service.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-[#5B21B6] dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors flex items-center space-x-3 p-2 rounded-md font-medium"
                    >
                      <service.Icon className="w-5 h-5" />
                      <span>{service.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card de CTA (Call to Action) */}
            <div className="bg-[#5B21B6] dark:bg-purple-900 text-white p-6 rounded-lg shadow-lg text-center border border-transparent dark:border-slate-700 transition-colors">
              <h3 className="text-2xl font-semibold mb-4">Pronto para Começar?</h3>
              <p className="mb-6 opacity-90 text-purple-100">
                Agende sua avaliação e dê o primeiro passo para uma vida com mais saúde.
              </p>
              <a
                href="https://wa.me/5551999031186?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20FisioVitalit%C3%A1%21"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#5B21B6] px-5 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors inline-block shadow-sm"
              >
                Agendar Agora
              </a>
            </div>

          </aside>
        </div>
      </section>
    </main>
  );
}