import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Top Services | Transport & Tourisme au Sénégal 🇸🇳',
  description: 'Top Services Sénégal - Transferts aéroport AIBD, location de voiture avec chauffeur, circuits touristiques (Lac Rose, Gorée, Saloum). Réservez maintenant !',
  keywords: 'transport Sénégal, transfert aéroport Dakar AIBD, excursion Lac Rose, tourisme Sénégal, location voiture chauffeur Dakar, Top Services',
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
