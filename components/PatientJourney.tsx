import Link from 'next/link';

export default function PatientJourney() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-4">
                        Como funciona o tratamento?
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Entenda nosso processo de cuidado, do primeiro contato até a sua plena recuperação.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-start gap-8 relative">
                    {/* Linha conectora (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-20 right-20 h-0.5 bg-gray-200 -z-10 mx-auto" style={{ width: '80%' }}></div>

                    {/* Passo 1 */}
                    <div className="flex-1 w-full flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-[#5B21B6] text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-lg mb-6 border-4 border-white">
                            1
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Avaliação Detalhada</h3>
                        <p className="text-gray-600">
                            Agendamos uma consulta inicial para ouvir sua história, avaliar seus sintomas e entender suas necessidades.
                        </p>
                    </div>

                    {/* Passo 2 */}
                    <div className="flex-1 w-full flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-[#5B21B6] text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-lg mb-6 border-4 border-white">
                            2
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Plano Personalizado</h3>
                        <p className="text-gray-600">
                            Criamos um plano de tratamento único, combinando técnicas (ex: Pilates + Acupuntura) para acelerar seus resultados.
                        </p>
                    </div>

                    {/* Passo 3 */}
                    <div className="flex-1 w-full flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-[#5B21B6] text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-lg mb-6 border-4 border-white">
                            3
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Tratamento & Alta</h3>
                        <p className="text-gray-600">
                            Iniciamos as sessões focadas na sua evolução constante até você retomar sua qualidade de vida total.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/agendamento"
                        className="inline-block bg-[#5B21B6] text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors shadow-lg"
                    >
                        Começar Minha Jornada
                    </Link>
                </div>
            </div>
        </section>
    );
}
