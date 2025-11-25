"use client"

import { Mail, Phone, Github, Instagram, Facebook, Copy } from "lucide-react"
import { toast } from "sonner"

interface DockItemProps {
    icon: React.ComponentType<{ className?: string }>
    label: string
    onClick: () => void
    ariaLabel: string
    showEmail?: boolean
    email?: string
    onCopy?: () => void
}

function DockItem({ icon: Icon, label, onClick, ariaLabel, showEmail, email, onCopy }: DockItemProps) {
    return (
        <div className="relative flex flex-col items-center">
            {/* Email display above button */}
            {showEmail && email && (
                <div className="mb-2 text-xs text-[var(--fg1)] font-mono bg-[var(--bg-2)] px-2 py-1 rounded border border-[var(--line)]">
                    {email}
                </div>
            )}

            <button
                className="dock-item group relative p-2 rounded-xl hover:bg-accent/20 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all duration-200 hover:scale-105"
                onClick={onClick}
                aria-label={ariaLabel}
                title={label}
            >
                <Icon className="h-5 w-5 text-[var(--fg1)] group-hover:text-[var(--accent)] transition-colors" />

                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[var(--fg0)] text-[var(--bg-0)] text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                    {label}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-[var(--fg0)]" />
                </div>

                {/* Copy icon overlay for email */}
                {showEmail && onCopy && (
                    <div
                        className="absolute inset-0 flex items-center justify-center bg-[var(--accent)]/90 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                        onClick={(e) => {
                            e.stopPropagation()
                            onCopy()
                        }}
                    >
                        <Copy className="h-3 w-3 text-white" />
                    </div>
                )}
            </button>
        </div>
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

    const dockItems: Array<{
        icon: React.ComponentType<{ className?: string }>
        label: string
        onClick: () => void
        ariaLabel: string
        showEmail?: boolean
        email?: string
        onCopy?: () => void
    }> = [
            {
                icon: Mail,
                label: "Email",
                onClick: () => window.location.href = 'mailto:danny.otgontsetseg@gmali.com',
                ariaLabel: "Send email to danny.otgontsetseg@gmali.com",
                showEmail: true,
                email: "danny.otgontsetseg@gmali.com",
                onCopy: () => copyToClipboard('danny.otgontsetseg@gmali.com', 'email address')
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
                onClick: () => openLink('https://www.instagram.com/dnii_d/', 'Instagram'),
                ariaLabel: "Open Instagram profile"
            },
            {
                icon: Facebook,
                label: "Facebook",
                onClick: () => openLink('https://www.facebook.com/dnii.dnii.0412', 'Facebook'),
                ariaLabel: "Open Facebook profile"
            },
            {
                icon: Instagram,
                label: "Xperience Agency (Instagram)",
                onClick: () => openLink('https://www.instagram.com/xperience.proydrs/', 'Xperience Agency Instagram'),
                ariaLabel: "Open Xperience Agency Instagram"
            },
            {
                icon: Facebook,
                label: "Xperience Agency (Facebook)",
                onClick: () => openLink('https://www.facebook.com/profile.php?id=61578833769304', 'Xperience Agency Facebook'),
                ariaLabel: "Open Xperience Agency Facebook"
            }
        ]

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 backdrop-blur-sm bg-background/80 border border-border rounded-2xl p-3 shadow-xl hidden sm:block">
            <div className="flex gap-2">
                {dockItems.map((item, index) => (
                    <DockItem
                        key={index}
                        icon={item.icon}
                        label={item.label}
                        onClick={item.onClick}
                        ariaLabel={item.ariaLabel}
                        showEmail={item.showEmail}
                        email={item.email}
                        onCopy={item.onCopy}
                    />
                ))}
            </div>
        </div>
    )
}