import Menu, { type MenuItem } from "../Menu/menu"
import './header.scss'

export default function Header() {
    const sobreSubMenu: MenuItem[] = [
        { key: 'sub-item-1', label: 'SubItem 1' },
        { key: 'sub-item-1', label: 'SubItem 2' },
        { key: 'sub-item-1', label: 'SubItem 3' },
    ]

    const menuItems: MenuItem[] = [
        { key: 'home', label: 'Pagina inicial', url: '/' },
        { key: 'sobre', label: 'Sobre', hasSub: true, subMenu: sobreSubMenu },
        { key: 'item-1', label: 'Item 1' },
        { key: 'item-1', label: 'Item 2' },
        { key: 'item-1', label: 'Item 3' },
    ]
    return (
        <header>
            <nav>
                <Menu items={menuItems}></Menu>
            </nav>
        </header>
    )
}