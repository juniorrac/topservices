'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#services', label: 'Nos Services' },
  { href: '#destinations', label: 'Destinations' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#apropos', label: 'À propos' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('accueil')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const sections = document.querySelectorAll('section[id]')
      const scrollY = window.pageYOffset
      sections.forEach((section) => {
        const el = section as HTMLElement
        const sectionTop = el.offsetTop - 100
        const sectionId = section.getAttribute('id') || ''
        if (scrollY > sectionTop && scrollY <= sectionTop + el.offsetHeight) {
          setActiveSection(sectionId)
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-navy ${
      isScrolled ? 'shadow-lg py-3' : 'py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-5">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.jpg" alt="Top Services Logo" width={55} height={55} className="rounded-lg" />
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-gold after:transition-all ${
                      isActive ? 'text-gold-light after:w-full' : 'text-white/85 hover:text-gold-light after:w-0 hover:after:w-full'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-4">
            <Link href="#contact" className="hidden sm:inline-flex btn btn-primary px-5 py-2.5">
              Contact
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white text-2xl"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-navy shadow-lg py-5">
            <ul className="flex flex-col items-center gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white/85 font-medium hover:text-gold-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="btn btn-primary px-6 py-2.5">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
