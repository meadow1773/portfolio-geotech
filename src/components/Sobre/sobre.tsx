import './sobre.scss'

export default function Sobre() {
    return <section id="sobre">
        <div className="container">
            <div className="text">
                <h1>Sobre mim</h1>
                <h2>Da paisagem ao código: geografia aplicada à tecnologia.</h2>
                <div>
                    <p>Sou Victor Hugo Oliveira de Paula, Geógrafo e Desenvolvedor Fullstack, com formação pela UEL e mestrado em Geografia pela UFPR.</p>
                    <p>Minha experiência passa por análise ambiental, elaboração de planos diretores e mobilidade urbana, atuação em consultorias e desenvolvimento de soluções WebGIS para gestão municipal.</p>
                    <p>Hoje uno ferramentas de geoprocessamento (QGIS, ArcGIS) a stacks de desenvolvimento (Python, Java Spring, PHP, Angular, bancos de dados PostgreSQL e MySQL) para criar produtos digitais orientados pelo espaço geográfico. </p>
                </div>
            </div>
            <div>
                <img src="" alt="" />
                <img src="" alt="" />
                <blockquote> Acredito que compreender o território – seus fluxos, usos e vulnerabilidades – é essencial para construir cidades mais inteligentes e sustentáveis. Meu trabalho é transformar essa leitura espacial em interfaces, mapas e aplicações que dialoguem com quem toma decisão no dia a dia. </blockquote>
            </div>
        </div>
    </section>
}