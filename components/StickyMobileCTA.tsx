"use client";

import { Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function StickyMobileCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 100px
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-3 flex gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden"
                >
                    <a
                        href="tel:5551999031186"
                        className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold active:bg-gray-200 transition-colors"
                    >
                        <Phone className="w-5 h-5" />
                        Ligar
                    </a>
                    <a
                        href="https://wa.me/5551999031186"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-lg font-semibold active:bg-emerald-700 transition-colors"
                    >
                        <MessageCircle className="w-5 h-5" />
                        WhatsApp
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
