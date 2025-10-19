// Arquivo: app/estrutura/page.tsx
import Image from 'next/image';

// --- TAREFA: ATUALIZE ESTE ARRAY ---
// Coloque os nomes exatos dos arquivos de imagem que você colocou na pasta /public/gallery/
// Adicione uma descrição para cada imagem (bom para acessibilidade e SEO)
const galleryImages = [
  { src: "/gallery/foto-pilates.jpg", alt: "Equipamentos de Pilates na FisioVitalitá" },
  { src: "/gallery/foto-recepcao.jpg", alt: "Recepção da clínica FisioVitalitá" },
  { src: "/gallery/foto-sala.jpg", alt: "Sala de atendimento de fisioterapia" },
  { src: "/gallery/foto-outra.jpg", alt: "Outro ângulo da clínica" },
  // Adicione quantas imagens quiser
  // { src: "/gallery/nome-da-foto.jpg", alt: "Descrição da foto" },
];
// ------------------------------------

export default function EstruturaPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* === Seção Hero da Página "Estrutura" === */}
      <section className="bg-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary">
            Nossa Estrutura
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Um ambiente pensado para seu conforto, recuperação e bem-estar.
          </p>
        </div>
      </section>

      {/* === Seção da Galeria === */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          {/* Usamos 'columns-1 sm:columns-2 md:columns-3'
            Isso cria uma galeria estilo "Pinterest" (masonry)
            onde as imagens se encaixam automaticamente.
          */}
          <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">

            {galleryImages.map((image) => (
<div key={image.src} className="overflow-hidden rounded-lg shadow-lg break-inside-avoid transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">                {/* Usamos o componente Image do Next.js para otimização */}
                <Image 
                  src={image.src} 
                  alt={image.alt}
                  width={600} // Largura de base (ele vai ajustar)
                  height={400} // Altura de base (ele vai ajustar)
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}

            {/* --- Caso não tenha imagens ainda, use este placeholder --- */}
            {galleryImages.length === 0 && (
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <span className="text-gray-500">Galeria de fotos em breve...</span>
              </div>
            )}

          </div>
        </div>
      </section>
    </main>
  );
}