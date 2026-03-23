import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp, FaPhone } from 'react-icons/fa'

export default function CTA() {
  return (
    <section className="relative py-24">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/promo.jpg"
          alt="Découvrez le Sénégal"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/92 via-navy-mid/80 to-navy/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          🌴 Envie d'évasion ?
        </h2>
        <p className="text-xl opacity-95 mb-8">
          Découvrez le Sénégal autrement avec Top Services
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="https://wa.me/221776169867"
            target="_blank"
            className="btn btn-whatsapp text-base px-8"
          >
            <FaWhatsapp className="text-xl" />
            WhatsApp Direct
          </Link>
          <Link
            href="tel:+221776169867"
            className="btn btn-outline text-base px-8"
          >
            <FaPhone />
            Appeler
          </Link>
        </div>
      </div>
    </section>
  )
}
