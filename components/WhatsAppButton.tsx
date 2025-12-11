"use client";

import { Phone } from 'lucide-react';
import { siteInfo } from '@/config/site-info';

export default function WhatsAppButton() {
    return (
        <a
            href={`https://wa.me/${siteInfo.contact.waPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#20bd5a] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
            aria-label="Fale conosco no WhatsApp"
            title="Fale conosco no WhatsApp"
        >
            {/* Efeito de Pulse (Opcional, mas dá um toque legal) */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-20 -z-10 group-hover:animate-ping"></span>

            <Phone className="w-8 h-8 fill-white" />
        </a>
    );
}
