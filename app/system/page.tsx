"use client"

import { Window } from "@/components/window"
import { Card, CardContent } from "@/components/ui/card"
import { Monitor, Wrench, Clipboard, BarChart3, Cpu, HardDrive, Clock, Users } from "lucide-react"

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
                        <p className="text-lg text-muted-foreground mb-2">Founder, Project Manager & Lead Developer</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <span>📍</span>
                                <span>Ulaanbaatar, Mongolia</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span>📅</span>
                                <span>5+ years experience</span>
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
                                    <span className="text-muted-foreground">Processor:</span>
                                    <span className="font-medium">Full-Stack Development</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Memory:</span>
                                    <span className="font-medium">5+ years experience</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Storage:</span>
                                    <span className="font-medium">10+ projects completed</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Uptime:</span>
                                    <span className="font-medium">84.6% availability</span>
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
                                <div className="bg-muted px-3 py-2 rounded text-sm">JavaScript</div>
                                <div className="bg-muted px-3 py-2 rounded text-sm">TypeScript</div>
                                <div className="bg-muted px-3 py-2 rounded text-sm">React</div>
                                <div className="bg-muted px-3 py-2 rounded text-sm">Next.js</div>
                                <div className="bg-muted px-3 py-2 rounded text-sm">Node.js</div>
                                <div className="bg-muted px-3 py-2 rounded text-sm">MongoDB</div>
                                <div className="bg-muted px-3 py-2 rounded text-sm">Vercel</div>
                                <div className="bg-muted px-3 py-2 rounded text-sm">Firebase</div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Clipboard className="w-5 h-5" />
                                <h3 className="text-lg font-semibold">Project Management Specs</h3>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <span className="text-muted-foreground text-sm">Methodology:</span>
                                    <div className="mt-1">
                                        <span className="text-sm">WBS, CPM, Agile & Sprint</span>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-muted-foreground text-sm">Tools:</span>
                                    <div className="mt-1">
                                        <span className="text-sm">Trello, Notion</span>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-muted-foreground text-sm">Team Size:</span>
                                    <div className="mt-1">
                                        <span className="text-sm">3-5 people and more</span>
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
                                <div className="bg-muted px-3 py-2 rounded text-sm">Agile/Scrum</div>
                                <div className="bg-muted px-3 py-2 rounded text-sm">Kanban</div>
                                <div className="bg-muted px-3 py-2 rounded text-sm">Trello</div>
                                <div className="bg-muted px-3 py-2 rounded text-sm">Notion</div>
                                <div className="bg-muted px-3 py-2 rounded text-sm">Slack</div>
                                <div className="bg-muted px-3 py-2 rounded text-sm">WBS</div>
                                <div className="bg-muted px-3 py-2 rounded text-sm">CPM</div>
                                <div className="bg-muted px-3 py-2 rounded text-sm">Risk Management</div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Users className="w-5 h-5" />
                            <h3 className="text-lg font-semibold">Core Values</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="text-center">
                                <div className="bg-muted w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Cpu className="w-6 h-6" />
                                </div>
                                <span className="text-sm font-medium">Continuous Learning</span>
                            </div>
                            <div className="text-center">
                                <div className="bg-muted w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Users className="w-6 h-6" />
                                </div>
                                <span className="text-sm font-medium">Collaborative Spirit</span>
                            </div>
                            <div className="text-center">
                                <div className="bg-muted w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <HardDrive className="w-6 h-6" />
                                </div>
                                <span className="text-sm font-medium">Building with Trust & Love</span>
                            </div>
                            <div className="text-center">
                                <div className="bg-muted w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <span className="text-sm font-medium">Passionate & Reliable</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </Window>
    )
}
