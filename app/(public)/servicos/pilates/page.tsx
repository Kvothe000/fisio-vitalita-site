// Arquivo: app/servicos/pilates/page.tsx
import Image from 'next/image';
import ServiceCTA from '@/components/ServiceCTA';
import FAQ from '@/components/FAQ';

const pilatesFAQ = [
  { question: "O Pilates serve para quem tem dor nas costas?", answer: "Sim! O Pilates é excelente para o tratamento de dores na coluna, pois fortalece a musculatura profunda (core) que sustenta as vértebras, além de melhorar a postura e a flexibilidade." },
  { question: "Quantas vezes por semana devo praticar?", answer: "Para resultados consistentes e reabilitação, recomendamos de 2 a 3 vezes por semana. No entanto, mesmo com 1 vez por semana já é possível sentir benefícios na consciência corporal." },
  { question: "É Pilates Solo ou com Aparelhos?", answer: "Na FisioVitalitá trabalhamos com o Studio completo (Cadillac, Reformer, Chair) e também exercícios de solo e acessórios, adaptando a aula para sua necessidade específica." },
  { question: "Preciso de avaliação médica antes?", answer: "Embora não seja obrigatório, é recomendado trazer seus exames caso tenha alguma lesão específica. Nossa equipe fará uma avaliação funcional completa no seu primeiro dia." },
];

export default function PilatesPage() {
  return (
    <article>
      <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg mb-8">
        <Image
          src="/gallery/fisioterapia-pilates.jpg"
          alt="Sala de Fisioterapia e Pilates da FisioVitalitá"
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes="(max-width: 768px) 100vw, 75vw"
        />
      </div>

      <h1 className="text-4xl font-bold text-brand-secondary mb-4">
        Pilates
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Fortalecimento do core, melhora da postura e aumento da flexibilidade.
      </p>

      <div className="space-y-6 text-gray-700 text-lg">
        <h2 className="text-2xl font-bold text-brand-secondary">O que é Pilates?</h2>
        <p>
          Pilates é um método de condicionamento físico que visa à integração completa entre corpo e mente.
          Ele se concentra no fortalecimento da musculatura profunda do corpo, especialmente o "powerhouse ou core" (músculos abdominais, lombares e pélvicos).
        </p>
        <p>
          Para sua execução, pode-se utilizar apenas o peso do próprio corpo, como também usufruir de equipamentos com molas para produzir resistência durante o exercício ou dar suporte ao movimento.
        </p>

        <h2 className="text-2xl font-bold text-brand-secondary">Principais Benefícios</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Aumento da força e tônus muscular, principalmente do abdômen (core).</li>
          <li>Melhora da postura e consciência corporal.</li>
          <li>Aumento da flexibilidade e mobilidade articular.</li>
          <li>Alívio de dores crônicas e tensões musculares.</li>
          <li>Redução do estresse e melhora da concentração.</li>
        </ul>

        <h2 className="text-2xl font-bold text-brand-secondary">Nossa Abordagem</h2>
        <p>
          Na FisioVitalitá, o atendimento de Pilates é <strong>individual</strong>, não havendo turmas. Isso garante foco total do fisioterapeuta em suas necessidades específicas, seja para reabilitação ou condicionamento.
        </p>
      </div>

      <FAQ items={pilatesFAQ} title="Dúvidas sobre Pilates" />

      <ServiceCTA />
    </article >
  );
}