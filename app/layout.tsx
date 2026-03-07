import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const inter = localFont({
  src: '../node_modules/@fontsource/inter/files/inter-latin-400-normal.woff2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jeswin Arul Samuel | AI Solutions Architect',
  description: 'AI Solutions Architect with 9+ years of experience in Generative AI, LLMs, Machine Learning, and Enterprise Data Engineering. Expert in building Agentic AI systems and Human-in-the-Loop architectures.',
  keywords: ['AI Solutions Architect', 'Generative AI', 'LLM', 'Machine Learning', 'LangChain', 'LangGraph', 'Python', 'FastAPI'],
  authors: [{ name: 'Jeswin Arul Samuel' }],
  openGraph: {
    title: 'Jeswin Arul Samuel | AI Solutions Architect',
    description: 'AI Solutions Architect specializing in Generative AI, LLMs, and Agentic Systems',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeswin Arul Samuel | AI Solutions Architect',
    description: 'AI Solutions Architect specializing in Generative AI, LLMs, and Agentic Systems',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
