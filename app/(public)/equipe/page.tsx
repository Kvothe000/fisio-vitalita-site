import TeamMember from '@/components/TeamMember';
import { teamData } from '@/config/team';

export default function EquipePage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* === Seção Hero da Página "Equipe" === */}
      <section className="bg-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary">
            Nossa Equipe
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Conheça os profissionais dedicados e altamente qualificados que cuidarão da sua saúde e bem-estar.
          </p>
        </div>
      </section>

      {/* === Lista Detalhada da Equipe === */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-12">
            {teamData.map((member, index) => (
              <TeamMember
                key={member.name}
                member={member}
                isReversed={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
