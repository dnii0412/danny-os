"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useEffect } from "react"

interface WindowProps {
  title: string
  children: React.ReactNode
  className?: string
}

export function Window({ title, children, className = "" }: WindowProps) {
  const router = useRouter()

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        router.push("/")
      }
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [router])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`fixed inset-4 z-40 flex flex-col bg-card/95 backdrop-blur-md border border-border rounded-xl shadow-2xl ${className}`}
    >
      {/* Window chrome */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <button
              onClick={() => router.push("/")}
              className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
              aria-label="Close"
            />
            <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors" />
            <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors" />
          </div>
        </div>
        <h1 className="text-sm font-medium text-center flex-1">{title}</h1>
        <div className="w-[72px]" /> {/* Spacer to keep title centered */}
      </div>

      {/* Window content */}
      <div className="flex-1 overflow-auto p-6">{children}</div>
    </motion.div>
  )
}
