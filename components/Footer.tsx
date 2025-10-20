// Arquivo: components/Footer.tsx (Versão v2 - Multi-Coluna)

import Link from 'next/link';
import BrandLogoIcon from '@/components/BrandLogoIcon'; 

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Lista de links para a coluna de navegação
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/sobre", label: "Sobre Nós" },
    { href: "/servicos", label: "Serviços" },
    { href: "/equipe", label: "Equipe" },
    { href: "/estrutura", label: "Estrutura" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    // Fundo escuro (nossa cor secundária), texto claro
    <footer className="bg-[#1F2937] text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        
        {/* Grid principal do Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Coluna 1: Branding */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              {/* Usando nosso ícone da marca, em branco */}
              <BrandLogoIcon className="w-10 h-10 text-white" /> 
              <span className="text-white text-2xl font-bold">FisioVitalitá</span>
            </Link>
            <p className="text-sm opacity-80">
              Sua saúde em equilíbrio. Cuidado completo para corpo e mente.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <div className="space-y-3 text-sm">
              <p>
                Av. Juca Batista, 662 - Ipanema,<br/> Porto Alegre - RS, 91770-000
              </p>
              <p>
                <a 
                  href="tel:+5551999031186" 
                  className="hover:text-white hover:underline transition-colors"
                >
                  (51) 9990 31186
                </a>
              </p>
              <p>
                <a 
                  href="mailto:[daiane.borges@email.com]" // SUBSTITUA PELO EMAIL REAL
                  className="hover:text-white hover:underline transition-colors"
                >
                  [daiane.borges@email.com]
                </a>
              </p>
            </div>
          </div>

          {/* Coluna 4: Horários */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Horário de Funcionamento</h3>
            <div className="space-y-1 text-sm">
              {/* --- SUA TAREFA: CONFIRME OS HORÁRIOS --- */}
              <p>Segunda a Sexta:</p>
              <p className="opacity-80">08:00 - 19:00</p> 
              <p>Sábado:</p>
              <p className="opacity-80">09:00 - 13:00 (Agendamentos)</p>
              <p>Domingo:</p>
              <p className="opacity-80">Fechado</p>
              {/* ----------------------------------------- */}
            </div>
          </div>

        </div> {/* Fim do grid principal */}

        {/* Linha Divisória */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p className="opacity-70">
            &copy; {currentYear} FisioVitalitá - Todos os direitos reservados.
          </p>
          {/* Mantendo seu crédito */}
          <p className="opacity-50 mt-1"> 
            Desenvolvido por Matheus
          </p>
        </div>

      </div>
    </footer>
  );
}