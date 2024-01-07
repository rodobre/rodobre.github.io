import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { LayoutNavbar as Navbar } from '@/components/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Robert Dobre - Engineer & Researcher',
  description: 'A small peek into my professional life :)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-foreground bg-background h-screen`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
