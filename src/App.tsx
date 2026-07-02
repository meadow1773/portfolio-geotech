import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Route, Routes, useLocation } from 'react-router-dom'

import './App.scss'
import Footer from './layout/Footer/footer'
import Header from './layout/Header/header'
import Galeria from './pages/Galeria/galeria'
import Home from './pages/Home/home'

export default function App() {
    /**
     * Controles de internacionalização.
     */
    const { t, i18n } = useTranslation()

    /**
     * Hook para obter a localização atual da rota.
     */
    const location = useLocation()

    /**
     * Altera o idioma da aplicação.
     */
    const alterarIdioma = (idioma: string) => {
        i18n.changeLanguage(idioma)
    }

    /**
     * Altera o título da página de acordo com o idioma e a rota selecionados.
     */
    useEffect(() => {
        const baseTitle = t('titulo')
        let pageTitleSuffix = ''

        switch (location.pathname) {
            case '/':
                pageTitleSuffix = t('menu.inicio')
                break
            case '/galeria':
                pageTitleSuffix = t('menu.galeria')
                break
            default:
                break
        }
        document.title = pageTitleSuffix ? `${baseTitle} - ${pageTitleSuffix}` : baseTitle
    }, [t, location.pathname])

    return (
        <>
            <Header titulo={t('titulo')} alterarIdioma={alterarIdioma} />
            <main>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/galeria' element={<Galeria />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}
