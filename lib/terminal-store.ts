import { create } from 'zustand'

type TerminalOutput = {
    id: string
    content: React.ReactNode
    timestamp: number
}

type TerminalState = {
  history: string[]
  pointer: number
  output: TerminalOutput[]
  isFocused: boolean
  pushHistory: (command: string) => void
  pushOutput: (content: React.ReactNode) => void
  clearOutput: () => void
  resetPointer: () => void
  setFocused: (focused: boolean) => void
  getHistoryItem: (direction: 'up' | 'down') => string | null
}

export const useTerminalStore = create<TerminalState>((set, get) => ({
  history: [],
  pointer: -1,
  output: [],
  isFocused: false,
  
  pushHistory: (command) => set((state) => ({
    history: [...state.history, command],
    pointer: -1
  })),
  
  pushOutput: (content) => set((state) => ({
    output: [...state.output, {
      id: crypto.randomUUID(),
      content,
      timestamp: Date.now()
    }]
  })),
  
  clearOutput: () => set({ output: [] }),
  
  resetPointer: () => set({ pointer: -1 }),
  
  setFocused: (focused) => set({ isFocused: focused }),
  
  getHistoryItem: (direction) => {
    const { history, pointer } = get()
    if (history.length === 0) return null
    
    if (direction === 'up') {
      const newPointer = Math.min(pointer + 1, history.length - 1)
      set({ pointer: newPointer })
      return history[history.length - 1 - newPointer]
    } else {
      const newPointer = Math.max(pointer - 1, -1)
      set({ pointer: newPointer })
      return newPointer === -1 ? '' : history[history.length - 1 - newPointer]
    }
  }
}))
