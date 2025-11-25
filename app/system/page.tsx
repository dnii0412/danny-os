"use client";

import { ContactLinks } from "@/components/contact-links";
import { Card, CardContent } from "@/components/ui/card";
import { Window } from "@/components/window";
import {
  BarChart3,
  Clipboard,
  Clock,
  Cpu,
  HardDrive,
  Link2,
  Monitor,
  Users,
  Wrench,
} from "lucide-react";

export default function SystemPage() {
  return (
    <Window title="System Information">
      <div className="space-y-6">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">DD</span>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">Danny Developer</h1>
            <p className="text-lg text-gray-700 dark:text-muted-foreground mb-2">
              Founder, Project Manager & Lead Developer
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-700 dark:text-muted-foreground">
              <div className="flex items-center gap-1">
                <span>📍</span>
                <span>Ulaanbaatar, Mongolia</span>
              </div>
              <div className="flex items-center gap-1">
                <span>📅</span>
                <span>4+ years of experience</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Monitor className="w-5 h-5" />
                <h3 className="text-lg font-semibold">System Specifications</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-muted-foreground">Processor:</span>
                  <span className="font-medium text-gray-900 dark:text-foreground">Full-Stack Development</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-muted-foreground">Memory:</span>
                  <span className="font-medium text-gray-900 dark:text-foreground">4+ years of experience</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-muted-foreground">Storage:</span>
                  <span className="font-medium text-gray-900 dark:text-foreground">9+ projects completed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-muted-foreground">Uptime:</span>
                  <span className="font-medium text-gray-900 dark:text-foreground">84.6% availability</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Wrench className="w-5 h-5" />
                <h3 className="text-lg font-semibold">Development Stack</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-muted border border-[var(--line)] px-3 py-1.5 rounded text-base">
                  JavaScript
                </div>
                <div className="bg-muted border border-[var(--line)] px-3 py-1.5 rounded text-base">
                  TypeScript
                </div>
                <div className="bg-muted border border-[var(--line)] px-3 py-1.5 rounded text-base">
                  React
                </div>
                <div className="bg-muted border border-[var(--line)] px-3 py-1.5 rounded text-base">
                  Next.js
                </div>
                <div className="bg-muted border border-[var(--line)] px-3 py-1.5 rounded text-base">
                  Node.js
                </div>
                <div className="bg-muted border border-[var(--line)] px-3 py-1.5 rounded text-base">
                  MongoDB
                </div>
                <div className="bg-muted border border-[var(--line)] px-3 py-1.5 rounded text-base">
                  Vercel
                </div>
                <div className="bg-muted border border-[var(--line)] px-3 py-1.5 rounded text-base">
                  Firebase
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clipboard className="w-5 h-5" />
                <h3 className="text-lg font-semibold">
                  Project Management Specs
                </h3>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="text-gray-600 dark:text-muted-foreground text-sm">
                    Methodology:
                  </span>
                  <div className="mt-1">
                    <span className="text-sm text-gray-900 dark:text-foreground">WBS, CPM, Agile & Sprint</span>
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-muted-foreground text-sm">Tools:</span>
                  <div className="mt-1">
                    <span className="text-sm text-gray-900 dark:text-foreground">Trello, Notion</span>
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-muted-foreground text-sm">
                    Team Size:
                  </span>
                  <div className="mt-1">
                    <span className="text-sm text-gray-900 dark:text-foreground">3-5 people and more</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="w-5 h-5" />
                <h3 className="text-lg font-semibold">PM Toolkit</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-muted border border-border px-3 py-1.5 rounded text-base">
                  Agile/Scrum
                </div>
                <div className="bg-muted border border-border px-3 py-1.5 rounded text-base">
                  Kanban
                </div>
                <div className="bg-muted border border-border px-3 py-1.5 rounded text-base">
                  Trello
                </div>
                <div className="bg-muted border border-border px-3 py-1.5 rounded text-base">
                  Notion
                </div>
                <div className="bg-muted border border-border px-3 py-1.5 rounded text-base">
                  Slack
                </div>
                <div className="bg-muted border border-border px-3 py-1.5 rounded text-base">
                  WBS
                </div>
                <div className="bg-muted border border-border px-3 py-1.5 rounded text-base">
                  CPM
                </div>
                <div className="bg-muted border border-border px-3 py-1.5 rounded text-base">
                  Risk Management
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Link2 className="w-5 h-5" />
                <h3 className="text-lg font-semibold">Connect with Me</h3>
              </div>
              <ContactLinks />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5" />
                <h3 className="text-lg font-semibold">Core Values</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="bg-muted w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium">
                    Continuous Learning
                  </span>
                </div>
                <div className="text-center">
                  <div className="bg-muted w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium">
                    Collaborative Spirit
                  </span>
                </div>
                <div className="text-center">
                  <div className="bg-muted w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <HardDrive className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium">
                    Building with Trust & Love
                  </span>
                </div>
                <div className="text-center">
                  <div className="bg-muted w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Clock className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium">
                    Passionate & Reliable
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Window>
  );
}
