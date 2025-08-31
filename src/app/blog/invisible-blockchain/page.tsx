import type { Metadata } from 'next';
import { BackButton } from '@/components/back-button';
import { ClientScrollHandler } from './client-scroll-handler';
import { SectionHeader } from './interactive-headers';

export const metadata = {
  title: "Invisible Blockchain: Why Your Users Don't Care About Crypto",
  description:
    "The future of finance isn't about showing off blockchain, it's about making it disappear",
  openGraph: {
    title: "Invisible Blockchain: Why Your Users Don't Care About Crypto",
    description:
      "The future of finance isn't about showing off blockchain, it's about making it disappear",
    images: [
      {
        url: 'https://vicentesan.dev/opengraph-image.png',
        width: 400,
        height: 400,
        alt: 'Vicente Sanchez'
      }
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-08-31T12:00:00Z',
    authors: ['Vicente Sanchez']
  },
  twitter: {
    card: 'summary_large_image',
    title: "Invisible Blockchain: Why Your Users Don't Care About Crypto",
    description:
      "The future of finance isn't about showing off blockchain, it's about making it disappear",
    images: ['https://vicentesan.dev/opengraph-image.png'],
    creator: '@vicentesandev'
  },
  keywords: [
    'blockchain',
    'crypto',
    'defi',
    'user experience',
    'fintech',
    'latin america',
    'pix',
    'spei',
    'cross-border payments',
    'invisible technology'
  ],
  authors: [{ name: 'Vicente Sanchez' }],
  category: 'Finance Technology',
  alternates: {
    canonical: 'https://vicentesan.dev/blog/invisible-blockchain'
  }
} satisfies Metadata;

export default function InvisibleBlockchainPage() {
  return (
    <main className="relative mx-auto flex w-fit max-w-xl flex-col items-start justify-center gap-8 py-20 max-sm:px-10">
      <ClientScrollHandler />
      <BackButton />

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl text-foreground">
          Invisible Blockchain: Why Your Users Don't Care About Crypto
        </h1>
        <p className="font-sans text-muted-foreground text-xs">September 31st, 2025</p>
      </div>

      <article className="flex flex-col gap-8 text-neutral-800 tracking-tight dark:text-neutral-300">
        <div id="introduction" className="flex flex-col gap-8 font-sans">
          <p>
            Crypto, DeFi, Web3, Blockchain, Smart Contracts, Wallets, Gas Fees, Private Keys,
            Consensus Mechanisms, Liquidity Pools, all these junky words move your users away. They
            create unnecessary barriers between people and the financial services they need.
          </p>

          <p>
            When my friend needs to pay me back for lunch, they don't care about the "revolutionary
            technology" behind PIX. They just want their money to go from point A to point B without
            a headache.
          </p>

          <p>
            The crypto world is basically saying "learn our weird language or you can't sit with
            us." It's like those exclusive clubs with secret handshakes that nobody actually wants
            to join. No wonder most people aren't rushing to use these apps!
          </p>

          <p>
            Web3 shouldn't be a barrier but about building blocks. We should be able to snap these
            financial tools together without needing a PhD in cryptography first.
          </p>
        </div>

        <div id="the-mom-test" className="flex flex-col gap-8">
          <SectionHeader id="the-mom-test">The Mom Test</SectionHeader>

          <div className="flex flex-col gap-8 font-sans">
            <p>
              I once tried to get my mom to send me some Bitcoin while I was traveling. It was a
              disaster. I told her to use my old notebook where my Electrum wallet was stored
              offline. First, she needed to turn on the notebook. Then login to the wallet. Then she
              had to download Blue Wallet on her phone and import the extended pub key to see the
              funds. Then click on send, select the amount, and scan the QR code from the offline
              notebook. After that, she needed to sign the transaction, grab a pendrive, transfer
              the signed transaction to it, and finally broadcast it.
            </p>

            <p>
              She gave up after 5 minutes and just sent me money through the bank… which took three
              days and cost $15 in fees.
            </p>

            <p>That's when it hit me: if my mom can't use it, it's not ready for the world.</p>

            <p>
              This should be the real benchmark for crypto apps, not approval from crypto Twitter or
              praise from blockchain developers. Can someone who has zero interest in the technology
              still benefit from it? That's the only question that matters.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8" id="technology-that-disappeared">
          <SectionHeader id="technology-that-disappeared">
            Technology That Disappeared
          </SectionHeader>

          <div className="flex flex-col gap-8 font-sans">
            <p>
              Remember when touchscreens were cutting-edge technology? Now toddlers swipe phones
              before they can talk. QR codes went from weird marketing tricks to how millions of
              Brazilians pay for everything with PIX every day.
            </p>

            <p>
              The most successful technologies don't stay visible, they fade into the background.
              They become so natural that we forget they're even there.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8" id="what-people-actually-care-about">
          <SectionHeader id="what-people-actually-care-about">
            What People Actually Care About
          </SectionHeader>

          <div className="flex flex-col gap-8 font-sans">
            <p>
              When someone needs to send money, especially across borders, here's what they care
              about:
            </p>

            <p>
              The most successful technologies don't stay visible, they fade into the background.
              They become so natural that we forget they're even there
            </p>

            <ul className="ml-4 list-disc">
              <li>Will it arrive quickly?</li>
              <li>How much will it cost me?</li>
              <li>Is it safe?</li>
              <li>Do I need to fill out a bunch of forms?</li>
              <li>Will the recipient actually be able to use the money?</li>
            </ul>

            <p>
              Notice how "is it using a decentralized consensus mechanism?" isn't on that list.
              Because normal people don't care. And they shouldn't have to
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8" id="why-current-finance-fails">
          <SectionHeader id="why-current-finance-fails">
            Why Current Finance Still Fails
          </SectionHeader>

          <div className="flex flex-col gap-8 font-sans">
            <p>
              In Latin America, we have amazing regional payment systems like PIX in Brazil and SPEI
              in Mexico. They're fast and convenient, but only within their own countries. Try
              sending money between them and suddenly you're back to high fees, long waits, and
              endless questions about "the purpose of your transaction"
            </p>

            <p>
              This isn't just annoying, it has real consequences. It means small businesses can't
              easily expand across borders. It means families pay ridiculous fees to support
              relatives in other countries. It means opportunities are limited by geography
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8" id="what-good-looks-like">
          <SectionHeader id="what-good-looks-like">What "Good" Looks Like</SectionHeader>

          <div className="flex flex-col gap-8 font-sans">
            <p>Imagine an app where you:</p>

            <ul className="ml-4 list-disc">
              <li>Enter a phone number</li>
              <li>Enter an amount</li>
              <li>Press send</li>
            </ul>

            <p>
              That's it. Money arrives in seconds. The recipient gets their local currency. No one
              asks what it's for. No one pays more than 1% in fees. No one needs to understand
              what's happening behind the scenes
            </p>

            <p>
              This isn't science fiction, the technology exists today. It's just hidden behind
              unnecessary complexity
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8" id="a-challenge-to-builders">
          <SectionHeader id="a-challenge-to-builders">A Challenge to Builders</SectionHeader>

          <div className="flex flex-col gap-8 font-sans">
            <p>
              To my fellow young developers: let's be the generation that builds technology that
              solves real problems instead of creating new ones. Let's focus on making things that
              work for everyone, not just the few tech bros
            </p>

            <p>
              The builders who will win aren't the ones who can explain the most complex blockchain
              concepts. They're the ones who can hide that complexity entirely while delivering real
              benefits to real people
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8" id="the-future-wont-say-crypto">
          <SectionHeader id="the-future-wont-say-crypto">
            The Future Won't Say "Crypto"
          </SectionHeader>

          <div className="flex flex-col gap-8 font-sans">
            <p>
              I predict that within 5 years, the most successful "crypto" apps won't mention crypto
              at all. They'll just be the apps that send money faster, cheaper, and more reliably
              than anything else
            </p>

            <p>
              And that's how we'll know the technology has truly succeeded, not when everyone is
              talking about it, but when no one needs to
            </p>

            <p>The best tech is invisible tech</p>
          </div>
        </div>
      </article>
    </main>
  );
}
