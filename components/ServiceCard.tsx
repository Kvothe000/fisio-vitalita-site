// Arquivo: components/ServiceCard.tsx
import Link from 'next/link';
import { type LucideIcon } from 'lucide-react'; // Importa o TIPO do ícone

// Definimos as "props" que o card vai receber
interface ServiceCardProps {
  Icon: LucideIcon; // O componente do ícone (ex: Dna, Activity)
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ Icon, title, description, href }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform hover:scale-105">
      {/* Ícone */}
      <div className="flex justify-center items-center mb-4">
        <div className="bg-[#5B21B6] bg-opacity-10 p-3 rounded-full">
          {/* O ícone em si, com a cor roxa */}
          <Icon className="w-8 h-8 text-[#5B21B6]" />
        </div>
      </div>

      {/* Título */}
      <h3 className="text-xl font-bold text-brand-secondary mb-2">{title}</h3>

      {/* Descrição */}
      <p className="text-gray-600 mb-4">{description}</p>

      {/* Link "Saiba Mais" */}
      <Link 
        href={href} 
        className="font-medium text-[#5B21B6] hover:underline"
      >
        Saiba Mais
      </Link>
    </div>
  );
}