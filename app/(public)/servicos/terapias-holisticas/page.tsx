// Arquivo: app/(public)/servicos/terapias-holisticas/page.tsx
// RASCUNHO de conteúdo — revisar com a Daiane antes de publicar.
import Image from 'next/image';
import { Sun, Brain, Flower2 } from 'lucide-react';
import ServiceCTA from '@/components/ServiceCTA';
import FAQ from '@/components/FAQ';

const holisticasFAQ = [
  { question: "O que é o Reiki?", answer: "Reiki é uma técnica de harmonização energética através da imposição das mãos. Não tem vínculo religioso e busca restabelecer o equilíbrio natural do corpo, a paz mental e o bem-estar." },
  { question: "O que são Barras de Access?", answer: "São 32 pontos na cabeça que, quando tocados suavemente, liberam bloqueios mentais, crenças limitantes e padrões de comportamento que nos impedem de progredir." },
  { question: "Como funciona a Terapia Floral?", answer: "Utilizamos as essências florais (como os Florais de Bach) para tratar o emocional. Cada essência trabalha uma emoção específica (medo, indecisão, tristeza), ajudando a equilibrar a mente sem efeitos colaterais." },
  { question: "Posso combinar com outros tratamentos?", answer: "Sim! As terapias holísticas são complementares (integrativas) e potencializam os resultados da medicina tradicional, psicologia e fisioterapia." },
];

const terapiasOferecidas = [
  {
    Icon: Sun,
    title: "Reiki",
    description: "Técnica japonesa que utiliza a imposição das mãos para promover relaxamento profundo e equilíbrio energético. Não possui vínculo religioso e auxilia no alívio do estresse e na sensação de bem-estar.",
  },
  {
    Icon: Brain,
    title: "Barras de Access",
    description: "Toque suave em 32 pontos na cabeça que ajuda a liberar tensões acumuladas, padrões de pensamento e crenças que limitam o dia a dia, trazendo mais leveza e clareza mental.",
  },
  {
    Icon: Flower2,
    title: "Terapia Floral",
    description: "Essências florais (como os Florais de Bach) que atuam no equilíbrio emocional. Cada essência é indicada para uma emoção específica — como medo, ansiedade ou tristeza — sem efeitos colaterais.",
  },
];

export default function TerapiasHolisticasPage() {
  return (
    <article>
      <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg mb-8">
        <Image
          src="/gallery/massagem-holisticas.jpg"
          alt="Sala de Terapias Holísticas da FisioVitalitá"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <h1 className="text-4xl font-bold text-brand-secondary mb-4">
        Terapias Holísticas
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Equilíbrio energético e emocional para uma vida mais plena e leve.
      </p>

      <div className="space-y-6 text-gray-700 text-lg">
        <h2 className="text-2xl font-bold text-brand-secondary">O que são Terapias Holísticas?</h2>
        <p className="leading-relaxed">
          São práticas integrativas que enxergam o ser humano como um todo: corpo, mente e emoções.
          Na FisioVitalitá, elas funcionam como um complemento aos tratamentos de saúde —
          potencializando os resultados da fisioterapia e de outros cuidados — e não substituem
          qualquer acompanhamento médico ou terapêutico.
        </p>

        <h2 className="text-2xl font-bold text-brand-secondary">Nossas Terapias</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {terapiasOferecidas.map((terapia) => (
            <div key={terapia.title} className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
              <div className="w-12 h-12 bg-[#5B21B6] rounded-xl flex items-center justify-center mb-4">
                <terapia.Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{terapia.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{terapia.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-brand-secondary pt-4">Para Quem é Indicado?</h2>
        <p className="leading-relaxed">
          As terapias holísticas são indicadas para quem busca reduzir o estresse do dia a dia,
          equilibrar as emoções, melhorar a qualidade do sono e fortalecer a conexão consigo mesmo.
          Também são excelentes aliadas durante tratamentos de fisioterapia, promovendo um cuidado
          mais completo e acolhedor.
        </p>
      </div>

      <FAQ items={holisticasFAQ} title="Dúvidas sobre Terapias Holísticas" />

      <ServiceCTA />
    </article>
  );
}