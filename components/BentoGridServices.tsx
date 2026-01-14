import { HeartPulse, Activity, Dna, Brain } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BentoGridServices() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1F2937] tracking-tight">
                        Especialidades
                    </h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        Tratamentos personalizados para recuperar sua qualidade de vida.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">

                    {/* Card Grande (Fisioterapia) */}
                    <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col justify-between">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <HeartPulse className="w-48 h-48 text-emerald-500" />
                        </div>
                        <div>
                            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                                <HeartPulse className="w-6 h-6 text-emerald-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Fisioterapia Avançada</h3>
                            <p className="text-gray-500 text-lg leading-relaxed">
                                Recuperação acelerada de lesões ortopédicas e esportivas. Utilizamos terapia manual e tecnologia de ponta para eliminar a dor na raiz.
                            </p>
                        </div>
                        <Link href="/servicos/fisioterapia" className="mt-8 inline-flex items-center text-emerald-600 font-semibold group-hover:translate-x-2 transition-transform">
                            Saiba mais <span className="ml-2">→</span>
                        </Link>
                    </div>

                    {/* Card Médio (Pilates) */}
                    <div className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-[#5B21B6] p-8 shadow-md hover:shadow-xl transition-all text-white flex flex-col justify-between">
                        <div className="absolute -bottom-4 -right-4 opacity-20">
                            <Activity className="w-32 h-32" />
                        </div>
                        <div>
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                                <Activity className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-1">Pilates Clínico</h3>
                            <p className="text-purple-100">Fortalecimento e postura.</p>
                        </div>
                        <Link href="/servicos/pilates" className="mt-4 inline-flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
                            Agendar aula <span className="ml-2">→</span>
                        </Link>
                    </div>

                    {/* Card Pequeno (Acupuntura) */}
                    <div className="md:col-span-1 relative group overflow-hidden rounded-3xl bg-white p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100">
                        <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                            <Dna className="w-5 h-5 text-orange-600" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Acupuntura</h3>
                        <p className="text-gray-500 text-sm">Equilíbrio energético.</p>
                    </div>

                    {/* Card Pequeno (Holístico) */}
                    <div className="md:col-span-1 relative group overflow-hidden rounded-3xl bg-white p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100">
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                            <Brain className="w-5 h-5 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Terapias</h3>
                        <p className="text-gray-500 text-sm">Mente e corpo.</p>
                    </div>

                </div>
            </div>
        </section>
    );
}
