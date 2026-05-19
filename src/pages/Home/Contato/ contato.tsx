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