import { create } from "zustand"
import { persist } from "zustand/middleware"

export type Theme = "system" | "light" | "dark"
export type Wallpaper = "linen" | "ivory" | "moss" | "graphite"
export type Motion = "auto" | "on" | "off"
export type Lang = "en" | "mn"

export interface UIState {
  theme: Theme
  wallpaper: Wallpaper
  grain: boolean
  motion: Motion
  language: Lang
  sounds: boolean
  effectiveTheme: "light" | "dark"
  presence: { onlineCount: number; enabled: boolean }
  badges: string[]
  currentWindow: string | null
  terminalHistory: Array<{ command: string; output: string; timestamp: number }>
  set: (partial: Partial<UIState>) => void
  computeEffectiveTheme: () => void
  addBadge: (badge: string) => void
  setCurrentWindow: (window: string | null) => void
  addTerminalEntry: (command: string, output: string) => void
}

export const useUIStore = create<UIState>()(
  persist(
    (set, get) => ({
      theme: "system",
      wallpaper: "graphite",
      grain: true,
      motion: "auto",
      language: "en",
      sounds: false,
      effectiveTheme: "light",
      presence: { onlineCount: 1, enabled: false },
      badges: [],
      currentWindow: null,
      terminalHistory: [],
      set: (partial) => {
        set(partial)
        if ("theme" in partial) {
          get().computeEffectiveTheme()
        }
      },
      computeEffectiveTheme: () => {
        const { theme } = get()
        let effectiveTheme: "light" | "dark" = "light"

        if (theme === "dark") {
          effectiveTheme = "dark"
        } else if (theme === "light") {
          effectiveTheme = "light"
        } else if (theme === "system") {
          // Check system preference
          if (typeof window !== "undefined") {
            effectiveTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
          }
        }

        set({ effectiveTheme })
      },
      addBadge: (badge) => {
        const current = get().badges
        if (!current.includes(badge)) {
          set({ badges: [...current, badge] })
        }
      },
      setCurrentWindow: (window) => set({ currentWindow: window }),
      addTerminalEntry: (command, output) => {
        const current = get().terminalHistory
        set({
          terminalHistory: [...current, { command, output, timestamp: Date.now() }].slice(-50),
        })
      },
    }),
    {
      name: "dannyos.ui", // Updated storage key to match spec
    },
  ),
)

export const useUI = useUIStore
