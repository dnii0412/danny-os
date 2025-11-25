import { Window } from "@/components/window"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, MapPin, Heart } from "lucide-react"
import { ContactLinks } from "@/components/contact-links"

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Vercel",
  "Firebase",
  "Git",
  "Figma",
]

const pmSkills = [
  "WBS",
  "CPM",
  "Agile & Sprint",
  "Trello",
  "Notion",
  "Risk Management",
  "Stakeholder Communication",
  "Sprint Planning",
  "Team Leadership",
  "Product Strategy",
  "User Story Mapping",
  "Roadmap Planning",
]

const values = ["Continuous learning", "Collaborative spirit", "Building with trust & love", "Passionate & reliable"]

export default function AboutPage() {
  return (
    <Window title="System Info">
      <div className="space-y-6">
        <div className="flex items-start gap-6">
          <Avatar className="w-24 h-24">
            <AvatarImage src="https://static.thenounproject.com/png/1594252-200.png" alt="Danny" />
            <AvatarFallback className="text-2xl">D</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2">Danny Developer</h2>
            <p className="text-lg text-muted-foreground mb-4">Developer × Project Manager</p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Ulaanbaatar, Mongolia</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>5+ years experience</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>💻</span>
                System Specifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-medium">Processor</div>
                  <div className="text-sm text-muted-foreground">Full-Stack Development</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Memory</div>
                  <div className="text-sm text-muted-foreground">5+ years experience</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Storage</div>
                  <div className="text-sm text-muted-foreground">10+ projects completed</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Uptime</div>
                  <div className="text-sm text-muted-foreground">84.6% availability</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>📋</span>
                Project Management Specs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-medium">Methodology</div>
                  <div className="text-sm text-muted-foreground">CPM, WBS, Agile & Sprint</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Tools</div>
                  <div className="text-sm text-muted-foreground">Trello, Notion</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Specialties</div>
                  <div className="text-sm text-muted-foreground">Delegation, Communication</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Team Size</div>
                  <div className="text-sm text-muted-foreground">3-5 people and more</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>🛠️</span>
                Development Stack
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>📊</span>
                PM Toolkit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {pmSkills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Core Values
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground italic text-center">
                "Do everything in love." — 1 Corinthians 16:14
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>🔗</span>
              Connect with Me
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ContactLinks />
          </CardContent>
        </Card>

        <div className="text-center text-sm text-muted-foreground pb-24 relative z-10">
          <p>From herding cows in Mongolia to crafting digital experiences</p>
          <p>Every line of code written with purpose and care</p>
        </div>
      </div>
    </Window>
  )
}
