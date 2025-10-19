// Arquivo: app/contato/page.tsx
import { Phone, Mail, MapPin } from 'lucide-react'; // Importe os ícones

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

          {/* Copiamos esta estrutura da Home Page */}
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

              {/* E-mail */}
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
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-secondary mb-6">Envie uma mensagem</h3>
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome Completo</label>
                  <input type="text" name="name" id="name" required 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5B21B6] focus:border-[#5B21B6]"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone / WhatsApp</label>
                  <input type="tel" name="phone" id="phone" required 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5B21B6] focus:border-[#5B21B6]"
                    placeholder="(XX) XXXXX-XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                  <textarea name="message" id="message" rows={4} required 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5B21B6] focus:border-[#5B21B6]"
                    placeholder="Gostaria de saber mais sobre..."
                  ></textarea>
                </div>

                <div>
                  <button type="submit"
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

      {/* === Seção do Mapa === */}
      <section>
        {/* Este 'iframe' é o que o Google Maps fornece */}
        {/* Substitua o 'src' pelo link correto */}
<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.4097221755833!2d-51.220059899999995!3d-30.1396999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95198375ea8c07e9%3A0xc88bc26c38bedd46!2sfisi%20Vitalit%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1760912250767!5m2!1spt-BR!2sbr"
  width="100%" 
  height="450" 
  style={{ border: 0 }} 
  allowFullScreen={true} 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
>
</iframe>
      </section>
    </main>
  );
}