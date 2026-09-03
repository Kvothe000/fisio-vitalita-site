// Arquivo: components/ContactForm.tsx
"use client";

import { useState } from "react";
import { MessageCircle, Mail, GitMerge, Loader2, CheckCircle2 } from "lucide-react";
import { siteInfo } from "@/config/site-info";

type CanalContato = "whatsapp" | "email" | "ambos";

// 🔑 Quando criar a conta Formspree (gratuita), cole o endpoint aqui.
// Enquanto estiver vazio, a via e-mail usa mailto: (abre o app de e-mail do visitante).
const FORMSPREE_ENDPOINT = "";

const canais: { id: CanalContato; label: string; Icon: typeof MessageCircle }[] = [
    { id: "whatsapp", label: "WhatsApp", Icon: MessageCircle },
    { id: "email", label: "E-mail", Icon: Mail },
    { id: "ambos", label: "Ambos", Icon: GitMerge },
];

export default function ContactForm() {
    const [canal, setCanal] = useState<CanalContato>("whatsapp");
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [enviando, setEnviando] = useState(false);
    const [sucesso, setSucesso] = useState(false);
    const [erro, setErro] = useState("");

    const viaWhatsApp = canal === "whatsapp" || canal === "ambos";
    const viaEmail = canal === "email" || canal === "ambos";

    function abrirWhatsApp() {
        const texto = `Olá! Meu nome é ${nome}.${telefone ? ` Meu telefone: ${telefone}.` : ""
            }\n\n${mensagem}`;
        window.open(
            `https://wa.me/${siteInfo.contact.waPhone}?text=${encodeURIComponent(texto)}`,
            "_blank",
            "noopener,noreferrer"
        );
    }

    async function enviarEmail() {
        if (FORMSPREE_ENDPOINT) {
            setEnviando(true);
            try {
                const res = await fetch(FORMSPREE_ENDPOINT, {
                    method: "POST",
                    headers: { "Content-Type": "application/json", Accept: "application/json" },
                    body: JSON.stringify({
                        nome,
                        email,
                        telefone,
                        mensagem,
                        _subject: `Contato pelo site — ${nome}`,
                    }),
                });
                if (!res.ok) throw new Error("Falha no envio");
                setSucesso(true);
            } catch {
                setErro("Não consegui enviar por e-mail. Se o WhatsApp abriu, use-o — ou tente novamente.");
            } finally {
                setEnviando(false);
            }
            return;
        }

        // Fallback sem backend: abre o app de e-mail do visitante preenchido
        const assunto = encodeURIComponent(`Contato pelo site — ${nome}`);
        const corpo = encodeURIComponent(`Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\n\n${mensagem}`);
        window.location.href = `mailto:${siteInfo.contact.email}?subject=${assunto}&body=${corpo}`;
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setErro("");
        setSucesso(false);

        if (viaWhatsApp) abrirWhatsApp();
        if (viaEmail) await enviarEmail();
    }

    return (
        <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Envie uma mensagem</h3>
            <p className="text-gray-500 mb-8">
                Preencha o formulário e escolha como prefere ser contactado.
            </p>

            {/* Seletor de canal */}
            <div className="grid grid-cols-3 gap-3 mb-6" role="radiogroup" aria-label="Como prefere ser contatado">
                {canais.map(({ id, label, Icon }) => (
                    <button
                        key={id}
                        type="button"
                        role="radio"
                        aria-checked={canal === id}
                        onClick={() => setCanal(id)}
                        className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${canal === id
                                ? "border-[#5B21B6] bg-purple-50 text-[#5B21B6]"
                                : "border-gray-200 bg-white text-gray-500 hover:border-gray-300"
                            }`}
                    >
                        <Icon className="w-6 h-6" />
                        <span className="text-sm font-semibold">{label}</span>
                    </button>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nome Completo *
                    </label>
                    <input
                        type="text" name="name" id="name" required value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#5B21B6] focus:ring-2 focus:ring-[#5B21B6] focus:ring-opacity-20 outline-none transition-all placeholder-gray-400"
                        placeholder="Seu nome"
                    />
                </div>

                {viaWhatsApp && (
                    <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                            Telefone / WhatsApp *
                        </label>
                        <input
                            type="tel" name="phone" id="phone" required value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#5B21B6] focus:ring-2 focus:ring-[#5B21B6] focus:ring-opacity-20 outline-none transition-all placeholder-gray-400"
                            placeholder="(XX) XXXXX-XXXX"
                        />
                    </div>
                )}

                {viaEmail && (
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                            Seu E-mail *
                        </label>
                        <input
                            type="email" name="email" id="email" required value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#5B21B6] focus:ring-2 focus:ring-[#5B21B6] focus:ring-opacity-20 outline-none transition-all placeholder-gray-400"
                            placeholder="voce@email.com"
                        />
                    </div>
                )}

                <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Mensagem *
                    </label>
                    <textarea
                        name="message" id="message" rows={4} required value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#5B21B6] focus:ring-2 focus:ring-[#5B21B6] focus:ring-opacity-20 outline-none transition-all placeholder-gray-400 resize-none"
                        placeholder="Gostaria de agendar uma avaliação..."
                    ></textarea>
                </div>

                {sucesso && (
                    <p className="flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-sm">
                        <CheckCircle2 className="w-5 h-5" /> Mensagem enviada por e-mail! Em breve retornaremos.
                    </p>
                )}
                {erro && (
                    <p className="text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm">
                        {erro}
                    </p>
                )}

                <button
                    type="submit" disabled={enviando}
                    className="w-full bg-[#5B21B6] text-white font-bold py-4 rounded-xl hover:bg-[#4c1d95] transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl disabled:opacity-60 flex items-center justify-center gap-2"
                >
                    {enviando ? (<><Loader2 className="w-5 h-5 animate-spin" /> Enviando...</>) : (<>Enviar Mensagem</>)}
                </button>

                <p className="text-xs text-gray-400 text-center">
                    {viaWhatsApp && viaEmail
                        ? "O WhatsApp abrirá e o e-mail será enviado."
                        : viaWhatsApp
                            ? "O WhatsApp abrirá com sua mensagem pronta para envio."
                            : "O envio usa seu aplicativo de e-mail ou o serviço configurado."}
                </p>
            </form>
        </div>
    );
}