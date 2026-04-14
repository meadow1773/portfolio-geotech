import './contato.scss'

export default function Contato() {
    return (
        <section id="contato">
            <div className="container">
                <h2>Vamos mapear seu próximo projeto?</h2>
                <p>
                    Entre contato para que eu possa colaborar com seu projeto!
                </p>
                <div className="contatos">
                    <a href="mailto:victorhugo.oliveira16@gmail.com" target="_blank">
                        <span className="botao">
                            <span className="material-symbols-outlined icon">
                                mail
                            </span>
                            victorhugo.oliveira16@gmail.com
                        </span>
                    </a>
                    <a href="http://wa.me/+5543999577877" target="_blank">
                        <span className="botao">
                            <span className="material-symbols-outlined icon">
                                phone_enabled
                            </span>
                            +55 43 99957-7877
                        </span>
                    </a>
                </div>
                <img className="globe" src="/src/images/svg/globe.svg" alt="" />
            </div>
        </section>
    )
}