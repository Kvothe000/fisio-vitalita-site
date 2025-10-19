// Arquivo: app/servicos/massoterapia/page.tsx

export default function MassoterapiaPage() {
  return (
    <article>
      
      {/* Imagem de Destaque (Placeholder) */}
      <div className="bg-gray-200 rounded-lg w-full h-64 flex items-center justify-center mb-6">
        <span className="text-gray-500">Imagem de Massoterapia (placeholder)</span>
      </div>
      
      <h1 className="text-4xl font-bold text-brand-secondary mb-4">
        Massoterapia
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Técnicas de massagem para relaxamento muscular, alívio de tensão e bem-estar.
      </p>
      
      {/* Conteúdo do Serviço */}
      <div className="space-y-6 text-gray-700 text-lg">
        <h2 className="text-2xl font-bold text-brand-secondary">O que é Massoterapia?</h2>
        <p>
          Massoterapia é o termo usado para descrever diversas técnicas de 
          massagem terapêutica que visam promover a saúde e o bem-estar. 
          Através da manipulação manual dos tecidos moles do corpo, a massoterapia 
          trabalha para aliviar a dor, reduzir tensões e melhorar a circulação.
        </p>
        
        <h2 className="text-2xl font-bold text-brand-secondary">Nossas Técnicas Incluem</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Massagem Relaxante:</strong> Focada em aliviar o estresse e a tensão do dia a dia, promovendo um relaxamento profundo.</li>
          <li><strong>Massagem Terapêutica:</strong> Voltada para o tratamento de pontos de gatilho (trigger points) e dores musculares específicas.</li>
          <li><strong>Drenagem Linfática:</strong> Estimula o sistema linfático para reduzir o inchaço, eliminar toxinas e auxiliar no pós-operatório.</li>
          <li><strong>Liberação Miofascial:</strong> Técnica que aplica pressão em pontos específicos para liberar a fáscia (tecido) e restaurar a mobilidade.</li>
        </ul>
        
        <h2 className="text-2xl font-bold text-brand-secondary">Benefícios Imediatos</h2>
        <p>
          Mais do que um luxo, a massoterapia é uma ferramenta poderosa para a 
          manutenção da saúde. Ela proporciona alívio imediato da dor, 
          melhora a qualidade do sono e aumenta a sensação geral de bem-estar.
        </p>
      </div>
    </article>
  );
}