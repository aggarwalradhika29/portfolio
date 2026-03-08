import type { Metadata } from 'next'
import { cormorant, dmSans, dmMono } from '@/lib/fonts'
import '@/styles/globals.css'
import Nav from '@/components/layout/nav'
import Footer from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Radhika Aggarwal',
  description:
    'Data engineer and AI builder. I design data platforms, pipelines, and AI systems — and write about slow life, introversion, and becoming.',
  openGraph: {
    title: 'Radhika Aggarwal',
    description:
      'Data engineer and AI builder based in Gurugram, India.',
    url: 'https://radhikaaggarwal.dev',
    siteName: 'Radhika Aggarwal',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Radhika Aggarwal',
    description: 'Data engineer and AI builder.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}