"use client"

import { useState } from "react"
import { useT } from "@/components/language-provider"
import { UtensilsCrossed } from "lucide-react"

export function MenuSection() {
  const t = useT().menu
  const [active, setActive] = useState(0)

  return (
    <section id="menu" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-card/60 via-background to-secondary/40 pointer-events-none" />
      <div className="absolute left-0 top-1/2 w-[500px] h-[500px] rounded-full bg-primary/6 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
        {/* Header */}
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <UtensilsCrossed className="size-3 text-primary" />
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary/70">
                {t.eyebrow}
              </p>
            </div>
            <h2 className="font-serif text-4xl leading-[1.02] tracking-tight text-balance md:text-6xl">
              <span className="text-foreground/90">{t.titlePre} </span>
              <span className="text-shimmer italic">{t.titleItalic}</span>
            </h2>
          </div>
          <p className="text-foreground/45 md:col-span-5 md:justify-self-end md:text-right leading-relaxed text-sm">
            {t.note}
          </p>
        </div>

        <div className="divider-gold mt-12 mb-10" />

        {/* Mobile tabbed */}
        <div className="mt-8 lg:hidden">
          <div className="flex gap-2 overflow-x-auto pb-3" role="tablist">
            {t.groups.map((g, i) => (
              <button
                key={g.title}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  active === i
                    ? "gold-gradient text-black shadow-lg shadow-primary/25"
                    : "glass border border-white/10 text-foreground/60 hover:border-primary/30 hover:text-foreground/80"
                }`}
              >
                {g.title}
              </button>
            ))}
          </div>
          <div className="mt-8">
            <MenuGroup group={t.groups[active]} />
          </div>
        </div>

        {/* Desktop 3-col */}
        <div className="mt-10 hidden gap-8 lg:grid lg:grid-cols-3">
          {t.groups.map((g) => (
            <MenuGroup key={g.title} group={g} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MenuGroup({
  group,
}: {
  group: {
    title: string
    caption: string
    items: { name: string; note?: string; price: string }[]
  }
}) {
  return (
    <div className="glass rounded-3xl border border-white/6 p-7 md:p-8 card-glow">
      <h3 className="font-serif text-2xl tracking-tight text-foreground/90">
        {group.title}
      </h3>
      <p className="mt-1 font-serif text-sm italic text-foreground/40">
        {group.caption}
      </p>
      <ul role="list" className="mt-8 divide-y divide-white/5">
        {group.items.map((it) => (
          <li key={it.name} className="flex items-start gap-4 py-4 group">
            <div className="flex-1">
              <div className="font-serif text-lg text-foreground/85 group-hover:text-foreground transition-colors">{it.name}</div>
              {it.note && (
                <div className="mt-0.5 text-xs text-foreground/40 leading-relaxed">{it.note}</div>
              )}
            </div>
            <div className="flex-shrink-0">
              <span className="text-shimmer font-serif text-lg font-semibold">
                {it.price}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
