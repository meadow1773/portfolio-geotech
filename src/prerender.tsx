import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import type { PrerenderArguments, PrerenderResult } from 'vite-prerender-plugin'

import App from './App'
import i18n from './i18n/config'

/**
 * Set de Rotas a serem prerrenderizadas.
 */
const rotasPrerenderizadas = new Set([
    '/',
    '/galeria',
])

/**
 * Prerenderiza as rotas definidas em `rotasPrerenderizadas` usando o React e o i18n para renderizar o conteúdo correto.
 * @param PrerenderArguments
 * @returns Promise<PrerenderResult>
 */
export async function prerender({ url }: PrerenderArguments): Promise<PrerenderResult> {
    // Define o idioma para português antes de renderizar o componente.
    await i18n.changeLanguage('pt')

    /**
     * Renderiza o componente App dentro de um MemoryRouter.
     */
    const html = renderToString(
        <MemoryRouter initialEntries={[url]}>
            <App />
        </MemoryRouter>,
    )

    return {
        html,
        links: rotasPrerenderizadas,
        head: {
            lang: i18n.language,
            title: i18n.t('titulo'),
        },
    }
}
