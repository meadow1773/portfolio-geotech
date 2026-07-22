import { useTranslation } from 'react-i18next'

import './galeria.scss'
import { listaPDM, listaDev, listaMapas } from './lista-projetos'
import type { ProjetoItem } from './Projeto/projeto'
import Projeto from './Projeto/projeto'

interface GrupoProjetosItem {
    nomeGrupo: string,
    id: string,
    projetos: ProjetoItem[]
}

/**
 * Componente da página `Galeria`.
 */
export default function Galeria() {
    /**
     * Controle de internacionalização.
     */
    const { t } = useTranslation()

    /**
     * Agrupamento de Projetos.
     */
    const gruposProjetos: GrupoProjetosItem[] = [
        {
            nomeGrupo: 'galeria.grupo-projetos.dev',
            id: 'dev',
            projetos: listaDev
        },
        {
            nomeGrupo: 'galeria.grupo-projetos.mapas',
            id: 'mapas',
            projetos: listaMapas
        },
        {
            nomeGrupo: 'galeria.grupo-projetos.pd',
            id: 'pd',
            projetos: listaPDM
        },
    ]

    return (
        <div id="projetos">
            <h1>{t('galeria.titulo')}</h1>
            {gruposProjetos.map((grupo) => (
                grupo.projetos.length != 0 &&
                <section className="grupo" id={grupo.id} key={grupo.id}>
                    <h2>
                        <i className="bi bi-geo-alt"></i>
                        {t(grupo.nomeGrupo)}
                    </h2>
                    <div className="container">
                        {grupo.projetos.map((proj, idProj) => (
                            <Projeto item={proj} key={idProj} />
                        ))}
                    </div>
                </section>
            ))}
        </div>
    )
}