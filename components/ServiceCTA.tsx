import Link from 'next/link';
import { CalendarCheck2 } from 'lucide-react';

export default function ServiceCTA() {
    return (
        <div className="mt-12 bg-purple-50 dark:bg-slate-800/80 rounded-2xl p-8 md:p-12 text-center border border-purple-100 dark:border-slate-700 transition-colors">
            <h3 className="text-2xl md:text-3xl font-bold text-[#5B21B6] dark:text-purple-300 mb-4">
                Pronto para recuperar seu bem-estar?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Não deixe a dor limitar sua vida. Agende uma avaliação com nossa equipe especializada e descubra o melhor tratamento para você.
            </p>
            <Link
                href="/agendamento"
                className="inline-flex items-center bg-[#5B21B6] hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg"
            >
                <CalendarCheck2 className="w-6 h-6 mr-2" />
                Agendar Minha Avaliação
            </Link>
        </div>
    );
}

