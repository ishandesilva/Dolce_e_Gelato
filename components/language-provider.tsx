"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { translations, type Lang } from "@/lib/i18n"

type Ctx = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (typeof translations)["en"]
}

const LanguageContext = createContext<Ctx | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")

  // Load persisted language on first mount.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("gl-lang") as Lang | null
      if (stored === "en" || stored === "it") {
        setLangState(stored)
        document.documentElement.lang = stored
      }
    } catch {
      // ignore
    }
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    try {
      window.localStorage.setItem("gl-lang", l)
      document.documentElement.lang = l
    } catch {
      // ignore
    }
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used inside <LanguageProvider>")
  }
  return ctx
}

/** Convenience hook returning the current translation tree. */
export function useT() {
  return useLanguage().t
}
