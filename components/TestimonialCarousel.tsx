"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
    quote: string;
    name: string;
    role: string;
}

const testimonials: Testimonial[] = [
    {
        quote: "O atendimento na FisioVitalitá foi um divisor de águas na minha recuperação. A Dra. Daiane é extremamente atenciosa e competente.",
        name: "Maria S.",
        role: "Paciente de Fisioterapia"
    },
    {
        quote: "As aulas de Pilates me deram muito mais disposição e acabaram com minhas dores nas costas. Ambiente ótimo e profissionais excelentes!",
        name: "João P.",
        role: "Aluno de Pilates"
    },
    {
        quote: "Encontrei na acupuntura um alívio incrível para minha ansiedade. Recomendo muito a clínica e a abordagem humanizada.",
        name: "Ana L.",
        role: "Paciente de Acupuntura"
    },
    {
        quote: "Profissionais dedicados e ambiente super acolhedor. Me sinto em casa a cada sessão.",
        name: "Carlos M.",
        role: "Paciente de Reabilitação"
    }
];

export default function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000); // 5 segundos
        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="relative max-w-4xl mx-auto px-12"> {/* Padding lateral para as setas */}

            {/* Container do Slide */}
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="w-full flex-shrink-0 px-4">
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center mx-auto h-full flex flex-col justify-center">
                                <div className="flex justify-center mb-6">
                                    <div className="bg-purple-100 p-3 rounded-full">
                                        <Quote className="w-8 h-8 text-[#5B21B6]" />
                                    </div>
                                </div>
                                <p className="text-xl text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                                    <p className="text-purple-600 text-sm font-medium">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Botões de Navegação */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md text-gray-600 hover:text-[#5B21B6] hover:bg-gray-50 transition-colors focus:outline-none"
                aria-label="Anterior"
            >
                <ChevronLeft className="w-8 h-8" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md text-gray-600 hover:text-[#5B21B6] hover:bg-gray-50 transition-colors focus:outline-none"
                aria-label="Próximo"
            >
                <ChevronRight className="w-8 h-8" />
            </button>

            {/* Indicadores (Dots) */}
            <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-[#5B21B6] w-6" : "bg-gray-300 hover:bg-gray-400"
                            }`}
                        aria-label={`Ir para depoimento ${index + 1}`}
                    />
                ))}
            </div>

        </div>
    );
}
