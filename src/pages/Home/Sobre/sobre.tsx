import { Trans, useTranslation } from 'react-i18next'
import './sobre.scss'

export default function Sobre() {
    /**
     * Controle de internacionalização.
     */
    const { t } = useTranslation()

    return (
        <section id="sobre">
            <div className="container">
                <h1>{t('sobre.titulo')}</h1>
                <div className="text">
                    <h2>{t('sobre.subtitulo')}</h2>
                    <div>
                        <p>
                            <Trans
                                i18nKey='sobre.texto.p1'
                                components={[
                                    <b key='0' />,
                                    <b key='1' />,
                                    <b key='2' />,
                                ]}
                            />
                        </p>
                        <p>{t('sobre.texto.p2')}</p>
                        <p>
                            <Trans
                                i18nKey='sobre.texto.p3'
                                components={[
                                    <b key='0' />,
                                    <b key='1' />,
                                    <b key='2' />,
                                    <b key='3' />,
                                    <b key='4' />,
                                    <b key='5' />,
                                    <b key='6' />,
                                    <b key='7' />,
                                ]}
                            />
                        </p>
                    </div>
                </div>
                <div className="fotos">
                    <span>
                        <img src="/images/fotos/2.webp" alt={t('sobre.legendas.l1')} />
                    </span>
                    <span>
                        <img src="/images/fotos/3.webp" alt={t('sobre.legendas.l2')} />
                    </span>
                </div>
            </div>
        </section>
    )
}