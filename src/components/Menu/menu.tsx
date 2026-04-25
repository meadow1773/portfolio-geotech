import { useEffect, useState } from 'react'
import './menu.scss'

export interface MenuItem {
    key: string,
    label: string,
    url?: string,
    isSubMenu?: boolean,
    subMenu?: MenuItem[]
}

interface MenuProps {
    menuKey: string,
    items: MenuItem[]
}

export default function Menu({ items, menuKey }: MenuProps) {
    /**
     * State para gerenciar a visibilidade dos submenus
     */
    const [showMenu, setShowMenu] = useState<{ [key: string]: boolean }>({})

    /**
     * Efeito para inicializar o estado de visibilidade dos submenus
     */
    useEffect(() => {
        items.forEach(item => {
            setShowMenu(prevState => ({
                ...prevState,
                [item.key]: item.isSubMenu ? true : false
            }))
        })
    }, [items])

    /**
     * Função para lidar com o evento de mouse over em um item do menu
     * @param item Item do menu que disparou o evento
     */
    const onMouseOver = (item: MenuItem) => {
        if (item.subMenu) {
            setShowMenu(prevState => ({
                ...prevState,
                [item.key]: !prevState[item.key]
            }))
        }
    }

    return (
        <ul className="menu" key={menuKey}>
            {items.map((item, index) => (
                <li
                    key={index}
                    className={item.key}
                    onMouseOver={() => onMouseOver(item)}
                >
                    <a href={item.url} aria-label={item.label}>{item.label}</a>
                    {item.subMenu && showMenu[item.key] && <Menu items={item.subMenu} menuKey={`submenu ${item.key}`}></Menu>}
                </li>
            ))}
        </ul>
    )
}