import { createContext } from 'react'

export type Lang = 'en' | 'id'

export const LANGUAGES = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'id', label: 'Bahasa Indonesia', short: 'ID' },
] as const satisfies readonly { code: Lang; label: string; short: string }[]

export const DEFAULT_LANG: Lang = 'en'
export const LANG_STORAGE_KEY = 'lusiana-lang'

export type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
