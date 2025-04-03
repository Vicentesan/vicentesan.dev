// src/components/mdx-client-wrapper.tsx
'use client'

import React from 'react'

export default function MdxClientWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
