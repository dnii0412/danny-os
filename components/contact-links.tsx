import { Mail, Phone, Github, Instagram, Facebook } from "lucide-react"

interface ContactLinksProps {
  className?: string
}

export function ContactLinks({ className }: ContactLinksProps) {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "dnioko0412@gmail.com",
      href: "mailto:dnioko0412@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+976 80296007",
      href: "tel:+97680296007",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@dnii0412",
      href: "https://github.com/dnii0412",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@xperience.proydrs",
      href: "https://www.instagram.com/xperience.proydrs/",
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "Xperience Pro",
      href: "https://www.facebook.com/profile.php?id=61578833769304",
    },
  ]

  return (
    <div className={className}>
      <div className="space-y-3">
        {contactLinks.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
            >
              <Icon className="w-5 h-5 text-emerald-600 group-hover:text-emerald-700" />
              <div>
                <div className="font-medium">{link.label}</div>
                <div className="text-sm text-muted-foreground">{link.value}</div>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
