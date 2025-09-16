"use client"

import { WallpaperEngine } from "@/components/wallpaper-engine"
import { ParallaxStory } from "@/components/parallax-story"
import { StatusBar } from "@/components/status-bar"
import { Dock } from "@/components/dock"
import { CommandPalette } from "@/components/command-palette"
import { Terminal } from "@/components/terminal"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function HomePage() {
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        // Focus the terminal input
        const terminalInput = terminalRef.current?.querySelector('input')
        if (terminalInput) {
          terminalInput.focus()
        }
      }
    }

    const handleTerminalAction = (e: CustomEvent) => {
      const { action, value } = e.detail
      if (action === 'setTheme') {
        // Import the store dynamically to avoid SSR issues
        import('@/lib/store').then(({ useUIStore }) => {
          useUIStore.getState().set({ theme: value })
        })
      } else if (action === 'setWallpaper') {
        import('@/lib/store').then(({ useUIStore }) => {
          useUIStore.getState().set({ wallpaper: value })
        })
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('terminal:action', handleTerminalAction as EventListener)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('terminal:action', handleTerminalAction as EventListener)
    }
  }, [])

  return (
    <main className="min-h-screen relative">
      <WallpaperEngine />
      <ParallaxStory />
      <StatusBar />
      <CommandPalette />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-balance text-white drop-shadow-2xl">Welcome to DannyOS</h1>
            <p className="text-xl text-white/95 text-pretty font-medium drop-shadow-lg">A minimal, elegant operating system for my work</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/applications">Open Applications</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent text-white border-white/20 hover:bg-white/10">
              <span className="text-white">Press </span>
              <kbd className="mx-1 px-2 py-1 bg-white/20 rounded text-sm text-white">⌘K</kbd>
              <span className="text-white"> for commands</span>
            </Button>
          </div>

          <div className="text-center mb-4">
            <p className="text-sm text-white/80 font-medium drop-shadow-lg">
              💻 Everyone can be a coder — give it a try! Type <span className="font-mono bg-white/20 px-2 py-1 rounded text-xs">help</span> to start
            </p>
          </div>

          <Card className="p-6 bg-card/80 backdrop-blur-sm" ref={terminalRef}>
            <Terminal />
          </Card>
        </div>
      </div>

      <Dock />

      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-40">
        <p className="text-sm text-muted-foreground/80 font-medium">Danny | Developer × Project Manager</p>
      </div>
    </main>
  )
}
