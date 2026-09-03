import TeamMember from '@/components/TeamMember';
import { teamData } from '@/config/team';

export default function EquipePage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors">

      {/* === Seção Hero da Página "Equipe" === */}
      <section className="bg-white dark:bg-slate-900 py-20 text-center transition-colors">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary dark:text-white">
            Nossa Equipe
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Conheça os profissionais dedicados e altamente qualificados que cuidarão da sua saúde e bem-estar.
          </p>
        </div>
      </section>

      {/* === Lista Detalhada da Equipe === */}
      <section className="py-12 bg-gray-50 dark:bg-slate-900/50 transition-colors">
        <div className="container mx-auto px-6">
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 md:p-12 space-y-12 border border-transparent dark:border-slate-700 transition-colors">
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

