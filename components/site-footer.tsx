"use client"

import { Instagram, Send, Sparkles } from "lucide-react"
import { useT } from "@/components/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"

export function SiteFooter() {
  const t = useT().footer
  return (
    <footer className="relative overflow-hidden border-t border-white/6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/6 blur-[120px] pointer-events-none" />

      {/* Decorative oversized italic */}
      <div
        className="pointer-events-none absolute -bottom-20 right-4 select-none font-serif text-[14rem] italic leading-none text-white/[0.025] md:text-[20rem]"
        aria-hidden
      >
        Lucia
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        {/* Newsletter */}
        <div className="glass rounded-3xl border border-white/6 p-8 md:p-12 mb-16">
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-5">
                <Sparkles className="size-3 text-primary" />
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary/70">
                  {t.eyebrow}
                </p>
              </div>
              <h2 className="font-serif text-4xl leading-[1.02] tracking-tight text-balance md:text-5xl">
                <span className="text-foreground/90">{t.titlePre} </span>
                <span className="text-shimmer italic">{t.titleItalic}</span>
              </h2>
              <p className="mt-4 max-w-md text-foreground/50 leading-relaxed">
                {t.description}
              </p>
            </div>

            <form
              className="md:col-span-5 md:self-end"
              action="#"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="email" className="sr-only">Email</label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="email"
                  type="email"
                  required
                  placeholder={t.placeholder}
                  className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-foreground/90 placeholder:text-foreground/30 focus:border-primary/50 focus:outline-none focus:bg-white/8 transition-all"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-2xl gold-gradient px-6 py-4 text-sm font-semibold text-black shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40 hover:scale-[1.02] whitespace-nowrap"
                >
                  <Send className="size-4" />
                  {t.subscribe}
                </button>
              </div>
              <p className="mt-3 text-xs text-foreground/35">{t.spam}</p>
            </form>
          </div>
        </div>

        {/* Bottom grid */}
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl tracking-tight text-foreground/80">Gelateria -</span>
              <span className="text-shimmer font-serif text-3xl italic font-bold tracking-tight">
                Dolce e Gelato
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-foreground/40 leading-relaxed">
              {t.tagline}
            </p>
            <div className="mt-6">
              <LanguageSwitcher />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3">
            {t.cols.map((col) => (
              <div key={col.title}>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-4">
                  {col.title}
                </h3>
                <ul role="list" className="space-y-3 text-sm">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="inline-flex items-center gap-2 text-foreground/55 hover:text-primary transition-colors"
                      >
                        {link.label === "Instagram" && (
                          <Instagram className="size-3.5" aria-hidden />
                        )}
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider-gold mt-12 mb-6" />
        <div className="flex flex-col items-start justify-between gap-4 text-xs text-foreground/30 md:flex-row md:items-center">
          <span>{t.rights.replace("{year}", String(new Date().getFullYear()))}</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              {t.privacy}
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              {t.accessibility}
            </a>
            <span className="font-serif italic text-primary/50">{t.farewell}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
