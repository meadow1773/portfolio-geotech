import { useTranslation } from 'react-i18next'
import './experiencia.scss'

interface xpItem {
    nome: string,
    cargo: string,
    descricao: string,
    anoInicio: number,
    anoFim?: number,
}

export default function Experiencia() {
    /**
     * Controle de internacionalização.
     */
    const { t } = useTranslation()

    /**
     * Lista de Experiências
     */
    const items: xpItem[] = [
        {
            nome: 'xp.xp1.nome',
            cargo: 'xp.xp1.cargo',
            descricao: 'xp.xp1.descricao',
            anoInicio: 2018,
            anoFim: 2020
        },
        {
            nome: 'xp.xp2.nome',
            cargo: 'xp.xp2.cargo',
            descricao: 'xp.xp2.descricao',
            anoInicio: 2024,
            anoFim: 2025
        },
        {
            nome: 'xp.xp3.nome',
            cargo: 'xp.xp3.cargo',
            descricao: 'xp.xp3.descricao',
            anoInicio: 2025
        },
    ]

    return (
        <section id="xp">
            <div className="container">
                <h1>{t('xp.titulo')}</h1>
                <div className="xp-items">
                    {items
                        .sort((xp1, xp2) => {
                            if (!xp1.anoFim && !xp2.anoFim) return 0
                            if (!xp1.anoFim) return -1
                            if (!xp2.anoFim) return 1

                            return xp2.anoFim - xp1.anoFim
                        })
                        .map((xp, index) => (
                            <div className="xp-item" key={index}>
                                <div className="ponto"></div>
                                <span className="tempo">{xp.anoInicio} - {xp.anoFim ?? t('xp.presente')}</span>
                                <h3 className="nome">{t(xp.nome)}</h3>
                                <span className="cargo">{t(xp.cargo)}</span>
                                <p>{t(xp.descricao)}</p>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}