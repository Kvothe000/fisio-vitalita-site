// Arquivo: app/(public)/servicos/fisioterapia-forense/page.tsx
import { Scale, CheckCircle, FileText } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
    title: 'Fisioterapia Forense | FisioVitalitá',
    description: 'Jurisconsultoria e assistência técnica em fisioterapia. Atuação judicial e administrativa nas áreas trabalhista, previdenciária, criminal e securitária.',
};

const atuacao = [
    { titulo: 'Jurisconsultoria', descricao: 'Consultoria técnica especializada para subsidiar decisões e estratégias.' },
    { titulo: 'Assistência Técnica', descricao: 'Apoio técnico qualificado a advogados, partes e seguradoras.' },
];

const areasAtuacao = ['Trabalhista', 'Previdenciária', 'Criminal', 'Securitária'];

const servicos = [
    'Realizar análise técnica de documentos de saúde – classificar/organizar/descartar',
    'Realizar raciocínio clínico entre os documentos de saúde, incapacidades e o evento gerador',
    'Estudo da linha do tempo de adoecimento',
    'Avaliação físico-funcional',
    'Avaliação físico-funcional para enquadramento PCD',
    'Parecer de viabilidade de uma ação judicial',
    'Relatório técnico para fomentar a peça inicial ou contestação',
    'Quesitos regulares/originais estratégicos',
    'Parecer Ad Hoc',
    'Preparo do autor e/ou do réu para o ato pericial',
    'Acompanhamento in loco da diligência',
    'Parecer de Assistente Técnico',
    'Impugnação a laudos',
    'Quesitos complementares',
    'Manifestação técnica sobre documentos',
    'Parte técnica da apelação',
    'Discurso das questões técnicas para sustentação oral',
];

export default function FisioterapiaForensePage() {
    return (
        <main className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[400px] w-full flex items-center justify-center bg-[#1F2937] text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <div className="absolute inset-0 z-0">
                    {/* Placeholder: substituir pela foto da Daiane quando enviada */}
                    <div className="w-full h-full bg-gradient-to-r from-slate-900 to-slate-800"></div>
                </div>
                <div className="container mx-auto px-6 relative z-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Fisioterapia Forense</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Jurisconsultoria e Assistência Técnica com rigor científico.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                        {/* Descrição */}
                        <AnimatedSection>
                            <h2 className="text-3xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
                                <Scale className="w-8 h-8 text-[#5B21B6]" />
                                O que é Fisioterapia Forense?
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                A Fisioterapia Forense é a área em que o fisioterapeuta aplica seus conhecimentos
                                técnicos e científicos em questões legais, atuando com jurisconsultoria ou
                                assistência técnica, em nível judicial ou administrativo.
                            </p>

                            <h3 className="text-2xl font-semibold text-[#1F2937] mb-4">Nossa Atuação</h3>
                            <ul className="space-y-3 mb-8">
                                {atuacao.map((item) => (
                                    <li key={item.titulo} className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700">
                                            <strong>{item.titulo}:</strong> {item.descricao}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <h3 className="text-xl font-semibold text-[#1F2937] mb-3">Áreas de Atuação</h3>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {areasAtuacao.map((area) => (
                                    <span key={area} className="px-4 py-2 bg-purple-50 text-[#5B21B6] rounded-full text-sm font-semibold border border-purple-100">
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </AnimatedSection>

                        {/* Serviços */}
                        <AnimatedSection delay={0.2}>
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <FileText className="w-6 h-6 text-[#5B21B6]" />
                                    Serviços
                                </h3>
                                <ul className="space-y-3">
                                    {servicos.map((servico, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{servico}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-10">
                                    <a
                                        href="https://wa.me/5551999031186?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Fisioterapia%20Forense%2E"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center bg-[#5B21B6] text-white px-8 py-3 rounded-md font-bold hover:bg-opacity-90 transition-transform hover:translate-y-[-2px]"
                                    >
                                        <FileText className="w-5 h-5 mr-2" />
                                        Solicitar Consultoria
                                    </a>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </main>
    );
}