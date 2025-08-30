import Image from 'next/image';
import Link from 'next/link';
import signJwtCode from '@/../public/sign-jwt-code.svg';
import verifyJwtCode from '@/../public/verify-jwt-code.svg';

export default function HowToJWKSPage() {
  return (
    <main className="mx-auto flex w-fit max-w-xl flex-col items-start justify-center gap-8 py-20">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl text-neutral-800 dark:text-neutral-300">How to JWKS</h1>
        <p className="font-sans text-muted-foreground text-xs">August 2025</p>
      </div>

      <article className="flex flex-col gap-8 font-sans text-neutral-800 tracking-tight dark:text-neutral-300">
        <p>
          Coding has always been fun for me.{' '}
          <span className="text-muted-foreground">
            That&apos;s why at 16, I&apos;m here writing an article about one of the craziest topics
            on auth.
          </span>{' '}
          So here we go on a deep dive through what JWKS is, its use cases, and last but not least
          important, how to cook it.
        </p>

        <p>
          First, huge thanks to{' '}
          <Link href="https://x.com/dieegosf" className="underline" target="_blank">
            @dieegosf
          </Link>{' '}
          for helping me understand this topic and motivating me to write this article. Without
          further ado, let&apos;s deep dive into some JWKS!
        </p>

        <p>
          According to Auth0, over 70% of web applications use JWTs for authentication.{' '}
          <span className="text-muted-foreground">
            Imagine if most F1 drivers didn&apos;t know how their cars worked... they just knew
            green light means go. That&apos;s basically us with authentication.{' '}
          </span>{' '}
          We&apos;re racing at 300km/h with technology we don&apos;t understand, just hoping nothing
          breaks. So, let&apos;s fix that.
        </p>

        <p>
          So JSON Web Token <span className="text-muted-foreground">(or JWT to its friends)</span>{' '}
          is how apps pass secure messages,{' '}
          <span className="text-muted-foreground">
            whether that&apos;s your frontend talking to your backend or your API talking to another
            API.
          </span>{' '}
          It&apos;s just JSON data that&apos;s been signed so you&apos;ll know if someone messed
          with it, plus you can verify it actually came from who it says it did.
        </p>

        <p>BTW, here&apos;s literally all it takes to sign and verify a JWT:</p>

        <Image src={signJwtCode} alt="Signing a JWT" />
        <Image src={verifyJwtCode} alt="Verifying a JWT" />

        <p>
          Okay, so signing and verifying JWTs is easy, right? But here&apos;s where it gets
          interesting.{' '}
          <span className="text-muted-foreground">
            What happens when you need to rotate your keys? Or when different services need to
            verify tokens from each other?
          </span>{' '}
          You can&apos;t just hardcode keys everywhere like it&apos;s 2000
        </p>

        <p>
          That&apos;s where JWKS <span className="text-muted-foreground">(JSON Web Key Set)</span>{' '}
          comes in. Think of it as a public board where your app posts its public keys. Instead of
          everyone having to store your public key, they just check your JWKS endpoint whenever they
          need to verify a token you signed
        </p>

        <p>
          Now, here&apos;s a smart move: key rotation. If your private key gets leaked or stolen,
          someone could use it to mess with your stuff. So, you regularly generate new keys, add
          them to your system, and retire the old ones. This way, even if a hacker sneaks a peek,
          their window of opportunity is super short
        </p>

        <p>
          The beauty is that you can rotate keys without breaking everything. Add a new key to your
          JWKS, start signing with it, remove the old one later. Zero downtime, zero drama.{' '}
          <span className="text-muted-foreground">
            It&apos;s basically key management on autopilot
          </span>
        </p>

        <p>Here&apos;s what a JWKS endpoint looks like:</p>
      </article>
    </main>
  );
}
