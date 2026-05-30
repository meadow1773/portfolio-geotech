import { useTranslation } from 'react-i18next'
import './contato.scss'

export default function Contato() {
    /**
     * Controle de internacionalização.
     */
    const { t } = useTranslation()

    return (
        <section id="contato">
            <div className="container">
                <h2>{t('contato.destaque')}</h2>
                <p>
                    {t('contato.subdestaque')}
                </p>
                <div className="contatos">
                    <span className="botao">
                        <a href="mailto:victorhugo.oliveira16@gmail.com" target="_blank">
                            <i className="bi bi-envelope icon"></i>
                            victorhugo.oliveira16@gmail.com
                        </a>
                    </span>
                    <span className="botao">
                        <a href="http://wa.me/+5543999577877" target="_blank">
                            <i className="bi bi-telephone icon"></i>
                            +55 43 99957-7877
                        </a>
                    </span>
                </div>
                <img className="globe" src="/images/globe.svg" alt="" />
            </div>
        </section>
    )
}