import Image from 'next/image'
import Link from 'next/link'
import { FaClock, FaMapMarkerAlt, FaRoute } from 'react-icons/fa'

const destinations = [
  {
    title: 'Lac Rose',
    description: 'Lac aux eaux roses unique au monde, récolte du sel traditionnelle',
    image: '/images/lac-rose-pirogues.jpg',
    duration: 'Journée complète',
    location: '35 km de Dakar',
    price: '35 000',
    badge: 'Incontournable',
    featured: true,
  },
  {
    title: 'Île de Gorée',
    description: 'Site UNESCO, Maison des Esclaves, histoire et culture',
    image: '/images/goree.jpg',
    duration: 'Demi-journée',
    price: '25 000',
  },
  {
    title: 'Delta du Saloum',
    description: 'Mangroves, îles aux coquillages, villages de pêcheurs',
    image: '/images/saloum.jpg',
    duration: '2 jours',
    price: '85 000',
  },
  {
    title: 'Réserve de Bandia',
    description: 'Safari africain, girafes, rhinocéros, antilopes',
    image: '/images/girafe.jpg',
    duration: 'Demi-journée',
    price: '45 000',
  },
  {
    title: 'Monument Renaissance',
    description: 'Plus haute statue d\'Afrique, vue panoramique sur Dakar',
    image: '/images/monument.jpg',
    duration: '2-3 heures',
    price: '15 000',
  },
  {
    title: 'Touba',
    description: 'Grande Mosquée, capitale du mouridisme, spiritualité',
    image: '/images/mosquee.jpg',
    duration: 'Journée',
    price: '55 000',
  },
]

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14">
          <h2 className="section-title">Nos destinations populaires</h2>
          <p className="section-text">Explorez les trésors du Sénégal avec Top Services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${
                dest.featured ? 'md:row-span-2' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${dest.featured ? 'h-64' : 'h-44'}`}>
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                {dest.badge && (
                  <span className="absolute top-3 left-3 bg-orange text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {dest.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{dest.title}</h3>
                <p className="text-gray-500 text-sm mb-3 leading-relaxed">{dest.description}</p>
                <div className="flex flex-wrap gap-3 text-xs text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <FaClock className="text-orange" />
                    {dest.duration}
                  </span>
                  {dest.location && (
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-orange" />
                      {dest.location}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-end pt-4 border-t border-gray-100">
                  <Link
                    href="#contact"
                    className="bg-orange text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-orange-dark transition-colors"
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 bg-sand rounded-2xl p-8">
          <p className="text-lg text-gray-700 mb-5">
            Vous avez une destination spécifique en tête ?
          </p>
          <Link href="#contact" className="btn btn-primary">
            <FaRoute />
            Circuit Sur Mesure
          </Link>
        </div>
      </div>
    </section>
  )
}
