import './sobre.scss'

export default function Sobre() {
    return <section id="sobre">
        <div className="container">
            <h1>Sobre mim</h1>
            <div className="text">
                <h2>Da paisagem ao código: geografia aplicada à tecnologia.</h2>
                <div>
                    <p>Me chamo <i>Victor Hugo Oliveira de Paula</i>, <b>Geógrafo</b> e <b>Desenvolvedor Fullstack</b>, com formação pela UEL e mestrado em Geografia pela UFPR.</p>
                    <p>Minha experiência passa por análise ambiental, elaboração de planos diretores e mobilidade urbana, atuação em consultorias e desenvolvimento de soluções WebGIS para gestão municipal.</p>
                    <p>Hoje uno ferramentas de geoprocessamento (<b>QGIS</b>, <b>ArcGIS</b>) a stacks de desenvolvimento (<b>Python</b>, <b>Java</b>, <b>PHP</b> e <b>JavaScript</b>), com especialidade em frameworks front-end (<b>React</b> e <b>Angular</b>) bem como tecnologias de banco de dados para criar produtos digitais orientados pelo espaço geográfico. </p>
                </div>
            </div>
            <div className="fotos">
                <span>
                    <img src="/images/fotos/2.webp" alt="Trabalhando em campo com análise ambiental." />
                </span>
                <span>
                    <img src="/images/fotos/3.webp" alt="Operando softwares de geoprocessamento e desenvolvimento." />
                </span>
            </div>
        </div>
    </section>
}