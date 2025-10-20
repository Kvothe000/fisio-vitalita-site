// Arquivo: app/page.tsx (Código Completo Atualizado com BrandLogoIcon)

import Link from 'next/link';

// 1. IMPORTE OS ÍCONES NECESSÁRIOS (Hero, Sidebar) E O NOVO ÍCONE DA MARCA
import { ChevronRight, Phone, Mail, MapPin } from 'lucide-react'; 
import BrandLogoIcon from '@/components/BrandLogoIcon'; // <-- NOSSO NOVO ÍCONE
import ServiceCard from '@/components/ServiceCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* === Seção Hero === */}
      <section className="bg-white py-20 md:py-32"> 
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1F2937] mb-4">
            Sua Saúde em Equilíbrio
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Conheça a FisioVitalitá, seu novo espaço de fisioterapia, pilates e terapias holísticas. Cuidado completo para seu corpo e mente.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/agendamento" 
              className="bg-[#5B21B6] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition-colors flex items-center"
            >
              Agende sua Avaliação
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/servicos" 
              className="bg-gray-200 text-[#1F2937] px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-300 transition-colors"
            >
              Nossos Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* === Seção Destaque de Serviços === */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937]">
              Nossos Principais Serviços
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Cuidado especializado para sua necessidade.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 2. SUBSTITUÍMOS OS ÍCONES ANTIGOS PELO BrandLogoIcon */}
            <ServiceCard 
              Icon={BrandLogoIcon} 
              title="Fisioterapia"
              description="Recuperação de lesões, alívio de dor crônica e reabilitação funcional."
              href="/servicos/fisioterapia" 
            />
            <ServiceCard 
              Icon={BrandLogoIcon} 
              title="Pilates"
              description="Fortalecimento do core, melhora da postura e aumento da flexibilidade."
              href="/servicos/pilates"
            />
            <ServiceCard 
              Icon={BrandLogoIcon} 
              title="Acupuntura"
              description="Técnica milenar para alívio da dor, redução de estresse e equilíbrio energético."
              href="/servicos/acupuntura"
            />
          </div>
        </div>
      </section>

      {/* === Seção Sobre Nós (Confiança) === */}
      <section className="bg-white py-20"> 
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-200 rounded-lg w-full h-80 flex items-center justify-center">
                <span className="text-gray-500">Imagem da clínica (placeholder)</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
                Bem-vindo à FisioVitalitá
              </h2>
              <p className="text-gray-600 mb-4 text-lg">
                Somos mais do que uma clínica de fisioterapia; somos um espaço dedicado ao seu bem-estar completo. Nossa missão é tratar a causa da dor, não apenas os sintomas, promovendo um equilíbrio duradouro entre corpo e mente.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Com uma equipe de profissionais qualificados e um ambiente acolhedor, estamos prontos para guiar você em sua jornada de recuperação e saúde.
              </p>
              <Link 
                href="/sobre" 
                className="bg-[#5B21B6] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition-colors"
              >
                Conheça Nossa História
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === Seção Contato Rápido === */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937]">
              Entre em Contato
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Tire suas dúvidas ou agende sua avaliação. Estamos prontos para atender você.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#5B21B6] bg-opacity-10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-[#5B21B6]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1F2937]">Telefone / WhatsApp</h3>
                  <p className="text-gray-600 text-lg">(51) 9990 31186</p>
                  <a href="https://wa.me/5551999031186" target="_blank" rel="noopener noreferrer" className="text-[#5B21B6] font-medium hover:underline">Iniciar conversa</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#5B21B6] bg-opacity-10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-[#5B21B6]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1F2937]">Endereço</h3>
                  <p className="text-gray-600 text-lg">
                    Av. Juca Batista, 662 - Ipanema,<br/> Porto Alegre - RS, 91770-000
                  </p>
                  <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.848805364883!2d-51.2294156848846!3d-30.041170981884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197906a454179b%3A0x80c53e8e7330d4b1!2sAv.%20Get%C3%BAlio%20Vargas%2C%201151%20-%20Menino%20Deus%2C%20Porto%20Alegre%20-%20RS%2C%2090150-003!5e0!3m2!1spt-BR!2sbr!4v16788860000001" target="_blank" rel="noopener noreferrer" className="text-[#5B21B6] font-medium hover:underline">Ver no mapa</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#5B21B6] bg-opacity-10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-[#5B21B6]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1F2937]">E-mail</h3>
                  <p className="text-gray-600 text-lg">[daiane.borges@email.com]</p>
                  <a href="mailto:[daiane.borges@email.com]" className="text-[#5B21B6] font-medium hover:underline">Enviar e-mail</a>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-[#1F2937] mb-6">Envie uma mensagem</h3>
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome Completo</label>
                  <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5B21B6] focus:border-[#5B21B6]" placeholder="Seu nome"/>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone / WhatsApp</label>
                  <input type="tel" name="phone" id="phone" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5B21B6] focus:border-[#5B21B6]" placeholder="(XX) XXXXX-XXXX"/>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                  <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5B21B6] focus:border-[#5B21B6]" placeholder="Gostaria de saber mais sobre..."></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-[#5B21B6] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition-colors">Enviar Mensagem</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}