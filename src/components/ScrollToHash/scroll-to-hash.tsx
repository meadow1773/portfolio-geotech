import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollToHash() {
    /**
     * Recupera o hash da URL.
     */
    const { pathname, hash } = useLocation()

    /**
     * Efeito para rolar suavemente para o elemento correspondente ao hash na URL.
     */
    useEffect(() => {
        // Se não houver hash e estivermos na página inicial, rola para o topo da página.
        if (!hash && pathname === "/") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
            return
        }

        // Função para rolar suavemente para o elemento com o ID correspondente ao hash.
        const scrollToElement = () => {
            const element = document.getElementById(hash.slice(1))

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            }
        }

        // Atraso para garantir que o elemento esteja presente no DOM antes de tentar rolar até ele.
        setTimeout(scrollToElement, 100)

    }, [hash, pathname])

    return null
}