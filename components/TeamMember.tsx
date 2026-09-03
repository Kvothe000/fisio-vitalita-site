import Image from 'next/image';
import { TeamMember as TeamMemberType } from '@/config/team';
import { GraduationCap, Award, Briefcase, BookOpen } from 'lucide-react';

interface TeamMemberProps {
    member: TeamMemberType;
    isReversed?: boolean; // Option to alternate layout L/R
}

export default function TeamMember({ member, isReversed = false }: TeamMemberProps) {
    return (
        <div className={`flex flex-col md:flex-row gap-8 items-start py-12 border-b border-gray-100 dark:border-slate-700 last:border-0 ${isReversed ? 'md:flex-row-reverse' : ''}`}>

            {/* Coluna da Imagem */}
            <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="relative aspect-square md:aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-slate-700">
                    <Image
                        src={member.image}
                        alt={`Foto de ${member.name}`}
                        fill
                        className="object-cover object-center hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </div>

                {/* Badge de CREFITO se houver */}
                {member.crefito && (
                    <div className="mt-4 text-center">
                        <span className="inline-block bg-purple-100 dark:bg-purple-950/60 text-[#5B21B6] dark:text-purple-300 text-sm font-semibold px-4 py-1 rounded-full">
                            CREFITO: {member.crefito}
                        </span>
                    </div>
                )}
            </div>

            {/* Coluna do Texto */}
            <div className="w-full md:w-2/3 space-y-6">
                <div>
                    <h3 className="text-3xl font-bold text-[#1F2937] dark:text-white mb-2">{member.name}</h3>
                    <p className="text-xl text-[#5B21B6] dark:text-purple-400 font-medium">{member.role}</p>
                </div>

                {member.bio && (
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg italic">
                        "{member.bio}"
                    </p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Formação */}
                    {member.education.length > 0 && (
                        <div className="bg-gray-50 dark:bg-slate-900/60 p-6 rounded-xl border border-transparent dark:border-slate-700">
                            <div className="flex items-center mb-4 text-[#5B21B6] dark:text-purple-400">
                                <GraduationCap className="w-6 h-6 mr-2" />
                                <h4 className="font-bold text-gray-900 dark:text-white">Formação</h4>
                            </div>
                            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                {member.education.map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="w-1.5 h-1.5 bg-[#5B21B6] dark:bg-purple-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Experiência */}
                    {member.experience.length > 0 && (
                        <div className="bg-gray-50 dark:bg-slate-900/60 p-6 rounded-xl border border-transparent dark:border-slate-700">
                            <div className="flex items-center mb-4 text-[#5B21B6] dark:text-purple-400">
                                <Briefcase className="w-6 h-6 mr-2" />
                                <h4 className="font-bold text-gray-900 dark:text-white">Experiência</h4>
                            </div>
                            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                {member.experience.map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="w-1.5 h-1.5 bg-[#5B21B6] dark:bg-purple-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Cursos */}
                    {member.courses && member.courses.length > 0 && (
                        <div className="bg-gray-50 dark:bg-slate-900/60 p-6 rounded-xl border border-transparent dark:border-slate-700">
                            <div className="flex items-center mb-4 text-[#5B21B6] dark:text-purple-400">
                                <BookOpen className="w-6 h-6 mr-2" />
                                <h4 className="font-bold text-gray-900 dark:text-white">Cursos</h4>
                            </div>
                            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                {member.courses.map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="w-1.5 h-1.5 bg-[#5B21B6] dark:bg-purple-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
