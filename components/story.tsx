"use client"

import Image from "next/image"
import { useT } from "@/components/language-provider"
import { BookOpen } from "lucide-react"

export function Story() {
  const t = useT().story
  return (
    <section id="story" className="relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] rounded-full bg-accent/6 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
        <div className="grid gap-16 md:grid-cols-12 md:gap-16">
          {/* Image */}
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/8 card-glow">
              <Image
                src="/images/shop-craft.jpg"
                alt="A gelato artisan sculpting fresh gelato behind a marble counter"
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              {/* Year badge */}
              <div className="absolute left-5 top-5 glass rounded-full border border-white/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/70">
                Sicilia · 2011
              </div>
            </div>
            <figcaption className="mt-4 font-serif text-sm italic text-foreground/35 pl-2">
              {t.figcaption}
            </figcaption>
          </div>

          {/* Content */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 w-fit">
              <BookOpen className="size-3 text-primary" />
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary/70">
                {t.eyebrow}
              </p>
            </div>

            <h2 className="font-serif text-4xl leading-[1.02] tracking-tight text-balance md:text-5xl lg:text-6xl">
              <span className="text-foreground/90">{t.titlePre} </span>
              <span className="text-shimmer italic">{t.titleItalic}</span>
              <br />
              <span className="text-foreground/70 text-3xl md:text-4xl lg:text-5xl">{t.titlePost}</span>
            </h2>

            <div className="mt-10 space-y-5 text-base leading-relaxed text-foreground/55 max-w-xl md:text-lg">
              <p>{t.paragraph1}</p>
              <p>{t.paragraph2}</p>
            </div>

            {/* Pull quote */}
            <blockquote className="mt-12 relative pl-8 border-l-2 border-primary/60 max-w-2xl">
              <div className="absolute -left-3 -top-2 text-6xl text-primary/20 font-serif leading-none">&ldquo;</div>
              <p className="font-serif text-xl italic leading-snug text-foreground/80 md:text-2xl">
                {t.pullQuote}
              </p>
            </blockquote>

            {/* Principles */}
            <ul role="list" className="mt-14 grid gap-6 sm:grid-cols-3">
              {t.principles.map((p) => (
                <li key={p.n} className="glass rounded-2xl border border-white/6 p-6 card-glow">
                  <div className="text-shimmer font-serif text-3xl font-bold">{p.n}</div>
                  <h3 className="mt-4 font-serif text-lg tracking-tight text-foreground/90">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/50">
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
