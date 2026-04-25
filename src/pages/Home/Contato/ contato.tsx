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
                            <i className="bi bi-envelope icon"></i>
                            victorhugo.oliveira16@gmail.com
                        </span>
                    </a>
                    <a href="http://wa.me/+5543999577877" target="_blank">
                        <span className="botao">
                            <i className="bi bi-telephone icon"></i>
                            +55 43 99957-7877
                        </span>
                    </a>
                </div>
                <img className="globe" src="/images/globe.svg" alt="" />
            </div>
        </section>
    )
}