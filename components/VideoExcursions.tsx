'use client'

import { useState } from 'react'
import { FaPlay, FaMapMarkerAlt } from 'react-icons/fa'

const videos = [
  {
    id: 'kRNfV2P_h4Y',
    title: 'Lac Rose',
    subtitle: 'Le lac aux eaux roses unique au monde',
    location: '35 km de Dakar',
  },
  {
    id: 'ZQ8C5L5XHCE',
    title: 'Île de Gorée',
    subtitle: 'Site UNESCO, histoire et culture',
    location: 'Dakar',
  },
  {
    id: '6RoJGPjMpMk',
    title: 'Réserve de Bandia',
    subtitle: 'Safari africain — girafes, rhinocéros',
    location: 'Sindia, Sénégal',
  },
  {
    id: 'QwLWIy4ZHNM',
    title: 'Delta du Saloum',
    subtitle: 'Mangroves, îles et villages de pêcheurs',
    location: 'Fatick, Sénégal',
  },
]

export default function VideoExcursions() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

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
              key={video.id}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-navy-mid border border-white/10"
            >
              <div className="relative aspect-video group cursor-pointer" onClick={() => setActiveVideo(video.id)}>
                {activeVideo === video.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors flex items-center justify-center">
                      <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <FaPlay className="text-navy text-xl ml-1" />
                      </div>
                    </div>
                  </>
                )}
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
    </section>
  )
}
