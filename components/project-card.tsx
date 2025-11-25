"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Info } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type { Project } from "@/lib/projects"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter()

  const handleCardClick = () => {
    router.push(`/applications/${project.id}`)
  }

  return (
    <article 
      onClick={handleCardClick}
      className="flex flex-col h-full min-h-[420px] justify-between rounded-2xl border border-[var(--line)] bg-[var(--bg-1)] p-5 shadow-sm group hover:shadow-lg transition-all duration-200 hover:border-green-600/20 cursor-pointer"
    >
      {/* Content section that grows */}
      <div className="flex-1 space-y-4">
        {/* 1) Header */}
        <header className="space-y-1">
          <h3 className="text-lg font-semibold text-[var(--fg0)] text-balance group-hover:text-green-600 transition-colors">
            {project.name}
          </h3>
          {project.description && (
            <p className="text-sm text-[var(--fg1)] text-pretty font-medium">{project.description}</p>
          )}
        </header>

        {/* 2) Body */}
        <div className="text-sm text-[var(--fg1)] leading-relaxed">
          <p className="line-clamp-3 overflow-hidden">
            {project.overview}
          </p>
        </div>

        {/* 3) Tags */}
        <ul className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 6).map((tech) => (
            <li key={tech}>
              <Badge variant="outline" className="text-xs whitespace-nowrap">
                {tech}
              </Badge>
            </li>
          ))}
          {project.techStack.length > 6 && (
            <li>
              <Badge variant="outline" className="text-xs whitespace-nowrap">
                +{project.techStack.length - 6} more
              </Badge>
            </li>
          )}
        </ul>
      </div>

      {/* 4) Footer: meta + buttons pinned to bottom */}
      <div className="mt-6 space-y-4">
        {/* Meta pills: fixed heights */}
        <div className="grid grid-cols-3 gap-2">
          <div className="h-10 rounded-xl bg-muted/20 text-gray-700 dark:text-muted-foreground text-xs px-2 flex items-center justify-center text-center overflow-hidden">
            <span className="truncate">{project.meta.duration}</span>
          </div>
          <div className="h-10 rounded-xl bg-muted/20 text-gray-700 dark:text-muted-foreground text-xs px-2 flex items-center justify-center text-center overflow-hidden">
            <span className="truncate">{project.meta.team}</span>
          </div>
          <div className="h-10 rounded-xl bg-muted/20 text-gray-700 dark:text-muted-foreground text-xs px-2 flex items-center justify-center text-center overflow-hidden">
            <span className="truncate">{project.meta.category}</span>
          </div>
        </div>
        {/* Button row — equal height & bottom-aligned */}
        <div className="flex gap-3 items-stretch" onClick={(e) => e.stopPropagation()}>
          <Button
            size="sm"
            variant="outline"
            asChild
            className="flex-1 h-10 bg-transparent inline-flex items-center justify-center focus:ring-2 focus:ring-[var(--accent)]"
          >
            <Link href={`/applications/${project.id}`}>
              <Info className="w-4 h-4 mr-2" />
              Details
            </Link>
          </Button>
          <Button
            size="sm"
            asChild
            className="flex-1 h-10 btn-accent inline-flex items-center justify-center focus:ring-2 focus:ring-[var(--accent)]"
          >
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </a>
          </Button>
        </div>
      </div>
    </article>
  )
}
