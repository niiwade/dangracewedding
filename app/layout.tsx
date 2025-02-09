import type { Metadata } from 'next';

import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PrelineScript from '@/components/PrelineScript';
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: '#ALamp4Trey2024',
  description: 'Official Wedding Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Analytics/>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
      <PrelineScript/>
    </html>
  )
}
