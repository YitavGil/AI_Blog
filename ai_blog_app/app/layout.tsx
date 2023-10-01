import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: 'AI Blog App',
  description: 'Buil with Next.js 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={openSans.className} lang="en">
      <body>{children}</body>
    </html>
  )
}
