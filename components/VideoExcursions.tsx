'use client'

import { useState } from 'react'
import { FaPlay, FaTimes, FaMapMarkerAlt } from 'react-icons/fa'

const videos = [
  {
    src: '/videos/lac_rose.mp4',
    title: 'Lac Rose',
    subtitle: 'Le lac aux eaux roses unique au monde',
    location: '35 km de Dakar',
    poster: '/images/lac-rose-pirogues.jpg',
  },
  {
    src: '/videos/goree.mp4',
    title: 'Île de Gorée',
    subtitle: 'Site UNESCO, histoire et culture',
    location: 'Dakar',
    poster: '/images/goree.jpg',
  },
  {
    src: '/videos/Réserve de BANDIA.mp4',
    title: 'Réserve de Bandia',
    subtitle: 'Safari africain — girafes, rhinocéros',
    location: 'Sindia, Sénégal',
    poster: '/images/girafe.jpg',
  },
  {
    src: '/videos/Delta du SALOUM.mp4',
    title: 'Delta du Saloum',
    subtitle: 'Mangroves, îles et villages de pêcheurs',
    location: 'Fatick, Sénégal',
    poster: '/images/saloum.jpg',
  },
]

export default function VideoExcursions() {
  const [activeVideo, setActiveVideo] = useState<typeof videos[0] | null>(null)

  return (
    <section id="videos" className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Excursions en vidéo
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Découvrez les plus belles destinations du Sénégal avant de partir
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <div
              key={video.src}
              onClick={() => setActiveVideo(video)}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-navy-mid border border-white/10 cursor-pointer"
            >
              <div className="relative aspect-video group">
                <img
                  src={video.poster}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <FaPlay className="text-navy text-xl ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold text-base mb-1">{video.title}</h3>
                <p className="text-white/60 text-xs mb-2 leading-relaxed">{video.subtitle}</p>
                <span className="flex items-center gap-1 text-gold-light text-xs">
                  <FaMapMarkerAlt className="text-xs" />
                  {video.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal plein écran */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gold transition-colors"
            >
              <FaTimes />
            </button>
            <div className="mb-3">
              <h3 className="text-white font-bold text-xl">{activeVideo.title}</h3>
              <p className="text-white/60 text-sm">{activeVideo.location}</p>
            </div>
            <video
              src={activeVideo.src}
              poster={activeVideo.poster}
              controls
              autoPlay
              className="w-full rounded-xl shadow-2xl"
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  )
}
