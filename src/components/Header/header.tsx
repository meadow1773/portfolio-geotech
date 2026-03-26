import Menu, { type MenuItem } from "../Menu/menu"
import './header.scss'

export default function Header() {
    /**
     * Itens do submenu "Sobre"
     */
    // const sobreSubMenu: MenuItem[] = [
    //     { key: 'sub-item-1', label: 'SubItem 1', isSubMenu: true },
    //     { key: 'sub-item-2', label: 'SubItem 2', isSubMenu: true },
    //     { key: 'sub-item-3', label: 'SubItem 3', isSubMenu: true },
    // ]

    /**
     * Itens do menu principal
     */
    const menuItems: MenuItem[] = [
        { key: 'inicio', label: 'Início', url: '#home' },
        { key: 'sobre', label: 'Sobre', url: '#sobre' },
        { key: 'xp', label: 'Experiência', url: '#xp' },
        { key: 'skills', label: 'Skills', url: '#skills' },
        { key: 'contato', label: 'Contato', url: '#contato' },
    ]
    return (
        <header>
            <nav>
                <span className="logo">
                    VHOP | GEO.TECH
                </span>
                <Menu items={menuItems}></Menu>
                <button className="cv">
                    Baixar CV
                </button>
            </nav>
        </header>
    )
}