"use client"

import { useEffect, useRef } from "react"
import { useUIStore } from "@/lib/store"

export function ParallaxStory() {
  const { motion } = useUIStore()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || motion === "off") return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (motion === "auto" && prefersReducedMotion) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const layers = container.querySelectorAll("[data-parallax]")

      layers.forEach((layer) => {
        const speed = Number.parseFloat(layer.getAttribute("data-parallax") || "0")
        const yPos = -(scrollY * speed)
        ;(layer as HTMLElement).style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [motion])

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Child with cows - Background layer */}
      <div data-parallax="0.1" className="absolute top-1/4 left-1/4 w-32 h-32 opacity-5">
        <svg viewBox="0 0 128 128" className="w-full h-full">
          <path
            d="M20 80 L30 70 L35 75 L40 70 L50 80 L45 90 L40 85 L35 90 L30 85 L25 90 Z M60 85 L70 80 L80 85 L75 95 L65 95 Z"
            fill="currentColor"
            className="text-muted/20"
          />
        </svg>
      </div>

      {/* Teen drummer - Mid layer */}
      <div data-parallax="0.3" className="absolute top-1/2 right-1/3 w-40 h-40 opacity-5">
        <svg viewBox="0 0 128 128" className="w-full h-full">
          <path
            d="M40 30 L50 25 L60 30 L65 40 L70 50 L75 60 L70 70 L60 75 L50 70 L45 60 L40 50 Z M80 45 L90 40 L95 50 L90 60 L80 55 Z"
            fill="currentColor"
            className="text-muted/20"
          />
        </svg>
      </div>

      {/* Developer - Foreground layer */}
      <div data-parallax="0.5" className="absolute bottom-1/3 left-1/2 w-36 h-36 opacity-5">
        <svg viewBox="0 0 128 128" className="w-full h-full">
          <path
            d="M45 20 L55 15 L65 20 L70 30 L75 40 L70 50 L65 55 L55 50 L50 40 L45 30 Z M30 60 L90 60 L95 70 L90 80 L30 80 L25 70 Z"
            fill="currentColor"
            className="text-muted/20"
          />
        </svg>
      </div>

      {/* Encouragement rays - Subtle overlay */}
      <div data-parallax="0.2" className="absolute inset-0 opacity-5">
        <svg viewBox="0 0 1200 800" className="w-full h-full">
          <defs>
            <radialGradient id="rays" cx="50%" cy="50%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="600" cy="400" r="300" fill="url(#rays)" className="text-accent" />
        </svg>
      </div>
    </div>
  )
}
