import { Trans, useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './hero.scss'

/**
 * Componente da seção `Hero` da página `Home`.
 */
export default function Hero() {
    /**
     * Controle de internacionalização.
     */
    const { t } = useTranslation()

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
                    <p className="botao">
                        <Link to="/galeria" aria-label={t('menu.projetos')}>
                            <button className="projects">
                                {t('hero.projetos')}
                            </button>
                        </Link>
                    </p>
                </div>
                <div className="foto">
                    <div className="place">
                        <img src="/images/fotos/1.webp" alt={t('hero.img.retrato')} />
                        <div className="titulo">
                            <p>{t('hero.titulo')}</p>
                        </div>
                    </div>
                    <div className="buttons">
                        <a href="https://github.com/meadow1773" target="_blank">
                            <img src="/images/github.svg" alt={t('hero.img.github')} />
                        </a>
                        <a href="https://linkedin.com/in/victor-hugo-oliveira-de-paula-22633a195" target="_blank">
                            <img src="/images/linkedin.svg" alt={t('hero.img.linkedin')} />
                        </a>
                        <a href="http://lattes.cnpq.br/2909948182276218" target="_blank">
                            <img src="/images/lattes.svg" alt={t('hero.img.lattes')} />
                        </a>
                    </div>
                </div>
                <img className="leaf" src="/images/leaf.svg" alt={t('hero.destaque')} />
            </div>
        </section>
    )
}