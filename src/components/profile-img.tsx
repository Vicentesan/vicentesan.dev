'use client'

import { motion } from 'framer-motion'
import type { StaticImageData } from 'next/image'

interface ProfileImageProps {
  image: StaticImageData
  alt?: string
  'aria-hidden'?: boolean
  isParentHovered?: boolean
}

export function ProfileImage({
  image,
  alt,
  'aria-hidden': ariaHidden,
  isParentHovered = false,
  ...props
}: ProfileImageProps) {
  return (
    <motion.div
      key={`${image.src}-profile-image-container`}
      className="relative mx-2 size-24 cursor-pointer overflow-hidden rounded-2xl"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      animate={{ scale: isParentHovered ? 1.05 : 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      {...props}
    >
      <motion.img
        src={image.src}
        alt={alt}
        className="pointer-events-none h-full w-full select-none rounded-2xl object-cover"
        layoutId={`${image.src}-profile-image`}
        aria-hidden={ariaHidden}
        loading="eager"
      />
      <motion.div
        layoutId={`${image.src}-profile-image-overlay`}
        className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_10px_rgba(0,0,0,0.3)] outline-1 outline-muted/80 outline-offset-[-2px]"
      />
    </motion.div>
  )
}
