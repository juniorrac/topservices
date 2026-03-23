import { FaStar } from 'react-icons/fa'

const testimonials = [
  {
    text: "Service impeccable ! Chauffeur ponctuel à l'aéroport AIBD, véhicule propre et climatisé. Je recommande !",
    author: 'Marie D.',
    role: 'Touriste - France',
    initials: 'MD',
  },
  {
    text: "Excursion au Lac Rose mémorable ! Le guide connaissait parfaitement l'histoire. Journée magique.",
    author: 'Pierre M.',
    role: 'Touriste - Belgique',
    initials: 'PM',
  },
  {
    text: "Professionnel et ponctuel ! J'utilise Top Services pour tous mes déplacements pro à Dakar.",
    author: 'Amadou D.',
    role: 'Entrepreneur - Sénégal',
    initials: 'AD',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-sand-light">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14">
          <h2 className="section-title">Ce que disent nos clients</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 italic leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-teal text-white rounded-full flex items-center justify-center font-semibold">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.author}</h4>
                  <span className="text-sm text-gray-500">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
