import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Duman Detay | İzmir Buca Premium Oto Detaylı Temizlik',
  description:
    "İzmir Buca'da profesyonel oto detaylı temizlik, araç koltuk yıkama, ev koltuk yıkama ve araç içi premium temizlik hizmetleri. WhatsApp'tan hızlı teklif alın.",
  keywords:
    'İzmir oto detaylı temizlik, Buca oto koltuk yıkama, araç içi detaylı temizlik, oto detailing İzmir, ev koltuk yıkama İzmir, araç içi premium temizlik',
  openGraph: {
    title: 'Duman Detay | Premium Oto Detaylı Temizlik',
    description:
      "İzmir Buca'da profesyonel oto detaylı temizlik ve koltuk yıkama hizmetleri.",
    locale: 'tr_TR',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoWash',
  name: 'Duman Detay',
  description:
    "İzmir Buca'da profesyonel oto detaylı temizlik, araç koltuk yıkama ve ev koltuk temizleme hizmetleri.",
  telephone: '+905546471335',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Çamlıpınar, 293/4. Sk. No:3/A',
    addressLocality: 'Buca',
    addressRegion: 'İzmir',
    postalCode: '35390',
    addressCountry: 'TR',
  },
  openingHours: 'Mo Tu We Th Fr Sa 09:00-19:00',
  sameAs: ['https://www.instagram.com/dumandetay'],
  areaServed: 'İzmir, Buca',
  priceRange: '₺₺',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-inter bg-dark-900 text-white antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
