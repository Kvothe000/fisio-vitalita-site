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
import { siteInfo } from '@/config/site-info';

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
    answer: "Sim, estamos localizados na Av. Juca Batista, 652, com facilidade de acesso e estacionamento para seu conforto."
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors">

      {/* === Seção Hero v4 (Premium + Animations) === */}
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
        {/* Imagem de fundo — sem sombra */}
        <Image
          src="/gallery/foto-equipe-frente-do-estabelecimento.webp"
          alt="Atendimento de Fisioterapia na FisioVitalitá"
          width={1600}
          height={900}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, 75vw"
        />

        {/* Overlay de legibilidade (mantido — protege o texto) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

        {/* Conteúdo */}
        <div className="container mx-auto px-6 relative z-10 text-white">
          {/* ... título, parágrafo e botões inalterados ... */}
        </div>
      </section>
      {/* === Fim da Seção Hero v4 === */}

      {/* === Seção Destaque de Serviços (Bento Grid) === */}
      <BentoGridServices />

      {/* === Seção: Jornada do Paciente === */}
      <PatientJourney />

      {/* === Seção Sobre Nós (Confiança) === */}
      <AnimatedSection className="bg-white dark:bg-slate-900 py-20 transition-colors">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Coluna da Imagem */}
              <div>
                <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg border border-transparent dark:border-slate-800">
                  <Image
                    src="/gallery/massagem-holisticas.webp"
                    alt="Ambiente acolhedor da clínica FisioVitalitá"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] dark:text-white mb-4">
                Bem-vindo à FisioVitalitá
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg text-justify">
                Somos mais do que uma clínica de fisioterapia; somos um espaço dedicado ao seu bem-estar completo. Nossa missão é tratar a causa da dor, não apenas os sintomas, promovendo um equilíbrio duradouro entre corpo e mente.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg text-justify">
                Com uma equipe de profissionais qualificados e um ambiente acolhedor, estamos prontos para guiar você em sua jornada de recuperação e saúde.
              </p>
              <Link
                href="/sobre"
                className="inline-block bg-[#5B21B6] hover:bg-purple-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors"
              >
                Conheça Nossa História
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* === Seção Contato Rápido === */}
      <AnimatedSection className="bg-gray-50 dark:bg-slate-900/50 py-20 transition-colors">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] dark:text-white">
              Entre em Contato
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
              Tire suas dúvidas ou agende sua avaliação. Estamos prontos para atender você.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#5B21B6] dark:bg-purple-700 p-4 rounded-full shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1F2937] dark:text-white">Telefone / WhatsApp</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">{siteInfo.contact.phone}</p>
                  <a href={`https://wa.me/${siteInfo.contact.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-[#5B21B6] dark:text-purple-400 font-medium hover:underline">Iniciar conversa</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#5B21B6] dark:bg-purple-700 p-4 rounded-full shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1F2937] dark:text-white">Endereço</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    {siteInfo.address.street}, {siteInfo.address.number} - {siteInfo.address.neighborhood},<br />
                    {siteInfo.address.city} - {siteInfo.address.state}, {siteInfo.address.zip}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteInfo.address.fullAddress)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5B21B6] dark:text-purple-400 font-medium hover:underline"
                  >
                    Ver no mapa
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#5B21B6] dark:bg-purple-700 p-4 rounded-full shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1F2937] dark:text-white">E-mail</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">{siteInfo.contact.email}</p>
                  <a href={`mailto:${siteInfo.contact.email}`} className="text-[#5B21B6] dark:text-purple-400 font-medium hover:underline">Enviar e-mail</a>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg border border-gray-100 dark:border-slate-700 transition-colors">
              <h3 className="text-2xl font-bold text-[#1F2937] dark:text-white mb-6">Envie uma mensagem</h3>
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nome Completo</label>
                  <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-[#5B21B6] focus:border-[#5B21B6]" placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Telefone / WhatsApp</label>
                  <input type="tel" name="phone" id="phone" required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-[#5B21B6] focus:border-[#5B21B6]" placeholder="(XX) XXXXX-XXXX" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mensagem</label>
                  <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-[#5B21B6] focus:border-[#5B21B6]" placeholder="Gostaria de saber mais sobre..."></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-[#5B21B6] hover:bg-purple-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors">Enviar Mensagem</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* === Seção: Testemunhos === */}
      <AnimatedSection className="bg-white dark:bg-slate-900 py-20 transition-colors">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] dark:text-white">
              O que nossos pacientes dizem
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
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

    </main>
  );
}

