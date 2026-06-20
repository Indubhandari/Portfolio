import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'

const syne  = Syne({ subsets:['latin'], weight:['600','700','800'], variable:'--font-syne',  display:'swap' })
const inter = Inter({ subsets:['latin'], weight:['400','500','600'], variable:'--font-inter', display:'swap' })

export const metadata: Metadata = {
  title: 'Indu Bhandari — UI/UX Designer',
  description: 'UI/UX Designer with 4+ years of experience crafting user-centered digital products. Based in Kathmandu, Nepal.',
  openGraph: { title:'Indu Bhandari — UI/UX Designer', description:'4+ years crafting user-centered digital products.', type:'website' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
