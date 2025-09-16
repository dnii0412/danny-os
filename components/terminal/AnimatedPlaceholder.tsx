'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { TERMINAL_PROMPTS } from './prompts'

interface AnimatedPlaceholderProps {
  isActive: boolean
  intervalMin?: number
  intervalJitter?: number
}

export default function AnimatedPlaceholder({
  isActive,
  intervalMin = 6000,
  intervalJitter = 2500,
}: AnimatedPlaceholderProps) {
  const [idx, setIdx] = useState(0)
  const timer = useRef<NodeJS.Timeout | null>(null)

  const phrases = useMemo(() => TERMINAL_PROMPTS, [])

  useEffect(() => {
    if (!isActive) {
      if (timer.current) clearInterval(timer.current)
      return
    }

    const next = () => setIdx(i => (i + 1) % phrases.length)
    const start = () => {
      const ms = intervalMin + Math.round(Math.random() * intervalJitter)
      timer.current = setInterval(next, ms)
    }

    start()
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [isActive, intervalMin, intervalJitter, phrases.length])

  return (
    <span className="terminal-ph group inline-flex items-center gap-2 select-none">
      <AnimatePresence mode="wait">
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 0.9, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.35 }}
          className="ph-text"
        >
          {phrases[idx]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
