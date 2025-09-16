"use client"

import { useEffect, useRef } from "react"
import { useUI } from "@/lib/store"
import { WALLPAPER_PRESETS } from "@/lib/wallpapers"

export function WallpaperEngine() {
  const { wallpaper, grain, motion, presence } = useUI()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const grainAnimationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const { a, b, accent } = WALLPAPER_PRESETS[wallpaper] || WALLPAPER_PRESETS.graphite

    let time = 0
    const animate = () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      const shouldAnimate = motion === "on" || (motion === "auto" && !prefersReducedMotion)

      if (!shouldAnimate || motion === "off") {
        // Render static gradient
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
        gradient.addColorStop(0, a)
        gradient.addColorStop(1, b)
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        return
      }

      if (document.hidden) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create animated gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, a)
      gradient.addColorStop(1, b)
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const alpha = 0.02 + Math.sin(time) * 0.01
      const glowAlpha = presence.onlineCount > 1 ? alpha + 0.02 : alpha

      // Parse hex color to rgba
      const hexToRgba = (hex: string, alpha: number) => {
        const r = Number.parseInt(hex.slice(1, 3), 16)
        const g = Number.parseInt(hex.slice(3, 5), 16)
        const b = Number.parseInt(hex.slice(5, 7), 16)
        return `rgba(${r}, ${g}, ${b}, ${alpha})`
      }

      ctx.fillStyle = hexToRgba(accent, glowAlpha)
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      setTimeout(() => {
        animationRef.current = requestAnimationFrame(animate)
      }, 1000 / 24)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [wallpaper, motion, presence.onlineCount])

  useEffect(() => {
    if (!grain) return

    const animateGrain = () => {
      // Grain animation logic here - independent of parallax
      setTimeout(() => {
        grainAnimationRef.current = requestAnimationFrame(animateGrain)
      }, 1000 / 10) // 10 FPS for grain
    }

    animateGrain()

    return () => {
      if (grainAnimationRef.current) {
        cancelAnimationFrame(grainAnimationRef.current)
      }
    }
  }, [grain])

  const currentWallpaper = WALLPAPER_PRESETS[wallpaper] || WALLPAPER_PRESETS.graphite
  const backgroundStyle = {
    backgroundImage: grain
      ? `linear-gradient(135deg, ${currentWallpaper.a} 0%, ${currentWallpaper.b} 100%), url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E")`
      : `linear-gradient(135deg, ${currentWallpaper.a} 0%, ${currentWallpaper.b} 100%)`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }

  return (
    <>
      <div className="fixed inset-0 -z-20" style={backgroundStyle} />
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{ mixBlendMode: "multiply" }}
      />
    </>
  )
}
