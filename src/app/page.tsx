import tesseractLogo from '@/assets/tesseract-logo.png'
import vicenteSanchez from '@/assets/vicentesan.jpg'

import { ProfileImage } from '@/components/profile-img'
import { TextLine } from '@/components/text-line'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="mx-auto flex h-screen w-full max-w-7xl flex-col items-center justify-center">
      <div className="flex w-fit flex-col items-start gap-4">
        <TextLine>
          <span className="text-muted-foreground">Hey,</span>
          <span>I&apos;m</span>
          <ProfileImage src={vicenteSanchez} alt="Vicente Sanchez" />
          <span>Vicente</span>
        </TextLine>

        <TextLine>
          <span className="text-muted-foreground">a swe building</span>
          <Link
            href="https://usetesseract.com"
            target="_blank"
            className="underline-[1px] flex flex-row items-center gap-2 hover:underline"
          >
            <ProfileImage src={tesseractLogo} alt="Tesseract" />
            <span>Tesseract</span>
          </Link>
        </TextLine>

        <TextLine>
          <span className="text-muted-foreground">based in</span>
          <span>São Paulo, 🇧🇷 Brazil.</span>
        </TextLine>
      </div>
    </main>
  )
}
