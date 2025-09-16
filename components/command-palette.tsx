"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { useUIStore } from "@/lib/store"
import { useTheme } from "next-themes"
import { wallpaperPresets } from "@/lib/wallpapers"
import { Home, Folder, User, FileText, MessageCircle, Settings, Palette, Moon, Zap } from "lucide-react"

const commands = [
  { id: "home", label: "Open Home", icon: Home, action: "navigate", value: "/" },
  { id: "applications", label: "Open Applications", icon: Folder, action: "navigate", value: "/applications" },
  { id: "about", label: "Open System Info", icon: User, action: "navigate", value: "/about" },
  { id: "resume", label: "Open Documents", icon: FileText, action: "navigate", value: "/resume" },
  { id: "contact", label: "Open Messaging", icon: MessageCircle, action: "navigate", value: "/contact" },
  { id: "settings", label: "Open Settings", icon: Settings, action: "navigate", value: "/settings" },
  { id: "toggle-theme", label: "Toggle Dark Mode", icon: Moon, action: "theme" },
  { id: "danny-experience", label: "Run dannyExperience()", icon: Zap, action: "command", value: "dannyExperience()" },
]

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { set, wallpaper } = useUIStore()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const handleCommand = (command: any) => {
    setOpen(false)

    switch (command.action) {
      case "navigate":
        router.push(command.value)
        break
      case "theme":
        setTheme(theme === "dark" ? "light" : "dark")
        break
      case "wallpaper":
        set({ wallpaper: command.value })
        break
      case "command":
        if (command.value === "dannyExperience()") {
          set({ wallpaper: "moss" })
          // Trigger particles effect
          document.dispatchEvent(new CustomEvent("dannyExperience"))
        }
        break
    }
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Applications">
          {commands
            .filter((cmd) => cmd.action === "navigate")
            .map((command) => {
              const Icon = command.icon
              return (
                <CommandItem
                  key={command.id}
                  onSelect={() => handleCommand(command)}
                  className="flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" />
                  <span>{command.label}</span>
                </CommandItem>
              )
            })}
        </CommandGroup>

        <CommandGroup heading="Actions">
          {commands
            .filter((cmd) => cmd.action !== "navigate")
            .map((command) => {
              const Icon = command.icon
              return (
                <CommandItem
                  key={command.id}
                  onSelect={() => handleCommand(command)}
                  className="flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" />
                  <span>{command.label}</span>
                </CommandItem>
              )
            })}
        </CommandGroup>

        <CommandGroup heading="Wallpapers">
          {Object.values(wallpaperPresets).map((preset) => (
            <CommandItem
              key={preset.name}
              onSelect={() => handleCommand({ action: "wallpaper", value: preset.name })}
              className="flex items-center gap-2"
            >
              <Palette className="w-4 h-4" />
              <span>Wallpaper: {preset.label}</span>
              {wallpaper === preset.name && <span className="text-xs text-muted-foreground">Current</span>}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
