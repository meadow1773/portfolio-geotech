import { fileURLToPath } from 'node:url'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { vitePrerenderPlugin } from 'vite-prerender-plugin'

const prerenderScript = fileURLToPath(new URL('./src/prerender.tsx', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        vitePrerenderPlugin({
            renderTarget: '#root',
            prerenderScript,
            additionalPrerenderRoutes: [
                '/galeria',
            ],
        }),
    ],
})
