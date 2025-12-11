// Arquivo: components/ServiceCard.tsx (Atualizado para aceitar className)

import Link from 'next/link';
import React from 'react';

interface ServiceCardProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  href: string;
  className?: string; // Prop opcional para customização (ex: cor de fundo)
}

export default function ServiceCard({ Icon, title, description, href, className = "" }: ServiceCardProps) {
  return (
    // Adicionamos ${className} para permitir override do bg-white se necessário, 
    // mas o padrão continua sendo bg-white se não passar nada.
    // MAS, para garantir que o bg-white padrão funcione, vamos mantê-lo na string base 
    // e permitir que o className adicione ou sobrescreva.
    <div className={`bg-white rounded-lg shadow-lg p-6 text-center transition-transform hover:scale-105 ${className}`}>
      <div className="flex justify-center items-center mb-4">
        <div className="bg-[#5B21B6] p-4 rounded-full">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>

      <h3 className="text-xl font-bold text-[#1F2937] mb-2">{title}</h3>

      <p className="text-gray-600 mb-4">{description}</p>

      <Link
        href={href}
        className="font-medium text-[#5B21B6] hover:underline"
      >
        Saiba Mais
      </Link>
    </div>
  );
}