import LevelBar from '../../../components/LevelBar/level-bar'
import './skills.scss'

interface SkillItem {
    nome: string,
    level: number,
}

interface SkillList {
    nome: string,
    skills: SkillItem[]
}

export default function Skills() {
    /**
     * Lista de Skills de Desenvolvimento
     */
    const devList: SkillItem[] = [
        { nome: 'Angular', level: 95 },
        { nome: 'Java Spring', level: 65 },
        { nome: 'SQL (Postgres e MySQL)', level: 70 },
        { nome: 'PHP', level: 50 },
    ]

    /**
     * Lista de Idiomas
     */
    const idiomaList: SkillItem[] = [
        { nome: 'Português (nativo)', level: 100 },
        { nome: 'Inglês', level: 90 },
        { nome: 'Mandarim', level: 10 },
    ]

    /**
     * Lista de Skills de Geo
     */
    const geoList: SkillItem[] = [
        { nome: 'QGIS e ArcGIS', level: 95 },
        { nome: 'PostGIS', level: 80 },
        { nome: 'Geoserver', level: 85 },
    ]

    /**
     * Lista de todas as Skills
     */
    const skillList: SkillList[] = [
        { nome: 'Desenvolvimento', skills: devList },
        { nome: 'Idiomas', skills: idiomaList },
        { nome: 'Geotecnologias', skills: geoList },
    ]

    return <section id="skills">
        <div className="container">
            <h1>Habilidades Técnicas</h1>
            <div className="skill-items">
                {skillList.map((item, index) => (
                    <div className="item" key={index}>
                        <h2>{item.nome}</h2>
                        {item.skills.map((skill, ind) => (
                            <LevelBar ind={ind} nome={skill.nome} level={skill.level} />
                        ))}
                    </div>
                ))}
            </div>
        </div>

    </section>
}