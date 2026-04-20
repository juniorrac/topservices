import Image from 'next/image'
import { FaPlane, FaCar, FaMountain, FaUsers, FaKey } from 'react-icons/fa'

const services = [
  {
    icon: FaPlane,
    title: 'Transfert Aéroport',
    description: 'Accueil à l\'aéroport AIBD avec panneau nominatif. Ponctualité garantie.',
    image: '/images/aeroport.jpg',
  },
  {
    icon: FaCar,
    title: 'Location avec Chauffeur',
    description: 'Véhicules confortables (SUV, berlines) avec chauffeurs expérimentés.',
    image: '/images/suv-stlouis.jpg',
  },
  {
    icon: FaMountain,
    title: 'Circuits Touristiques',
    description: 'Découvrez les merveilles du Sénégal : Lac Rose, Gorée, Saint-Louis...',
    image: '/images/lac-rose.jpg',
  },
  {
    icon: FaUsers,
    title: 'Transport de Groupe',
    description: 'Minibus et véhicules adaptés pour mariages, séminaires, événements.',
    image: '/images/minibus.jpg',
  },
  {
    icon: FaKey,
    title: 'Location sans Chauffeur',
    description: 'Véhicules disponibles à la journée ou à la semaine pour voyager à votre rythme.',
    image: '/images/rav4.jpg',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-sand-light">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14">
          <h2 className="section-title">Nos services</h2>
          <p className="section-text">Des solutions adaptées à tous vos besoins de transport</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-40 relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative px-5 pb-5">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-100 to-yellow-300 rounded-full flex items-center justify-center text-orange text-2xl -mt-7 relative z-10 shadow-lg mx-auto">
                  <service.icon />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 text-center mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm text-center leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
