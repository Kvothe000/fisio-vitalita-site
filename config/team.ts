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
        image: "/gallery/daiane.png",
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
        image: "/gallery/sinara.png",
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
        image: "/gallery/bruna.png",
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
        image: "",
        education: [
            "Informações em atualização..."
        ],
        experience: [
            "Equipe FisioVitalitá"
        ],
        courses: []
    }
];
