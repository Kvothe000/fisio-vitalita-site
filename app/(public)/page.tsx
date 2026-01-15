// Arquivo: app/page.tsx
import Link from 'next/link';

// 1. IMPORTAMOS OS ÍCONES NECESSÁRIOS (Hero, Contato e Ícones Específicos de Serviço)
import { ChevronRight, Phone, Mail, MapPin, HeartPulse, Activity, Dna } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import Image from 'next/image';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import AnimatedSection from '@/components/AnimatedSection';
import PatientJourney from '@/components/PatientJourney';
import DifferentialsSection from '@/components/DifferentialsSection';
import BentoGridServices from '@/components/BentoGridServices';
import FAQ from '@/components/FAQ';

const homeFAQ = [
  {
    question: "Quanto tempo dura uma consulta?",
    answer: "Nossos atendimentos são personalizados e duram em média 50 minutos. Isso garante o tempo necessário para aplicar as terapias manuais, realizar os exercícios com calma e tirar todas as suas dúvidas."
  },
  {
    question: "Aceitam convênios?",
    answer: "Trabalhamos na modalidade particular para garantir a qualidade e a individualidade do atendimento, sem a pressa dos convênios. Fornecemos recibo para que você possa solicitar o reembolso junto ao seu plano de saúde."
  },
  {
    question: "Preciso de encaminhamento médico?",
    answer: "Não é obrigatório. Fisioterapeutas são profissionais de primeiro contato. Porém, se você já tiver exames ou um encaminhamento, pedimos que traga na primeira avaliação para complementarmos o diagnóstico funcional."
  },
  {
    question: "A clínica possui estacionamento?",
    answer: "Sim, estamos localizados na Av. Juca Batista, 662, com facilidade de acesso e estacionamento para seu conforto."
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* === Seção Hero v4 (Premium + Animations) === */}
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">

        {/* Parallax Background (Simulated with scale) */}
        <div className="absolute inset-0 z-0 select-none">
          <Image
            src="/gallery/fachada.jpg"
            alt="Fachada da Clínica FisioVitalitá"
            fill
            className="object-cover object-center animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        {/* Content with Framer Motion via AnimatedSection (Reusing component for consistency) */}
        <div className="container mx-auto px-6 relative z-10 text-white">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg tracking-tight">
                Sua Saúde em <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white drop-shadow-md">
                  Equilíbrio
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-100 mb-10 drop-shadow-md border-l-4 border-purple-500 pl-6 max-w-2xl font-light">
                Cuidado especializado para sua saúde. Fisioterapia, Pilates, Acupuntura e Terapias Holísticas em um ambiente pensado para sua recuperação total.
                <span className="block mt-2 font-medium text-purple-200">Recupere seu bem-estar com a equipe de profissionais da saúde da FisioVitalitá.</span>
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="https://wa.me/5551999031186?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20FisioVitalit%C3%A1%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-[#5B21B6] text-white px-10 py-5 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(91,33,182,0.5)] hover:shadow-[0_0_30px_rgba(91,33,182,0.8)] flex items-center justify-center overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Agendar por WhatsApp
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>

                <Link
                  href="/servicos"
                  className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-5 rounded-full text-lg font-medium hover:bg-white/20 transition-all flex items-center justify-center hover:border-white/50"
                >
                  Nossos Serviços
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      {/* === Fim da Seção Hero v4 === */}

      {/* === Seção Destaque de Serviços (Bento Grid) === */}
      <BentoGridServices />

      {/* === Seção: Jornada do Paciente === */}
      <PatientJourney />

      {/* === Seção Sobre Nós (Confiança) === */}
      <AnimatedSection className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Coluna da Imagem */}
              <div>
                <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/gallery/massagem-holisticas.jpg"
                    alt="Ambiente acolhedor da clínica FisioVitalitá"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
                Bem-vindo à FisioVitalitá
              </h2>
              <p className="text-gray-600 mb-4 text-lg text-justify">
                Somos mais do que uma clínica de fisioterapia; somos um espaço dedicado ao seu bem-estar completo. Nossa missão é tratar a causa da dor, não apenas os sintomas, promovendo um equilíbrio duradouro entre corpo e mente.
              </p>
              <p className="text-gray-600 mb-6 text-lg text-justify">
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
      </AnimatedSection>

      {/* === Seção Contato Rápido === */}
      <AnimatedSection className="bg-gray-50 py-20">
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
                <div className="bg-[#5B21B6] p-4 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1F2937]">Telefone / WhatsApp</h3>
                  <p className="text-gray-600 text-lg">(51) 9990 31186</p>
                  <a href="https://wa.me/5551999031186" target="_blank" rel="noopener noreferrer" className="text-[#5B21B6] font-medium hover:underline">Iniciar conversa</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#5B21B6] p-4 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1F2937]">Endereço</h3>
                  <p className="text-gray-600 text-lg">
                    Av. Juca Batista, 662 - Ipanema,<br /> Porto Alegre - RS, 91770-000
                  </p>
                  <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.848805364883!2d-51.2294156848846!3d-30.041170981884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197906a454179b%3A0x80c53e8e7330d4b1!2sAv.%20Get%C3%BAlio%20Vargas%2C%201151%20-%20Menino%20Deus%2C%20Porto%20Alegre%20-%20RS%2C%2090150-003!5e0!3m2!1spt-BR!2sbr!4v16788860000002" target="_blank" rel="noopener noreferrer" className="text-[#5B21B6] font-medium hover:underline">Ver no mapa</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#5B21B6] p-4 rounded-full">
                  <Mail className="w-6 h-6 text-white" />
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
                  <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5B21B6] focus:border-[#5B21B6]" placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone / WhatsApp</label>
                  <input type="tel" name="phone" id="phone" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5B21B6] focus:border-[#5B21B6]" placeholder="(XX) XXXXX-XXXX" />
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
      </AnimatedSection>

      {/* === Seção: Testemunhos === */}
      <AnimatedSection className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937]">
              O que nossos pacientes dizem
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Histórias reais de recuperação e bem-estar.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </AnimatedSection>
      {/* === Fim da Seção de Testemunhos === */}

      {/* === Seção FAQ (Perguntas Frequentes) === */}
      <FAQ items={homeFAQ} title="Dúvidas Frequentes" />

      {/* === Seção: Diferenciais === */}
      <DifferentialsSection />

    </main >
  );
}
