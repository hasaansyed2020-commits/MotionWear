import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Motion Wear | Where Style Meets Comfort',
  description: 'Discover premium sneakers and joggers from the world\'s top brands',
  keywords: 'sneakers, joggers, footwear, shoes, fashion, sports',
  authors: [{ name: 'Motion Wear' }],
  openGraph: {
    title: 'Motion Wear | Premium Footwear',
    description: 'Where Style Meets Comfort',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
