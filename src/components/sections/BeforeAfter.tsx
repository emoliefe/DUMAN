'use client'

import { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

interface ComparisonSliderProps {
  beforeLabel?: string
  afterLabel?: string
}

function ComparisonSlider({
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
      className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden cursor-col-resize select-none border border-white/[0.06]"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* BEFORE - dirty, dark brownish with texture */}
      <div
        className="absolute inset-0 flex items-end justify-start"
        style={{
          background: 'linear-gradient(135deg, #2a1a0a 0%, #1a1008 40%, #120a04 100%)',
        }}
      >
        {/* Stain patterns */}
        <div className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 120px 80px at 30% 40%, rgba(60,30,10,0.8) 0%, transparent 100%),
              radial-gradient(ellipse 90px 60px at 70% 60%, rgba(50,25,8,0.7) 0%, transparent 100%),
              radial-gradient(ellipse 60px 40px at 50% 30%, rgba(80,40,15,0.6) 0%, transparent 100%)
            `,
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Dirty marks */}
        <div className="absolute top-[20%] left-[20%] w-32 h-20 rounded-full bg-amber-900/30 blur-xl" />
        <div className="absolute top-[50%] left-[60%] w-24 h-16 rounded-full bg-yellow-900/25 blur-lg" />
        <div className="absolute top-[70%] left-[30%] w-20 h-12 rounded-full bg-amber-800/20 blur-lg" />
        <p className="absolute bottom-6 left-6 font-playfair text-xs font-bold text-white/20 tracking-[0.3em] uppercase z-10">
          Temizlenmemiş
        </p>
      </div>

      {/* AFTER - clean black with subtle yellow shimmer */}
      <div
        className="absolute inset-0 flex items-end justify-end overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 40% 40%, rgba(234,179,8,0.06) 0%, transparent 70%)',
          }}
        />
        {/* Subtle shine effect */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(135deg, transparent 40%, rgba(234,179,8,0.05) 50%, transparent 60%)
            `,
          }}
        />
        {/* Reflection lines */}
        <div className="absolute top-[25%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute top-[45%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/3 to-transparent" />
        <p className="absolute bottom-6 right-6 font-playfair text-xs font-bold text-gold-400/60 tracking-[0.3em] uppercase z-10">
          Profesyonel Temizlik
        </p>
      </div>

      {/* Yellow divider line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-gold-400 z-10"
        style={{ left: `${position}%`, boxShadow: '0 0 12px rgba(234,179,8,0.6)' }}
      >
        {/* Handle circle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-gold-400 flex items-center justify-center shadow-gold-glow-lg">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M6 9H12M6 9L4 7M6 9L4 11M12 9L14 7M12 9L14 11"
              stroke="#000000"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Corner labels */}
      <div className="absolute top-4 left-4 z-20 bg-black/75 backdrop-blur-sm text-white/60 text-xs px-3 py-1.5 rounded-xl tracking-widest font-medium border border-white/10">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 z-20 bg-gold-500 text-black text-xs px-3 py-1.5 rounded-xl tracking-widest font-black">
        {afterLabel}
      </div>
    </div>
  )
}

const TABS = ['Koltuk Yıkama', 'Araç İçi', 'Tavan Temizliği', 'Deri Koltuk']

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
              {tab}
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
          <ComparisonSlider />
          <p className="text-center text-white/25 text-xs mt-4 tracking-widest uppercase">
            ← Kaydırarak farkı görün →
          </p>
        </motion.div>
      </div>
    </section>
  )
}
