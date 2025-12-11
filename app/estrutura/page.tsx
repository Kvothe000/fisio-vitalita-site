"use client"; // Necessário para o Lightbox (useState)

import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  { src: "/gallery/fachada.jpg", alt: "Fachada da FisioVitalitá", span: "col-span-1 md:col-span-2 row-span-2" },
  { src: "/gallery/fisioterapia-pilates.jpg", alt: "Espaço de Pilates e Fisioterapia", span: "col-span-1" },
  { src: "/gallery/foto-pilates.jpg", alt: "Equipamentos de Pilates", span: "col-span-1" },
  { src: "/gallery/massagem-holisticas.jpg", alt: "Sala de Massoterapia", span: "col-span-1 md:col-span-2" },
];

export default function EstruturaPage() {
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryImages[0]>(null);

  return (
    <main className="min-h-screen bg-gray-50">

      {/* === Seção Hero === */}
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
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">

            {galleryImages.map((image, index) => (
              <div
                key={image.src}
                className={`relative group rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 ${image.span}`}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 font-semibold tracking-wider transition-opacity duration-300 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                    Ver Foto
                  </span>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* === Lightbox Modal === */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50 bg-black/50 p-2 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="relative w-full max-w-5xl aspect-video rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Impede que o clique na imagem feche o modal
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              quality={100}
            />
          </div>
          <p className="absolute bottom-8 text-white text-lg font-medium bg-black/50 px-6 py-2 rounded-full">
            {selectedImage.alt}
          </p>
        </div>
      )}
    </main>
  );
}
