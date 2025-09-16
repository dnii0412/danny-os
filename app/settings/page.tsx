"use client"

import { Window } from "@/components/window"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { useUI } from "@/lib/store"
import { WALLPAPER_PRESETS } from "@/lib/wallpapers"
import { Palette, Volume2, Globe, Zap, RotateCcw } from "lucide-react"

export default function SettingsPage() {
  const { theme, wallpaper, grain, motion, language, sounds, set, computeEffectiveTheme } = useUI()

  const handleReset = () => {
    localStorage.removeItem("dannyos.ui")
    set({
      theme: "system",
      wallpaper: "moss",
      grain: true,
      motion: "auto",
      language: "en",
      sounds: false,
    })
    computeEffectiveTheme()
  }

  return (
    <Window title="Settings">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">System Preferences</h2>
            <p className="text-muted-foreground">Customize your DannyOS experience</p>
          </div>
          <Button variant="outline" size="sm" onClick={handleReset}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Appearance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="font-medium mb-3">Theme</div>
                <div className="grid grid-cols-3 gap-3">
                  {(["system", "light", "dark"] as const).map((themeOption) => (
                    <div
                      key={themeOption}
                      className="radio-card cursor-pointer"
                      data-checked={theme === themeOption}
                      onClick={() => set({ theme: themeOption })}
                    >
                      <div className="font-medium capitalize">{themeOption}</div>
                      <div className="text-xs opacity-70 mt-1">
                        {themeOption === "system" && "Follow system"}
                        {themeOption === "light" && "Always light"}
                        {themeOption === "dark" && "Always dark"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-medium mb-3">Wallpaper Preset</div>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(WALLPAPER_PRESETS).map(([key, preset]) => (
                    <div
                      key={key}
                      className="radio-card cursor-pointer"
                      data-checked={wallpaper === key}
                      onClick={() => set({ wallpaper: key as any })}
                    >
                      <div
                        className="wallpaper-preview mb-2"
                        style={{
                          background: `linear-gradient(135deg, ${preset.a} 0%, ${preset.b} 100%)`,
                        }}
                      />
                      <div className="font-medium capitalize">{key}</div>
                      <div className="text-xs opacity-70">
                        {key === "linen" && "Soft ivory gradient"}
                        {key === "ivory" && "Pure white gradient"}
                        {key === "moss" && "Forest green accent"}
                        {key === "graphite" && "Dark with moss accent"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Grain Effect</div>
                  <div className="text-sm text-muted-foreground">Add subtle texture to wallpapers</div>
                </div>
                <Switch checked={grain} onCheckedChange={(checked) => set({ grain: checked })} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Motion & Effects
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="font-medium mb-3">Motion Preference</div>
                <div className="grid grid-cols-3 gap-3">
                  {(["auto", "on", "off"] as const).map((motionOption) => (
                    <div
                      key={motionOption}
                      className="radio-card cursor-pointer"
                      data-checked={motion === motionOption}
                      onClick={() => set({ motion: motionOption })}
                    >
                      <div className="font-medium capitalize">{motionOption}</div>
                      <div className="text-xs opacity-70 mt-1">
                        {motionOption === "auto" && "Respect system"}
                        {motionOption === "on" && "Always animate"}
                        {motionOption === "off" && "Static only"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Localization
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="font-medium mb-3">Language</div>
                <div className="grid grid-cols-2 gap-3">
                  {(["en", "mn"] as const).map((lang) => (
                    <div
                      key={lang}
                      className="radio-card cursor-pointer"
                      data-checked={language === lang}
                      onClick={() => set({ language: lang })}
                    >
                      <div className="font-medium">{lang === "en" ? "English" : "Mongolian"}</div>
                      <div className="text-xs opacity-70 mt-1">{lang === "en" ? "Default language" : "Монгол хэл"}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="w-5 h-5" />
                Audio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Sound Effects</div>
                  <div className="text-sm text-muted-foreground">Play sounds for window actions</div>
                </div>
                <Switch checked={sounds} onCheckedChange={(checked) => set({ sounds: checked })} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Window>
  )
}
