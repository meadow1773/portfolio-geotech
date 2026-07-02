import type { ProjetoItem } from "./Projeto/projeto"

/**
 * Lista de projetos de Plano Diretor Municipal.
 */
export const listaPDM: ProjetoItem[] = [
    {
        prefix: 'projetos.londrina',
        label: 'titulo',
        imgUrl: '/images/projetos/londrina.webp',
        subtitulo: 'subtitulo',
        skills: ['qgis', 'autocad', 'arcgis', 'leaflet'],
        descricao: 'descricao'
    },
    {
        prefix: 'projetos.borda-mata',
        label: 'titulo',
        imgUrl: '/images/projetos/borda-mata.webp',
        subtitulo: 'subtitulo',
        skills: ['qgis', 'autocad', 'analise-ambiental'],
    },
    {
        prefix: 'projetos.santa-helena',
        label: 'titulo',
        imgUrl: '/images/projetos/santa-helena.webp',
        subtitulo: 'subtitulo',
        skills: ['analise-ambiental'],
    },
    {
        prefix: 'projetos.marataizes',
        label: 'titulo',
        imgUrl: '/images/projetos/marataizes.webp',
        subtitulo: 'subtitulo',
        skills: ['qgis', 'autocad', 'analise-ambiental'],
    },
    {
        prefix: 'projetos.general-carneiro',
        label: 'titulo',
        imgUrl: '/images/projetos/general-carneiro.webp',
        subtitulo: 'subtitulo',
        skills: ['qgis', 'autocad', 'analise-ambiental'],
    },
    {
        prefix: 'projetos.general-carneiro-cmc',
        label: 'titulo',
        imgUrl: '/images/projetos/general-carneiro.webp',
        subtitulo: 'subtitulo',
        skills: ['analise-ambiental'],
    },
    {
        prefix: 'projetos.cambira',
        label: 'titulo',
        imgUrl: '/images/projetos/cambira.webp',
        subtitulo: 'subtitulo',
        skills: ['qgis', 'autocad', 'analise-ambiental'],
    },
    {
        prefix: 'projetos.agudos-sul',
        label: 'titulo',
        imgUrl: '/images/projetos/agudos-sul.webp',
        subtitulo: 'subtitulo',
        skills: ['qgis', 'autocad', 'analise-ambiental'],
    },
]

/**
 * Lista de Projetos de Desenvolvimento.
 */
export const listaDev: ProjetoItem[] = [
    {
        prefix: 'projetos.pipoca',
        label: 'titulo',
        imgUrl: '/images/projetos/pipoca.webp',
        subtitulo: 'subtitulo',
        skills: ['wordpress', 'php', 'mysql', 'html-css'],
        descricao: 'descricao',
        link: 'https://github.com/meadow1773/pipoca1'
    },
    {
        prefix: 'projetos.pop3',
        label: 'titulo',
        imgUrl: '/images/projetos/pop3.webp',
        subtitulo: 'subtitulo',
        skills: ['wordpress', 'php', 'mysql','javascript', 'html-css', 'scss'],
        descricao: 'descricao',
        link: 'https://github.com/meadow1773/portal-pop3'
    },
    {
        prefix: 'projetos.finctrl',
        label: 'titulo',
        imgUrl: '/images/projetos/finctrl.webp',
        subtitulo: 'subtitulo',
        skills: ['angular', 'postgres', 'node', 'php', 'docker'],
        descricao: 'descricao',
        link: 'https://github.com/meadow1773/finctrl'
    },
    {
        prefix: 'projetos.sig-web',
        label: 'titulo',
        imgUrl: '/images/projetos/sig-web.webp',
        subtitulo: 'subtitulo',
        skills: ['angular', 'java', 'react-native', 'postgres', 'geoserver', 'qgis'],
        descricao: 'descricao'
    },
    {
        prefix: 'projetos.portfolio',
        label: 'titulo',
        imgUrl: '/images/projetos/portfolio.webp',
        subtitulo: 'subtitulo',
        skills: ['react', 'vite'],
        descricao: 'descricao',
        link: 'https://github.com/meadow1773/portfolio-geotech'
    },
]

/**
 * Lista de Produtos Cartográficos.
 */
export const listaMapas: ProjetoItem[] = []