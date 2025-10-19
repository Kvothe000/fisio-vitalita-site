// Arquivo: components/Header.tsx (Versão v2 - Responsiva com Dropdown)
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, HeartPulse, Activity, Dna, Waves, Leaf } from 'lucide-react';

// Vamos definir os serviços AQUI para usar no dropdown
// (Idealmente, moveríamos isso para /lib/data.ts, mas por simplicidade vamos deixar aqui por enquanto)
const servicesLinks = [
  { title: "Fisioterapia", href: "/servicos/fisioterapia", Icon: HeartPulse },
  { title: "Pilates", href: "/servicos/pilates", Icon: Activity },
  { title: "Acupuntura", href: "/servicos/acupuntura", Icon: Dna },
  { title: "Massoterapia", href: "/servicos/massoterapia", Icon: Waves },
  { title: "Terapias Holísticas", href: "/servicos/terapias-holisticas", Icon: Leaf },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold text-[#5B21B6]">
          FisioVitalitá
        </Link>
        
        {/* === MENU DESKTOP (só aparece em telas 'md' para cima) === */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li><Link href="/sobre" className="hover:text-[#5B21B6] transition-colors">Sobre</Link></li>
          
          {/* --- Dropdown de Serviços (Desktop) --- */}
          <li className="relative group"> {/* 'group' ativa o 'group-hover' */}
            <span className="hover:text-[#5B21B6] transition-colors cursor-default flex items-center">
              Serviços
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </span>
            
            {/* O Menu Dropdown em si */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white shadow-xl rounded-lg mt-2
                          border border-gray-100 p-2
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300
                          transform scale-95 group-hover:scale-100">
              {servicesLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-[#5B21B6] transition-colors flex items-center space-x-3 p-3 rounded-md hover:bg-gray-100 font-medium"
                >
                  <link.Icon className="w-5 h-5" />
                  <span>{link.title}</span>
                </Link>
              ))}
            </div>
          </li>
          {/* --- Fim do Dropdown --- */}
          
          <li><Link href="/equipe" className="hover:text-[#5B21B6] transition-colors">Equipe</Link></li>
          <li><Link href="/estrutura" className="hover:text-[#5B21B6] transition-colors">Estrutura</Link></li>
          <li><Link href="/contato" className="hover:text-[#5B21B6] transition-colors">Contato</Link></li>
          
          {/* Botão de Ação */}
          <li>
            <Link 
              href="/agendamento" 
              className="bg-[#5B21B6] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Agendar
            </Link>
          </li>
        </ul>

        {/* === BOTÃO DO MENU MOBILE (só aparece abaixo de 'md') === */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* === MENU OVERLAY (MOBILE) === */}
      {/* Mostra o menu se 'isMobileMenuOpen' for true */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out
                    ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMobileMenuOpen(false)} // Fecha o menu ao clicar em qualquer link
      >
        <ul className="flex flex-col p-4 space-y-4">
          <li><Link href="/sobre" className="block p-2 hover:bg-gray-100 rounded-md">Sobre</Link></li>
          <li><Link href="/servicos" className="block p-2 hover:bg-gray-100 rounded-md">Serviços (Visão Geral)</Link></li>
          {/* --- Links de Serviço (Mobile) --- */}
          {servicesLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-[#5B21B6] transition-colors flex items-center space-x-3 p-3 rounded-md hover:bg-gray-100 font-medium"
            >
              <link.Icon className="w-5 h-5" />
              <span>{link.title}</span>
            </Link>
          ))}
          {/* --- Fim dos Links --- */}
          <li><Link href="/equipe" className="block p-2 hover:bg-gray-100 rounded-md">Equipe</Link></li>
          <li><Link href="/estrutura" className="block p-2 hover:bg-gray-100 rounded-md">Estrutura</Link></li>
          <li><Link href="/contato" className="block p-2 hover:bg-gray-100 rounded-md">Contato</Link></li>
          
          {/* Botão de Ação */}
          <li className="pt-4">
            <Link 
              href="/agendamento" 
              className="bg-[#5B21B6] text-white px-4 py-3 rounded-md hover:bg-opacity-90 transition-colors block text-center"
            >
              Agendar
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}