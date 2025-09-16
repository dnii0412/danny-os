import { Window } from "@/components/window"
import { ProjectCard } from "@/components/project-card"
import { PROJECTS } from "@/lib/projects"

export default function ApplicationsPage() {
  return (
    <Window title="Applications">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">My Projects</h2>
          <p className="text-muted-foreground">
            A collection of applications and projects I've built with detailed breakdowns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Window>
  )
}
