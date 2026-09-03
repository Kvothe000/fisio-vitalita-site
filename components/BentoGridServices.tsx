// Arquivo: components/BentoGridServices.tsx (v2 — 7 serviços)
import { HeartPulse, Activity, Dna, Waves, Leaf, Scale, UtensilsCrossed } from 'lucide-react';
import Link from 'next/link';

export default function BentoGridServices() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-slate-900/50 transition-colors">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1F2937] dark:text-white tracking-tight">
                        Especialidades
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
                        Cuidado especializado para sua saúde.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Card Grande (Fisioterapia) */}
                    <Link href="/servicos/fisioterapia" className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl bg-white dark:bg-slate-800 p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-slate-700 flex flex-col justify-between cursor-pointer">
                        <div className="absolute top-0 right-0 p-8 opacity-10 dark:opacity-5 group-hover:opacity-20 transition-opacity">
                            <HeartPulse className="w-48 h-48 text-emerald-500" />
                        </div>
                        <div>
                            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950/60 rounded-2xl flex items-center justify-center mb-6">
                                <HeartPulse className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Fisioterapia Completa</h3>
                            <p className="text-gray-500 dark:text-gray-300 text-lg leading-relaxed">
                                Recuperação de lesões, alívio de dores agudas e crônicas, melhora da funcionalidade.
                            </p>
                        </div>
                        <div className="mt-8 inline-flex items-center text-emerald-600 dark:text-emerald-400 font-semibold group-hover:translate-x-2 transition-transform">
                            Saiba mais <span className="ml-2">→</span>
                        </div>
                    </Link>
                    {/* Card (Pilates) */}
                    <Link href="/servicos/pilates" className="md:col-span-1 relative group overflow-hidden rounded-3xl bg-[#5B21B6] dark:bg-purple-900 p-6 shadow-md hover:shadow-xl transition-all text-white flex flex-col justify-between cursor-pointer">
                        <div className="absolute -bottom-4 -right-4 opacity-20">
                            <Activity className="w-24 h-24" />
                        </div>
                        <div>
                            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                                <Activity className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-bold mb-1">Pilates Clínico</h3>
                            <p className="text-purple-100 text-sm">Fortalecimento e postura.</p>
                        </div>
                        <div className="mt-4 inline-flex items-center text-white text-sm font-semibold group-hover:translate-x-1 transition-transform">
                            Saiba mais <span className="ml-1">→</span>
                        </div>
                    </Link>
                    {/* Card (Acupuntura) */}
                    <Link href="/servicos/acupuntura" className="md:col-span-1 relative group overflow-hidden rounded-3xl bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 dark:border-slate-700 flex flex-col justify-between cursor-pointer">
                        <div>
                            <div className="w-10 h-10 bg-orange-100 dark:bg-orange-950/60 rounded-xl flex items-center justify-center mb-4">
                                <Dna className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Acupuntura</h3>
                            <p className="text-gray-500 dark:text-gray-300 text-sm">Equilíbrio energético.</p>
                        </div>
                        <div className="mt-4 inline-flex items-center text-orange-600 dark:text-orange-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                            Saiba mais <span className="ml-1">→</span>
                        </div>
                    </Link>
                    {/* Card (Nutrição) */}
                    <Link href="/servicos/nutricao" className="md:col-span-1 relative group overflow-hidden rounded-3xl bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 dark:border-slate-700 flex flex-col justify-between cursor-pointer">
                        <div>
                            <div className="w-10 h-10 bg-rose-100 dark:bg-rose-950/60 rounded-xl flex items-center justify-center mb-4">
                                <UtensilsCrossed className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Nutrição</h3>
                            <p className="text-gray-500 dark:text-gray-300 text-sm">Clínica e esportiva.</p>
                        </div>
                        <div className="mt-4 inline-flex items-center text-rose-600 dark:text-rose-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                            Saiba mais <span className="ml-1">→</span>
                        </div>
                    </Link>
                    {/* Card (Terapias Holísticas) */}
                    <Link href="/servicos/terapias-holisticas" className="md:col-span-1 relative group overflow-hidden rounded-3xl bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 dark:border-slate-700 flex flex-col justify-between cursor-pointer">
                        <div>
                            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-950/60 rounded-xl flex items-center justify-center mb-4">
                                <Leaf className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Terapias</h3>
                            <p className="text-gray-500 dark:text-gray-300 text-sm">Reiki, Barras e Terapia Floral.</p>
                        </div>
                        <div className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                            Saiba mais <span className="ml-1">→</span>
                        </div>
                    </Link>
                    {/* Card (Massoterapia) */}
                    <Link href="/servicos/massoterapia" className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 dark:border-slate-700 flex flex-col justify-between cursor-pointer">
                        <div>
                            <div className="w-10 h-10 bg-sky-100 dark:bg-sky-950/60 rounded-xl flex items-center justify-center mb-4">
                                <Waves className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Massoterapia</h3>
                            <p className="text-gray-500 dark:text-gray-300 text-sm">Relaxamento, terapêutica e drenagem linfática.</p>
                        </div>
                        <div className="mt-4 inline-flex items-center text-sky-600 dark:text-sky-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                            Saiba mais <span className="ml-1">→</span>
                        </div>
                    </Link>
                    {/* Card (Fisioterapia Forense) */}
                    <Link href="/servicos/fisioterapia-forense" className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-gray-900 dark:bg-slate-950 p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 dark:border-slate-700 text-white flex flex-col justify-between cursor-pointer">
                        <div>
                            <div className="w-10 h-10 bg-gray-700 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-4">
                                <Scale className="w-5 h-5 text-gray-300 dark:text-gray-400" />
                            </div>
                            <h3 className="text-lg font-bold mb-1">Fisioterapia Forense</h3>
                            <p className="text-gray-400 dark:text-gray-300 text-sm">Perícia Judicial e Assistência Técnica.</p>
                        </div>
                        <div className="mt-4 inline-flex items-center text-gray-300 dark:text-gray-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                            Saiba mais <span className="ml-1">→</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}