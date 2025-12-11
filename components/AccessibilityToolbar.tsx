"use client";

import { useState, useEffect } from 'react';
import { Accessibility, ZoomIn, ZoomOut, Sun, Type } from 'lucide-react';

export default function AccessibilityToolbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [fontSize, setFontSize] = useState(100);
    const [highContrast, setHighContrast] = useState(false);

    // Aplica o tamanho da fonte no elemento HTML
    useEffect(() => {
        const html = document.documentElement;
        html.style.fontSize = `${fontSize}%`;
    }, [fontSize]);

    // Aplica o alto contraste no corpo da página
    useEffect(() => {
        if (highContrast) {
            document.body.classList.add('high-contrast');
        } else {
            document.body.classList.remove('high-contrast');
        }
    }, [highContrast]);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className="fixed left-4 bottom-24 z-50 flex flex-col items-start gap-2">
            {/* Botão Principal */}
            <button
                onClick={toggleOpen}
                className="bg-[#5B21B6] text-white p-3 rounded-full shadow-lg hover:bg-purple-800 transition-colors focus:outline-none focus:ring-4 focus:ring-purple-300"
                aria-label="Opções de Acessibilidade"
                title="Acessibilidade"
            >
                <Accessibility className="w-6 h-6" />
            </button>

            {/* Menu Expansível */}
            <div
                className={`bg-white rounded-lg shadow-xl p-4 transition-all duration-300 origin-bottom-left overflow-hidden ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none h-0 p-0'
                    }`}
            >
                <div className="flex flex-col gap-3 min-w-[200px]">
                    <h3 className="text-gray-900 font-bold mb-1">Acessibilidade</h3>

                    {/* Controle de Fonte */}
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700 font-medium">Tamanho da Fonte</span>
                        <div className="flex gap-1">
                            <button
                                onClick={() => setFontSize((prev) => Math.max(90, prev - 10))}
                                className="p-2 hover:bg-gray-100 rounded text-gray-800"
                                title="Diminuir Fonte"
                                aria-label="Diminuir Fonte"
                            >
                                <ZoomOut className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setFontSize((prev) => Math.min(130, prev + 10))}
                                className="p-2 hover:bg-gray-100 rounded text-gray-800"
                                title="Aumentar Fonte"
                                aria-label="Aumentar Fonte"
                            >
                                <ZoomIn className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <hr className="border-gray-200" />

                    {/* Alto Contraste */}
                    <button
                        onClick={() => setHighContrast(!highContrast)}
                        className={`flex items-center justify-between w-full p-2 rounded text-sm font-medium transition-colors ${highContrast ? 'bg-yellow-100 text-black border border-yellow-400' : 'hover:bg-gray-100 text-gray-700'
                            }`}
                        aria-pressed={highContrast}
                    >
                        <span>Alto Contraste</span>
                        <Sun className={`w-4 h-4 ${highContrast ? 'text-black' : 'text-gray-500'}`} />
                    </button>

                    <div className="text-xs text-gray-500 mt-2">
                        Ajustes para melhor leitura.
                    </div>
                </div>
            </div>
        </div>
    );
}
