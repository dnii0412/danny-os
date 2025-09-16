import type React from "react"

export const WALLPAPER_PRESETS = {
  linen: { a: "#faf8f3", b: "#f1eee6", accent: "#2f6f4f" },
  ivory: { a: "#ffffff", b: "#f7f7f7", accent: "#234f3b" },
  moss: { a: "#f7f6f2", b: "#eef2ee", accent: "#2c5f4a" },
  graphite: { a: "#0f1113", b: "#16191c", accent: "#65a388" },
} as const

export type WallpaperKey = keyof typeof WALLPAPER_PRESETS

export interface WallpaperPreset {
  name: string
  label: string
  background: string
  accent: string
  description: string
}

export const wallpaperPresets: Record<string, WallpaperPreset> = {
  linen: {
    name: "linen",
    label: "Linen",
    background: `linear-gradient(135deg, ${WALLPAPER_PRESETS.linen.a} 0%, ${WALLPAPER_PRESETS.linen.b} 100%)`,
    accent: WALLPAPER_PRESETS.linen.accent,
    description: "Soft ivory gradient with subtle texture",
  },
  moss: {
    name: "moss",
    label: "Moss",
    background: `linear-gradient(135deg, ${WALLPAPER_PRESETS.moss.a} 0%, ${WALLPAPER_PRESETS.moss.b} 70%, #E8F5E8 100%)`,
    accent: WALLPAPER_PRESETS.moss.accent,
    description: "Breathing forest green accent on ivory",
  },
  ivory: {
    name: "ivory",
    label: "Ivory",
    background: `linear-gradient(135deg, ${WALLPAPER_PRESETS.ivory.a} 0%, ${WALLPAPER_PRESETS.ivory.b} 100%)`,
    accent: WALLPAPER_PRESETS.ivory.accent,
    description: "Pure white gradient with soft shadows",
  },
  graphite: {
    name: "graphite",
    label: "Graphite",
    background: `linear-gradient(135deg, ${WALLPAPER_PRESETS.graphite.a} 0%, ${WALLPAPER_PRESETS.graphite.b} 100%)`,
    accent: WALLPAPER_PRESETS.graphite.accent,
    description: "Dark mode with moss accent",
  },
}

export function getWallpaperStyle(preset: string, grain = true): React.CSSProperties {
  const wallpaper = wallpaperPresets[preset] || wallpaperPresets.moss

  return {
    backgroundImage: grain
      ? `${wallpaper.background}, url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E")`
      : wallpaper.background,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }
}
