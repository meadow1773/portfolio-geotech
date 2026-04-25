import Contato from "./Contato/ contato"
import Experiencia from "./Experiencia/experiencia"
import Hero from "./Hero/hero"
import Skills from "./Skills/skills"
import Sobre from "./Sobre/sobre"
import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/header"
import './home.scss'

export default function Home({ titulo }: { titulo: string }) {

    return (
        <>
            <Header titulo={titulo}></Header>
            <main>
                <div className="green-glow"></div>
                <Hero></Hero>
                <Sobre></Sobre>
                <Experiencia></Experiencia>
                <Skills></Skills>
                <Contato></Contato>
            </main>
            <Footer></Footer>
        </>
    )
}