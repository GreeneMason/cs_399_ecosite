"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-5 h-10 rounded-full bg-slate-200 dark:bg-slate-800" />
  }

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-2 h-9 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 shadow-inner transition-colors focus:outline-none focus:ring-2 focus:ring-[#01c953]"
      aria-label="Toggle theme"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <div
        className={`
          absolute left-1/2 -translate-x-1/2 w-4.5 h-4.5 rounded-full shadow-lg border border-slate-200 dark:border-slate-700
          flex items-center justify-center transition-all duration-500 ease-in-out
          ${isDark ? "top-[calc(100%-1.125rem)] bg-slate-900 text-[#01c953]" : "top-0 bg-white text-[#01c953]"}
        `}
      >
        {isDark ? (
          <Moon className="h-3 w-3" />
        ) : (
          <Sun className="h-3 w-3" />
        )}
      </div>
    </button>
  )
}
