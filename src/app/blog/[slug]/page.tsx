import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BackButton } from '@/components/back-button';
import { ClientScrollHandler } from '@/components/client-scroll-handler';
import { formatPostDate, getPost, getPostSlugs, SITE_URL } from '@/lib/blog';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;
  const image = {
    url: `${SITE_URL}/opengraph-image.png`,
    width: 1200,
    height: 630,
    alt: 'Vicente Sanchez'
  };

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author ?? 'Vicente Sanchez' }],
    category: post.category,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      images: [image],
      locale: 'en_US',
      type: 'article',
      url,
      publishedTime: new Date(`${post.date}T12:00:00Z`).toISOString(),
      authors: [post.author ?? 'Vicente Sanchez']
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [image.url],
      creator: '@vicentesandev'
    }
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const { default: Content } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <main className="relative mx-auto flex w-full max-w-xl flex-col items-start justify-center gap-8 px-6 py-20 text-[13px] text-neutral-500 sm:px-10">
      <ClientScrollHandler />
      <BackButton />

      <div className="flex flex-col gap-1">
        <h1 className="text-primary">{post.title}</h1>
        <p className="text-muted-foreground text-xs">{formatPostDate(post.date)}</p>
      </div>

      <article className="flex w-full min-w-0 flex-col gap-4">
        <Content />
      </article>
    </main>
  );
}
