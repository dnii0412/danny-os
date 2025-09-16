"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useUI } from "@/lib/store"

export function ThemeToggle() {
  const { theme, set, effectiveTheme } = useUI()

  const toggleTheme = () => {
    if (theme === "system") {
      set({ theme: "dark" })
    } else if (theme === "dark") {
      set({ theme: "light" })
    } else {
      set({ theme: "system" })
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="w-8 h-8 p-0"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
