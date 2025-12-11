// Arquivo: app/servicos/terapias-holisticas/page.tsx
import Image from 'next/image';
import ServiceCTA from '@/components/ServiceCTA';
import FAQ from '@/components/FAQ';

const holisticasFAQ = [
  { question: "O que é o Reiki?", answer: "Reiki é uma técnica de harmonização energética através da imposição das mãos. Não tem vínculo religioso e busca restabelecer o equilíbrio natural do corpo, a paz mental e o bem-estar." },
  { question: "O que são Barras de Access?", answer: "São 32 pontos na cabeça que, quando tocados suavemente, liberam bloqueios mentais, crenças limitantes e padrões de comportamento que nos impedem de progredir." },
  { question: "Como funciona a Terapia Floral?", answer: "Utilizamos as essências florais (como os Florais de Bach) para tratar o emocional. Cada essência trabalha uma emoção específica (medo, indecisão, tristeza), ajudando a equilibrar a mente sem efeitos colaterais." },
  { question: "Posso combinar com outros tratamentos?", answer: "Sim! As terapias holísticas são complementares (integrativas) e potencializam os resultados da medicina tradicional, psicologia e fisioterapia." },
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
        <p>
          São abordagens que tratam o ser humano como um todo: corpo, mente e energia.
          Na FisioVitalitá, oferecemos Reiki, Barras de Access e Terapia Floral para
          ajudar você a reencontrar seu eixo e viver com mais harmonia.
        </p>

        <h2 className="text-2xl font-bold text-brand-secondary">Para Quem é Indicado?</h2>
        <p>
          As terapias holísticas são indicadas para qualquer pessoa que busca
          não apenas o alívio de um sintoma físico, mas também uma maior
          conexão consigo mesma, redução do estresse e uma vida mais
          equilibrada e consciente.
        </p>
      </div>

      <FAQ items={holisticasFAQ} title="Dúvidas sobre Terapias Holísticas" />

      <ServiceCTA />
    </article>
  );
}
