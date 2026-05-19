'use client'

import { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ComparisonSliderProps {
  beforeSrc?: string
  afterSrc?: string
  beforeLabel?: string
  afterLabel?: string
}

function ComparisonSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = 'ÖNCE',
  afterLabel = 'SONRA',
}: ComparisonSliderProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    updatePosition(e.clientX)
  }
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX)
  }
  const handleMouseUp = () => { isDragging.current = false }
  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX)
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-col-resize select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* BEFORE */}
      <div className="absolute inset-0">
        {beforeSrc ? (
          <Image
            src={beforeSrc}
            alt={beforeLabel}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #3d2b1f 0%, #2a1a0f 50%, #1a0f08 100%)' }}
          >
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
              }}
            />
            <span className="font-playfair text-5xl font-bold text-white/20 z-10 relative">
              {beforeLabel}
            </span>
          </div>
        )}
      </div>

      {/* AFTER — clipped */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        {afterSrc ? (
          <Image
            src={afterSrc}
            alt={afterLabel}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #242424 50%, #0a0a0a 100%)' }}>
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)' }} />
            <span className="font-playfair text-5xl font-bold text-gold-500/40 z-10 relative">{afterLabel}</span>
          </div>
        )}
      </div>

      {/* Gold divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-gold-500 z-10 shadow-gold-glow"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center shadow-gold-glow-lg">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 8H11M5 8L3 6M5 8L3 10M11 8L13 6M11 8L13 10" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Corner labels */}
      <div className="absolute top-4 left-4 z-20 bg-black/70 text-white/70 text-xs px-3 py-1 rounded-full tracking-widest">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 z-20 bg-gold-500/90 text-black text-xs px-3 py-1 rounded-full tracking-widest font-semibold">
        {afterLabel}
      </div>
    </div>
  )
}

const TABS = [
  {
    label: 'Koltuk Yıkama',
    before: '/images/before-after/koltuk-once.jpg',
    after: '/images/before-after/koltuk-sonra.jpg',
  },
  {
    label: 'Araç İçi',
    before: '/images/before-after/arac-ici-once.jpg',
    after: '/images/before-after/arac-ici-sonra.jpg',
  },
]

export default function BeforeAfter() {
  const [activeTab, setActiveTab] = useState(0)
  const tab = TABS[activeTab]

  return (
    <section id="oncesi-sonrasi" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-gold-500 text-sm tracking-widest uppercase font-medium">
            Gerçek Sonuçlar
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Fark Kendisi{' '}
            <span className="text-gold-gradient">Konuşuyor</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Kaydırarak öncesi ve sonrası arasındaki farkı görün.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-2 justify-center mb-8 flex-wrap"
        >
          {TABS.map((t, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === i
                  ? 'bg-gold-500 text-black'
                  : 'glass text-white/60 hover:text-white border border-white/10'
              }`}
            >
              {t.label}
            </button>
          ))}
        </motion.div>

        {/* Slider */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <ComparisonSlider
            beforeSrc={tab.before}
            afterSrc={tab.after}
            beforeLabel="ÖNCE"
            afterLabel="SONRA"
          />
          <p className="text-center text-white/40 text-sm mt-4">
            ← Kaydırarak farkı görün →
          </p>
        </motion.div>
      </div>
    </section>
  )
}
