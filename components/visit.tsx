"use client"

import { MapPin, Clock, Phone, Mail, Navigation } from "lucide-react"
import { useT } from "@/components/language-provider"

export function Visit() {
  const t = useT().visit
  return (
    <section id="visit" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-card/80 via-background to-secondary/50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
        <div className="grid gap-14 md:grid-cols-12 md:gap-16">
          {/* Left: Info */}
          <div className="md:col-span-6">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <Navigation className="size-3 text-primary" />
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary/70">
                {t.eyebrow}
              </p>
            </div>

            <h2 className="font-serif text-4xl leading-[1.02] tracking-tight text-balance md:text-5xl lg:text-6xl xl:text-7xl">
              <span className="text-foreground/90">{t.titlePre} </span>
              <span className="text-shimmer italic">{t.titleItalic}</span>
            </h2>

            <p className="mt-8 max-w-md text-base leading-relaxed text-foreground/50 md:text-lg">
              {t.description}
            </p>

            {/* Contact cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <ContactCard
                icon={<MapPin className="size-4" aria-hidden />}
                label={t.addressLabel}
              >
                <a
                  href="https://maps.google.com/?q=Gelateria+Lucia+Brooklyn"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary whitespace-pre-line transition-colors"
                >
                  {t.addressValue}
                </a>
              </ContactCard>

              <ContactCard
                icon={<Phone className="size-4" aria-hidden />}
                label={t.phoneLabel}
              >
                <a href="tel:+17185550182" className="hover:text-primary transition-colors">
                  {t.phoneValue}
                </a>
              </ContactCard>

              <ContactCard
                icon={<Mail className="size-4" aria-hidden />}
                label={t.emailLabel}
              >
                <a
                  href={`mailto:${t.emailValue}`}
                  className="hover:text-primary transition-colors"
                >
                  {t.emailValue}
                </a>
              </ContactCard>

              <ContactCard
                icon={<Clock className="size-4" aria-hidden />}
                label={t.openTodayLabel}
              >
                <span className="inline-flex items-center gap-2">
                  <span className="size-2 rounded-full bg-primary animate-soft-pulse" aria-hidden />
                  {t.openTodayValue}
                </span>
              </ContactCard>
            </div>
          </div>

          {/* Right: Hours card */}
          <div className="md:col-span-6">
            <div className="relative overflow-hidden rounded-3xl glass border border-white/6 p-8 md:p-10 card-glow">
              {/* Dotted map decoration */}
              <DottedMap className="pointer-events-none absolute -right-8 -top-8 size-56 text-primary/8 md:size-72" />

              <h3 className="relative font-serif text-2xl tracking-tight text-foreground/90">
                {t.hoursTitle}
              </h3>

              <ul role="list" className="relative mt-6 divide-y divide-white/5">
                {t.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between gap-4 py-4"
                  >
                    <span className="text-foreground/70 text-sm">{h.day}</span>
                    <span
                      className={`font-serif text-lg ${
                        /closed|chiuso/i.test(h.time)
                          ? "italic text-foreground/30"
                          : "text-shimmer font-medium"
                      }`}
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="relative mt-6 text-sm text-foreground/35 leading-relaxed border-t border-white/5 pt-5">
                {t.hoursNote}
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <a
                href="https://maps.google.com/?q=Gelateria+Lucia+Brooklyn"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl gold-gradient px-5 py-4 text-center text-sm font-semibold text-black shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40 hover:scale-[1.02]"
              >
                {t.cta1}
              </a>
              <a
                href="tel:+17185550182"
                className="rounded-2xl glass border border-white/10 px-5 py-4 text-center text-sm text-foreground/70 transition-all hover:border-primary/40 hover:text-foreground"
              >
                {t.cta2}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactCard({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="glass rounded-2xl border border-white/6 p-5 transition-all hover:border-primary/20">
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-primary/60 mb-3">
        {icon}
        {label}
      </div>
      <div className="font-serif text-base leading-snug text-foreground/80">
        {children}
      </div>
    </div>
  )
}

function DottedMap({ className = "" }: { className?: string }) {
  const cols = 14
  const rows = 14
  return (
    <svg
      viewBox={`0 0 ${cols * 10} ${rows * 10}`}
      className={className}
      aria-hidden
    >
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => {
          const skip =
            (r === 5 && c > 2 && c < 11) ||
            (c === 7 && r > 2 && r < 12) ||
            (r === 9 && c > 4 && c < 13)
          if (skip) return null
          return (
            <circle
              key={`${r}-${c}`}
              cx={c * 10 + 5}
              cy={r * 10 + 5}
              r={1.2}
              fill="currentColor"
            />
          )
        }),
      )}
      <circle cx={75} cy={55} r={5} fill="currentColor" opacity={0.85} />
      <circle cx={75} cy={55} r={10} fill="none" stroke="currentColor" strokeWidth={0.8} opacity={0.5} />
    </svg>
  )
}
