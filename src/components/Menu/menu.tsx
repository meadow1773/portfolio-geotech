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

/**
 * Componente funcional que renderiza um menu de navegação com suporte a submenus.
 *
 * @param {MenuProps} { items, menuKey } - As propriedades do componente, incluindo os itens do menu e a chave do menu.
 * @returns {JSX.Element} Um elemento JSX que representa o menu de navegação.
 */
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
     * Mostra o submenu quando o mouse entra no item do menu.
     * @param item Item do menu que disparou o evento.
     */
    const handleMouseEnter = (item: MenuItem) => {
        if (item.subMenu) {
            setShowMenu(prevState => ({
                ...prevState,
                [item.key]: true
            }))
        }
    }

    /**
     * Esconde o submenu quando o mouse sai do item do menu.
     * @param item Item do menu que disparou o evento.
     */
    const handleMouseLeave = (item: MenuItem) => {
        if (item.subMenu) {
            setShowMenu(prevState => ({ ...prevState, [item.key]: false }))
        }
    }

    return (
        <ul className={`menu ${menuKey}`} key={menuKey}>
            {items.map((item, index) => (
                <li
                    key={index}
                    className={`${item.key} ${item.subMenu && showMenu[item.key] ? 'submenu-aberto' : ''}`}
                    onMouseEnter={() => handleMouseEnter(item)}
                    onMouseLeave={() => handleMouseLeave(item)}
                >
                    <Link to={item.url} aria-label={t(`menu.${item.key}`)}>
                        <i className={`bi bi-${item.icone}`}></i>
                        <span>{t(`menu.${item.key}`)}</span>
                    </Link>
                    {item.subMenu && showMenu[item.key] &&
                        <Menu items={item.subMenu} menuKey={`submenu ${item.key}`} />
                    }
                </li>
            ))}
        </ul>
    )
}