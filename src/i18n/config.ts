import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

// Importação dos arquivos de tradução para os idiomas suportados
import enTranslate from './locales/en.json'
import esTranslate from './locales/es.json'
import ptTranslate from './locales/pt.json'
import zhTranslate from './locales/zh.json'

/**
 * Configuração de internacionalização utilizando a biblioteca i18next. 
 * Define os recursos de tradução para os idiomas suportados e inicializa o i18n com as configurações apropriadas, 
 * incluindo a detecção automática do idioma do navegador e a interpolação de valores sem escape.
 */
export const resources = {
    pt: {
        translation: ptTranslate,
    },
    en: {
        translation: enTranslate
    },
    es: {
        translation: esTranslate
    },
    zh: {
        translation: zhTranslate
    }
}

// Inicialização do i18n com os recursos de tradução e configurações.
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'pt',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    })

export default i18n
