import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import './App.scss'
import Home from './pages/Home/home'


export default function App() {
    /**
     * Controles de internacionalização.
     */
    const { t, i18n } = useTranslation()

    /**
     * Altera o idioma da aplicação.
     */
    const alterarIdioma = (idioma: string) => {
        i18n.changeLanguage(idioma)
    }

    /**
     * Título da página.
     */
    const title = 'titulo'

    /**
     * Altera o título da página de acordo com o idioma selecionado.
     */
    useEffect(() => {
        document.title = t(title)
    }, [title, t])

    return (
        <Home titulo={t(title)} alterarIdioma={alterarIdioma}></Home>
    )
}
