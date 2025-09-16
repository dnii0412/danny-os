import { Window } from "@/components/window"
import { ProjectDetails } from "@/components/project-details"
import { PROJECTS } from "@/lib/projects"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = PROJECTS.find((p) => p.id === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <Window title={`${project.name} - Project Details`}>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/applications">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
        </div>
        <ProjectDetails project={project} />
      </div>
    </Window>
  )
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.id,
  }))
}
