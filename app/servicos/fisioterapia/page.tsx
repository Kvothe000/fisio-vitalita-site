// Arquivo: app/servicos/fisioterapia/page.tsx

export default function FisioterapiaPage() {
  return (
    // A tag 'article' é semanticamente correta para este conteúdo
    <article>

      {/* Imagem de Destaque (Placeholder) */}
      <div className="bg-gray-200 rounded-lg w-full h-64 flex items-center justify-center mb-6">
        <span className="text-gray-500">Imagem de Fisioterapia (placeholder)</span>
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
    </article>
  );
}