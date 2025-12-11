// Arquivo: components/Header.tsx (Versão v4 - Final com Top Bar e Links Ativos)
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation'; // Hook para pegar a URL atual
import { Menu, X, HeartPulse, Activity, Dna, Waves, Leaf, Phone } from 'lucide-react';
import { siteInfo } from '@/config/site-info';

// Lista de links de serviço para o dropdown e menu mobile
const servicesLinks = [
  { title: "Fisioterapia", href: "/servicos/fisioterapia", Icon: HeartPulse },
  { title: "Pilates", href: "/servicos/pilates", Icon: Activity },
  { title: "Acupuntura", href: "/servicos/acupuntura", Icon: Dna },
  { title: "Massoterapia", href: "/servicos/massoterapia", Icon: Waves },
  { title: "Terapias Holísticas", href: "/servicos/terapias-holisticas", Icon: Leaf },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Pega o caminho atual da URL (ex: "/sobre", "/servicos/pilates")

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">

      {/* === Top Bar === */}
      <div className="bg-[#1F2937] text-gray-300 py-2 px-6 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <a href={`tel:${siteInfo.contact.waPhone}`} className="flex items-center space-x-1 hover:text-white transition-colors">
            <Phone className="w-4 h-4" />
            <span>{siteInfo.contact.phone}</span>
          </a>
          <span className="hidden sm:block">
            Seg - Sex: 08:00 - 19:00 | Sáb: 09:00 - 13:00
          </span>
        </div>
      </div>
      {/* === Fim da Top Bar === */}

      {/* --- Menu Principal --- */}
      <nav className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-[#5B21B6]">
          FisioVitalitá
        </Link>

        {/* === MENU DESKTOP (hidden md:flex) === */}
        <ul className="hidden md:flex space-x-6 items-center text-gray-700">
          <li>
            <Link
              href="/sobre"
              className={`hover:text-[#5B21B6] transition-colors ${pathname === '/sobre' ? 'text-[#5B21B6] font-semibold' : ''
                }`}
            >
              Sobre
            </Link>
          </li>
          {/* Dropdown de Serviços */}
          <li className="relative group">
            <span className={`hover:text-[#5B21B6] transition-colors cursor-default flex items-center ${
              // Destaca se a URL atual COMEÇAR com /servicos
              pathname.startsWith('/servicos') ? 'text-[#5B21B6] font-semibold' : ''
              }`}>
              Serviços
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </span>
            {/* Menu Dropdown */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white shadow-xl rounded-lg mt-2
                          border border-gray-100 p-2
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300
                          transform scale-95 group-hover:scale-100 z-50"> {/* Adicionado z-50 */}
              {servicesLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  // Adiciona destaque no dropdown também
                  className={`text-gray-700 transition-colors flex items-center space-x-3 p-3 rounded-md font-medium ${pathname === link.href ? 'bg-purple-50 text-[#5B21B6]' : 'hover:bg-gray-100 hover:text-[#5B21B6]'
                    }`}
                >
                  <link.Icon className="w-5 h-5" />
                  <span>{link.title}</span>
                </Link>
              ))}
            </div>
          </li>
          {/* Fim do Dropdown */}
          <li>
            <Link
              href="/equipe"
              className={`hover:text-[#5B21B6] transition-colors ${pathname === '/equipe' ? 'text-[#5B21B6] font-semibold' : ''
                }`}
            >
              Equipe
            </Link>
          </li>
          <li>
            <Link
              href="/estrutura"
              className={`hover:text-[#5B21B6] transition-colors ${pathname === '/estrutura' ? 'text-[#5B21B6] font-semibold' : ''
                }`}
            >
              Estrutura
            </Link>
          </li>
          <li>
            <Link
              href="/contato"
              className={`hover:text-[#5B21B6] transition-colors ${pathname === '/contato' ? 'text-[#5B21B6] font-semibold' : ''
                }`}
            >
              Contato
            </Link>
          </li>
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
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}>
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* === MENU OVERLAY (MOBILE) === */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out border-t border-gray-100
                    ${isMobileMenuOpen ? 'opacity-100 visible max-h-[calc(100vh-80px)] overflow-y-auto' : 'opacity-0 invisible max-h-0 overflow-hidden'}`} // Ajuste de altura e overflow
      >
        {/* Botão de Fechar Adicionado */}
        <div className="flex justify-end p-4 pb-0"> {/* Removido padding bottom */}
          <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Fechar menu">
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <ul className="flex flex-col p-4 space-y-2">
          <li>
            <Link
              href="/sobre"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block p-3 rounded-md font-medium transition-colors ${pathname === '/sobre' ? 'bg-purple-50 text-[#5B21B6]' : 'hover:bg-gray-100'
                }`}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              href="/servicos"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block p-3 rounded-md font-medium transition-colors ${
                // Destaca se for /servicos OU qualquer subpágina
                pathname.startsWith('/servicos') ? 'bg-purple-50 text-[#5B21B6]' : 'hover:bg-gray-100'
                }`}
            >
              Serviços
            </Link>
          </li>
          {/* Links de Serviço Indentados */}
          <li className="pl-4 border-l-2 border-gray-200 ml-1 space-y-1">
            {servicesLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-gray-700 transition-colors flex items-center space-x-3 p-2 rounded-md ${pathname === link.href ? 'bg-purple-50 text-[#5B21B6] font-semibold' : 'hover:bg-gray-50 hover:text-[#5B21B6]'
                  }`}
              >
                <link.Icon className="w-5 h-5 opacity-80" />
                <span>{link.title}</span>
              </Link>
            ))}
          </li>
          <li>
            <Link
              href="/equipe"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block p-3 rounded-md font-medium transition-colors ${pathname === '/equipe' ? 'bg-purple-50 text-[#5B21B6]' : 'hover:bg-gray-100'
                }`}
            >
              Equipe
            </Link>
          </li>
          <li>
            <Link
              href="/estrutura"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block p-3 rounded-md font-medium transition-colors ${pathname === '/estrutura' ? 'bg-purple-50 text-[#5B21B6]' : 'hover:bg-gray-100'
                }`}
            >
              Estrutura
            </Link>
          </li>
          <li>
            <Link
              href="/contato"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block p-3 rounded-md font-medium transition-colors ${pathname === '/contato' ? 'bg-purple-50 text-[#5B21B6]' : 'hover:bg-gray-100'
                }`}
            >
              Contato
            </Link>
          </li>
          <li className="pt-4">
            <Link
              href="/agendamento"
              onClick={() => setIsMobileMenuOpen(false)}
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