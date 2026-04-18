import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Top Services SN | Transfert Aéroport, Location Voiture & Circuits Sénégal',
    template: '%s | Top Services SN',
  },
  description: 'Top Services SN propose des transferts vers et depuis l\'aéroport AIBD, la location de véhicules confort et climatisés (avec ou sans chauffeur), ainsi que des circuits touristiques personnalisés avec chauffeur privé au Sénégal.',
  keywords: 'Top Services SN, location voiture Sénégal, transfert aéroport Sénégal, chauffeur privé Sénégal, location SUV Sénégal, transport aéroport Dakar, transfert AIBD La Somone, location voiture avec chauffeur Sénégal, circuit touristique Sénégal',
  authors: [{ name: 'Top Services SN' }],
  metadataBase: new URL('https://www.topservicessn.com'),
  alternates: {
    canonical: 'https://www.topservicessn.com',
  },
  openGraph: {
    title: 'Top Services SN | Transfert Aéroport, Location Voiture & Circuits Sénégal',
    description: 'Top Services SN — Transferts AIBD, location de véhicules confort avec ou sans chauffeur, circuits touristiques personnalisés au Sénégal.',
    url: 'https://www.topservicessn.com',
    siteName: 'Top Services SN',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Services SN | Transfert Aéroport & Location Voiture Sénégal',
    description: 'Transferts AIBD, location voiture avec ou sans chauffeur, circuits touristiques au Sénégal.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: 'XYHmW1iWqmwMExovcZCf5g2Q-jcgMalFy1xbnWO7RIo',
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
