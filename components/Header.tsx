// Arquivo: components/Header.tsx (Versão v3 - Com Top Bar Responsiva e Dropdown)
"use client";

import Link from 'next/link';
import { useState } from 'react';
// Ícones necessários: Menu, X (mobile), ícones de serviço (dropdown), Phone (top bar)
import { Menu, X, HeartPulse, Activity, Dna, Waves, Leaf, Phone } from 'lucide-react'; 

// Lista de links de serviço para o dropdown
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
    // Header principal continua sticky
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      
      {/* === Top Bar === */}
      <div className="bg-[#1F2937] text-gray-300 py-2 px-6 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          {/* Telefone */}
          <a href="tel:+5551999031186" className="flex items-center space-x-1 hover:text-white transition-colors">
            <Phone className="w-4 h-4" />
            <span>(51) 9990-31186</span>
          </a>
          {/* Horários (escondido no mobile) */}
          {/* --- VERIFIQUE SE ESTES HORÁRIOS ESTÃO CORRETOS --- */}
          <span className="hidden sm:block">
            Seg - Sex: 08:00 - 19:00 | Sáb: 09:00 - 13:00
          </span>
        </div>
      </div>
      {/* === Fim da Top Bar === */}


      {/* --- Menu Principal --- */}
      {/* Adicionamos padding horizontal (px-6) e vertical (py-4) aqui */}
      {/* A borda superior foi removida pois a Top Bar já faz a separação */}
      <nav className="container mx-auto flex justify-between items-center px-6 py-4"> 
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold text-[#5B21B6]">
          FisioVitalitá
        </Link>
        
        {/* === MENU DESKTOP (hidden md:flex) === */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li><Link href="/sobre" className="hover:text-[#5B21B6] transition-colors">Sobre</Link></li>
          
          {/* Dropdown de Serviços */}
          <li className="relative group"> 
            <span className="hover:text-[#5B21B6] transition-colors cursor-default flex items-center">
              Serviços
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </span>
            {/* Menu Dropdown */}
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
          {/* Fim do Dropdown */}
          
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

        {/* === BOTÃO DO MENU MOBILE (md:hidden) === */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Abrir menu">
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* === MENU OVERLAY (MOBILE) === */}
      {/* Controlado pelo estado isMobileMenuOpen */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out border-t border-gray-100
                    ${isMobileMenuOpen ? 'opacity-100 visible max-h-screen' : 'opacity-0 invisible max-h-0 overflow-hidden'}`} // Usando max-h para animar altura
        // Fecha o menu ao clicar em qualquer link (bom para SPA)
        onClick={() => setIsMobileMenuOpen(false)} 
      >
        <ul className="flex flex-col p-4 space-y-2"> {/* Reduzi o space-y */}
          <li><Link href="/sobre" className="block p-3 hover:bg-gray-100 rounded-md font-medium">Sobre</Link></li>
          <li><Link href="/servicos" className="block p-3 hover:bg-gray-100 rounded-md font-medium">Serviços (Visão Geral)</Link></li>
          {/* Links de Serviço (Mobile) */}
          <li className="pl-4 border-l-2 border-gray-200 ml-1 space-y-1"> {/* Adiciona indentação */}
            {servicesLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#5B21B6] transition-colors flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50" // Fundo mais sutil no hover
              >
                <link.Icon className="w-5 h-5 opacity-80" /> {/* Ícone um pouco mais sutil */}
                <span>{link.title}</span>
              </Link>
            ))}
          </li>
          {/* Fim dos Links de Serviço */}
          <li><Link href="/equipe" className="block p-3 hover:bg-gray-100 rounded-md font-medium">Equipe</Link></li>
          <li><Link href="/estrutura" className="block p-3 hover:bg-gray-100 rounded-md font-medium">Estrutura</Link></li>
          <li><Link href="/contato" className="block p-3 hover:bg-gray-100 rounded-md font-medium">Contato</Link></li>
          
          {/* Botão de Ação */}
          <li className="pt-4">
            <Link 
              href="/agendamento" 
              className="bg-[#5B21B6] text-white px-4 py-3 rounded-md hover:bg-opacity-90 transition-colors block text-center font-medium"
            >
              Agendar Consulta
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}