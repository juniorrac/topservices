import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp, FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.jpg"
              alt="Top Services"
              width={80}
              height={80}
              className="rounded-lg mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              Votre partenaire de confiance pour tous vos déplacements au Sénégal depuis 2019.
            </p>
            <p className="text-gray-500 text-sm italic">
              "Venez pour l'expérience, repartez la tête pleine de souvenirs"
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-orange font-semibold mb-5">Navigation</h4>
            <ul className="space-y-3">
              {['Accueil', 'Nos Services', 'Destinations', 'Galerie', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-orange hover:pl-1 transition-all text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-orange font-semibold mb-5">Destinations</h4>
            <ul className="space-y-3">
              {['Lac Rose', 'Île de Gorée', 'Delta du Saloum', 'Réserve de Bandia', 'Touba'].map((item) => (
                <li key={item}>
                  <Link href="#destinations" className="text-gray-400 hover:text-orange hover:pl-1 transition-all text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-orange font-semibold mb-5">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-gray-400">
                <FaWhatsapp className="text-orange" />
                +221 77 616 98 67
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaPhone className="text-orange" />
                +221 77 616 98 67
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-orange" />
                topservicessn@gmail.com
              </li>
            </ul>
            
            {/* Social */}
            <div className="flex gap-3 mt-5">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange transition-colors">
                <FaTiktok />
              </a>
              <a href="https://wa.me/221776169867" target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange transition-colors">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Top Services Sénégal. Tous droits réservés. 🇸🇳
          </p>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span>Paiements acceptés :</span>
            <span className="bg-white/10 px-3 py-1 rounded text-xs">Wave</span>
            <span className="bg-white/10 px-3 py-1 rounded text-xs">Orange Money</span>
            <span className="bg-white/10 px-3 py-1 rounded text-xs">Espèces</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
