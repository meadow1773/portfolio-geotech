import { useState } from "react"
import './image.scss'

import Modal from "../Modal/modal"

export interface ImageProps {
    src: string;
    className?: string;
    alt?: string;
    sizes?: string;
}

/**
 * Componente funcional para renderizar uma imagem com um modal de visualização em tela cheia.
 *
 * @param {ImageProps} { src, className, alt, sizes } - As propriedades do componente.
 * @param {string} src - O caminho da imagem.
 * @param {string} className - Classes CSS para estilização da imagem.
 * @param {string} [alt] - Texto alternativo para a imagem.
 * @param {string} [sizes] - Atributo 'sizes' para a imagem.
 * @returns {JSX.Element} O elemento JSX renderizado.
 */
export default function Image({src, className, alt, sizes}: ImageProps) {
    /**
     * Controle de abertura de modal de Imagem.
     */
    const [openImg, setOpenImg] = useState(false)

    /**
     * Modal de exibição de Imagem.
     */
    const modal = (
        <Modal className="img-modal" isOpen={openImg} onClose={() => setOpenImg(false)}>
            <img src={src} alt={alt} className={className} sizes={sizes} />
        </Modal>
    )

    return (
        <>
            <img 
                src={src} 
                alt={alt} 
                className={`img-container ${className}`} 
                sizes={sizes} 
                onClick={() => setOpenImg(true)} 
            />
            {modal}
        </>
    )
}