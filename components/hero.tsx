"use client"

import Image from "next/image"
import { ArrowUpRight, Sparkles } from "lucide-react"
import { useT } from "@/components/language-provider"

export function Hero() {
  const t = useT().hero
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center noise">
      {/* Background glow orbs */}
      <div className="hero-orb w-[600px] h-[600px] top-[-10%] right-[-5%] bg-primary/20" aria-hidden />
      <div className="hero-orb w-[400px] h-[400px] bottom-[-10%] left-[-5%] bg-accent/15" aria-hidden />
      <div className="hero-orb w-[300px] h-[300px] top-[40%] left-[20%] bg-primary/8" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-16 pb-20 md:px-10 md:pt-24 md:pb-32">
        {/* Eyebrow */}
        <div className="animate-rise flex items-center gap-3">
          <div className="glass-light rounded-full px-4 py-2 flex items-center gap-2">
            <span className="size-2 rounded-full bg-primary animate-soft-pulse" aria-hidden />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/60">
              {t.eyebrow}
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="mt-10 md:mt-14 font-serif text-[clamp(3rem,9vw,9rem)] leading-[0.9] tracking-tight text-balance animate-rise-2">
          <span className="text-foreground/90">{t.headlinePre} </span>
          <span className="text-shimmer">{t.headlineItalic1}</span>
          <br className="hidden md:block" />
          <span className="text-foreground/90"> {t.headlineMid} </span>
          <span className="italic text-foreground/70">{t.headlineItalic2}</span>
        </h1>

        {/* Description + CTAs */}
        <div className="mt-10 md:mt-16 grid gap-8 md:grid-cols-12 md:items-end animate-rise-3">
          <p className="max-w-xl text-base leading-relaxed text-foreground/50 md:col-span-6 md:text-lg">
            {t.description}
          </p>

          <div className="flex flex-wrap items-center gap-3 md:col-span-6 md:justify-end">
            <a
              href="#flavors"
              className="group inline-flex items-center gap-3 rounded-full gold-gradient px-7 py-4 text-sm font-semibold text-black shadow-xl shadow-primary/25 transition-all hover:shadow-primary/40 hover:scale-105 hover:gap-4"
            >
              <Sparkles className="size-4" />
              {t.ctaPrimary}
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#visit"
              className="inline-flex items-center gap-3 rounded-full glass border border-white/10 px-7 py-4 text-sm text-foreground/80 transition-all hover:border-primary/40 hover:text-foreground hover:bg-white/5"
            >
              {t.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Hero image + stats */}
        <div className="mt-16 md:mt-24 grid gap-6 md:grid-cols-12 animate-fade-in">
          {/* Main image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl md:col-span-9 md:aspect-[16/9] card-glow border border-white/8">
            <Image
              src="/images/hero-gelato.jpg"
              alt="A display case of hand-sculpted Italian gelato"
              fill
              priority
              sizes="(min-width: 768px) 75vw, 100vw"
              className="object-cover"
            />
            {/* Gradient veil */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* Floating badge bottom-left */}
            <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8">
              <div className="glass rounded-2xl px-5 py-3 flex items-center gap-3">
                <span className="size-2 rounded-full bg-primary animate-soft-pulse" aria-hidden />
                <span className="text-[11px] uppercase tracking-[0.2em] text-foreground/80">
                  {t.badge}
                </span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:col-span-3 md:grid-cols-1 md:gap-6">
            <StatCard number={t.statFlavors} label={t.statFlavorsLabel} />
            <StatCard number={t.statYears} label={t.statYearsLabel} />
            <StatCard number={t.statStabilizers} label={t.statStabilizersLabel} />
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-12 hidden items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-foreground/30 md:flex animate-rise-4">
          <span className="h-px w-10 bg-foreground/20" aria-hidden />
          {t.scroll}
          <span className="h-px flex-1 bg-gradient-to-r from-foreground/10 to-transparent" aria-hidden />
        </div>
      </div>
    </section>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="glass rounded-2xl border border-white/8 p-5 flex flex-col justify-between card-glow">
      <div className="text-shimmer font-serif text-4xl font-bold tracking-tight md:text-5xl">
        {number}
      </div>
      <div className="mt-3 text-[10px] uppercase tracking-[0.2em] text-foreground/45 leading-relaxed">
        {label}
      </div>
    </div>
  )
}
