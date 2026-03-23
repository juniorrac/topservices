'use client'

import { useState } from 'react'
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    setIsSubmitting(true)
    // Form will submit to Formspree
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14">
          <h2 className="section-title">Contactez-nous</h2>
          <p className="section-text">Devis gratuit et réponse rapide garantie</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-5">
            <a
              href="https://wa.me/221776169867"
              target="_blank"
              className="flex items-center gap-4 p-5 bg-sand-light rounded-xl hover:bg-sand hover:translate-x-1 transition-all"
            >
              <div className="w-14 h-14 bg-[#25D366] text-white rounded-xl flex items-center justify-center text-2xl">
                <FaWhatsapp />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                <p className="text-gray-600">+221 77 616 98 67</p>
              </div>
            </a>

            <a
              href="tel:+221776169867"
              className="flex items-center gap-4 p-5 bg-sand-light rounded-xl hover:bg-sand hover:translate-x-1 transition-all"
            >
              <div className="w-14 h-14 bg-teal text-white rounded-xl flex items-center justify-center text-2xl">
                <FaPhone />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Téléphone</h4>
                <p className="text-gray-600">+221 77 616 98 67</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 bg-sand-light rounded-xl">
              <div className="w-14 h-14 bg-teal text-white rounded-xl flex items-center justify-center text-2xl">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">topservicessn@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 bg-sand-light rounded-xl">
              <div className="w-14 h-14 bg-teal text-white rounded-xl flex items-center justify-center text-2xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Adresse</h4>
                <p className="text-gray-600">La Somone, Sénégal</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              <a href="#" className="w-12 h-12 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center hover:bg-teal hover:text-white transition-all">
                <FaFacebookF />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center hover:bg-teal hover:text-white transition-all">
                <FaInstagram />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center hover:bg-teal hover:text-white transition-all">
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-sand-light p-8 rounded-2xl">
            <form
              action="https://formspree.io/f/VOTRE_ID"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Votre nom *"
                  className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-teal outline-none transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Téléphone / WhatsApp *"
                  className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-teal outline-none transition-colors"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-teal outline-none transition-colors"
              />

              <select
                name="service"
                required
                className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-teal outline-none transition-colors"
              >
                <option value="">Service souhaité *</option>
                <option value="transfert">Transfert Aéroport AIBD</option>
                <option value="location">Location avec chauffeur</option>
                <option value="lac-rose">Excursion Lac Rose</option>
                <option value="goree">Excursion Île de Gorée</option>
                <option value="circuit">Circuit touristique</option>
                <option value="groupe">Transport de groupe</option>
                <option value="autre">Autre demande</option>
              </select>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="date"
                  name="date"
                  className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-teal outline-none transition-colors"
                />
                <select
                  name="passengers"
                  className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-teal outline-none transition-colors"
                >
                  <option value="">Nombre de personnes</option>
                  <option value="1">1 personne</option>
                  <option value="2">2 personnes</option>
                  <option value="3-4">3-4 personnes</option>
                  <option value="5-7">5-7 personnes</option>
                  <option value="8+">8+ personnes</option>
                </select>
              </div>

              <textarea
                name="message"
                rows={4}
                required
                placeholder="Décrivez votre besoin... *"
                className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-teal outline-none transition-colors resize-y"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn btn-primary text-base"
              >
                <FaPaperPlane />
                {isSubmitting ? 'Envoi...' : 'Envoyer la demande'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
