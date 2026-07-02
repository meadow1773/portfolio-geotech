import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './i18n/config.ts'

import App from './App.tsx'
import ScrollToHash from './components/ScrollToHash/scroll-to-hash.tsx'

/**
 * Elemento raiz da aplicação.
 */
const root = document.getElementById('root')!

/**
 * Componente raiz da aplicação, que envolve o App com o BrowserRouter e o ScrollToHash.
 */
const app = (
    <StrictMode>
        <BrowserRouter>
            <ScrollToHash />
            <App />
        </BrowserRouter>
    </StrictMode>
)

// Caso o elemento raiz senha filhos, utiliza o hydrateRoot, 
// caso contrário, utiliza o createRoot para criar a aplicação do zero.
if (root.hasChildNodes()) {
    hydrateRoot(root, app)
} else {
    createRoot(root).render(app)
}
