"use client";

import { Dock } from "@/components/dock";
import { ThemeProvider } from "@/components/theme-provider";
import { useUI } from "@/lib/store";
import { Analytics } from "@vercel/analytics/next";
import type React from "react";
import { Suspense, useEffect } from "react";

// Added theme management at root level
function ThemeManager({ children }: { children: React.ReactNode }) {
  const { effectiveTheme, computeEffectiveTheme } = useUI();

  useEffect(() => {
    computeEffectiveTheme();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => computeEffectiveTheme();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [computeEffectiveTheme]);

  useEffect(() => {
    // Apply dark class to html element
    document.documentElement.classList.toggle(
      "dark",
      effectiveTheme === "dark"
    );
  }, [effectiveTheme]);

  return <>{children}</>;
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={null}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ThemeManager>{children}</ThemeManager>
      </ThemeProvider>
      <Dock />
      <Analytics />
    </Suspense>
  );
}
