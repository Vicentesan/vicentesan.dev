export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="my-20 flex max-w-3xl">{children}</div>
}
