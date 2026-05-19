// import { useEffect, useState } from 'react'
import './hero.scss'

export default function Hero() {
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
                        Desenvolvedor FullStack | Geógrafo
                    </span>
                    <h1>
                        Geografia e tecnologia aplicada para análise do
                        <span className="gradient"> território</span>.
                    </h1>
                    <p>
                        Análise territorial, meio ambiente e tecnologia são conceitos chaves da minha atuação. Geoprocessamento de forma integrada ao desenvolvimento web.
                    </p>
                    {/* <button className="projects">
                    Ver Projetos
                </button> */}
                </div>
                <div className="foto">
                    <div className="place">
                        <img src="/images/fotos/1.webp" alt="Retrato de Victor Hugo, Geógrafo e Desenvolvedor Fullstack." />
                        <div className="titulo">
                            <p>Mestre em Geografia (UFPR)</p>
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