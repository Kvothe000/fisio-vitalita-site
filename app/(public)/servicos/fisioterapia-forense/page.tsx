
import Image from 'next/image';
import Link from 'next/link';
import { Scale, CheckCircle, FileText } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
    title: 'Fisioterapia Forense | FisioVitalitá',
    description: 'Perícia judicial e assistência técnica em fisioterapia. Laudos, pareceres e atuação especializada em processos judiciais.',
};

export default function FisioterapiaForensePage() {
    return (
        <main className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[400px] w-full flex items-center justify-center bg-[#1F2937] text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <div className="absolute inset-0 z-0">
                    {/* Placeholder image until we have a legal/office specific one */}
                    <div className="w-full h-full bg-gradient-to-r from-slate-900 to-slate-800"></div>
                </div>
                <div className="container mx-auto px-6 relative z-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Fisioterapia Forense</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Atuação especializada em Perícias Judiciais e Assistência Técnica.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                        {/* Description */}
                        <AnimatedSection>
                            <h2 className="text-3xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
                                <Scale className="w-8 h-8 text-[#5B21B6]" />
                                O que é Fisioterapia Forense?
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                A Fisioterapia Forense é a área de atuação onde o fisioterapeuta aplica seus conhecimentos técnicos e científicos em questões legais. Atuamos elaborando laudos, pareceres técnicos e prestando consultoria em processos judiciais e administrativos.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Nosso trabalho garante que a análise funcional do movimento humano seja considerada com rigor técnico na tomada de decisões judiciais.
                            </p>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-[#1F2937]">Nossa Atuação:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700">Perícia Judicial (Nomeação pelo Juiz).</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700">Assistência Técnica para Advogados e Partes.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700">Elaboração de Pareceres Técnicos Cinesiológicos Funcionais.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700">Análise de incapacidade laboral e funcional.</span>
                                    </li>
                                </ul>
                            </div>

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
                        </AnimatedSection>

                        {/* Visual/Image */}
                        <AnimatedSection delay={0.2}>
                            <div className="relative h-[500px] w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-8 flex flex-col justify-center items-center text-center">
                                <Scale className="w-32 h-32 text-gray-200 mb-6" />
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Rigor Técnico & Ética</h3>
                                <p className="text-gray-500">
                                    Fundamentação científica para esclarecer a verdade dos fatos.
                                </p>
                                <div className="mt-8 border-t pt-8 w-full">
                                    <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Ideal para:</p>
                                    <div className="flex flex-wrap gap-2 justify-center mt-4">
                                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Escritórios de Advocacia</span>
                                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Empresas</span>
                                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Seguradoras</span>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                    </div>
                </div>
            </section>
        </main>
    );
}
