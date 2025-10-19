// Arquivo: app/page.tsx
import Link from 'next/link';

// 1. IMPORTE OS ÍCONES NOVOS E O CARD
// No topo do app/page.tsx
import { ChevronRight, HeartPulse, Activity, Dna, Phone, Mail, MapPin } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';


export default function Home() {
  return (
    // Vamos trocar o fundo para um cinza bem claro, para os "cards" se destacarem
    <main className="min-h-screen bg-gray-50">

      {/* === Seção Hero === */}
      {/* O fundo do Hero agora é branco, contrastando com o bg-gray-50 do <main> */}
      <section className="bg-white py-20 md:py-32"> 
        <div className="container mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-6xl font-bold text-brand-secondary mb-4">
            Sua Saúde em Equilíbrio
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Conheça a FisioVitalitá, seu novo espaço de fisioterapia, pilates e terapias holísticas. Cuidado completo para seu corpo e mente.
          </p>

          <div className="flex justify-center space-x-4">
            <Link 
              href="/agendamento" 
              // Nosso "desvio" da cor roxa:
              className="bg-[#5B21B6] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition-colors flex items-center"
            >
              Agende sua Avaliação
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>

            <Link 
              href="/servicos" 
              className="bg-gray-200 text-brand-secondary px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-300 transition-colors"
            >
              Nossos Serviços
            </Link>
          </div>
        </div>
      </section>
      {/* === Fim da Seção Hero === */}


      {/* ======================================= */}
      {/* === NOVA SEÇÃO: Destaque de Serviços === */}
      {/* ======================================= */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          {/* Título da Seção */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary">
              Nossos Principais Serviços
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Cuidado especializado para sua necessidade.
            </p>
          </div>

          {/* Grid de Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1: Fisioterapia */}
            <ServiceCard 
              Icon={HeartPulse} // Ícone que importamos
              title="Fisioterapia"
              description="Recuperação de lesões, alívio de dor crônica e reabilitação funcional."
              href="/servicos/fisioterapia" // Link para a futura página
            />

            {/* Card 2: Pilates */}
            <ServiceCard 
              Icon={Activity} // Ícone que importamos
              title="Pilates"
              description="Fortalecimento do core, melhora da postura e aumento da flexibilidade."
              href="/servicos/pilates"
            />

            {/* Card 3: Acupuntura */}
            <ServiceCard 
              Icon={Dna} // Ícone que importamos
              description="Técnica milenar para alívio da dor, redução de estresse e equilíbrio energético."
              title="Acupuntura"
              href="/servicos/acupuntura"
            />
          </div>

        </div>
      </section>
      {/* === Fim da Seção de Serviços === */}
{/* ... (Todo o código do Hero e da Seção de Serviços fica aqui em cima) ... */}

      {/* ======================================= */}
      {/* === NOVA SEÇÃO: Sobre Nós (Confiança) === */}
      {/* ======================================= */}
      <section className="bg-white py-20"> {/* Alternando a cor de fundo (cinza -> branco) */}
        <div className="container mx-auto px-6">

          {/* Usamos grid para colocar a imagem de um lado e o texto do outro em telas grandes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Coluna da Imagem */}
            <div>
              {/* --- IMAGEM PLACEHOLDER --- */}
              {/* Vamos usar um placeholder por enquanto. Depois trocamos por uma foto real da clínica ou da Daiane */}
              <div className="bg-gray-200 rounded-lg w-full h-80 flex items-center justify-center">
                <span className="text-gray-500">Imagem da clínica (placeholder)</span>
              </div>
              {/* --- FIM DO PLACEHOLDER --- */}
            </div>

            {/* Coluna do Texto */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-4">
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
                // Nosso "desvio" da cor roxa:
                className="bg-[#5B21B6] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition-colors"
              >
                Conheça Nossa História
              </Link>
            </div>

          </div>
        </div>
      </section>
      {/* === Fim da Seção Sobre Nós === */}

{/* ... (Seção Hero, Serviços, e Sobre ficam aqui em cima) ... */}

      {/* ======================================= */}
      {/* === NOVA SEÇÃO: Contato Rápido === */}
      {/* ======================================= */}
      <section className="bg-gray-50 py-20"> {/* Voltando para o fundo cinza */}
        <div className="container mx-auto px-6">

          {/* Título da Seção */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary">
              Entre em Contato
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Tire suas dúvidas ou agende sua avaliação. Estamos prontos para atender você.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Coluna da Esquerda: Informações de Contato */}
            <div className="space-y-6">
              {/* Telefone (com link) */}
              <div className="flex items-start space-x-4">
                <div className="bg-[#5B21B6] bg-opacity-10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-[#5B21B6]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-secondary">Telefone / WhatsApp</h3>
                  <p className="text-gray-600 text-lg">
                    (51) 9990 31186
                  </p>
                  <a 
                    href="https://wa.me/5551999031186" // Link direto para o WhatsApp
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#5B21B6] font-medium hover:underline"
                  >
                    Iniciar conversa
                  </a>
                </div>
              </div>

              {/* Endereço */}
              <div className="flex items-start space-x-4">
                <div className="bg-[#5B21B6] bg-opacity-10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-[#5B21B6]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-secondary">Endereço</h3>
                  <p className="text-gray-600 text-lg">
                    [Endereço Completo da Clínica Aqui]
                    <br />
                    [Bairro, Cidade - RS]
                  </p>
                  <a 
                    href="https://maps.google.com/?q=[Endereço para o Google Maps]" // Link para o Google Maps
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#5B21B6] font-medium hover:underline"
                  >
                    Ver no mapa
                  </a>
                </div>
              </div>

              {/* (Opcional) E-mail */}
              <div className="flex items-start space-x-4">
                <div className="bg-[#5B21B6] bg-opacity-10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-[#5B21B6]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-secondary">E-mail</h3>
                  <p className="text-gray-600 text-lg">
                    [daiane.borges@email.com]
                  </p>
                  <a 
                    href="mailto:[daiane.borges@email.com]"
                    className="text-[#5B21B6] font-medium hover:underline"
                  >
                    Enviar e-mail
                  </a>
                </div>
              </div>
            </div>

            {/* Coluna da Direita: Formulário */}
            {/* Por enquanto, este formulário não envia. É só o visual. */}
            {/* Faremos ele funcionar em um próximo passo (Fase 11) */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome Completo</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    required 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5B21B6] focus:border-[#5B21B6]"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone / WhatsApp</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    id="phone" 
                    required 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5B21B6] focus:border-[#5B21B6]"
                    placeholder="(XX) XXXXX-XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows={4} 
                    required 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5B21B6] focus:border-[#5B21B6]"
                    placeholder="Gostaria de saber mais sobre..."
                  ></textarea>
                </div>

                <div>
                  <button 
                    type="submit"
                    // Nosso "desvio" da cor roxa:
                    className="w-full bg-[#5B21B6] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition-colors"
                  >
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
      {/* === Fim da Seção de Contato === */}

    </main>
  );

}