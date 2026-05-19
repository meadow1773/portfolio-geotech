import Menu, { type MenuItem } from "../Menu/menu"
import './header.scss'

export default function Header({ titulo }: { titulo: string }) {
    /**
     * Itens do menu principal
     */
    const menuItems: MenuItem[] = [
        { key: 'inicio', label: 'Início', icone: 'house', url: '#' },
        { key: 'sobre', label: 'Sobre', icone: 'person', url: '#sobre' },
        { key: 'xp', label: 'Experiência', icone: 'suitcase-lg', url: '#xp' },
        { key: 'skills', label: 'Skills', icone: 'layers', url: '#skills' },
        { key: 'contato', label: 'Contato', icone: 'envelope', url: '#contato' },
    ]

    return (
        <header>
            <nav>
                <span className="logo">
                    <a href="#">
                        {titulo}
                    </a>
                </span>
                <Menu items={menuItems} menuKey="menu-principal"></Menu>
                <button className="cv">
                    <a href="https://drive.google.com/file/d/16kvEzUNmbCo5psZucFMctOIcgsWA2_AY/view?usp=sharing" target="_blank">
                        Baixar CV
                    </a>
                </button>
            </nav>
        </header>
    )
}