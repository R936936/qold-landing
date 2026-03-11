import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'QOLD — Quantum Gold | The Evolution of Digital Assets',
  description: "QOLD carries the mathematical scarcity of the original digital gold (21M) into a post-quantum world. Post-quantum secure, deflationary, and stake-to-earn.",
  keywords: 'QOLD, quantum gold, post-quantum, digital assets, cryptocurrency, CRYSTALS-Dilithium, staking',
  openGraph: {
    title: 'QOLD — Quantum Gold',
    description: 'Digital Gold. Reimagined for the Quantum Era.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-qblack text-white`}>
        {children}
      </body>
    </html>
  )
}
