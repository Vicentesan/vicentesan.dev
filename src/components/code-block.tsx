// src/components/code-block.tsx
'use client'

import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'

interface CodeBlockProps {
  code: string
  lang: string
}

export default function CodeBlock({ code, lang }: CodeBlockProps) {
  const [highlightedCode, setHighlightedCode] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function highlight() {
      try {
        const html = await codeToHtml(code, {
          lang,
          theme: 'vesper',
        })

        setHighlightedCode(html)
      } catch (error) {
        console.error('Failed to highlight code:', error)
      } finally {
        setIsLoading(false)
      }
    }

    highlight()
  }, [code, lang])

  if (isLoading) {
    return <div className="h-64 animate-pulse rounded-md bg-gray-800"></div>
  }

  return (
    <div
      className="overflow-hidden rounded-md"
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
    />
  )
}
