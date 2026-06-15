# Repository Guidelines

## Project Structure & Module Organization

This repository is a React 19, TypeScript, and Vite portfolio site. Application entry points are `src/main.tsx` and `src/App.tsx`. Reusable UI lives in `src/components/<Component>/`, with each component colocating its lowercase `.tsx` and `.scss` files. Page-specific sections are under `src/pages/Home/`. Shared Sass variables and global rules belong in `src/styles/`.

Internationalization is configured in `src/i18n/config.ts`; keep translation keys synchronized across `src/i18n/locales/{pt,en,es,zh}.json`. Static images and icons belong in `public/images/`. Generated output in `dist/` must not be edited manually.

## Build, Test, and Development Commands

- `npm install`: install dependencies from `package-lock.json`.
- `npm run dev`: start Vite on a network-accessible development server with hot reload.
- `npm run lint`: run ESLint across TypeScript and TSX files.
- `npm run build`: type-check with `tsc -b`, then create the production bundle in `dist/`.
- `npm run preview`: serve the production build locally for final verification.
- `npm run deploy`: build and deploy through Firebase; use only with configured credentials.

## Coding Style & Naming Conventions

Use TypeScript strict mode and four-space indentation. ESLint enforces no semicolons, ordered imports, React Hooks rules, and warnings for unused variables. Follow existing naming: lowercase filenames such as `hero.tsx` and `hero.scss`, PascalCase component functions, and descriptive Portuguese identifiers where surrounding code uses them. Keep styles colocated with their component and import them from the component file.

## Testing Guidelines

No automated test framework is configured. Before submitting changes, run `npm run lint` and `npm run build`. Manually verify affected sections at desktop and mobile widths, test navigation anchors, and switch through all four supported languages. If introducing tests, colocate them as `*.test.tsx` and add the chosen runner to `package.json`.

## Commit & Pull Request Guidelines

Recent commits use concise Portuguese descriptions, for example `Implementação de design responsivo.` Keep each commit focused and describe the user-visible change. Pull requests should include a clear summary, verification steps, and screenshots for visual or responsive changes. Note translation updates and link any related issue when applicable.
