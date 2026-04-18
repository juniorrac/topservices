'use client'

import { useState, useRef, useEffect } from 'react'
import { FaMusic, FaVolumeMute, FaVolumeUp } from 'react-icons/fa'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  const togglePlay = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
    setShowTooltip(false)
  }

  return (
    <>
      <audio ref={audioRef} loop preload="none">
        <source src="/audio/ambiance-senegal.mp3" type="audio/mpeg" />
      </audio>

      <div className="fixed bottom-28 left-5 z-50 flex items-center gap-3">
        {showTooltip && (
          <div className="bg-white text-gray-700 text-xs font-medium px-3 py-2 rounded-lg shadow-lg whitespace-nowrap animate-pulse">
            Ambiance musicale 🎵
          </div>
        )}
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? 'Couper la musique' : 'Jouer la musique'}
          className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
            isPlaying
              ? 'bg-gold text-navy'
              : 'bg-navy/80 text-white hover:bg-navy'
          }`}
        >
          {isPlaying ? <FaVolumeUp className="text-lg" /> : <FaVolumeMute className="text-lg" />}
        </button>
      </div>
    </>
  )
}
