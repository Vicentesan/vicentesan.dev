type Post = {
  title: string
  slug: string
  date: string
  topics: string[]
}

export const posts = [
  {
    title:
      'Blockchain: the cybersecurity revolution we didn&apos;t know we needed',
    slug: 'blockchain-the-cybersecurity-revolution-we-didnt-know-we-needed',
    date: '2025-04-04',
    topics: ['blockchain', 'cybersc', 'revolution'],
  },
  {
    title: 'Designing a Portfolio That Reflects My Principles',
    slug: 'designing-a-portfolio-that-reflects-my-principles',
    date: '2025-03-19',
    topics: ['portifolio', 'design', 'minimalism'],
  },
  {
    title: 'Why My Christmas SaaS Failed',
    slug: 'why-my-christmas-saas-failed',
    date: '2025-03-18',
    topics: ['saas', 'failed', 'tips'],
  },
  {
    title: 'Why I chose Open Source for my career',
    slug: 'why-i-choose-open-source-for-my-career',
    date: '2025-03-15',
    topics: ['opensource', 'projects', 'bitcoin'],
  },
  {
    title: 'How Bitcoin shapes my worldview as a developer',
    slug: 'how-bitcoin-shapes-my-worldview-as-a-developer',
    date: '2025-03-14',
    topics: ['bitcoin', 'opensource', 'money'],
  },
  {
    title: 'How I got started in development',
    slug: 'how-i-got-started-in-development',
    date: '2025-03-13',
    topics: ['hello-world', 'development', 'tips'],
  },
] satisfies Post[]
