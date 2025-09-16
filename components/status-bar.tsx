"use client"

import { useEffect, useState } from "react"
import { Clock, Command } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { PresenceIndicator } from "./presence-indicator"

export function StatusBar() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-0 right-0 z-50 flex items-center gap-4 p-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4" />
        <span className="font-mono">{time}</span>
      </div>

      <ThemeToggle />
      <PresenceIndicator />

      <div className="flex items-center gap-1 text-xs opacity-60">
        <Command className="w-3 h-3" />
        <span>K</span>
      </div>
    </div>
  )
}
