// Arquivo: app/sobre/page.tsx
import { Eye, Rocket, Gem } from 'lucide-react';
import Image from 'next/image';
import TeamMember from '@/components/TeamMember';
import { teamData } from '@/config/team';
import AnimatedSection from '@/components/AnimatedSection';

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
      <AnimatedSection className="py-20">
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
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/gallery/fisioterapia-pilates.jpg"
                alt="Sala de equipamentos da FisioVitalitá"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </AnimatedSection>

      {/* === Seção: Nossa Equipe === */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-4">Nossa Equipe de Especialistas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça os profissionais apaixonados que fazem da FisioVitalitá um lugar de cura e bem-estar.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
            {teamData.map((member, index) => (
              <TeamMember
                key={member.name}
                member={member}
                isReversed={index % 2 !== 0} // Alterna o layout (Foto na esquerda / direita)
              />
            ))}
          </div>
        </div>
      </section>

      {/* === Seção Missão, Visão, Valores === */}
      <AnimatedSection className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

            {/* Missão */}
            <div className="p-6">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-[#5B21B6] p-4 rounded-full">
                  <Rocket className="w-8 h-8 text-white" />
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
                <div className="bg-[#5B21B6] p-4 rounded-full">
                  <Eye className="w-8 h-8 text-white" />
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
                <div className="bg-[#5B21B6] p-4 rounded-full">
                  <Gem className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-brand-secondary mb-2">Valores</h3>
              <p className="text-gray-600">
                Ética, Empatia, Comprometimento, Inovação e Respeito à individualidade de cada paciente.
              </p>
            </div>

          </div>
        </div>
      </AnimatedSection>

    </main>
  );
}