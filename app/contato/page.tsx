// Arquivo: app/contato/page.tsx
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteInfo } from '@/config/site-info';

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* === Seção Hero da Página "Contato" === */}
      <section className="bg-gray-50 py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary">
            Fale Conosco
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Estamos aqui para ajudar você em sua jornada para a saúde e o equilíbrio.
          </p>
        </div>
      </section>

      {/* === Seção de Informações e Formulário === */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

            {/* Coluna da Esquerda: Informações de Contato */}
            <div className="space-y-8">
              {/* Telefone */}
              <div className="flex items-start space-x-4 p-6 bg-purple-50 rounded-2xl border border-purple-100 transition-all hover:shadow-md">
                <div className="bg-[#5B21B6] p-3 rounded-full shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Telefone / WhatsApp</h3>
                  <p className="text-gray-600 mb-2">{siteInfo.contact.phone}</p>
                  <a
                    href={`https://wa.me/${siteInfo.contact.waPhone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5B21B6] font-semibold hover:text-[#4c1d95] hover:underline inline-flex items-center"
                  >
                    Iniciar conversa
                  </a>
                </div>
              </div>

              {/* Endereço */}
              <div className="flex items-start space-x-4 p-6 bg-purple-50 rounded-2xl border border-purple-100 transition-all hover:shadow-md">
                <div className="bg-[#5B21B6] p-3 rounded-full shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Endereço</h3>
                  <p className="text-gray-600 mb-2">
                    {siteInfo.address.street}, {siteInfo.address.number}
                    <br />
                    {siteInfo.address.city} - {siteInfo.address.state}
                    <br />
                    CEP: {siteInfo.address.zip}
                  </p>
                  <a
                    href="https://maps.app.goo.gl/uXj9Xxxxxxx" // Placeholder ideal, mas o iframe abaixo resolve
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5B21B6] font-semibold hover:text-[#4c1d95] hover:underline"
                  >
                    Ver no mapa
                  </a>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex items-start space-x-4 p-6 bg-purple-50 rounded-2xl border border-purple-100 transition-all hover:shadow-md">
                <div className="bg-[#5B21B6] p-3 rounded-full shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">E-mail</h3>
                  <p className="text-gray-600 mb-2">
                    {siteInfo.contact.email}
                  </p>
                  <a
                    href={`mailto:${siteInfo.contact.email}`}
                    className="text-[#5B21B6] font-semibold hover:text-[#4c1d95] hover:underline"
                  >
                    Enviar e-mail
                  </a>
                </div>
              </div>
            </div>

            {/* Coluna da Direita: Formulário */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Envie uma mensagem</h3>
              <p className="text-gray-500 mb-8">Preencha o formulário abaixo e entraremos em contato em breve.</p>

              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo</label>
                  <input type="text" name="name" id="name" required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#5B21B6] focus:ring-2 focus:ring-[#5B21B6] focus:ring-opacity-20 outline-none transition-all placeholder-gray-400"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Telefone / WhatsApp</label>
                  <input type="tel" name="phone" id="phone" required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#5B21B6] focus:ring-2 focus:ring-[#5B21B6] focus:ring-opacity-20 outline-none transition-all placeholder-gray-400"
                    placeholder="(XX) XXXXX-XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Mensagem</label>
                  <textarea name="message" id="message" rows={4} required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#5B21B6] focus:ring-2 focus:ring-[#5B21B6] focus:ring-opacity-20 outline-none transition-all placeholder-gray-400 resize-none"
                    placeholder="Gostaria de agendar uma avaliação..."
                  ></textarea>
                </div>

                <button type="submit"
                  className="w-full bg-[#5B21B6] text-white font-bold py-4 rounded-xl hover:bg-[#4c1d95] transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* === Seção do Mapa === */}
      <section className="h-96 w-full relative bg-gray-200">
        <iframe
          title="Localização FisioVitalitá"
          src="https://maps.google.com/maps?q=Av.+Juca+Batista+662,+Porto+Alegre+-+RS&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        >
        </iframe>
      </section>
    </main>
  );
}
