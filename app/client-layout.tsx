"use client"

import type React from "react"
import { Inter } from "next/font/google"
import { IBM_Plex_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense, useEffect } from "react"
import { useUI } from "@/lib/store"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
})

// Added theme management at root level
function ThemeManager({ children }: { children: React.ReactNode }) {
  const { effectiveTheme, computeEffectiveTheme } = useUI()

  useEffect(() => {
    computeEffectiveTheme()

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => computeEffectiveTheme()
    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [computeEffectiveTheme])

  useEffect(() => {
    // Apply dark class to html element
    document.documentElement.classList.toggle("dark", effectiveTheme === "dark")
  }, [effectiveTheme])

  return <>{children}</>
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <body className={`${inter.variable} ${ibmPlexMono.variable} font-sans antialiased`}>
      <Suspense fallback={null}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ThemeManager>{children}</ThemeManager>
        </ThemeProvider>
        <Analytics />
      </Suspense>
    </body>
  )
}
