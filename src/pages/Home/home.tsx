import Contato from "./Contato/ contato"
import Experiencia from "./Experiencia/experiencia"
import Hero from "./Hero/hero"
import Skills from "./Skills/skills"
import Sobre from "./Sobre/sobre"
import './home.scss'

export default function Home() {
    return (
        <>
            <div className="green-glow"></div>
            <Hero />
            <Sobre />
            <Experiencia />
            <Skills />
            <Contato />
        </>
    )
}