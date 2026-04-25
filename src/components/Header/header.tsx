import Menu, { type MenuItem } from "../Menu/menu"
import './header.scss'

export default function Header({ titulo }: { titulo: string }) {
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
                    <a href="#">
                        {titulo}
                    </a>
                </span>
                <Menu items={menuItems} menuKey="menu-principal"></Menu>
                <button className="cv">
                    <a href="https://drive.google.com/file/d/1ttJQtvIrP5ZRyj6YTNl1QPpjLWZu0att/view?usp=sharing" target="_blank">
                        Baixar CV
                    </a>
                </button>
            </nav>
        </header>
    )
}