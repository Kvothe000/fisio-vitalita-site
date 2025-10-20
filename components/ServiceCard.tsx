// Arquivo: components/ServiceCard.tsx (Código Completo Atualizado)

import Link from 'next/link';
import React from 'react'; // Necessário para o tipo genérico

// Definimos as "props" que o card vai receber
interface ServiceCardProps {
  // CORREÇÃO: Aceita QUALQUER componente React que aceite props SVG padrão
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; 
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ Icon, title, description, href }: ServiceCardProps) {
  return (
    // Mantivemos o efeito de hover que adicionamos
    <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform hover:scale-105"> 
      {/* Ícone */}
      <div className="flex justify-center items-center mb-4">
        {/* Usamos nosso 'desvio' para a cor roxa */}
        <div className="bg-[#5B21B6] bg-opacity-10 p-3 rounded-full"> 
          {/* O ícone em si, com a cor roxa */}
          <Icon className="w-8 h-8 text-[#5B21B6]" /> 
        </div>
      </div>
      
      {/* Título */}
      {/* Usando a cor secundária definida manualmente */}
      <h3 className="text-xl font-bold text-[#1F2937] mb-2">{title}</h3> 
      
      {/* Descrição */}
      <p className="text-gray-600 mb-4">{description}</p>
      
      {/* Link "Saiba Mais" */}
      <Link 
        href={href} 
        // Usando nosso 'desvio' para a cor roxa
        className="font-medium text-[#5B21B6] hover:underline" 
      >
        Saiba Mais
      </Link>
    </div>
  );
}