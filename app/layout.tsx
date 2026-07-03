import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Cursor } from '@/components/cursor'
import { ScrollProgress } from '@/components/scroll-progress'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
})
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})
const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'EdgeBrain Studios — AI Automation, Web & App Development',
  description:
    'EdgeBrain Studios builds AI automation, websites, and mobile apps for ambitious teams. We design intelligent systems that do the repetitive work, plus fast, modern web and app products.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#080808',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <Cursor />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
