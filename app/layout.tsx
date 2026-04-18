import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Top Services | Transport & Tourisme au Sénégal 🇸🇳',
  description: 'Top Services propose des transferts vers et depuis l\'aéroport AIBD, la location de véhicules comfort et climatisé (avec ou sans chauffeur), ainsi que des circuits touristiques personnalisés avec chauffeur privé.',
  keywords: 'location voiture Sénégal, transfert aéroport Sénégal, chauffeur privé Sénégal, location SUV Sénégal, transport aéroport Dakar, transfert AIBD La Somone, location voiture avec chauffeur Sénégal, circuit touristique Sénégal, Top Services',
  authors: [{ name: 'Top Services Sénégal' }],
  openGraph: {
    title: 'Top Services - Transport & Tourisme au Sénégal',
    description: 'Venez pour l\'expérience et repartez la tête pleine de souvenirs',
    url: 'https://topservices.sn',
    siteName: 'Top Services Sénégal',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Services - Transport & Tourisme au Sénégal',
    description: 'Venez pour l\'expérience et repartez la tête pleine de souvenirs',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/images/logo.jpg" />
      </head>
      <body>{children}</body>
    </html>
  )
}
