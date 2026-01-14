// Arquivo: app/servicos/fisioterapia/page.tsx
import Image from 'next/image'; // Adicione no topo do arquivo
import ServiceCTA from '@/components/ServiceCTA';
import FAQ from '@/components/FAQ';

const fisioterapiaFAQ = [
  {
    question: "Preciso de encaminhamento médico para fazer fisioterapia?",
    answer: "Não é obrigatório, mas se você tiver exames ou encaminhamento, traga no primeiro dia. Nossa equipe fará uma avaliação completa para traçar o melhor tratamento."
  },
  {
    question: "Quanto tempo dura cada sessão?",
    answer: "As sessões duram em média 50 a 60 minutos, garantindo tempo suficiente para terapia manual, exercícios e orientações."
  },
  {
    question: "A fisioterapia dói?",
    answer: "O objetivo é aliviar a dor, não causá-la. Algumas técnicas podem gerar um leve desconforto inicial, mas sempre respeitaremos seu limite de dor."
  },
  {
    question: "Quantas sessões são necessárias?",
    answer: "Varia conforme o diagnóstico e a evolução de cada paciente. Na avaliação inicial, o fisioterapeuta poderá dar uma estimativa mais precisa."
  },
];

export default function FisioterapiaPage() {
  return (
    // A tag 'article' é semanticamente correta para este conteúdo
    <article>

      {/* Este 'div' é a "caixa" ou "janela" da imagem. 
    Ele é 'relative' para o Next.js saber onde a imagem deve preencher.
    Ele tem uma altura fixa ('h-80' = 320px)
    Ele tem 'overflow-hidden' para "cortar" o que sobrar da imagem.
*/}
      <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg mb-8">
        <Image
          // Use o 'src' correto para cada página
          src="/gallery/fisioterapia-pilates.jpg"
          alt="Sala de Fisioterapia e Pilates da FisioVitalitá"

          fill // "fill" faz a imagem preencher o 'div' pai

          // "cover" é a mágica: ele cobre a área, mantém o aspect ratio,
          // e NUNCA estica a imagem. Ele "corta" as sobras.
          style={{ objectFit: 'cover' }}

          priority // Carrega esta imagem principal mais rápido
          sizes="(max-width: 768px) 100vw, 75vw"
        />
      </div>

      <h1 className="text-4xl font-bold text-brand-secondary mb-4">
        Fisioterapia
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Recuperação de lesões, alívio de dor crônica e reabilitação funcional.
      </p>

      {/* Conteúdo do Serviço */}
      <div className="space-y-6 text-gray-700 text-lg">
        <h2 className="text-2xl font-bold text-brand-secondary">O que é Fisioterapia?</h2>
        <p>
          A fisioterapia é uma ciência da saúde que estuda, previne e trata os
          distúrbios do movimento humano. Nosso objetivo é restaurar sua capacidade
          funcional e qualidade de vida.
        </p>

        <h2 className="text-2xl font-bold text-brand-secondary">Para quem é indicado?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Pacientes com dores crônicas (costas, pescoço, ombros).</li>
          <li>Reabilitação pós-cirúrgica.</li>
          <li>Lesões esportivas (entorses, distensões).</li>
          <li>Condições neurológicas.</li>
          <li>Problemas de postura e equilíbrio.</li>
        </ul>

        <h2 className="text-2xl font-bold text-brand-secondary">Nossa Abordagem</h2>
        <p>
          Na FisioVitalitá, cada tratamento é 100% individualizado.
          Começamos com uma avaliação detalhada para entender a causa raiz
          do seu problema, não apenas os sintomas.
        </p>
      </div>

      <FAQ items={fisioterapiaFAQ} title="Dúvidas sobre Fisioterapia" />

      <ServiceCTA />
    </article>
  );
}