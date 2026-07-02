import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import './modal.scss'

interface ModalProps {
    className: string;
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export default function Modal({ className, isOpen, onClose, children }: ModalProps) {
    // Se o modal não estiver aberto, não renderiza nada.
    if (!isOpen) return null

    /**
     * Obtêm o elemento do DOM onde o modal será renderizado.
     */
    const modalRoot = document.getElementById('modal-root')

    // Garante que o elemento root do modal exista.
    if (!modalRoot) {
        console.error("Elemento #modal-root não encontrado no DOM.")
        return null
    }

    return createPortal(
        <div className={`modal-overlay ${className}`} onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Fechar modal">
                    <i className="bi bi-x-lg"></i>
                </button>
                {children}
            </div>
        </div>,
        modalRoot
    )
}
