// Arquivo: app/page.tsx (Atualizado para usar ícones Lucide específicos)

import Link from 'next/link';

// 1. IMPORTAMOS OS ÍCONES NECESSÁRIOS (Hero, Contato e Ícones Específicos de Serviço)
// No topo do app/page.tsx
import { ChevronRight, Phone, Mail, MapPin, HeartPulse, Activity, Dna, Users, Award, Sparkles, Target } from 'lucide-react'; 
import ServiceCard from '@/components/ServiceCard';
import Image from 'next/image'; // Adicione esta linha se ainda não existir
import TestimonialCard from '@/components/TestimonialCard';



// --- DADOS DOS DIFERENCIAIS ---
const differentials = [
  {
    Icon: Users,
    title: "Atendimento Humanizado",
    description: "Cada paciente é único. Oferecemos um cuidado individualizado e atencioso.",
  },
  {
    Icon: Award,
    title: "Profissionais Qualificados",
    description: "Nossa equipe é formada por especialistas dedicados à sua recuperação.",
  },
  {
    Icon: Sparkles, // Usando Sparkles para 'Ambiente' ou 'Bem-estar'
    title: "Ambiente Acolhedor",
    description: "Um espaço moderno e tranquilo, pensado para seu conforto e bem-estar.",
  },
  {
    Icon: Target, // Usando Target para 'Foco na Causa'
    title: "Foco na Causa Raiz",
    description: "Tratamos a origem do problema, não apenas os sintomas, para resultados duradouros.",
  },
];
// -----------------------------

// --- DADOS DOS DEPOIMENTOS (PLACEHOLDERS) ---
const testimonials = [
  {
    quote: "O atendimento na FisioVitalitá foi um divisor de águas na minha recuperação. A Dra. Daiane é extremamente atenciosa e competente.",
    name: "Maria S.",
    role: "Paciente de Fisioterapia",
    imageUrl: "", // Usará placeholder por enquanto
  },
  {
    quote: "As aulas de Pilates me deram muito mais disposição e acabaram com minhas dores nas costas. Ambiente ótimo e profissionais excelentes!",
    name: "João P.",
    role: "Aluno de Pilates",
    imageUrl: "", 
  },
  {
    quote: "Encontrei na acupuntura um alívio incrível para minha ansiedade. Recomendo muito a clínica e a abordagem humanizada.",
    name: "Ana L.",
    role: "Paciente de Acupuntura",
    imageUrl: "", 
  },
];
// ---------------------------------------------

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* === Seção Hero v2 (Com Imagem) === */}
<section className="bg-white"> {/* Removemos o padding vertical daqui */}
  <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20 md:py-32"> {/* Adicionamos o grid e padding aqui */}

    {/* Coluna da Esquerda: Texto e Botões */}
    {/* Em telas pequenas, 'order-last' joga o texto para baixo da imagem */}
    <div className="text-center md:text-left order-last md:order-first"> 
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] mb-6"> {/* Ajustei o tamanho da fonte */}
        Sua Saúde em Equilíbrio
      </h1>

      <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl mx-auto md:mx-0"> {/* Ajustei a margem e max-width */}
        Conheça a FisioVitalitá, seu novo espaço de fisioterapia, pilates e terapias holísticas. Cuidado completo para seu corpo e mente.
      </p>

      {/* Mantemos os mesmos botões, mas ajustamos o alinhamento */}
      <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
        <Link 
          href="/agendamento" 
          className="bg-[#5B21B6] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center sm:w-auto" // Aumentei padding
        >
          Agende sua Avaliação
          <ChevronRight className="w-5 h-5 ml-2" />
        </Link>

        <Link 
          href="/servicos" 
          className="bg-gray-200 text-[#1F2937] px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-300 transition-colors flex items-center justify-center sm:w-auto" // Aumentei padding
        >
          Nossos Serviços
        </Link>
      </div>
    </div>

    {/* Coluna da Direita: Imagem */}
    {/* Em telas pequenas, 'order-first' joga a imagem para cima */}
    <div className="relative w-full h-80 md:h-[500px] rounded-lg overflow-hidden shadow-xl order-first md:order-last"> {/* Altura maior no desktop */}
      <Image 
        src="/gallery/fachada.jpg" 
        alt="Fachada da Clínica FisioVitalitá" 
        fill 
        className="object-cover object-center" // Mantemos object-cover
        priority // Imagem principal, carregar rápido
        sizes="(max-width: 768px) 100vw, 50vw" // Define tamanhos para otimização
      />
    </div>

  </div>
</section>
{/* === Fim da Seção Hero v2 === */}

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
            
            {/* 2. VOLTAMOS A USAR OS ÍCONES ESPECÍFICOS DO LUCIDE */}
            <ServiceCard 
              Icon={HeartPulse} 
              title="Fisioterapia"
              description="Recuperação de lesões, alívio de dor crônica e reabilitação funcional."
              href="/servicos/fisioterapia" 
            />
            <ServiceCard 
              Icon={Activity} 
              title="Pilates"
              description="Fortalecimento do core, melhora da postura e aumento da flexibilidade."
              href="/servicos/pilates"
            />
            <ServiceCard 
              Icon={Dna} 
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
              {/* Coluna da Imagem (Atualizada) */}
<div>
  {/* Usando o componente Image com a foto da sala de terapia */}
  <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg"> {/* Aumentei um pouco a altura no desktop */}
    <Image 
      src="/gallery/massagem-holisticas.jpg" 
      alt="Ambiente acolhedor da clínica FisioVitalitá" 
      fill 
      className="object-cover object-center" 
      // Não precisa de 'priority' aqui, pois não é a primeira imagem da página
      sizes="(max-width: 768px) 100vw, 50vw" 
    />
  </div>
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
  <div className="bg-[#5B21B6] p-4 rounded-full"> {/* <-- Mudança */}
    <Phone className="w-6 h-6 text-white" /> {/* <-- Mudança */}
  </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1F2937]">Telefone / WhatsApp</h3>
                  <p className="text-gray-600 text-lg">(51) 9990 31186</p>
                  <a href="https://wa.me/5551999031186" target="_blank" rel="noopener noreferrer" className="text-[#5B21B6] font-medium hover:underline">Iniciar conversa</a>
                </div>
              </div>
             <div className="flex items-start space-x-4">
  <div className="bg-[#5B21B6] p-4 rounded-full"> {/* <-- Mudança */}
    <MapPin className="w-6 h-6 text-white" /> {/* <-- Mudança */}
  </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1F2937]">Endereço</h3>
                  <p className="text-gray-600 text-lg">
                    Av. Juca Batista, 662 - Ipanema,<br/> Porto Alegre - RS, 91770-000
                  </p>
                  <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.848805364883!2d-51.2294156848846!3d-30.041170981884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197906a454179b%3A0x80c53e8e7330d4b1!2sAv.%20Get%C3%BAlio%20Vargas%2C%201151%20-%20Menino%20Deus%2C%20Porto%20Alegre%20-%20RS%2C%2090150-003!5e0!3m2!1spt-BR!2sbr!4v16788860000002" target="_blank" rel="noopener noreferrer" className="text-[#5B21B6] font-medium hover:underline">Ver no mapa</a>
                </div>
              </div>
             <div className="flex items-start space-x-4">
  <div className="bg-[#5B21B6] p-4 rounded-full"> {/* <-- Mudança */}
    <Mail className="w-6 h-6 text-white" /> {/* <-- Mudança */}
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
{/* ... (Hero, Serviços, Sobre, Contato ficam aqui em cima) ... */}

      {/* ======================================= */}
      {/* === NOVA SEÇÃO: Testemunhos === */}
      {/* ======================================= */}
      <section className="bg-white py-20"> {/* Fundo branco para contrastar */}
        <div className="container mx-auto px-6">

          {/* Título da Seção */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937]">
              O que nossos pacientes dizem
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Histórias reais de recuperação e bem-estar.
            </p>
          </div>

          {/* Grid de Cards de Depoimento */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Usamos .map() para criar um card para cada depoimento */}
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index} // Usando index como key por enquanto
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                imageUrl={testimonial.imageUrl}
              />
            ))}

          </div>
        </div>
      </section>
      {/* === Fim da Seção de Testemunhos === */}

{/* ... (Hero, Serviços, Sobre, Testemunhos, Contato ficam aqui em cima) ... */}

          {/* ======================================= */}
          {/* === NOVA SEÇÃO: Diferenciais === */}
          {/* ======================================= */}
          <section className="bg-gray-50 py-20"> {/* Voltando para fundo cinza */}
            <div className="container mx-auto px-6">
              
              {/* Título da Seção */}
              <div className="text-center mb-16"> {/* Aumentei a margem inferior */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937]">
                  Por que escolher a FisioVitalitá?
                </h2>
                <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
                  Nosso compromisso vai além do tratamento. Cuidamos de você de forma integral.
                </p>
              </div>
              
              {/* Grid de Diferenciais */}
              {/* 4 colunas no desktop, 2 no tablet, 1 no mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"> 
                
                {differentials.map((item) => (
                  <div key={item.title} className="text-center px-4">
                    {/* Ícone */}
                    <div className="flex justify-center items-center mb-4">
                      {/* Usando o nosso novo estilo de ícone */}
                      <div className="bg-[#5B21B6] p-4 rounded-full"> 
                        <item.Icon className="w-8 h-8 text-white" /> 
                      </div>
                    </div>
                    {/* Título */}
                    <h3 className="text-xl font-bold text-[#1F2937] mb-2">{item.title}</h3>
                    {/* Descrição */}
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}

              </div>
            </div>
          </section>
          {/* === Fim da Seção de Diferenciais === */}

        </main>
      );
}