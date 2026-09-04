"use client"; // Necessário para o Lightbox (useState)

import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  { src: "/gallery/fachada.webp", alt: "Fachada da FisioVitalitá", span: "col-span-1 md:col-span-2 row-span-2" },
  { src: "/gallery/foto-frente-estabelecimento.webp", alt: "Frente do Estabelecimento", span: "col-span-1 md:col-span-1" },
  { src: "/gallery/foto-estrutura.webp", alt: "Estrutura Interna", span: "col-span-1 md:col-span-1" },
  { src: "/gallery/foto-pilates2.webp", alt: "Estúdio de Pilates", span: "col-span-1 md:col-span-2" },
  { src: "/gallery/fisioterapia-pilates.webp", alt: "Fisioterapia e Pilates", span: "col-span-1 md:col-span-2 row-span-2" },
  { src: "/gallery/foto-acumpultura.webp", alt: "Sala de Acupuntura", span: "col-span-1 md:col-span-1" },
  { src: "/gallery/massagem-holisticas.webp", alt: "Sala de Terapias Holísticas", span: "col-span-1 md:col-span-1" },
  { src: "/gallery/foto-massagem.webp", alt: "Sala de Massoterapia", span: "col-span-1 md:col-span-2" },
  { src: "/gallery/exercicio-alongamento.webp", alt: "Espaço para Exercícios", span: "col-span-1 md:col-span-2" },
];

export default function EstruturaPage() {
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryImages[0]>(null);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors">

      {/* === Seção Hero === */}
      <section className="bg-white dark:bg-slate-900 py-20 text-center transition-colors">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary dark:text-white">
            Nossa Estrutura
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
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
                className={`relative group rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 border border-transparent dark:border-slate-800 ${image.span}`}
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
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 transition-all animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[85vh] h-[600px] bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-transparent dark:border-slate-700"
            onClick={(e) => e.stopPropagation()} // Impede que o clique na imagem feche o modal
          >
            {/* Header do Modal com Nome da Imagem e Botão Fechar */}
            <div className="flex justify-between items-center p-4 border-b border-gray-100 dark:border-slate-700">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                {selectedImage.alt}
              </h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1 rounded-full text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                aria-label="Fechar visualização"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Imagem Ampliada */}
            <div className="relative flex-1 w-full bg-black/5">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
