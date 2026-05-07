"use client"

import { useLanguage } from "@/components/language-provider"
import { LANGUAGES } from "@/lib/i18n"

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLanguage()

  return (
    <div
      className={`inline-flex items-center rounded-full border border-foreground/15 bg-background/60 p-0.5 text-[11px] font-medium uppercase tracking-[0.18em] backdrop-blur-sm ${className}`}
      role="group"
      aria-label={t.ui.languageSwitch}
    >
      {LANGUAGES.map((l) => {
        const active = lang === l.code
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            className={`rounded-full px-3 py-1.5 transition-colors ${
              active
                ? "bg-foreground text-background"
                : "text-foreground/60 hover:text-foreground"
            }`}
          >
            {l.short}
          </button>
        )
      })}
    </div>
  )
}
