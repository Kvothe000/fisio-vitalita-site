export interface TeamMember {
    name: string;
    role: string;
    crefito?: string;
    image: string;
    bio?: string;
    education: string[];
    experience: string[];
    courses?: string[];
    specializations?: string[];
}

export const teamData: TeamMember[] = [
    {
        name: "Daiane da Silva Borges",
        role: "Proprietária | Fisioterapeuta",
        crefito: "123456-F",
        image: "/team/foto-daiane.jpeg",
        bio: "Profissional dedicada com mais de 15 anos de experiência em fisioterapia e reabilitação.",
        education: [
            "Fisioterapia - PUCRS (2006)"
        ],
        experience: [
            "Proprietária da FisioVitalitá (Desde 2009)",
            "Instrutora de Pilates (Mais de 20 anos de experiência)",
            "Fisioterapeuta Intensivista no GHC (7 anos)",
            "Atuação em Fisioterapia do Trabalho e Ergonomia"
        ],
        specializations: [
            "Especialização em Traumato-ortopedia",
            "Especialização em Acupuntura",
            "Especialização em Fisioterapia do Trabalho"
        ],
        courses: [
            "Perícia Judicial e Assistência Técnica",
            "Fisioterapia Forense",
            "Formação completa em Pilates"
        ]
    },
    {
        name: "Sinara Corrêa Becker",
        role: "Fisioterapeuta",
        crefito: "5-38055-F",
        image: "/team/foto-sinara.jpeg",
        education: [
            "Fisioterapia - ULBRA/Canoas (08/2001)"
        ],
        experience: [
            "Atendimento Domiciliar como Autônoma (Desde 2001)",
            "Residencial Ipanema Lar de Idosos (2014 - 2025)",
            "Clínica de Cirurgia Plástica Heller (2006 - 2010)",
            "Ambulatório de Fibrose Cística do HCPA (2003 - 2005)",
            "Centro de Reabilitação Infantil Educandário São João Batista (2001 - 2007)"
        ],
        courses: [
            "Curso de Pilates Completo (Solo, Bola e Aparelhos) - 2017",
            "Reeducação Postural Global (RPG/RPM) - 2001",
            "Reequilíbrio Tóraco Abdominal - 2001"
        ]
    },
    {
        name: "Bruna Viegas Araujo",
        role: "Massoterapeuta e Terapeuta Holística",
        image: "/team/bruna.png",
        education: [
            "Técnico em Estética - Escola Factum (2014 - 2016)",
            "Curso de Massoterapia - Escola Bel'art (2014)"
        ],
        experience: [
            "FisioVitalitá (2022 - Atual) - Massoterapeuta e Terapeuta Holística",
            "Corpo e Alma (2019 - 2022) - Proprietária",
            "Clínica Benessere (2016 - 2018) - Massoterapeuta"
        ],
        courses: [
            "Dreno Detox",
            "Esculpe Detox",
            "Cuidadora de Pessoas",
            "Terapias Holísticas e Alternativas (Reiki, etc)"
        ]
    },
    {
        name: "Sandra",
        role: "Fisioterapeuta",
        image: "/team/sandra.png",
        education: [
            "Informações em atualização..."
        ],
        experience: [
            "Equipe FisioVitalitá"
        ],
        courses: []
    },
    {
        name: "Caroline dos Reis Leivas",
        role: "Nutricionista",
        image: "/team/foto-carol.jpeg",
        bio: "29 anos, vegetariana e corredora amadora. Une o cuidado com a alimentação ao entendimento real de quem pratica atividade física e de quem busca uma relação mais leve com a comida.",
        education: [
            "Graduação em Nutrição | 2016 - 2020 | Faculdade UniRitter",
            "Pós-Graduação em Nutrição Estética e Funcional | 2023 - 2024 | Centro Universitário Uninter",
            "Pós-Graduação em Nutrição no Esporte e no Exercício | 2024 - 2025 | Centro Universitário Uninter"
        ],
        experience: [
            "Nutricionista na Clínica Pasqualotti | 2020 - 2021",
            "Nutricionista clínica autônoma | 2021 - 2024",
            "Nutricionista clínica e esportiva | 2025 - até o momento"
        ],
        courses: [
            "Elaboração de cardápios e dietas nas diferentes modalidades esportivas | IPGS",
            "Nutrição esportiva, vegetarianismo, veganismo e plant-based: como prescrever? | Bee Coworking",
            "Nutrição esportiva: anamnese e fidelização | Bee Coworking",
            "Conduta nutricional do paciente vegetariano | Nutrissoma"
        ],
        specializations: [
            "Nutrição Clínica",
            "Nutrição Esportiva",
            "Nutrição Estética e Funcional",
            "Vegetarianismo e Plant-based"
        ]
    }
];
