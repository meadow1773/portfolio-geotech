import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './menu.scss'

export interface MenuItem {
    key: string,
    icone: string,
    url: string,
    isSubMenu?: boolean,
    subMenu?: MenuItem[]
}

interface MenuProps {
    menuKey: string,
    items: MenuItem[]
}

export default function Menu({ items, menuKey }: MenuProps) {
    /**
     * Controle de internacionalização.
     */
    const { t } = useTranslation()

    /**
     * State para gerenciar a visibilidade dos submenus.
     */
    const [showMenu, setShowMenu] = useState<{ [key: string]: boolean }>({})

    /**
     * Efeito para inicializar o estado de visibilidade dos submenus.
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
     * Função para lidar com o evento de mouse over em um item do menu.
     * @param item Item do menu que disparou o evento.
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
                    <Link to={item.url} aria-label={t(`menu.${item.key}`)}>
                        <i className={`bi bi-${item.icone}`}></i>
                        <span>{t(`menu.${item.key}`)}</span>
                    </Link>
                    {/* {item.route ? (
                    ) : (
                        <a href={`/${item.url}`} aria-label={t(`menu.${item.key}`)}>
                            <i className={`bi bi-${item.icone}`}></i>
                            <span>{t(`menu.${item.key}`)}</span>
                        </a>
                    )} */}
                    {item.subMenu && showMenu[item.key] && <Menu items={item.subMenu} menuKey={`submenu ${item.key}`}></Menu>}
                </li>
            ))}
        </ul>
    )
}