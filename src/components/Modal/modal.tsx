import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import './modal.scss'
import { useTranslation } from 'react-i18next'

interface ModalProps {
    className: string;
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

/**
 * Componente funcional para renderizar um Modal.
 *
 * @param {ModalProps} { className, isOpen, onClose, children } - As propriedades do componente.
 * @param {string} className - Classes CSS para estilização do modal.
 * @param {boolean} isOpen - Controla a visibilidade do modal.
 * @param {Function} onClose - Função para fechar o modal.
 * @param {ReactNode} children - Conteúdo a ser exibido dentro do modal.
 * @returns {JSX.Element | null} O elemento JSX renderizado ou null se o modal não estiver aberto.
 */
export default function Modal({ className, isOpen, onClose, children }: ModalProps) {
    /**
     * Controle de internacionalização.
     */
    const { t } = useTranslation()

    // Se o modal não estiver aberto, não renderiza nada.
    if (!isOpen) return null

    /**
     * Obtêm o elemento do DOM onde o modal será renderizado.
     */
    const modalRoot = document.getElementById('modal-root')

    /**
     * Conteúdo do portal a ser renderizado.
     */
    const portal = (
        <div className={`modal-overlay`} onClick={onClose}>
            <div className={`modal-content ${className}`} onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label={t('modal.fechar')}>
                    <i className="bi bi-x-lg"></i>
                </button>
                {children}
            </div>
        </div>
    )

    // Garante que o elemento root do modal exista.
    if (!modalRoot) {
        console.error("Elemento #modal-root não encontrado no DOM.")
        return null
    }

    return createPortal(portal, modalRoot)
}
