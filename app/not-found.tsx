
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-[#1F2937] px-4">
            <h1 className="text-6xl font-bold text-[#5B21B6] mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-2">Página não encontrada</h2>
            <p className="text-gray-600 mb-8 text-center max-w-md">
                Desculpe, a página que você está procurando não existe ou foi movida.
            </p>
            <Link
                href="/"
                className="bg-[#5B21B6] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
            >
                Voltar para a Home
            </Link>
        </div>
    );
}
