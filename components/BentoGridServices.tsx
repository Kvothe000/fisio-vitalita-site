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
                        Cuidado especializado para sua saúde.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">

                    {/* Card Grande (Fisioterapia) */}
                    <Link href="/servicos/fisioterapia" className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col justify-between cursor-pointer">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <HeartPulse className="w-48 h-48 text-emerald-500" />
                        </div>
                        <div>
                            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                                <HeartPulse className="w-6 h-6 text-emerald-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Fisioterapia Completa</h3>
                            <p className="text-gray-500 text-lg leading-relaxed">
                                Recuperação de lesões, alívio de dor aguda e crônica. Atuamos com reabilitação pulmonar, cardíaca e dermato-funcional.
                            </p>
                        </div>
                        <div className="mt-8 inline-flex items-center text-emerald-600 font-semibold group-hover:translate-x-2 transition-transform">
                            Saiba mais <span className="ml-2">→</span>
                        </div>
                    </Link>

                    {/* Card Médio (Pilates) - AJUSTADO PARA 1x1 */}
                    <Link href="/servicos/pilates" className="md:col-span-1 relative group overflow-hidden rounded-3xl bg-[#5B21B6] p-6 shadow-md hover:shadow-xl transition-all text-white flex flex-col justify-between cursor-pointer">
                        <div className="absolute -bottom-4 -right-4 opacity-20">
                            <Activity className="w-24 h-24" />
                        </div>
                        <div>
                            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                                <Activity className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-bold mb-1">Pilates Clínico</h3>
                            <p className="text-purple-100 text-sm">Powerhouse e postura.</p>
                        </div>
                        <div className="mt-4 inline-flex items-center text-white text-sm font-semibold group-hover:translate-x-1 transition-transform">
                            Saiba mais <span className="ml-1">→</span>
                        </div>
                    </Link>

                    {/* Card Pequeno (Acupuntura) */}
                    <Link href="/servicos/acupuntura" className="md:col-span-1 relative group overflow-hidden rounded-3xl bg-white p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 flex flex-col justify-between cursor-pointer">
                        <div>
                            <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                <Dna className="w-5 h-5 text-orange-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">Acupuntura</h3>
                            <p className="text-gray-500 text-sm">Equilíbrio energético.</p>
                        </div>
                        <div className="mt-4 inline-flex items-center text-orange-600 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                            Saiba mais <span className="ml-1">→</span>
                        </div>
                    </Link>

                    {/* Card Pequeno (Holístico) */}
                    <Link href="/servicos/terapias-holisticas" className="md:col-span-1 relative group overflow-hidden rounded-3xl bg-white p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 flex flex-col justify-between cursor-pointer">
                        <div>
                            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                <Brain className="w-5 h-5 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">Terapias</h3>
                            <p className="text-gray-500 text-sm">Reiki e Massoterapia.</p>
                        </div>
                        <div className="mt-4 inline-flex items-center text-blue-600 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                            Saiba mais <span className="ml-1">→</span>
                        </div>
                    </Link>

                    {/* Card Pequeno (Forense - NOVO) */}
                    <Link href="/servicos/fisioterapia-forense" className="md:col-span-1 relative group overflow-hidden rounded-3xl bg-gray-900 p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 text-white flex flex-col justify-between cursor-pointer">
                        <div>
                            <div className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center mb-4">
                                <Brain className="w-5 h-5 text-gray-300" />
                            </div>
                            <h3 className="text-lg font-bold mb-1">Fisioterapia Forense</h3>
                            <p className="text-gray-400 text-sm">Perícia Judicial.</p>
                        </div>
                        <div className="mt-4 inline-flex items-center text-gray-300 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                            Saiba mais <span className="ml-1">→</span>
                        </div>
                    </Link>

                </div>
            </div>
        </section>
    );
}
