// Arquivo: app/sobre/page.tsx
import { Eye, Rocket, Gem } from 'lucide-react'; // Ícones para Visão, Missão, Valores

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* === Seção Hero da Página "Sobre" === */}
      <section className="bg-gray-50 py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary">
            Nossa História
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Mais que uma clínica, um compromisso com o seu equilíbrio e bem-estar.
          </p>
        </div>
      </section>

      {/* === Seção de Detalhes (Texto + Imagem) === */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Coluna do Texto */}
          <div>
            <h2 className="text-3xl font-bold text-brand-secondary mb-4">
              Conheça a FisioVitalitá
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Fundada pela Dra. Daiane Borges, a FisioVitalitá nasceu do desejo de criar um espaço de saúde integrado, onde cada paciente é visto de forma única e completa.
              </p>
              <p>
                Nossa jornada começou com a fisioterapia tradicional, mas rapidamente expandimos nossa visão para incluir práticas complementares como Pilates e Acupuntura. Acreditamos que a verdadeira saúde vem do equilíbrio entre um corpo forte, uma mente calma e energia fluida.
              </p>
              <p>
                Aqui, você encontrará profissionais dedicados e um ambiente pensado para sua total recuperação e conforto.
              </p>
            </div>
          </div>

          {/* Coluna da Imagem */}
          <div>
            {/* --- IMAGEM PLACEHOLDER --- */}
            <div className="bg-gray-200 rounded-lg w-full h-96 flex items-center justify-center">
              <span className="text-gray-500">Foto da Dra. Daiane (placeholder)</span>
            </div>
            {/* --- FIM DO PLACEHOLDER --- */}
          </div>

        </div>
      </section>

      {/* === Seção Missão, Visão, Valores === */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

            {/* Missão */}
            <div className="p-6">
              <div className="flex justify-center items-center mb-4">
    <div className="bg-[#5B21B6] p-4 rounded-full"> {/* <-- Mudança */}
      <Rocket className="w-8 h-8 text-white" /> {/* <-- Mudança */}
    </div>
              </div>
              <h3 className="text-2xl font-bold text-brand-secondary mb-2">Missão</h3>
              <p className="text-gray-600">
                Proporcionar reabilitação e bem-estar através de um atendimento humanizado e integrado, tratando a causa raiz da dor.
              </p>
            </div>

            {/* Visão */}
            <div className="p-6">
              <div className="flex justify-center items-center mb-4">
    <div className="bg-[#5B21B6] p-4 rounded-full"> {/* <-- Mudança */}
      <Eye className="w-8 h-8 text-white" /> {/* <-- Mudança */}
    </div>
              </div>
              <h3 className="text-2xl font-bold text-brand-secondary mb-2">Visão</h3>
              <p className="text-gray-600">
                Ser referência em saúde e equilíbrio na região, reconhecida pela excelência no atendimento e resultados duradouros.
              </p>
            </div>

            {/* Valores */}
            <div className="p-6">
              <div className="flex justify-center items-center mb-4">
    <div className="bg-[#5B21B6] p-4 rounded-full"> {/* <-- Mudança */}
      <Gem className="w-8 h-8 text-white" /> {/* <-- Mudança */}
    </div>
              </div>
              <h3 className="text-2xl font-bold text-brand-secondary mb-2">Valores</h3>
              <p className="text-gray-600">
                Ética, Empatia, Comprometimento, Inovação e Respeito à individualidade de cada paciente.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* (Poderíamos adicionar uma seção de "Equipe" aqui, mas é melhor ela ter a própria página /equipe) */}

    </main>
  );
}