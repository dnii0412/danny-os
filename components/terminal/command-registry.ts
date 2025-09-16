import { CommandSpec, CommandResult } from '@/lib/commands'

export const commands: CommandSpec[] = [
    {
        name: 'help',
        description: 'List commands',
        usage: 'help [command]',
        handler: async (args) => {
            if (args[0]) {
                const commandHelp: Record<string, string> = {
                    clear: 'Clear the terminal screen',
                    help: 'Show this help message',
                    about: 'Open system information page',
                    contact: 'Open contact page',
                    resume: 'Open resume page',
                    apps: 'Open applications page',
                    applications: 'Open applications page',
                    projects: 'Open projects page',
                    dannyexperience: 'Show developer experience',
                    pmexperience: 'Show project management experience',
                    theme: 'Change theme (moss, graphite, linen, ivory)',
                    open: 'Open external links',
                    goto: 'Navigate to a page'
                }
                const help = commandHelp[args[0].toLowerCase()]
                return help
                    ? { type: 'text', payload: `${args[0]}: ${help}` }
                    : { type: 'text', payload: `Command '${args[0]}' not found` }
            }

            return {
                type: 'html',
                payload: `
          <div class="space-y-2">
            <div class="font-bold text-green-500">Available Commands:</div>
            <div class="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
              <div><span class="text-blue-400">help</span> - List commands</div>
              <div><span class="text-blue-400">clear</span> - Clear terminal</div>
              <div><span class="text-blue-400">about</span> - System info</div>
              <div><span class="text-blue-400">contact</span> - Contact page</div>
              <div><span class="text-blue-400">resume</span> - Resume page</div>
              <div><span class="text-blue-400">apps</span> - Applications</div>
              <div><span class="text-blue-400">projects</span> - Projects</div>
              <div><span class="text-blue-400">dannyExperience()</span> - Dev skills</div>
              <div><span class="text-blue-400">pmExperience()</span> - PM dashboard</div>
              <div><span class="text-blue-400">theme</span> - Change theme</div>
              <div><span class="text-blue-400">open</span> - Open links</div>
              <div><span class="text-blue-400">goto</span> - Navigate</div>
            </div>
          </div>
        `
            }
        }
    },

    {
        name: 'clear',
        description: 'Clear terminal',
        handler: async () => ({ type: 'text', payload: '__CLEAR__' })
    },

    // Navigation commands
    {
        name: 'apps',
        aliases: ['applications', 'projects'],
        description: 'Open Applications',
        handler: async () => ({ type: 'navigate', payload: '/applications' })
    },

    {
        name: 'about',
        description: 'Open System Info',
        handler: async () => ({ type: 'navigate', payload: '/about' })
    },

    {
        name: 'contact',
        description: 'Open Contact',
        handler: async () => ({ type: 'navigate', payload: '/contact' })
    },

    {
        name: 'resume',
        description: 'Open Resume',
        handler: async () => ({ type: 'navigate', payload: '/resume' })
    },

    // External links
    {
        name: 'open',
        description: 'Open a demo or link',
        usage: 'open <slug|url>',
        handler: async ([target]) => {
            const linkMap: Record<string, string> = {
                winacademy: 'https://winacademy.mn',
                edunewera: 'https://edunewera.mn',
                haneducation: 'https://haneducation.mn',
                sunrisemongolia: 'https://sunrisemongolia.com',
                xperience: 'https://experience.mn',
                instagram: 'https://www.instagram.com/dnii_d/',
            }

            const url = linkMap[target?.toLowerCase() || ''] || target
            if (!url) {
                return {
                    type: 'toast',
                    payload: {
                        title: 'Link not found',
                        description: `No link for '${target}'. Available: ${Object.keys(linkMap).join(', ')}`
                    }
                }
            }

            return { type: 'open', payload: url }
        }
    },

    // Navigation
    {
        name: 'goto',
        description: 'Go to a page',
        usage: 'goto /path',
        handler: async ([path]) => ({ type: 'navigate', payload: path || '/' })
    },

    // Theme control
    {
        name: 'theme',
        description: 'Switch theme or wallpaper',
        usage: 'theme <light|dark|system|linen|ivory|moss|graphite>',
        handler: async ([preset]) => {
            const validThemes = ['light', 'dark', 'system']
            const validWallpapers = ['linen', 'ivory', 'moss', 'graphite']

            if (!preset) {
                return {
                    type: 'text',
                    payload: `Usage: theme <light|dark|system|linen|ivory|moss|graphite>`
                }
            }

            const lowerPreset = preset.toLowerCase()

            if (validThemes.includes(lowerPreset)) {
                return {
                    type: 'modal',
                    payload: { action: 'setTheme', value: lowerPreset }
                }
            } else if (validWallpapers.includes(lowerPreset)) {
                return {
                    type: 'modal',
                    payload: { action: 'setWallpaper', value: lowerPreset }
                }
            } else {
                return {
                    type: 'text',
                    payload: `Invalid option. Available themes: ${validThemes.join(', ')}. Available wallpapers: ${validWallpapers.join(', ')}`
                }
            }
        }
    },

    // Experience commands
    {
        name: 'dannyexperience',
        description: 'Show developer experience',
        handler: async () => ({
            type: 'html',
            payload: `
        <div class="space-y-3">
          <div class="font-bold text-green-500">🚀 Developer Experience</div>
          <div class="text-sm space-y-1">
            <div><span class="text-blue-400">Stack:</span> MERN + Next.js, TypeScript, Tailwind</div>
            <div><span class="text-blue-400">Payments:</span> QPay, BYL Payments integration</div>
            <div><span class="text-blue-400">Media:</span> Bunny.net TUS uploads, Cloudinary</div>
            <div><span class="text-blue-400">PM Tools:</span> Trello, Notion, Atlassian</div>
            <div><span class="text-blue-400">Projects:</span> 4+ websites delivered, 84.6% success rate</div>
          </div>
        </div>
      `
        })
    },

    {
        name: 'pmexperience',
        description: 'Show project mgmt dashboard',
        handler: async () => ({ type: 'navigate', payload: '/about#pm' })
    },

    // Contact commands
    {
        name: 'contact',
        aliases: ['connect', 'reach', 'dm'],
        description: 'Contact options',
        usage: 'contact [email|phone|github|instagram|facebook|book] | contact copy <email|phone>',
        handler: async (args) => {
            const [sub, sub2] = args

            const open = (url: string) => ({ type: 'open', payload: url })
            const copy = (text: string) => ({
                type: 'toast',
                payload: {
                    title: 'Copied to clipboard',
                    description: text
                }
            })

            const contactMap: Record<string, () => any> = {
                email: () => open('mailto:dnioko0412@gmail.com'),
                phone: () => open('tel:+97680296007'),
                github: () => open('https://github.com/dnii0412'),
                instagram: () => open('https://www.instagram.com/dnii_d/'),
                facebook: () => open('https://www.facebook.com/dnii.dnii.0412'),
                book: () => open(process.env.NEXT_PUBLIC_BOOK_URL || '#')
            }

            if (sub === 'copy') {
                if (sub2 === 'phone') {
                    return copy('+976 80296007')
                } else if (sub2 === 'email') {
                    return copy('dnioko0412@gmail.com')
                } else {
                    return {
                        type: 'text',
                        payload: 'Usage: contact copy <email|phone>'
                    }
                }
            }

            if (sub && contactMap[sub]) {
                return contactMap[sub]()
            }

            return {
                type: 'html',
                payload: `
          <div class="space-y-2">
            <div class="font-bold text-green-500">Contact Options:</div>
            <div class="text-sm space-y-1">
              <div><span class="text-blue-400">contact email</span> - Open email client</div>
              <div><span class="text-blue-400">contact phone</span> - Open phone dialer</div>
              <div><span class="text-blue-400">contact github</span> - Open GitHub profile</div>
              <div><span class="text-blue-400">contact instagram</span> - Open Instagram</div>
              <div><span class="text-blue-400">contact facebook</span> - Open Facebook</div>
              <div><span class="text-blue-400">contact book</span> - Schedule a call</div>
              <div class="mt-2 text-xs text-muted-foreground">
                Copy options: <span class="text-blue-400">contact copy email</span> | <span class="text-blue-400">contact copy phone</span>
              </div>
            </div>
          </div>
        `
            }
        }
    }
]

// Helper function to resolve command by name or alias
export function resolveCommand(name: string): CommandSpec | null {
    const normalizedName = name.toLowerCase()

    for (const command of commands) {
        if (command.name === normalizedName) return command
        if (command.aliases?.includes(normalizedName)) return command
    }

    return null
}

// Get all command names and aliases for autocomplete
export function getAllCommandNames(): string[] {
    const names: string[] = []

    for (const command of commands) {
        names.push(command.name)
        if (command.aliases) {
            names.push(...command.aliases)
        }
    }

    return names
}
