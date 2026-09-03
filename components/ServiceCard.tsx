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
    <div className={`bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 text-center transition-all border border-transparent dark:border-slate-700 hover:scale-105 ${className}`}>
      <div className="flex justify-center items-center mb-4">
        <div className="bg-[#5B21B6] dark:bg-purple-700 p-4 rounded-full shadow-md">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>

      <h3 className="text-xl font-bold text-[#1F2937] dark:text-white mb-2">{title}</h3>

      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

      <Link
        href={href}
        className="font-medium text-[#5B21B6] dark:text-purple-400 hover:underline"
      >
        Saiba Mais
      </Link>
    </div>
  );
}