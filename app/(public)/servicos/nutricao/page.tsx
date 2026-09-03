// Arquivo: app/(public)/servicos/nutricao/page.tsx
// RASCUNHO de conteúdo — revisar com a Daiane/Caroline antes de publicar.
import Image from 'next/image';
import { GraduationCap, Briefcase, Award, Instagram, MessageCircle } from 'lucide-react';
import ServiceCTA from '@/components/ServiceCTA';
import FAQ from '@/components/FAQ';

const nutricaoFAQ = [
    { question: "Preciso de encaminhamento médico para começar?", answer: "Não. O nutricionista é habilitado para fazer a avaliação inicial e montar o plano alimentar. Se identificarmos a necessidade de acompanhamento com outro profissional, encaminhamos." },
    { question: "Atende vegetarianos e veganos?", answer: "Sim! A Caroline é vegetariana e tem formação específica em vegetarianismo, veganismo e alimentação plant-based. Ela também atende pacientes com restrições alimentares e objetivos variados." },
    { question: "O atendimento é presencial ou online?", answer: "As consultas podem ser presenciais na clínica ou online, conforme a sua preferência e disponibilidade." },
    { question: "Como funciona a primeira consulta?", answer: "Fazemos uma avaliação completa: histórico de saúde, hábitos alimentares, rotina, exames e objetivos. A partir daí montamos um plano alimentar individualizado, realista e alinhado à sua vida." },
];

export default function NutricaoPage() {
    return (
        <article>
            <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg mb-8">
                {/* Placeholder: substituir pela foto real (Caroline ou ambiente) quando a tia enviar */}
                <Image
                    src="/gallery/foto-nutricao.jpg"
                    alt="Atendimento de Nutrição na FisioVitalitá"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 768px) 100vw, 75vw"
                />
            </div>

            <h1 className="text-4xl font-bold text-brand-secondary mb-4">
                Nutrição
            </h1>
            <p className="text-xl text-gray-600 mb-8">
                Nutrição clínica e esportiva para uma vida mais saudável e equilibrada.
            </p>

            <div className="space-y-6 text-gray-700 text-lg">
                <h2 className="text-2xl font-bold text-brand-secondary">O que é a Nutrição na FisioVitalitá?</h2>
                <p className="leading-relaxed">
                    A nutrição é o cuidado com a alimentação como base para a saúde, a energia e a qualidade de vida.
                    Na FisioVitalitá, o acompanhamento nutricional é individualizado e busca entender a sua rotina,
                    as suas queixas e os seus objetivos para montar um plano alimentar que funciona de verdade —
                    sem dietas radicais nem promessas milagrosas.
                </p>
            </div>

            {/* Quem vai te atender */}
            <div className="mt-10 bg-purple-50 dark:bg-slate-800/80 rounded-2xl p-8 border border-purple-100 dark:border-slate-700 transition-colors">
                <h2 className="text-2xl font-bold text-brand-secondary dark:text-white mb-6">Quem vai te atender</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Caroline dos Reis Leivas</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Nutricionista clínica e esportiva, vegetariana e corredora amadora.
                            Une o cuidado com a alimentação ao entendimento real de quem pratica
                            atividade física e de quem busca uma relação mais leve com a comida.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="https://wa.me/5551991074292"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-[#5B21B6] hover:bg-purple-700 text-white px-5 py-2.5 rounded-md font-semibold transition-colors shadow-sm"
                            >
                                <MessageCircle className="w-4 h-4 mr-2" />
                                WhatsApp da nutricionista
                            </a>
                            <a
                                href="https://instagram.com/nutricarolleivas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center border border-[#5B21B6] text-[#5B21B6] dark:text-purple-300 dark:border-purple-400 px-5 py-2.5 rounded-md font-semibold hover:bg-purple-50 dark:hover:bg-slate-700 transition-colors"
                            >
                                <Instagram className="w-4 h-4 mr-2" />
                                @nutricarolleivas
                            </a>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                <GraduationCap className="w-5 h-5 text-[#5B21B6] dark:text-purple-400" /> Formação
                            </h3>
                            <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-base">
                                <li>Graduação em Nutrição — UniRitter (2016–2020)</li>
                                <li>Pós em Nutrição Estética e Funcional — UNINTER (2023–2024)</li>
                                <li>Pós em Nutrição no Esporte e no Exercício — UNINTER (2024–2025)</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                <Briefcase className="w-5 h-5 text-[#5B21B6] dark:text-purple-400" /> Experiência
                            </h3>
                            <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-base">
                                <li>Nutricionista na Clínica Pasqualotti (2020–2021)</li>
                                <li>Atendimento clínico autônomo (2021–2024)</li>
                                <li>Nutrição clínica e esportiva (2025–atual)</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                <Award className="w-5 h-5 text-[#5B21B6] dark:text-purple-400" /> Cursos e especializações
                            </h3>
                            <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-base">
                                <li>Elaboração de cardápios e dietas nas diferentes modalidades esportivas — IPGS</li>
                                <li>Nutrição esportiva — Bee Coworking</li>
                                <li>Vegetarianismo, veganismo e plant-based: como prescrever? — Bee Coworking</li>
                                <li>Nutrição esportiva: anamnese e fidelização — Bee Coworking</li>
                                <li>Conduta nutricional do paciente vegetariano — Nutrissoma</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Áreas de atuação */}
            <div className="mt-10">
                <h2 className="text-2xl font-bold text-brand-secondary dark:text-white mb-4">Áreas de Atuação</h2>
                <div className="flex flex-wrap gap-2">
                    {["Nutrição Clínica", "Nutrição Esportiva", "Nutrição Estética e Funcional", "Vegetarianismo e Plant-based"].map((area) => (
                        <span key={area} className="px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-200 rounded-full text-sm font-semibold border border-transparent dark:border-slate-600">
                            {area}
                        </span>
                    ))}
                </div>
            </div>


            <div className="mt-8">
                <FAQ items={nutricaoFAQ} title="Dúvidas sobre Nutrição" />
            </div>

            <ServiceCTA />
        </article>
    );
}