'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Button } from './button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="relative flex h-8 w-8 items-center justify-center overflow-hidden"
      >
        <div className="relative flex items-center justify-center">
          <div className="h-4 w-4" />
        </div>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative flex h-8 w-8 items-center justify-center overflow-hidden"
    >
      <div className="relative flex items-center justify-center">
        {theme === 'dark' ? (
          <SunIcon className="absolute h-4 w-4 transition-all duration-300" />
        ) : (
          <MoonIcon className="absolute h-4 w-4 transition-all duration-300" />
        )}
      </div>
    </Button>
  )
}
