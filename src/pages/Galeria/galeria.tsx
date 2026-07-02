import { useTranslation } from 'react-i18next'

import './galeria.scss'
import { listaPDM, listaDev } from './lista-projetos'
import type { ProjetoItem } from './Projeto/projeto'
import Projeto from './Projeto/projeto'

interface GrupoProjetosItem {
    nomeGrupo: string,
    projetos: ProjetoItem[]
}

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
            projetos: listaDev
        },
        {
            nomeGrupo: 'galeria.grupo-projetos.pd',
            projetos: listaPDM
        },
        // {
        //     nomeGrupo: 'galeria.grupo-projetos.mapas',
        //     projetos: listaMapas
        // }
    ]

    return (
        <div id="projetos">
            <h1>{t('galeria.titulo')}</h1>
            {
                gruposProjetos.map((grupo, idGrupo) => (
                    <section className="grupo" key={idGrupo}>
                        <h2>
                            <i className="bi bi-geo-alt"></i>
                            {t(grupo.nomeGrupo)}
                        </h2>
                        <div className="container">
                            {grupo.projetos.length &&
                                grupo.projetos.map((proj, idProj) => (
                                    <Projeto item={proj} key={idProj} />
                                ))
                            }
                        </div>
                    </section>
                ))
            }
        </div>
    )
}