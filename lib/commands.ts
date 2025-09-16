export type CommandResult =
  | { type: 'text'; payload: string }
  | { type: 'html'; payload: string }
  | { type: 'toast'; payload: { title: string; description: string } }
  | { type: 'navigate'; payload: string }
  | { type: 'open'; payload: string }
  | { type: 'modal'; payload: any }

export type CommandHandler = (args: string[]) => Promise<CommandResult | CommandResult[]>

export type CommandSpec = {
  name: string
  description: string
  usage?: string
  handler: CommandHandler
  aliases?: string[]
}

export interface Project {
  id: string
  name: string
  description: string
  overview: string
  features: string[]
  techStack: string[]
  challenges: Array<{
    challenge: string
    solution: string
  }>
  teamRoles: Array<{
    name: string
    role: string
  }>
  meta: {
    duration: string
    category: string
    team: string
  }
  demoUrl: string
}

// Legacy commands for backward compatibility
export const commands = {
  help: {
    name: "help",
    description: "Show available commands",
    usage: "help [command]",
    execute: async (args: string[]) => {
      if (args.length > 0) {
        const command = args[0].toLowerCase()
        const commandInfo = {
          clear: "Clear the terminal screen",
          help: "Show this help message",
          about: "Show system information",
          contact: "Open contact page",
          resume: "Open resume page",
          applications: "Open applications page",
          projects: "Open projects page",
          "dannyexperience": "Show developer experience",
          "pmexperience": "Show project management experience",
          theme: "Change theme (moss, graphite, linen, ivory)",
          open: "Open external links",
          goto: "Navigate to a page"
        }
        return commandInfo[command] || `Command '${command}' not found`
      }
      return `Available commands:
• help - Show this help message
• clear - Clear the terminal screen
• about - Show system information
• contact - Open contact page
• resume - Open resume page
• applications - Open applications page
• projects - Open projects page
• dannyexperience - Show developer experience
• pmexperience - Show project management experience
• theme <name> - Change theme (moss, graphite, linen, ivory)
• open <name> - Open external links
• goto <path> - Navigate to a page`
    }
  },
  clear: {
    name: "clear",
    description: "Clear the terminal screen",
    execute: async () => "CLEAR"
  },
  about: {
    name: "about",
    description: "Show system information",
    execute: async () => "Opening system information..."
  },
  contact: {
    name: "contact",
    description: "Open contact page",
    execute: async () => "Opening contact page..."
  },
  resume: {
    name: "resume",
    description: "Open resume page",
    execute: async () => "Opening resume page..."
  },
  applications: {
    name: "applications",
    description: "Open applications page",
    execute: async () => "Opening applications page..."
  },
  projects: {
    name: "projects",
    description: "Open projects page",
    execute: async () => "Opening projects page..."
  },
  dannyexperience: {
    name: "dannyexperience",
    description: "Show developer experience",
    execute: async () => "MERN + Next.js, payments (QPay, BYL), media (Bunny TUS), PM: Trello/Atlassian/Notion"
  },
  pmexperience: {
    name: "pmexperience",
    description: "Show project management experience",
    execute: async () => "Opening project management dashboard..."
  },
  theme: {
    name: "theme",
    description: "Change theme",
    usage: "theme <moss|graphite|linen|ivory>",
    execute: async (args: string[]) => {
      const theme = args[0]?.toLowerCase()
      const validThemes = ['moss', 'graphite', 'linen', 'ivory']
      if (!theme || !validThemes.includes(theme)) {
        return `Invalid theme. Available: ${validThemes.join(', ')}`
      }
      return `Changing theme to ${theme}...`
    }
  },
  open: {
    name: "open",
    description: "Open external links",
    usage: "open <name>",
    execute: async (args: string[]) => {
      const target = args[0]?.toLowerCase()
      const links: Record<string, string> = {
        winacademy: "https://winacademy.mn",
        edunewera: "https://edunewera.mn",
        haneducation: "https://haneducation.mn",
        sunrisemongolia: "https://sunrisemongolia.com",
        xperience: "https://experience.mn",
        instagram: "https://www.instagram.com/dnii_d/"
      }
      const url = links[target]
      if (!url) {
        return `Link not found for '${target}'. Available: ${Object.keys(links).join(', ')}`
      }
      return `Opening ${target}...`
    }
  },
  goto: {
    name: "goto",
    description: "Navigate to a page",
    usage: "goto <path>",
    execute: async (args: string[]) => {
      const path = args[0] || '/'
      return `Navigating to ${path}...`
    }
  }
}

export function parseCommand(input: string) {
  const parts = input.trim().split(/\s+/)
  return {
    command: parts[0]?.toLowerCase() || '',
    args: parts.slice(1)
  }
}