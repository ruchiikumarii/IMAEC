import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IMAEC Pharma | Trusted Pharmaceutical & Hygiene Manufacturing Partner',
  description:
    'IMAEC is an integrated pharmaceutical and hygiene manufacturing company delivering high-quality products across disinfectants, medical consumables, hygiene solutions and contract manufacturing.',
  icons: {
    icon: '/icons/imaec-fav-icon.jpg',
    shortcut: '/icons/imaec-fav-icon.jpg',
    apple: '/icons/imaec-fav-icon.jpg',
  },
  keywords: [
    'pharmaceutical manufacturing',
    'IMAEC Pharma',
    'disinfectants',
    'medical consumables',
    'hygiene solutions',
    'contract manufacturing',
    'CDMO',
    'WHO-GMP',
  ],
}

export const viewport: Viewport = {
  themeColor: '#0f1f3d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/jpeg" href="/icons/imaec-fav-icon.jpg" />
        <link rel="shortcut icon" type="image/jpeg" href="/icons/imaec-fav-icon.jpg" />
        <link rel="apple-touch-icon" href="/icons/imaec-fav-icon.jpg" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
