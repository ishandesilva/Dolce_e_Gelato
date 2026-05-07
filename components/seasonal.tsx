"use client"

import Image from "next/image"
import { ArrowUpRight, Clock } from "lucide-react"
import { useT } from "@/components/language-provider"

export function Seasonal() {
  const t = useT().seasonal
  return (
    <section
      id="seasonal"
      className="relative overflow-hidden"
    >
      {/* Rich background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-secondary" />
      <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
        {/* Oversized decorative letter */}
        <div
          className="pointer-events-none absolute -bottom-16 -right-8 select-none font-serif text-[22rem] italic leading-none text-white/[0.02] md:text-[32rem]"
          aria-hidden
        >
          s
        </div>

        <div className="relative grid gap-12 md:grid-cols-12 md:gap-16">
          {/* Image column */}
          <div className="md:col-span-6 md:order-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/8 card-glow">
              <Image
                src="/images/seasonal-fig.jpg"
                alt="Two scoops of fig and ricotta-honey gelato in a waffle cone"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Bottom pill badge */}
              <div className="absolute inset-x-5 bottom-5 md:inset-x-8 md:bottom-8">
                <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="size-3.5 text-primary" />
                    <span className="text-[11px] uppercase tracking-[0.2em] text-foreground/70">
                      {t.badge}
                    </span>
                  </div>
                  <span className="text-shimmer font-serif text-sm italic font-bold">
                    {t.limited}
                  </span>
                </div>
              </div>

              {/* Stamp top-left */}
              <div className="absolute left-5 top-5 grid size-20 md:size-24 place-items-center rounded-full border border-white/20 glass">
                <div className="text-center">
                  <div className="font-serif text-sm italic text-foreground/80">{t.limited}</div>
                  <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/45">
                    N° 02
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content column */}
          <div className="flex flex-col justify-between md:col-span-6 md:order-1">
            <div>
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
                <span className="size-2 rounded-full bg-primary animate-soft-pulse" />
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary/70">
                  {t.eyebrow}
                </p>
              </div>

              <h2 className="font-serif text-5xl leading-[0.95] tracking-tight text-balance md:text-6xl lg:text-7xl">
                <span className="text-foreground/90">{t.titlePre} </span>
                <span className="text-shimmer italic">{t.titleItalic}</span>
              </h2>

              <p className="mt-8 max-w-md text-base leading-relaxed text-foreground/55">
                {t.description}
              </p>
            </div>

            {/* Details grid */}
            <dl className="mt-12 grid grid-cols-2 gap-4">
              {[
                { label: t.availableLabel, value: t.availableValue },
                { label: t.pairsLabel, value: t.pairsValue },
                { label: t.scoopLabel, value: t.scoopPrice },
                { label: t.pintLabel, value: t.pintPrice },
              ].map((item) => (
                <div key={item.label} className="glass rounded-2xl border border-white/6 p-4">
                  <dt className="text-[11px] uppercase tracking-[0.16em] text-foreground/40">{item.label}</dt>
                  <dd className="mt-1.5 font-serif text-lg italic text-foreground/90">{item.value}</dd>
                </div>
              ))}
            </dl>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#visit"
                className="group inline-flex items-center gap-3 rounded-full gold-gradient px-7 py-4 text-sm font-semibold text-black shadow-xl shadow-primary/25 transition-all hover:shadow-primary/40 hover:scale-105 hover:gap-4"
              >
                {t.cta}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
