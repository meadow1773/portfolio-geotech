// import { useEffect, useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import './hero.scss'

export default function Hero() {
    /**
     * Controle de internacionalização.
     */
    const { t } = useTranslation()
    // const [texto, setTexto] = useState('')
    // const velocidadeTexto = 100

    // useEffect(() => {
    //     let index = 0
    //     setTexto('')

    //     const idIntervalo = setInterval(() => {
    //         setTexto((prev) => prev + texto.charAt(index))
    //         index++

    //         if (index >= texto.length) {
    //             clearInterval(idIntervalo)
    //         }
    //     }, velocidadeTexto)
    // }, [texto])

    return (
        <section id="hero">
            <div className="map-grid"></div>
            <div className="container">
                <div className="hero-text">
                    <span className="pre-text">
                        {t('hero.pre-text')}
                    </span>
                    <h1>
                        <Trans
                            i18nKey="hero.destaque"
                            components={[
                                <span className="gradient" key="0" />
                            ]}
                        />
                    </h1>
                    <p>
                        {t('hero.subdestaque')}
                    </p>
                    {/* <button className="projects">
                        {t('hero.projetos')}
                    </button> */}
                </div>
                <div className="foto">
                    <div className="place">
                        <img src="/images/fotos/1.webp" alt="Retrato de Victor Hugo, Geógrafo e Desenvolvedor Fullstack." />
                        <div className="titulo">
                            <p>{t('hero.titulo')}</p>
                        </div>
                    </div>
                    <div className="buttons">
                        <a href="https://github.com/meadow1773" target="_blank">
                            <img src="/images/github.svg" alt="" />
                        </a>
                        <a href="https://linkedin.com/in/victor-hugo-oliveira-de-paula-22633a195" target="_blank">
                            <img src="/images/linkedin.svg" alt="" />
                        </a>
                    </div>
                </div>
                <img className="leaf" src="/images/leaf.svg" alt="" />
            </div>
        </section>
    )
}