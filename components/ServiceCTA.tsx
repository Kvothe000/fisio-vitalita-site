import Link from 'next/link';
import { CalendarCheck2 } from 'lucide-react';

export default function ServiceCTA() {
    return (
        <div className="mt-12 bg-purple-50 rounded-2xl p-8 md:p-12 text-center border border-purple-100">
            <h3 className="text-2xl md:text-3xl font-bold text-[#5B21B6] mb-4">
                Pronto para recuperar seu bem-estar?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Não deixe a dor limitar sua vida. Agende uma avaliação com nossa equipe especializada e descubra o melhor tratamento para você.
            </p>
            <Link
                href="/agendamento"
                className="inline-flex items-center bg-[#5B21B6] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#4c1d95] transition-all transform hover:scale-105 shadow-lg"
            >
                <CalendarCheck2 className="w-6 h-6 mr-2" />
                Agendar Minha Avaliação
            </Link>
        </div>
    );
}
