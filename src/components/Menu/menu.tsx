import { useEffect, useState } from 'react'
import './menu.scss'

export interface MenuItem {
    key: string,
    label: string,
    url?: string,
    hasSub?: boolean,
    subMenu?: MenuItem[]
}

interface MenuProps {
    items: MenuItem[]
}

export default function Menu({ items }: MenuProps) {
    const [showMenu, setShowMenu] = useState<{ [key: string]: boolean }>({})

    useEffect(() => {
        items.forEach(item => {
            setShowMenu({
                [item.key]: true
            })
        })
    }, [items])

    // const onClick = (key: string) => {
    //     setShowMenu((prevShowMenu) => ({
    //         ...prevShowMenu,
    //         [key]: !prevShowMenu[key],
    //     }))
    // }

    return (
        <ul>
            {items.map((item, index) => (
                <li
                    key={index}
                    className={item.key}
                    style={{ display: showMenu[item.key] ? 'block' : 'none' }}>
                    <a href={item.url}>{item.label}</a>
                    {item.hasSub && <Menu items={item.subMenu!}></Menu>}
                </li>
            ))}
        </ul>
    )
}