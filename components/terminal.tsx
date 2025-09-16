"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { useUIStore } from "@/lib/store"
import { useTerminalStore } from "@/lib/terminal-store"
import { resolveCommand, getAllCommandNames } from "@/components/terminal/command-registry"
import AnimatedPlaceholder from "@/components/terminal/AnimatedPlaceholder"
import { TerminalIcon } from "lucide-react"
import { toast } from "sonner"
import "@/styles/terminal.css"

export function Terminal() {
  const [input, setInput] = useState("")
  const [autocompleteSuggestions, setAutocompleteSuggestions] = useState<string[]>([])
  const [showAutocomplete, setShowAutocomplete] = useState(false)
  const [autocompleteIndex, setAutocompleteIndex] = useState(0)
  const [isExecuting, setIsExecuting] = useState(false)
  
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const { addBadge, addTerminalEntry } = useUIStore()
  const router = useRouter()
  
  const {
    output,
    pushHistory,
    pushOutput,
    clearOutput,
    resetPointer,
    setFocused,
    getHistoryItem
  } = useTerminalStore()

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [output])

  const executeCommand = async (commandLine: string) => {
    const [name, ...args] = commandLine.trim().split(/\s+/)
    
    if (!name) return
    
    setIsExecuting(true)
    
    // Add to command history
    pushHistory(commandLine)
    addTerminalEntry(commandLine, "")
    
    // Add input to display
    pushOutput(
      <div className="text-primary">
        <span className="text-green-500">$</span> {commandLine}
      </div>
    )
    
    // Find and execute command
    const cmd = resolveCommand(name)
    if (!cmd) {
      pushOutput(
        <div className="text-red-400">
          Command not found: {name}. Try <code className="text-blue-400">help</code> for available commands.
        </div>
      )
      setIsExecuting(false)
      return
    }
    
    try {
      const result = await cmd.handler(args)
      const results = Array.isArray(result) ? result : [result]
      
      for (const r of results) {
        if (r.type === 'text') {
          if (r.payload === '__CLEAR__') {
            clearOutput()
            pushOutput(
              <div className="text-muted-foreground">
                DannyOS v1.0.0 — type "help" to get started
              </div>
            )
          } else {
            pushOutput(<pre className="whitespace-pre-wrap">{r.payload}</pre>)
          }
        } else if (r.type === 'html') {
          pushOutput(
            <div 
              className="prose prose-sm max-w-none dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: r.payload }}
            />
          )
        } else if (r.type === 'toast') {
          toast(r.payload.title, {
            description: r.payload.description
          })
        } else if (r.type === 'navigate') {
          router.push(r.payload)
        } else if (r.type === 'open') {
          window.open(r.payload, '_blank', 'noopener')
        } else if (r.type === 'modal') {
          window.dispatchEvent(new CustomEvent('terminal:action', { detail: r.payload }))
        }
      }
      
      // Award badges for special commands
      if (name === 'dannyexperience') {
        addBadge("Experience Unlocked")
        document.dispatchEvent(new CustomEvent("dannyExperience"))
      }
    } catch (error) {
      pushOutput(
        <div className="text-red-400">
          Error: {error instanceof Error ? error.message : String(error)}
        </div>
      )
    } finally {
      setIsExecuting(false)
    }
  }

  // Autocomplete functionality
  const updateAutocomplete = useCallback((value: string) => {
    if (!value.trim()) {
      setShowAutocomplete(false)
      return
    }
    
    const allCommands = getAllCommandNames()
    const suggestions = allCommands.filter(cmd => 
      cmd.toLowerCase().startsWith(value.toLowerCase())
    )
    
    setAutocompleteSuggestions(suggestions)
    setShowAutocomplete(suggestions.length > 0)
    setAutocompleteIndex(0)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInput(value)
    updateAutocomplete(value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Use autocomplete suggestion if available
    if (showAutocomplete && autocompleteSuggestions[autocompleteIndex]) {
      setInput(autocompleteSuggestions[autocompleteIndex])
      setShowAutocomplete(false)
      return
    }

    executeCommand(input.trim())
    setInput("")
    resetPointer()
    setShowAutocomplete(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (showAutocomplete) {
        setAutocompleteIndex(prev => 
          prev > 0 ? prev - 1 : autocompleteSuggestions.length - 1
        )
      } else {
        const historyItem = getHistoryItem('up')
        if (historyItem !== null) {
          setInput(historyItem)
        }
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (showAutocomplete) {
        setAutocompleteIndex(prev => 
          prev < autocompleteSuggestions.length - 1 ? prev + 1 : 0
        )
      } else {
        const historyItem = getHistoryItem('down')
        setInput(historyItem || "")
      }
    } else if (e.key === "Tab") {
      e.preventDefault()
      if (showAutocomplete && autocompleteSuggestions[autocompleteIndex]) {
        setInput(autocompleteSuggestions[autocompleteIndex])
        setShowAutocomplete(false)
      }
    } else if (e.key === "Escape") {
      setShowAutocomplete(false)
    }
  }

  const handleFocus = () => {
    setFocused(true)
  }

  const handleBlur = () => {
    setFocused(false)
    // Delay hiding autocomplete to allow clicking on suggestions
    setTimeout(() => setShowAutocomplete(false), 150)
  }

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden relative">
      <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 border-b border-border">
        <TerminalIcon className="w-4 h-4" />
        <span className="text-sm font-medium">Terminal</span>
      </div>

      <div
        ref={terminalRef}
        className="h-80 overflow-y-auto p-4 font-mono text-sm bg-background/50 relative"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Initial welcome message */}
        {output.length === 0 && (
          <div className="text-muted-foreground mb-4">
            DannyOS v1.0.0 — type "help" to get started
          </div>
        )}

        {/* Command output */}
        {output.map((entry) => (
          <div key={entry.id} className="mb-2">
            {entry.content}
          </div>
        ))}

        {/* Input form with autocomplete */}
        <div className="relative">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <span className="text-green-500">$</span>
            <div className="relative flex-1">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="w-full bg-transparent border-none outline-none font-mono text-foreground caret-accent pl-0"
                placeholder=""
                autoFocus
                aria-label="Terminal input"
              />
              {input.length === 0 && (
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                  <AnimatedPlaceholder isActive={input.length === 0 && !isExecuting} />
                </div>
              )}
            </div>
          </form>

          {/* Autocomplete suggestions */}
          {showAutocomplete && autocompleteSuggestions.length > 0 && (
            <div className="absolute top-full left-8 right-0 mt-1 bg-popover border border-border rounded-md shadow-lg z-50 max-h-32 overflow-y-auto">
              {autocompleteSuggestions.map((suggestion, index) => (
                <button
                  key={suggestion}
                  type="button"
                  className={`w-full px-3 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground ${
                    index === autocompleteIndex ? 'bg-accent text-accent-foreground' : ''
                  }`}
                  onClick={() => {
                    setInput(suggestion)
                    setShowAutocomplete(false)
                    inputRef.current?.focus()
                  }}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
