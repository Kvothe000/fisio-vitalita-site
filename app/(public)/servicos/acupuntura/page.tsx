// Arquivo: app/servicos/acupuntura/page.tsx
import ServiceCTA from '@/components/ServiceCTA';
import FAQ from '@/components/FAQ';

const acupunturaFAQ = [
  { question: "As agulhas doem?", answer: "Geralmente não. As agulhas são extremamente finas (como fios de cabelo). Você pode sentir um leve 'choquinho' ou peso no local, que indica a ativação do ponto, mas é muito suportável." },
  { question: "Para que serve a Acupuntura?", answer: "Ela é eficaz para dores físicas (coluna, cabeça, articulações), problemas emocionais (ansiedade, estresse, insônia) e distúrbios sistêmicos (digestão, TPM, rinite)." },
  { question: "Quantas sessões são necessárias?", answer: "Depende da cronicidade do problema. Em geral, indicamos um ciclo inicial de 5 a 10 sessões, sendo reavaliado constantemente. Casos agudos podem melhorar já na primeira sessão." },
  { question: "Tem contraindicação?", answer: "Existem pouquíssimas contraindicações. Gestantes podem fazer (com pontos específicos evitados). É importante informar se você usa marcapasso ou tem distúrbios de coagulação." },
];

export default function AcupunturaPage() {
  return (
    <article>

      {/* Imagem de Destaque (Placeholder) */}
      <div className="bg-gray-200 rounded-lg w-full h-64 flex items-center justify-center mb-6">
        <span className="text-gray-500">Imagem de Acupuntura (placeholder)</span>
      </div>

      <h1 className="text-4xl font-bold text-brand-secondary mb-4">
        Acupuntura
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Técnica milenar para alívio da dor, redução de estresse e equilíbrio energético.
      </p>

      {/* Conteúdo do Serviço */}
      <div className="space-y-6 text-gray-700 text-lg">
        <h2 className="text-2xl font-bold text-brand-secondary">O que é Acupuntura?</h2>
        <p>
          A Acupuntura é uma terapia milenar originária da Medicina Tradicional Chinesa, que consiste na aplicação de agulhas muito finas em pontos específicos do corpo ou aplicação de calor (moxabustão), para promover saúde e tratar doenças.
        </p>
        <p>
          O objetivo principal é estimular e equilibrar o fluxo de energia vital, conhecida como <strong>Qi</strong>, que percorre canais específicos chamados meridianos. A acupuntura é reconhecida pela Organização Mundial da Saúde (OMS) desde 1991 como um tratamento complementar eficaz.
        </p>

        <h2 className="text-2xl font-bold text-brand-secondary">Como funciona e o que trata?</h2>
        <p>
          A estimulação dos pontos de acupuntura ativa o sistema nervoso e
          libera substâncias químicas, como endorfinas e serotonina, que
          atuam como analgésicos e antidepressivos naturais do corpo.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Alívio de dores crônicas e agudas (enxaqueca, dor lombar, fibromialgia).</li>
          <li>Redução significativa do estresse, ansiedade e sintomas de depressão.</li>
          <li>Melhora da qualidade do sono e combate à insônia.</li>
          <li>Tratamento de distúrbios digestivos e respiratórios.</li>
          <li>Fortalecimento do sistema imunológico.</li>
        </ul>

        <h2 className="text-2xl font-bold text-brand-secondary">Nossa Abordagem</h2>
        <p>
          Na FisioVitalitá, a Acupuntura é realizada por profissional habilitado, fisioterapeuta com especialização na área.
          Utilizamos <strong>materiais totalmente descartáveis</strong> e seguimos um rigoroso protocolo de segurança e higiene.
          A CONSULTA é individual, com uma avaliação prévia para traçar o plano de tratamento. É um momento relaxante e restaurador.
        </p>
      </div>

      <FAQ items={acupunturaFAQ} title="Dúvidas Frequentes" />
      <ServiceCTA />
    </article >
  );
}