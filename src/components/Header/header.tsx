import Menu, { type MenuItem } from "../Menu/menu"
import './header.scss'

export default function Header() {
    /**
     * Itens do menu principal
     */
    const menuItems: MenuItem[] = [
        { key: 'inicio', label: 'Início', url: '/' },
        { key: 'sobre', label: 'Sobre', url: '#sobre' },
        { key: 'xp', label: 'Experiência', url: '#xp' },
        { key: 'skills', label: 'Skills', url: '#skills' },
        { key: 'contato', label: 'Contato', url: '#contato' },
    ]
    return (
        <header>
            <nav>
                <span className="logo">
                    <a href="/">
                        VHOP | GEO.TECH
                    </a>
                </span>
                <Menu items={menuItems}></Menu>
                <button className="cv">
                    Baixar CV
                </button>
            </nav>
        </header>
    )
}