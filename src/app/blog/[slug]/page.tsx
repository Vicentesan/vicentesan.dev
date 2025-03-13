import { notFound } from 'next/navigation'

import type { PageProps } from '@/types/languages'

export default async function Page(
  props: Promise<PageProps<{ slug: string }>>,
) {
  const params = await (await props).params
  const file = await import(`@/blog/posts/${params.slug}.mdx`)

  if (!file) return notFound()

  const Content = file.default

  return <Content />
}
