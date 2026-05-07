"use client"

import { Star, Newspaper } from "lucide-react"
import { useT } from "@/components/language-provider"

const pressLogos = ["The New York Times", "Eater NY", "Bon Appétit", "TimeOut", "Resy", "Infatuation"]

export function Testimonials() {
  const t = useT().testimonials
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
        {/* Press logos strip */}
        <div className="glass rounded-2xl border border-white/6 px-8 py-7 mb-16">
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/35 mb-6">
            {t.pressTitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 md:gap-x-16">
            {pressLogos.map((logo) => (
              <span
                key={logo}
                className="font-serif text-base italic text-foreground/35 md:text-lg hover:text-foreground/60 transition-colors cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

        {/* Section header */}
        <div className="flex items-end justify-between gap-6 mb-10">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2">
            <Newspaper className="size-3 text-primary" />
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary/70">
              {t.eyebrow}
            </p>
          </div>
          <p className="hidden font-serif text-sm italic text-foreground/35 md:block">
            {t.aside}
          </p>
        </div>

        {/* Reviews grid */}
        <ul role="list" className="grid gap-6 md:grid-cols-3">
          {t.reviews.map((r, i) => (
            <li
              key={i}
              className="relative flex flex-col justify-between overflow-hidden rounded-3xl glass border border-white/6 p-8 card-glow group"
            >
              {/* Large quote mark decoration */}
              <span
                className="pointer-events-none absolute -right-2 -top-4 select-none font-serif text-[9rem] italic leading-none text-primary/8 transition-all group-hover:text-primary/12"
                aria-hidden
              >
                &rdquo;
              </span>

              <div className="relative">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="size-4 fill-current" aria-hidden />
                  ))}
                </div>
                <p className="mt-6 font-serif text-xl leading-snug tracking-tight text-foreground/85 md:text-2xl">
                  &ldquo;{r.quote}&rdquo;
                </p>
              </div>

              <div className="relative mt-8 flex items-center justify-between border-t border-white/6 pt-6">
                <div>
                  <div className="text-sm font-semibold text-foreground/90">
                    {r.author}
                  </div>
                  <div className="text-xs text-foreground/40 mt-0.5">{r.detail}</div>
                </div>
                <div className="size-8 rounded-full gold-gradient flex items-center justify-center text-xs font-bold text-black">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
