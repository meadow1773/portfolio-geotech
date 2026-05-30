import Contato from "./Contato/ contato"
import Experiencia from "./Experiencia/experiencia"
import Hero from "./Hero/hero"
import Skills from "./Skills/skills"
import Sobre from "./Sobre/sobre"
import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/header"
import './home.scss'

interface HomeProps {
    titulo: string,
    alterarIdioma: (idioma: string) => void
}

export default function Home({ titulo, alterarIdioma }: HomeProps) {

    return (
        <>
            <Header titulo={titulo} alterarIdioma={alterarIdioma}></Header>
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