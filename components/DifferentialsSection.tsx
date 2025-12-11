import { Users, Award, Sparkles, Target } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const differentials = [
    {
        Icon: Users,
        title: "Atendimento Humanizado",
        description: "Cada paciente é único. Oferecemos um cuidado individualizado e atencioso.",
    },
    {
        Icon: Award,
        title: "Profissionais Qualificados",
        description: "Nossa equipe é formada por especialistas dedicados à sua recuperação.",
    },
    {
        Icon: Sparkles,
        title: "Ambiente Acolhedor",
        description: "Um espaço moderno e tranquilo, pensado para seu conforto e bem-estar.",
    },
    {
        Icon: Target,
        title: "Foco na Causa Raiz",
        description: "Tratamos a origem do problema, não apenas os sintomas, para resultados duradouros.",
    },
];

export default function DifferentialsSection() {
    return (
        <AnimatedSection className="bg-gray-50 py-20">
            <div className="container mx-auto px-6">
                {/* Título da Seção */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937]">
                        Por que escolher a FisioVitalitá?
                    </h2>
                    <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
                        Nosso compromisso vai além do tratamento. Cuidamos de você de forma integral.
                    </p>
                </div>

                {/* Grid de Diferenciais */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {differentials.map((item) => (
                        <div key={item.title} className="text-center px-4">
                            {/* Ícone */}
                            <div className="flex justify-center items-center mb-4">
                                <div className="bg-[#5B21B6] p-4 rounded-full">
                                    <item.Icon className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            {/* Título */}
                            <h3 className="text-xl font-bold text-[#1F2937] mb-2">{item.title}</h3>
                            {/* Descrição */}
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}
