'use client'

import { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Tab {
  label: string
  before: string
  after: string
}

const TABS: Tab[] = [
  {
    label: 'Koltuk Yıkama',
    before: '/images/oncesi-sonrasi/koltuk-oncesi.jpg',
    after: '/images/oncesi-sonrasi/koltuk-sonrasi.jpg',
  },
  {
    label: 'Araç İçi',
    before: '/images/oncesi-sonrasi/arac-ici-oncesi.jpg',
    after: '/images/oncesi-sonrasi/arac-ici-sonrasi.jpg',
  },
  {
    label: 'Tavan Temizliği',
    before: '/images/oncesi-sonrasi/tavan-oncesi.jpg',
    after: '/images/oncesi-sonrasi/tavan-sonrasi.jpg',
  },
  {
    label: 'Deri Koltuk',
    before: '/images/oncesi-sonrasi/deri-oncesi.jpg',
    after: '/images/oncesi-sonrasi/deri-sonrasi.jpg',
  },
]

function ComparisonSlider({ before, after }: { before: string; after: string }) {
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
  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true
    updatePosition(e.touches[0].clientX)
  }
  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX)
  }
  const handleTouchEnd = () => { isDragging.current = false }

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-col-resize select-none border border-white/[0.08]"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* BEFORE image - full width */}
      <div className="absolute inset-0">
        <Image
          src={before}
          alt="Temizlik öncesi"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 700px"
          priority
        />
        {/* Dark overlay to emphasize "before" */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* AFTER image - clipped */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={after}
          alt="Temizlik sonrası"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 700px"
          priority
        />
      </div>

      {/* Yellow divider line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-gold-400 z-10"
        style={{ left: `${position}%`, boxShadow: '0 0 14px rgba(234,179,8,0.7)' }}
      >
        {/* Handle circle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gold-400 flex items-center justify-center shadow-gold-glow-lg border-2 border-white/20">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M7 10H13M7 10L5 8M7 10L5 12M13 10L15 8M13 10L15 12"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-20 bg-black/75 backdrop-blur-sm text-white/80 text-xs px-3 py-1.5 rounded-xl tracking-widest font-semibold border border-white/10 uppercase">
        Önce
      </div>
      <div className="absolute top-4 right-4 z-20 bg-gold-500 text-black text-xs px-3 py-1.5 rounded-xl tracking-widest font-black uppercase">
        Sonra
      </div>
    </div>
  )
}

export default function BeforeAfter() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="oncesi-sonrasi" className="section-padding bg-[#050505]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-gold-400 text-xs tracking-[0.25em] uppercase font-semibold border border-gold-500/25 bg-gold-500/5 px-4 py-2 rounded-full mb-4">
            Gerçek Sonuçlar
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Fark Kendisi{' '}
            <span className="text-gold-gradient">Konuşuyor</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Kaydırarak öncesi ve sonrası arasındaki gerçek farkı görün.
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
          {TABS.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === i
                  ? 'bg-gold-500 text-black'
                  : 'bg-white/[0.04] border border-white/[0.07] text-white/50 hover:text-white hover:border-white/15'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Slider */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <ComparisonSlider
            before={TABS[activeTab].before}
            after={TABS[activeTab].after}
          />
          <p className="text-center text-white/25 text-xs mt-4 tracking-widest uppercase">
            ← Kaydırarak farkı görün →
          </p>
        </motion.div>
      </div>
    </section>
  )
}
