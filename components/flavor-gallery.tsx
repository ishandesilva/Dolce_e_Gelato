"use client"

import Image from "next/image"
import { Plus, Sparkles } from "lucide-react"
import { useT } from "@/components/language-provider"

export function FlavorGallery() {
  const t = useT().flavors
  return (
    <section
      id="flavors"
      className="relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
        {/* Section header */}
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <Sparkles className="size-3 text-primary" />
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary/70">
                {t.eyebrow}
              </p>
            </div>
            <h2 className="font-serif text-4xl leading-[1.0] tracking-tight text-balance md:text-6xl lg:text-7xl">
              <span className="text-foreground/90">{t.headlinePre} </span>
              <span className="text-shimmer italic">{t.headlineItalic}</span>
            </h2>
          </div>
          <p className="max-w-md text-foreground/50 md:col-span-5 md:justify-self-end md:text-right leading-relaxed">
            {t.intro}
          </p>
        </div>

        {/* Divider */}
        <div className="divider-gold mt-12 mb-14" />

        {/* Flavor grid */}
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {t.items.map((f, i) => (
            <li key={f.key} className="group">
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-card border border-white/6 card-glow">
                <Image
                  src={f.image || "/placeholder.svg"}
                  alt={`${f.name} — ${f.italian}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                />
                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Category tag */}
                <span className="absolute left-4 top-4 glass rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-foreground/80">
                  {f.category}
                </span>

                {/* Number */}
                <span className="absolute right-4 top-4 glass grid size-9 place-items-center rounded-full font-serif text-sm text-foreground/70">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Hover add CTA */}
                <button
                  type="button"
                  tabIndex={-1}
                  aria-hidden
                  className="absolute bottom-4 right-4 inline-flex translate-y-3 items-center gap-2 rounded-full gold-gradient px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-black opacity-0 shadow-lg transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <Plus className="size-3.5" aria-hidden />
                  {t.addScoop}
                </button>
              </div>

              {/* Info below image */}
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl leading-tight tracking-tight text-foreground/90">
                    {f.name}
                  </h3>
                  <p className="mt-0.5 font-serif text-sm italic text-foreground/40">
                    {f.italian}
                  </p>
                </div>
                <span className="text-shimmer font-serif text-xl font-bold flex-shrink-0">
                  {f.price}
                </span>
              </div>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-foreground/50">
                {f.description}
              </p>
            </li>
          ))}
        </ul>

        {/* Footer row */}
        <div className="divider-gold mt-14 mb-8" />
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="text-sm text-foreground/40">{t.counter}</p>
          <a
            href="#menu"
            className="group inline-flex items-center gap-2 font-serif text-lg italic text-primary hover:gap-3 transition-all"
          >
            {t.seeMenu}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
