import { useState } from "react"
import { useTranslation } from "react-i18next"

import Menu, { type MenuItem } from "../Menu/menu"

import './header.scss'

interface HeaderProps {
    titulo: string,
    alterarIdioma: (idioma: string) => void
}

export default function Header({ titulo, alterarIdioma }: HeaderProps) {
    /**
     * Controle de internacionalização.
     */
    const { t } = useTranslation()

    /**
     * Recupera o idioma selecionado anteriormente do localStorage.
     */
    const idiomaSelecionado = localStorage.getItem('i18nextLng')

    /**
     * Estado local para armazenar o idioma selecionado.
     */
    const [idioma, setIdioma] = useState(idiomaSelecionado || 'pt')

    /**
     * Estado local para controlar a visibilidade do seletor de idiomas.
     */
    const [flagOpen, setFlagOpen] = useState(false)

    /**
     * Define as bandeiras de cada idioma.
     */
    const flags: { [cod: string]: string } = {
        pt: '🇧🇷',
        en: '🇺🇸',
        es: '🇪🇸',
        zh: '🇨🇳'
    }

    /**
     * Itens do menu principal.
     */
    const menuItems: MenuItem[] = [
        { key: 'inicio', icone: 'house', url: '#' },
        { key: 'sobre', icone: 'person', url: '#sobre' },
        { key: 'xp', icone: 'suitcase-lg', url: '#xp' },
        { key: 'skills', icone: 'layers', url: '#skills' },
        { key: 'contato', icone: 'envelope', url: '#contato' },
    ]

    /**
     * Altera o idioma da aplicação e atualiza o estado local.
     * @param lang O código do idioma a ser definido.
     */
    const handleChangeLanguage = (lang: string) => {
        setIdioma(lang)
        alterarIdioma(lang)
        setFlagOpen(false)
    }

    return (
        <header>
            <nav>
                <span className="logo">
                    <a href="#">
                        {titulo}
                    </a>
                </span>
                <Menu items={menuItems} menuKey="menu-principal"></Menu>
                <div className="menu-end">
                    <div className="traducao">
                        <div className="current" onClick={() => setFlagOpen(!flagOpen)}>
                            <span>{`${flags[idioma]} ${idioma}`}</span>
                            <i className="bi bi-chevron-down"></i>
                        </div>
                        <div className={"options " + (flagOpen ? 'on' : '')} >
                            {Object.keys(flags).map(cod => (
                                <span
                                    key={cod}
                                    className={cod}
                                    onClick={() => handleChangeLanguage(cod)}
                                >
                                    {`${flags[cod]} ${cod}`}
                                </span>
                            ))}
                        </div>
                    </div>
                    <button className="cv">
                        <a href="https://drive.google.com/file/d/16kvEzUNmbCo5psZucFMctOIcgsWA2_AY/view?usp=sharing" target="_blank">
                            {t('header.baixar-cv')}
                        </a>
                    </button>
                </div>
            </nav>
        </header>
    )
}