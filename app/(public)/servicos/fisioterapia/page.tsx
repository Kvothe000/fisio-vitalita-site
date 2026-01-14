// Arquivo: app/servicos/fisioterapia/page.tsx
import Image from 'next/image'; // Adicione no topo do arquivo
import ServiceCTA from '@/components/ServiceCTA';
import FAQ from '@/components/FAQ';

const fisioterapiaFAQ = [
  {
    question: "Quanto tempo dura cada consulta?",
    answer: "As consultas têm duração média de 50 minutos, garantindo tempo suficiente para terapia manual, exercícios, recursos de eletrofototermoterapia e orientações."
  },
  {
    question: "Preciso de encaminhamento médico?",
    answer: "Não é obrigatório, mas se tiver exames ou encaminhamento, traga no primeiro dia. Nossa avaliação é completa para traçar o melhor plano de tratamento."
  },
  {
    question: "Quantas consultas são necessárias?",
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
        <p className="leading-relaxed">
          A Fisioterapia é uma área da ciência da saúde dedicada ao estudo, diagnóstico, prevenção e tratamento de disfunções do movimento humano.
          Ela abrange a reabilitação de diversas partes do corpo, órgãos e sistemas, com foco na recuperação da função e do movimento, usando uma variedade de recursos e abordagens físicas, mecânicas e tecnológicas para promover a saúde e o bem-estar dos pacientes.
        </p>
        <p className="leading-relaxed">
          Atuamos também na reabilitação pulmonar, cardíaca, dermato-funcional e linfática.
        </p>

        <h2 className="text-2xl font-bold text-brand-secondary">Para quem é indicado?</h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Pessoas com dores agudas ou crônicas (coluna, ombros, joelhos, etc).</li>
          <li>Reabilitação pós-cirúrgica (pré e pós-operatório).</li>
          <li>Lesões esportivas (entorses, distensões, contusões).</li>
          <li>Condições neurológicas (sequelas de AVC, compressão medular, hérnias de disco).</li>
          <li>Distúrbios posturais e de equilíbrio.</li>
          <li>Perda de independência e funcionalidade em idosos.</li>
        </ul>

        <h2 className="text-2xl font-bold text-brand-secondary">Nossa Abordagem</h2>
        <p>
          Na FisioVitalitá, cada tratamento e atendimento é <strong>100% individualizado</strong>.
          Entendemos que cada paciente é único, e por isso nossa avaliação busca a causa raiz do problema para um tratamento eficaz e duradouro.
        </p>
      </div>

      <FAQ items={fisioterapiaFAQ} title="Dúvidas sobre Fisioterapia" />

      <ServiceCTA />
    </article>
  );
}