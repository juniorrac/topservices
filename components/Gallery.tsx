import Image from 'next/image'

const images = [
  { src: '/images/baobabs.jpg', alt: 'Baobabs Sénégal' },
  { src: '/images/plage-pirogues.jpg', alt: 'Plage pirogues colorées' },
  { src: '/images/lac-rose-eau.jpg', alt: 'Eaux roses Lac Rose' },
  { src: '/images/goree-vue.jpg', alt: 'Vue Gorée depuis mer' },
  { src: '/images/statue-goree.jpg', alt: 'Statue Libération Gorée' },
  { src: '/images/bateaux.jpg', alt: 'Bateaux de pêche' },
]

export default function Gallery() {
  return (
    <section id="galerie" className="py-20 bg-sand-light">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14">
          <h2 className="section-title">Galerie</h2>
          <p className="section-text">Aperçu de vos futures aventures au Sénégal</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
