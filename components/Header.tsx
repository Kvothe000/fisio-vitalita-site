// Arquivo: components/Header.tsx (A versão correta e final)
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold text-brand-primary">
          FisioVitalitá
        </Link>
        
        {/* LINKS DE NAVEGAÇÃO */}
        <ul className="flex space-x-6 items-center">
          <li><Link href="/sobre" className="hover:text-brand-primary transition-colors">Sobre</Link></li>
          <li><Link href="/servicos" className="hover:text-brand-primary transition-colors">Serviços</Link></li>
          <li><Link href="/equipe" className="hover:text-brand-primary transition-colors">Equipe</Link></li>
          <li><Link href="/estrutura" className="hover:text-brand-primary transition-colors">Estrutura</Link></li>
          <li><Link href="/contato" className="hover:text-brand-primary transition-colors">Contato</Link></li>
          
          {/* BOTÃO DE AÇÃO */}
          <li>
            <Link 
              href="/agendamento" 
            className="bg-[#5B21B6] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"            >
              Agendar
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
