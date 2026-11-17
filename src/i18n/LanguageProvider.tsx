import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  DEFAULT_LANG,
  LANG_STORAGE_KEY,
  LanguageContext,
  type Lang,
} from './config'

function readStoredLang(): Lang | null {
  try {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY)
    if (stored === 'en' || stored === 'id') return stored
  } catch {
    // Storage can be unavailable in private browsing; fall back to the browser locale.
  }
  return null
}

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return DEFAULT_LANG

  const stored = readStoredLang()
  if (stored) return stored

  return window.navigator.language.toLowerCase().startsWith('id') ? 'id' : DEFAULT_LANG
}

function persistLang(lang: Lang) {
  try {
    window.localStorage.setItem(LANG_STORAGE_KEY, lang)
  } catch {
    // Ignore write failures — the language simply won't persist between visits.
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    persistLang(next)
  }, [])

  const toggleLang = useCallback(() => {
    setLangState((current) => {
      const next: Lang = current === 'en' ? 'id' : 'en'
      persistLang(next)
      return next
    })
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(
    () => ({ lang, setLang, toggleLang }),
    [lang, setLang, toggleLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
