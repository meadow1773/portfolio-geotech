import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/header"
import Hero from "../../components/Hero/hero"
import './home.scss'

export default function Home() {

    return (
        <>
            <Header></Header>
            <main>
                <div className="green-glow"></div>
                <section id="home">
                    <Hero></Hero>
                </section>
            </main>
            <Footer></Footer>
        </>
    )
}