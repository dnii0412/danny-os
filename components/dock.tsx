"use client"

import { Home, Folder, User, FileText, MessageCircle, Settings } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

const dockItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Folder, label: "Applications", path: "/applications" },
  { icon: User, label: "System Info", path: "/about" },
  { icon: FileText, label: "Documents", path: "/resume" },
  { icon: MessageCircle, label: "Messaging", path: "/contact" },
  { icon: Settings, label: "Settings", path: "/settings" },
]

export function Dock() {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 px-4 py-3 bg-card/80 backdrop-blur-md border border-border rounded-xl shadow-lg">
        <TooltipProvider>
          {dockItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.path

            return (
              <Tooltip key={item.path}>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => router.push(item.path)}
                    className={cn(
                      "w-10 h-10 p-0 transition-all duration-200 hover:scale-110",
                      isActive && "bg-primary text-primary-foreground shadow-md scale-105",
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="sr-only">{item.label}</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            )
          })}
        </TooltipProvider>
      </div>
    </div>
  )
}
