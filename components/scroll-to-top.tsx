"use client"

import { useEffect, useState, useCallback } from "react"

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY
    const docHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight

    setVisible(scrollTop > 400)
    setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // SVG circle maths
  const radius = 20
  const circumference = 2 * Math.PI * radius
  const dashOffset = circumference - (scrollProgress / 100) * circumference

  return (
    <>
      <style>{`
        .stt-btn {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 9999;
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: none;
          background: transparent;
          padding: 0;
          /* Enter / exit */
          opacity: 0;
          transform: translateY(20px) scale(0.85);
          pointer-events: none;
          transition:
            opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .stt-btn.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }

        /* Glass disc */
        .stt-disc {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: oklch(0.14 0.010 260 / 0.75);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid oklch(1 0 0 / 0.10);
          transition: background 0.25s ease, box-shadow 0.25s ease;
        }
        .stt-btn:hover .stt-disc {
          background: oklch(0.14 0.010 260 / 0.92);
          box-shadow:
            0 0 28px oklch(0.80 0.14 75 / 0.30),
            0 8px 32px oklch(0 0 0 / 0.50);
        }

        /* Progress ring */
        .stt-ring {
          position: absolute;
          inset: 0;
          transform: rotate(-90deg);
          transition: stroke-dashoffset 0.18s ease;
        }
        .stt-ring-track {
          fill: none;
          stroke: oklch(1 0 0 / 0.08);
          stroke-width: 2;
        }
        .stt-ring-fill {
          fill: none;
          stroke: oklch(0.80 0.14 75);
          stroke-width: 2;
          stroke-linecap: round;
          transition: stroke-dashoffset 0.25s ease;
        }

        /* Arrow icon */
        .stt-arrow {
          position: relative;
          z-index: 1;
          color: oklch(0.80 0.14 75);
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), color 0.2s ease;
        }
        .stt-btn:hover .stt-arrow {
          transform: translateY(-3px);
          color: oklch(0.95 0.12 85);
        }

        /* Ripple on click */
        .stt-btn:active .stt-disc {
          transform: scale(0.92);
        }
        .stt-disc {
          transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.12s ease;
        }
      `}</style>

      <button
        id="scroll-to-top"
        aria-label="Scroll to top"
        className={`stt-btn${visible ? " visible" : ""}`}
        onClick={scrollToTop}
      >
        {/* Glass disc background */}
        <span className="stt-disc" />

        {/* Progress ring SVG */}
        <svg
          className="stt-ring"
          width="52"
          height="52"
          viewBox="0 0 52 52"
          aria-hidden="true"
        >
          <circle
            className="stt-ring-track"
            cx="26"
            cy="26"
            r={radius}
          />
          <circle
            className="stt-ring-fill"
            cx="26"
            cy="26"
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
          />
        </svg>

        {/* Arrow icon */}
        <svg
          className="stt-arrow"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
      </button>
    </>
  )
}
