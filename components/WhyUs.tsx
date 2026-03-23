import Image from 'next/image'
import Link from 'next/link'
import { FaCheck, FaWhatsapp } from 'react-icons/fa'

const features = [
  'Ponctualité & fiabilité garanties',
  'Véhicules climatisés et confortables',
  'Chauffeurs professionnels et guides locaux',
  'Disponible 24h/24 - 7j/7',
  'Prix transparents, sans surprise',
  'Paiement flexible : Espèces, Wave, Orange Money',
]

export default function WhyUs() {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-title text-left mb-8">Pourquoi nous choisir ?</h2>
            
            <ul className="space-y-5 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-4 text-gray-700">
                  <span className="w-8 h-8 bg-teal text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheck className="text-sm" />
                  </span>
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="https://wa.me/221776169867"
              target="_blank"
              className="btn btn-whatsapp"
            >
              <FaWhatsapp className="text-xl" />
              Contactez-nous
            </Link>
          </div>

          <div className="relative">
            <Image
              src="/images/baobabs-sunset.jpg"
              alt="Baobabs coucher de soleil Sénégal"
              width={600}
              height={450}
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
