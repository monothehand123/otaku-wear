import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OTAKU WEAR | Anime Streetwear',
  description: 'Premium anime streetwear fashion for the modern otaku',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
