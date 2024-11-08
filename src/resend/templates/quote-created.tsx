import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'

import { env } from '@/env.mjs'

interface QuoteCreatedTemplateProps {
  userName: string
  quoteId: string
}

export function QuoteCreatedTemplate({
  userName,
  quoteId,
}: QuoteCreatedTemplateProps) {
  const previewText = `Quote #${quoteId} created successfully`
  const quoteLink = `${env.NEXT_PUBLIC_BASE_URL}/quotes/${quoteId}`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-[#f6f9fc] font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded-lg border border-solid border-[#f0f0f0] bg-white p-[20px] shadow-lg">
            <Section className="mt-[32px]">
              <Section className="mb-6 rounded-lg bg-purple-50 p-6">
                <Text className="m-0 text-[16px] leading-[24px] text-gray-700">
                  Hello{' '}
                  <span className="font-bold text-purple-600">{userName}</span>!
                  👋
                </Text>
                <Text className="mt-2 text-[14px] leading-[24px] text-gray-600">
                  Your quote has been successfully created. We're excited to
                  work with you!
                </Text>
              </Section>

              <Section className="mb-[32px] mt-[32px] text-center">
                <Button
                  className="rounded-lg bg-purple-600 px-8 py-3 text-center text-[14px] font-semibold text-white no-underline shadow-sm transition-colors hover:bg-purple-700"
                  href={quoteLink}
                >
                  View Quote Details
                </Button>
              </Section>

              <Section className="my-6 rounded-lg bg-gray-50 p-4">
                <Text className="m-0 text-[14px] leading-[24px] text-gray-600">
                  Quote ID:{' '}
                  <span className="font-mono font-bold text-purple-600">
                    {quoteId}
                  </span>
                </Text>
                <Text className="mt-2 text-[14px] leading-[24px] text-gray-600">
                  Access your quote using this link:
                </Text>
                <Link
                  href={quoteLink}
                  className="mt-2 block text-[14px] text-purple-600 no-underline"
                >
                  {quoteLink}
                </Link>
              </Section>

              <Hr className="mx-0 my-[26px] w-full border border-solid border-[#e6e6e6]" />

              <Text className="text-center text-[12px] leading-[24px] text-gray-500">
                This is an automated email. Please do not reply.
              </Text>

              <Section className="mt-6 text-center">
                <Text className="m-0 text-[12px] leading-[24px] text-gray-500">
                  Best regards,
                </Text>
                <Text className="mt-1 text-[14px] font-semibold text-gray-700">
                  Vicente Sanchez
                </Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
