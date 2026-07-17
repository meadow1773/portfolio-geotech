import './footer.scss'
import packageJson from '../../../package.json'

/**
 * Componente de layout do rodapé da página.
 */
export default function Footer() {
    /**
     * Versão do projeto.
     */
    const version = packageJson.version

    return (
        <footer>
            <span>2026 Victor Hugo Oliveira de Paula - v. {version}</span>
        </footer>
    )
}