import Experiencia from "../../components/Experiencia/experiencia"
import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/header"
import Hero from "../../components/Hero/hero"
import Skills from "../../components/Skills/skills"
import Sobre from "../../components/Sobre/sobre"
import './home.scss'

export default function Home() {

    return (
        <>
            <Header></Header>
            <main>
                <div className="green-glow"></div>
                <Hero></Hero>
                <Sobre></Sobre>
                <Experiencia></Experiencia>
                <Skills></Skills>
            </main>
            <Footer></Footer>
        </>
    )
}