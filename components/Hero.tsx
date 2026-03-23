import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp, FaChevronDown } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero-bg.jpg" alt="SUV sur plage Sénégal" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/92 via-navy-mid/80 to-navy/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 py-20">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Venez pour l'expérience<br />
            et repartez la tête pleine<br />
            <span className="text-gold-light">de souvenirs.</span>
          </h1>

          <p className="text-lg md:text-xl opacity-95 mb-8">
            Top Services vous accompagne avec fiabilité, confort et chaleur partout au Sénégal.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="https://wa.me/221776169867" target="_blank" className="btn btn-whatsapp text-base">
              <FaWhatsapp className="text-xl" />
              Réserver sur WhatsApp
            </Link>
            <Link href="#contact" className="btn btn-outline text-base">
              Demander un devis
            </Link>
          </div>

          <div className="flex flex-wrap gap-10">
            <div className="text-center">
              <span className="block text-4xl font-bold text-gold-light">500+</span>
              <span className="text-sm opacity-90">Clients satisfaits</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-bold text-gold-light">24/7</span>
              <span className="text-sm opacity-90">Disponibilité</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-bold text-gold-light">5+</span>
              <span className="text-sm opacity-90">Ans d'expérience</span>
            </div>
          </div>
        </div>
      </div>

      <Link href="#services" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-2xl animate-bounce-slow">
        <FaChevronDown />
      </Link>
    </section>
  )
}
