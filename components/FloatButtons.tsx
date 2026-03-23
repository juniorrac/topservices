'use client'

import { useState, useEffect } from 'react'
import { FaWhatsapp, FaChevronUp } from 'react-icons/fa'

export default function FloatButtons() {
  const [showBackTop, setShowBackTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/221776169867"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float whatsapp-pulse fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] text-white text-3xl rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all z-50"
        aria-label="Chat WhatsApp"
      >
        <FaWhatsapp />
        <span className="whatsapp-tooltip">Besoin d&apos;aide ?</span>
      </a>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 left-6 w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gold hover:text-navy hover:-translate-y-1 transition-all z-50 ${
          showBackTop ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        aria-label="Retour en haut"
      >
        <FaChevronUp />
      </button>
    </>
  )
}
