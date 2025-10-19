// Arquivo: app/servicos/terapias-holisticas/page.tsx (Corrigido)

export default function TerapiasHolisticasPage() {
  return (
    <article>
      
      {/* Imagem de Destaque (Placeholder) */}
      <div className="bg-gray-200 rounded-lg w-full h-64 flex items-center justify-center mb-6">
        <span className="text-gray-500">Imagem Holística (placeholder)</span>
      </div>
      
      <h1 className="text-4xl font-bold text-brand-secondary mb-4">
        Terapias Holísticas
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Cuidado integral que une corpo, mente e espírito para uma saúde plena.
      </p>
      
      {/* Conteúdo do Serviço */}
      <div className="space-y-6 text-gray-700 text-lg">
        <h2 className="text-2xl font-bold text-brand-secondary">O que é a Abordagem Holística?</h2>
        <p>
          A terapia holística, ou integrativa, enxerga o ser humano como um 
          todo – físico, mental, emocional e espiritual. Em vez de tratar 
          apenas o sintoma (como a dor nas costas), buscamos entender o 
          desequilíbrio que gerou esse sintoma (como o estresse ou a ansiedade).
        </p>
        
        <h2 className="text-2xl font-bold text-brand-secondary">Nossas Práticas Integrativas</h2>
        <p>
          Na FisioVitalitá, integramos técnicas modernas e ancestrais para 
          promover o equilíbrio completo. Nossas terapias podem incluir:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Reiki:</strong> Técnica japonesa de canalização de energia vital universal para reequilibrar os chakras e promover o relaxamento.</li>
          <li><strong>Aromaterapia:</strong> Uso de óleos essenciais para estimular diferentes partes do cérebro, aliviando o estresse e melhorando o humor.</li>
          {/* --- A CORREÇÃO ESTÁ AQUI --- */}
          <li><strong>Ventosaterapia:</strong> Aplicação de 'copos' que criam sucção para melhorar a circulação sanguínea e aliviar dores musculares.</li>
          <li><strong>Barras de Access:</strong> Terapia quântica que, através de toques suaves na cabeça, libera padrões de pensamento e crenças limitantes.</li>
        </ul>
        
        <h2 className="text-2xl font-bold text-brand-secondary">Para Quem é Indicado?</h2>
        <p>
          As terapias holísticas são indicadas para qualquer pessoa que busca 
          não apenas o alívio de um sintoma físico, mas também uma maior 
          conexão consigo mesma, redução do estresse e uma vida mais 
          equilibrada e consciente.
        </p>
      </div>
    </article>
  );
}