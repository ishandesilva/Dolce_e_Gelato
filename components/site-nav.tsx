"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X, Sparkles } from "lucide-react"
import { useT } from "@/components/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"

export function SiteNav() {
  const t = useT()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("it-IT", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Europe/Rome",
      }).format(new Date())
    setTime(fmt())
    const id = setInterval(() => setTime(fmt()), 30_000)
    return () => clearInterval(id)
  }, [])

  const links = [
    { href: "#flavors", label: t.nav.flavors, n: "✖" },
    { href: "#seasonal", label: t.nav.seasonal, n: "✖" },
    { href: "#story", label: t.nav.story, n: "✖" },
    { href: "#menu", label: t.nav.menu, n: "✖" },
    { href: "#visit", label: t.nav.visit, n: "✖" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
          ? "glass border-b border-white/8 shadow-2xl shadow-black/40"
          : "border-b border-transparent bg-transparent"
        }`}
    >
      <nav
        className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-4 md:px-10"
        aria-label="Primary"
      >
        {/* Logo */}
        <Link href="/" aria-label="Gelateria Lucia" className="group flex items-center gap-3">
          <span className="relative grid size-10 place-items-center overflow-hidden rounded-full gold-gradient shadow-lg shadow-primary/30">
            <span className="font-serif text-lg italic leading-none text-black font-bold">G</span>
            <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
          </span>
          <span className="hidden font-sans text-sm font-semibold tracking-wide text-foreground sm:inline">
            Gelateria
            <span className="mx-1.5 text-primary/50">·</span>
            <span className="text-shimmer font-bold">Dolce e Gelato</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group flex items-baseline gap-1.5 text-sm text-foreground/60 transition-colors hover:text-foreground"
              >
                <span className="font-mono text-[9px] tabular-nums text-primary/50 group-hover:text-primary transition-colors">
                  {l.n}
                </span>
                <span className="hover-line">{l.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <span className="hidden font-mono text-[11px] tabular-nums text-foreground/70 md:inline">
            IT   |   {time}  
          </span>
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <a
            href="#visit"
            className="hidden md:inline-flex items-center gap-2 rounded-full gold-gradient px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-black shadow-lg shadow-primary/25 transition-all hover:shadow-primary/45 hover:scale-105"
          >
            <span className="size-1.5 rounded-full bg-black/50 animate-soft-pulse" aria-hidden />
            {t.nav.openToday}
          </a>

          <button
            type="button"
            className="glass rounded-full border border-white/10 p-2.5 lg:hidden transition-colors hover:border-primary/40"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="glass border-t border-white/8 lg:hidden animate-rise">
          <ul className="mx-auto flex max-w-[1440px] flex-col px-6 py-4">
            {links.map((l) => (
              <li key={l.href} className="border-b border-white/6 last:border-0">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between gap-3 py-4 text-foreground/80 hover:text-primary transition-colors"
                >
                  <span className="font-serif text-2xl tracking-tight">{l.label}</span>
                  <span className="font-mono text-[11px] tabular-nums text-primary/50">{l.n}</span>
                </a>
              </li>
            ))}
            <li className="flex items-center justify-between pt-4 pb-2">
              <LanguageSwitcher />
              <a
                href="#visit"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full gold-gradient px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-black"
              >
                <Sparkles className="size-3.5" />
                {t.nav.openToday}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
