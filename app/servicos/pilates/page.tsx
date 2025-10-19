// Arquivo: app/servicos/pilates/page.tsx

export default function PilatesPage() {
  return (
    <article>
      
      {/* Imagem de Destaque (Placeholder) */}
      <div className="bg-gray-200 rounded-lg w-full h-64 flex items-center justify-center mb-6">
        <span className="text-gray-500">Imagem de Pilates (placeholder)</span>
      </div>
      
      <h1 className="text-4xl font-bold text-brand-secondary mb-4">
        Pilates
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Fortalecimento do core, melhora da postura e aumento da flexibilidade.
      </p>
      
      {/* Conteúdo do Serviço */}
      <div className="space-y-6 text-gray-700 text-lg">
        <h2 className="text-2xl font-bold text-brand-secondary">O que é Pilates?</h2>
        <p>
          O Pilates é um método de exercício físico e alongamento que utiliza o 
          peso do próprio corpo na sua execução. É uma técnica de reeducação 
          do movimento que visa trabalhar o corpo todo, trazendo equilíbrio 
          muscular e mental.
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
          Na FisioVitalitá, oferecemos aulas de Pilates com equipamentos e de solo, 
          ministradas por fisioterapeutas. As turmas são reduzidas para garantir 
          atendimento personalizado e a correta execução dos movimentos.
        </p>
      </div>
    </article>
  );
}