export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto flex w-full flex-col gap-10 px-4 py-8 sm:gap-12 sm:px-6 sm:py-12 md:gap-16 md:px-8 md:py-20">
      {children}
    </div>
  )
}
