"use client"

import { useUIStore } from "@/lib/store"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function PresenceIndicator() {
  const { presence } = useUIStore()

  if (!presence.enabled) return null

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-mono">{presence.onlineCount}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>
            {presence.onlineCount} visitor{presence.onlineCount !== 1 ? "s" : ""} online
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
