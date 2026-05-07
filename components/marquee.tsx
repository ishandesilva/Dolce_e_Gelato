"use client"

import { useT } from "@/components/language-provider"

export function Marquee() {
  const items = useT().marquee
  const loop = [...items, ...items, ...items, ...items]
  return (
    <div
      className="relative overflow-hidden border-y border-white/6 bg-gradient-to-r from-card via-secondary to-card py-6"
      aria-hidden
    >
      {/* Scrolling row */}
      <div className="flex w-max animate-marquee gap-14 whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 font-serif text-2xl italic tracking-tight text-foreground/40 md:text-3xl"
          >
            <span className="text-shimmer text-2xl not-italic font-bold">✦</span>
            {item}
          </span>
        ))}
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent md:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent md:w-40" />
    </div>
  )
}
