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
        <meta name="google-site-verification" content={'XYHmW1iWqmwMExovcZCf5g2Q-jcgMalFy1xbnWO7RIo'} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.topservicessn.com/#business",
                  "name": "Top Services SN",
                  "description": "Top Services SN propose des transferts aéroport AIBD, la location de véhicules confort climatisés avec ou sans chauffeur, et des circuits touristiques personnalisés au Sénégal.",
                  "url": "https://www.topservicessn.com",
                  "telephone": "+221776169867",
                  "email": "topservicessn@gmail.com",
                  "image": "https://www.topservicessn.com/images/logo.jpg",
                  "logo": "https://www.topservicessn.com/images/logo.jpg",
                  "priceRange": "$$",
                  "currenciesAccepted": "XOF",
                  "paymentAccepted": "Cash, Wave, Orange Money",
                  "openingHours": "Mo-Su 00:00-23:59",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "La Somone",
                    "addressLocality": "La Somone",
                    "addressRegion": "Thiès",
                    "addressCountry": "SN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 14.4833,
                    "longitude": -17.0667
                  },
                  "areaServed": [
                    { "@type": "City", "name": "Dakar" },
                    { "@type": "City", "name": "La Somone" },
                    { "@type": "City", "name": "Saly" },
                    { "@type": "City", "name": "Saint-Louis" },
                    { "@type": "Country", "name": "Sénégal" }
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Services de transport au Sénégal",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Transfert Aéroport AIBD",
                          "description": "Transfert vers et depuis l'aéroport international Blaise Diagne (AIBD) avec accueil personnalisé."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Location voiture avec chauffeur Sénégal",
                          "description": "Location de SUV et berlines climatisés avec chauffeur professionnel au Sénégal."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Location voiture sans chauffeur Sénégal",
                          "description": "Location de véhicules à la journée ou à la semaine pour voyager librement au Sénégal."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Circuit touristique Sénégal",
                          "description": "Circuits personnalisés : Lac Rose, Île de Gorée, Delta du Saloum, Réserve de Bandia."
                        }
                      }
                    ]
                  },
                  "sameAs": [
                    "https://www.facebook.com/topservicessn",
                    "https://www.instagram.com/topservicessn"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.topservicessn.com/#website",
                  "url": "https://www.topservicessn.com",
                  "name": "Top Services SN",
                  "description": "Transfert aéroport AIBD, location voiture avec ou sans chauffeur, circuits touristiques au Sénégal.",
                  "inLanguage": "fr-FR"
                },
                {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Top Services SN — Transfert & Location Voiture Sénégal",
                      "item": "https://www.topservicessn.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Transfert Aéroport AIBD Dakar",
                      "item": "https://www.topservicessn.com/#services"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Location Voiture avec Chauffeur Sénégal",
                      "item": "https://www.topservicessn.com/#services"
                    },
                    {
                      "@type": "ListItem",
                      "position": 4,
                      "name": "Circuits Touristiques — Lac Rose, Gorée, Saloum",
                      "item": "https://www.topservicessn.com/#destinations"
                    }
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
