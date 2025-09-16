"use client"

import { Mail, Phone, Github, Instagram, Facebook } from "lucide-react"
import { toast } from "sonner"

interface DockItemProps {
    icon: React.ComponentType<{ className?: string }>
    label: string
    onClick: () => void
    ariaLabel: string
}

function DockItem({ icon: Icon, label, onClick, ariaLabel }: DockItemProps) {
    return (
        <button
            className="dock-item group relative p-2 rounded-xl hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
            onClick={onClick}
            aria-label={ariaLabel}
            title={label}
        >
            <Icon className="h-5 w-5 text-[var(--fg1)] group-hover:text-[var(--accent)] transition-colors" />

            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[var(--fg0)] text-[var(--bg-0)] text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {label}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-[var(--fg0)]" />
            </div>
        </button>
    )
}

export function ContactDock() {
    const copyToClipboard = async (text: string, label: string) => {
        try {
            await navigator.clipboard.writeText(text)
            toast.success(`Copied ${label} to clipboard`, {
                description: text
            })
        } catch (err) {
            toast.error(`Failed to copy ${label}`)
        }
    }

    const openLink = (url: string, label: string) => {
        try {
            window.open(url, '_blank', 'noopener,noreferrer')
        } catch (err) {
            toast.error(`Failed to open ${label}`)
        }
    }

    const dockItems = [
        {
            icon: Mail,
            label: "Email",
            onClick: () => window.location.href = 'mailto:dnioko0412@gmail.com',
            ariaLabel: "Send email to dnioko0412@gmail.com"
        },
        {
            icon: Phone,
            label: "Phone",
            onClick: () => window.location.href = 'tel:+97680296007',
            ariaLabel: "Call +976 80296007"
        },
        {
            icon: Github,
            label: "GitHub",
            onClick: () => openLink('https://github.com/dnii0412', 'GitHub'),
            ariaLabel: "Open GitHub profile"
        },
        {
            icon: Instagram,
            label: "Instagram",
            onClick: () => openLink('https://www.instagram.com/xperience.proydrs/', 'Instagram'),
            ariaLabel: "Open Instagram profile"
        },
        {
            icon: Facebook,
            label: "Facebook",
            onClick: () => openLink('https://www.facebook.com/profile.php?id=61578833769304', 'Facebook'),
            ariaLabel: "Open Facebook profile"
        }
    ]

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 backdrop-blur-sm bg-background/70 border border-border rounded-2xl p-2 shadow-lg hidden sm:block">
            <div className="flex gap-1">
                {dockItems.map((item, index) => (
                    <DockItem
                        key={index}
                        icon={item.icon}
                        label={item.label}
                        onClick={item.onClick}
                        ariaLabel={item.ariaLabel}
                    />
                ))}
            </div>
        </div>
    )
}