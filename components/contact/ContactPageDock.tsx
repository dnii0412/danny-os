"use client"

import { Home, Mail, Github, Instagram, Facebook, Linkedin, CheckCircle2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { toast } from "sonner"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function ContactPageDock() {
  const router = useRouter()
  const [emailCopied, setEmailCopied] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

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

  const copyEmail = async () => {
    setIsAnimating(true)
    await copyToClipboard('danny.otgontsetseg@gmali.com', 'email address')
    setEmailCopied(true)
    
    // Reset after 2 seconds
    setTimeout(() => {
      setEmailCopied(false)
      setIsAnimating(false)
    }, 2000)
  }

  const dockItems = [
    {
      icon: Home,
      label: "Home",
      onClick: () => router.push("/"),
      ariaLabel: "Go to home page"
    },
    {
      icon: Facebook,
      label: "Facebook",
      onClick: () => openLink('https://www.facebook.com/dnii.dnii.0412', 'Facebook'),
      ariaLabel: "Open Facebook profile"
    },
    {
      icon: Instagram,
      label: "Instagram",
      onClick: () => openLink('https://www.instagram.com/dnii_d/', 'Instagram'),
      ariaLabel: "Open Instagram profile"
    },
    {
      icon: Github,
      label: "GitHub",
      onClick: () => openLink('https://github.com/dnii0412', 'GitHub'),
      ariaLabel: "Open GitHub profile"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      onClick: () => openLink('https://www.linkedin.com/in/danny-otgontsetseg-baaa67260/', 'LinkedIn'),
      ariaLabel: "Open LinkedIn profile"
    },
  ]

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 px-4 py-3 bg-card/80 backdrop-blur-md border border-border rounded-xl shadow-lg">
        <TooltipProvider>
          {dockItems.map((item) => {
            const Icon = item.icon
            return (
              <Tooltip key={item.label}>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={item.onClick}
                    className="w-10 h-10 p-0 transition-all duration-200 hover:scale-110"
                  >
                    <Icon className="w-5 h-5 text-gray-800 dark:text-white" strokeWidth={2} />
                    <span className="sr-only">{item.ariaLabel}</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            )
          })}
          
          {/* Email Copy Button with Animation - Centered */}
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div
                whileTap={{ scale: 0.85 }}
                animate={isAnimating ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={copyEmail}
                  className="w-10 h-10 p-0 relative transition-all duration-200 hover:scale-110"
                >
                  <AnimatePresence mode="wait">
                    {emailCopied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="mail"
                        initial={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <Mail className="w-5 h-5 text-gray-800 dark:text-white" strokeWidth={2} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <span className="sr-only">Copy email to clipboard</span>
                </Button>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>{emailCopied ? "Copied!" : "Copy Email"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}
