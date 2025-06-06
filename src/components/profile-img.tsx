import Image, { type StaticImageData } from 'next/image'

interface ProfileImageProps {
  src: StaticImageData
  alt: string
}

export function ProfileImage({ src, alt }: ProfileImageProps) {
  return (
    <div className="relative mx-2 size-24 rounded-2xl">
      <Image
        src={src}
        alt={alt}
        fill
        className="pointer-events-none select-none rounded-2xl object-cover"
        priority
      />
      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_10px_rgba(0,0,0,0.3)] outline-1 outline-muted/80 outline-offset-[-2px]" />
    </div>
  )
}
