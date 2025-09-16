"use client"

import { Window } from "@/components/window"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from "lucide-react"
import { useRef } from "react"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"

export default function ResumePage() {
  const resumeRef = useRef<HTMLDivElement>(null)

  const handleDownload = async () => {
    if (!resumeRef.current) return

    try {
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      })

      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')

      const imgWidth = 210
      const pageHeight = 295
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      let heightLeft = imgHeight

      let position = 0

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }

      pdf.save('Danny-Developer-Resume.pdf')
    } catch (error) {
      console.error('Error generating PDF:', error)
      // Fallback to text download
      const resumeContent = `
DANNY DEVELOPER
Founder, Project Manager & Lead Developer
dnioko0412@gmail.com • Ulaanbaatar, Mongolia • instagram.com/dnii_d

═══════════════════════════════════════════════════════════════════════════════

EXPERIENCE

───────────────────────────────────────────────────────────────────────────────

Founder & Lead Developer — XP Digital
July 2025 – Present
• Founded XP Digital, a freelance web development agency
• Served as Project Manager, Lead Developer, and Client Lead
• Successfully delivered 4 websites in under 1.5 months (3 educational platforms, 1 travel platform)
• Implemented admin dashboards, authentication, and payment integrations (QPay, BYL)
• Integrated video hosting and uploads with Bunny.net TUS
• Enabled clients to sell products and services more efficiently, significantly boosting sales and helping some launch their businesses from scratch

───────────────────────────────────────────────────────────────────────────────

Full-Stack Developer — Honest Media Consulting
2023 – 2024
• Developed and maintained company websites using React, Firebase, Next.js, TypeScript, Tailwind
• Created solutions that simplified sharing company work and improved online presence
• Deployed projects on Vercel with strong value delivery while company was active

───────────────────────────────────────────────────────────────────────────────

Technician, Sound Engineer & Drummer — First Church
2021 – Present
• Volunteered as technician, sound engineer, and drummer
• Managed stage audio, technical systems, and live mixing
• Built teamwork, leadership, and technical problem-solving skills

═══════════════════════════════════════════════════════════════════════════════

EDUCATION

───────────────────────────────────────────────────────────────────────────────

Amjilt Cyber School — Graduated 2025
Gap Year (2025 – 2026) — Self-directed learning and real-world project work
• Focused on full-stack development, system design, and project management
• Preparing to study abroad next year

═══════════════════════════════════════════════════════════════════════════════

SKILLS

───────────────────────────────────────────────────────────────────────────────

Frontend: Next.js, React, TypeScript, Tailwind CSS
Backend: Node.js, Express, MongoDB
Tools & Infra: Vercel, Firebase, Bunny.net (TUS), Cloudinary, QPay API, BYL Payments, Git
Project Management: Trello, Notion
Methodologies: Agile, Sprints, Risk Management, CPM, PERT
Other: Team Leadership, Audio Engineering
`

      const blob = new Blob([resumeContent], { type: 'text/plain' })
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "Danny-Developer-Resume.txt"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    }
  }

  return (
    <Window title="Documents">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Resume</h2>
            <p className="text-muted-foreground">My professional experience and qualifications</p>
          </div>

          <Button className="flex items-center gap-2" onClick={handleDownload}>
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </div>

        <Card ref={resumeRef}>
          <CardContent className="p-8">
            <div className="space-y-8">
              <div className="text-center">
                <h1 className="text-3xl font-bold mb-2">Danny Developer</h1>
                <p className="text-lg text-muted-foreground mb-4">Founder, Project Manager & Lead Developer</p>
                <div className="flex justify-center gap-4 text-sm">
                  <span>dnioko0412@gmail.com</span>
                  <span>•</span>
                  <span>Ulaanbaatar, Mongolia</span>
                  <span>•</span>
                  <span>instagram.com/dnii_d</span>
                </div>
              </div>

              <div>
                <div className="border-t border-border mb-6"></div>
                <h3 className="text-xl font-semibold mb-3">Experience</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium">Founder, Project Manager & Lead Developer</h4>
                        <p className="text-muted-foreground">XP Digital</p>
                      </div>
                      <span className="text-sm text-muted-foreground">July 2025 – Present</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>• Founded XP Digital, a freelance web development agency</li>
                      <li>• Served as Project Manager, Lead Developer, and Client Lead</li>
                      <li>• Successfully delivered 4 websites in under 1.5 months (3 educational platforms, 1 travel platform)</li>
                      <li>• Implemented admin dashboards, authentication, and payment integrations (QPay, BYL)</li>
                      <li>• Integrated video hosting and uploads with Bunny.net TUS</li>
                      <li>• <strong>Enabled clients to sell products and services more efficiently, significantly boosting sales and helping some launch their businesses from scratch</strong></li>
                    </ul>
                  </div>

                  <div className="border-t border-border/50 pt-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium">Full-Stack Developer</h4>
                        <p className="text-muted-foreground">Honest Media Consulting</p>
                      </div>
                      <span className="text-sm text-muted-foreground">2023 – 2024</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>• Developed and maintained company websites using React, Firebase, Next.js, TypeScript, Tailwind</li>
                      <li>• Created solutions that simplified sharing company work and improved online presence</li>
                      <li>• Deployed projects on Vercel with strong value delivery while company was active</li>
                    </ul>
                  </div>

                  <div className="border-t border-border/50 pt-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium">Technician, Sound Engineer & Drummer</h4>
                        <p className="text-muted-foreground">First Church</p>
                      </div>
                      <span className="text-sm text-muted-foreground">2021 – Present</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>• Volunteered as technician, sound engineer, and drummer</li>
                      <li>• Managed stage audio, technical systems, and live mixing</li>
                      <li>• Built teamwork, leadership, and technical problem-solving skills</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="border-t border-border mb-6"></div>
                <h3 className="text-xl font-semibold mb-3">Education</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">High School Graduate</h4>
                      <p className="text-muted-foreground">Amjilt Cyber School</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2025</span>
                  </div>

                  <div className="border-t border-border/30 pt-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-medium">Gap Year</h4>
                        <p className="text-muted-foreground">Self-directed learning and real-world project work</p>
                      </div>
                      <span className="text-sm text-muted-foreground">2025 – 2026</span>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-2">
                      <p>• Focused on full-stack development, system design, and project management</p>
                      <p>• Preparing to study abroad next year</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="border-t border-border mb-6"></div>
                <h3 className="text-xl font-semibold mb-3">Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                  <div className="space-y-3">
                    <h4 className="font-medium mb-2">Frontend</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Next.js</li>
                      <li>React</li>
                      <li>TypeScript</li>
                      <li>Tailwind CSS</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium mb-2">Backend</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Node.js</li>
                      <li>Express</li>
                      <li>MongoDB</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium mb-2">Tools & Infra</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Vercel</li>
                      <li>Firebase</li>
                      <li>Bunny.net (TUS)</li>
                      <li>Cloudinary</li>
                      <li>QPay API</li>
                      <li>BYL Payments</li>
                      <li>Git</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium mb-2">Project Management</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Trello</li>
                      <li>Notion</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium mb-2">Methodologies</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Agile</li>
                      <li>Sprints</li>
                      <li>Risk Management</li>
                      <li>CPM</li>
                      <li>PERT</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium mb-2">Other</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Team Leadership</li>
                      <li>Audio Engineering</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="border-t border-border mb-6"></div>
                <h3 className="text-xl font-semibold mb-3">Core Values</h3>
                <div className="text-sm text-muted-foreground space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[var(--accent)] rounded-full"></div>
                    <p>Continuous learning</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[var(--accent)] rounded-full"></div>
                    <p>Collaborative spirit</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[var(--accent)] rounded-full"></div>
                    <p>Building with trust & love</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[var(--accent)] rounded-full"></div>
                    <p>Passionate & reliable</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Window>
  )
}
