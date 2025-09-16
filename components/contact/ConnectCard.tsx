"use client"

import { LucideIcon } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

interface ConnectCardProps {
    icon: LucideIcon
    title: string
    hint: string
    onClick: () => void
    onAux?: () => void
    auxLabel?: string
}

export function ConnectCard({
    icon: Icon,
    title,
    hint,
    onClick,
    onAux,
    auxLabel = "Copy"
}: ConnectCardProps) {
    const [isPressed, setIsPressed] = useState(false)

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onClick()
        }
    }

    const handleAuxClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        onAux?.()
    }

    return (
        <div
            className="connect-card group relative rounded-2xl border border-[var(--line)] bg-[var(--bg-1)] p-4 shadow-sm hover:shadow-md focus-within:ring-2 focus-within:ring-[var(--accent)] cursor-pointer"
            role="button"
            tabIndex={0}
            onClick={onClick}
            onKeyDown={handleKeyDown}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            onMouseLeave={() => setIsPressed(false)}
            aria-label={`${title}: ${hint}`}
        >
            <div className="flex items-center gap-3">
                <Icon className="h-6 w-6 text-[var(--accent)] flex-shrink-0" />
                <div className="flex-1 min-w-0">
                    <div className="text-[var(--fg0)] font-medium truncate">{title}</div>
                    <div className="text-sm text-[var(--fg1)] truncate">{hint}</div>
                </div>
                <span className="opacity-60 group-hover:opacity-100 transition-opacity text-[var(--fg1)]">↗</span>
            </div>

            {onAux && (
                <button
                    className="absolute right-3 bottom-3 text-xs underline text-[var(--fg1)] hover:text-[var(--fg0)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg-1)] rounded px-1"
                    onClick={handleAuxClick}
                    aria-label={`Copy ${title} information`}
                >
                    {auxLabel}
                </button>
            )}
        </div>
    )
}
