"use client";
import { ContactPageDock } from "@/components/contact/ContactPageDock";
import { QuickConnect } from "@/components/contact/QuickConnect";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Window } from "@/components/window";
import { Coffee, MapPin, Terminal } from "lucide-react";

export default function ContactPage() {
  return (
    <Window title="Connect & Messaging">
      <div className="space-y-6 pb-24">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold text-[var(--fg0)]">
            Let's Connect
          </h1>
          <p className="text-[var(--fg1)]">
            Fast ways to reach me. Pick your lane or use the terminal:{" "}
            <code className="bg-[var(--bg-2)] px-1 rounded text-sm">
              contact email
            </code>
          </p>
        </header>

        <QuickConnect />

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Coffee className="w-5 h-5 text-[var(--accent)]" />
                Availability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Status</span>
                  <Badge className="bg-[color-mix(in_oklab,var(--accent)_20%,transparent)] text-[var(--accent)] border-[var(--accent)]/20">
                    Open to Work
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Response Time</span>
                  <span className="text-sm text-[var(--fg1)]">
                    Within 24 hours
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Timezone</span>
                  <span className="text-sm text-[var(--fg1)]">
                    UTC+8 (Mongolia)
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--line)]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[var(--accent)] mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Based in Ulaanbaatar</p>
                    <p className="text-xs text-[var(--fg1)]">
                      Open to remote work worldwide
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[var(--accent)]" />
                Terminal Commands
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <code className="bg-[var(--bg-2)] px-2 py-1 rounded text-xs">
                    contact email
                  </code>
                  <span className="text-[var(--fg1)]">Open email client</span>
                </div>
                <div className="flex items-center gap-2">
                  <code className="bg-[var(--bg-2)] px-2 py-1 rounded text-xs">
                    contact phone
                  </code>
                  <span className="text-[var(--fg1)]">Open phone dialer</span>
                </div>
                <div className="flex items-center gap-2">
                  <code className="bg-[var(--bg-2)] px-2 py-1 rounded text-xs">
                    contact github
                  </code>
                  <span className="text-[var(--fg1)]">Open GitHub profile</span>
                </div>
                <div className="flex items-center gap-2">
                  <code className="bg-[var(--bg-2)] px-2 py-1 rounded text-xs">
                    contact copy email
                  </code>
                  <span className="text-[var(--fg1)]">
                    Copy email to clipboard
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--line)]">
                <p className="text-xs text-[var(--fg1)]">
                  Try{" "}
                  <code className="bg-[var(--bg-2)] px-1 rounded">help</code> in
                  the terminal for more commands
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>What I Can Help With</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div className="p-3 rounded-lg bg-[var(--bg-2)]">
                <h4 className="font-medium text-sm mb-1">Full Stack Apps</h4>
                <p className="text-xs text-[var(--fg1)]">
                  MERN Stack web apps and Next, TypeScript apps
                </p>
              </div>
              <div className="p-3 rounded-lg bg-[var(--bg-2)]">
                <h4 className="font-medium text-sm mb-1">Project Leadership</h4>
                <p className="text-xs text-[var(--fg1)]">
                  Team coordination, technical planning
                </p>
              </div>
              <div className="p-3 rounded-lg bg-[var(--bg-2)]">
                <h4 className="font-medium text-sm mb-1">
                  E-Learning Platforms
                </h4>
                <p className="text-xs text-[var(--fg1)]">
                  Learning management systems
                </p>
              </div>
              <div className="p-3 rounded-lg bg-[var(--bg-2)]">
                <h4 className="font-medium text-sm mb-1">UI and UX</h4>
                <p className="text-xs text-[var(--fg1)]">
                  Modern interfaces, user experience
                </p>
              </div>
              <div className="p-3 rounded-lg bg-[var(--bg-2)]">
                <h4 className="font-medium text-sm mb-1">
                  E-Commerce Solutions
                </h4>
                <p className="text-xs text-[var(--fg1)]">
                  Online stores, payment integration
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <ContactPageDock />
    </Window>
  );
}
