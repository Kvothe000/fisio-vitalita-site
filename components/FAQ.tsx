"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
    title?: string;
}

export default function FAQ({ items, title = "Perguntas Frequentes" }: FAQProps) {
    // Estado para controlar qual item está aberto (pode ser null se todos fechados)
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-3xl font-bold text-brand-secondary mb-8 text-center">
                    {title}
                </h2>

                <div className="space-y-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md bg-gray-50/50"
                        >
                            <button
                                className="w-full flex items-center justify-between p-5 text-left bg-white focus:outline-none"
                                onClick={() => toggleItem(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span className="font-semibold text-gray-800 text-lg pr-4">
                                    {item.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-brand-primary min-w-[20px]" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400 min-w-[20px]" />
                                )}
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out border-t border-gray-100 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-5 text-gray-600 leading-relaxed bg-brand-cream/30">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
