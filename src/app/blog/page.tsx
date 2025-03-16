'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function BlogPage() {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (pathname.endsWith('/blog')) {
      router.push('/')
    }
  }, [pathname, router])
}
