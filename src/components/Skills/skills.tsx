import './skills.scss'

interface SkillList {
    nome: string;
    level: number;
}

export default function Skills() {
    /**
     * Lista de Skills
     */
    const skillList: SkillList[] = [
        { nome: 'Angular', level: 95 },
        { nome: 'Java Spring', level: 65 },
        { nome: 'SQL (Postgres e MySQL)', level: 70 },
        { nome: 'PHP', level: 50 },
    ]

    /**
     * Lista de Idiomas
     */
    const idiomaList: SkillList[] = [
        { nome: 'Português (nativo)', level: 100 },
        { nome: 'Inglês', level: 90 },
        { nome: 'Mandarim', level: 10 },
    ]

    const geoList: SkillList[] = [
        { nome: 'QGIS e ArcGIS', level: 95 },
        { nome: 'PostGIS', level: 80 },
        { nome: 'Geoserver', level: 85 },
    ]


    return <section id="skills">
        <div className="container">
            <h1>Habilidades Técnicas</h1>
            <div className="skills-container">
                <h2>Desenvolvimento</h2>
                {skillList.map(skill => (
                    <div className="item" key={skill.nome}>
                        <div className={`${skill.nome.toLowerCase().replace(/\s/g, '-')} level-nome`}>
                            {skill.nome}
                        </div>
                        <div className="level">
                            {skill.level} %
                        </div>
                        <div className="progress">
                            <span className="filler" style={{ width: `${skill.level}%` }}></span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="geo-container">
                <h2>Geotecnologias</h2>
                {geoList.map(geo => (
                    <div className="item" key={geo.nome}>
                        <div className={`${geo.nome.toLowerCase().replace(/\s/g, '-')} level-nome`}>
                            {geo.nome}
                        </div>
                        <div className="level">
                            {geo.level} %
                        </div>
                        <div className="progress">
                            <span className="filler" style={{ width: `${geo.level}%` }}></span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="idiomas-container">
                <h2>Idiomas</h2>
                {idiomaList.map(idioma => (
                    <div className="item" key={idioma.nome}>
                        <div className={`${idioma.nome.toLowerCase().replace(/\s/g, '-')} level-nome`}>
                            {idioma.nome}
                        </div>
                        <div className="level">
                            {idioma.level} %
                        </div>
                        <div className="progress">
                            <span className="filler" style={{ width: `${idioma.level}%` }}></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </section>
}