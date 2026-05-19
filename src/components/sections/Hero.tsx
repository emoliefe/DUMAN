'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { MessageCircle, ChevronDown, Star, Shield, Zap, MapPin } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { WHATSAPP_URL } from '@/lib/constants'

/* ─── Animated stat counter ─── */
function CountUp({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const duration = 1800
        const step = Math.ceil(end / (duration / 16))
        const timer = setInterval(() => {
          start += step
          if (start >= end) { setCount(end); clearInterval(timer) }
          else setCount(start)
        }, 16)
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end])

  return <span ref={ref} className="stat-number">{count}{suffix}</span>
}

const STATS = [
  { end: 500, suffix: '+', label: 'Mutlu Müşteri' },
  { end: 98,  suffix: '%', label: 'Memnuniyet'    },
  { end: 3,   suffix: '+', label: 'Yıl Deneyim'   },
]

const TRUST_BADGES = [
  { icon: Star,   text: 'Premium Temizlik'     },
  { icon: Shield, text: 'Derinlemesine Hijyen' },
  { icon: Zap,    text: 'Profesyonel Ekipman'  },
]

export default function Hero() {
  /* Subtle mouse-parallax for the glow orbs */
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 40, damping: 20 })
  const sy = useSpring(my, { stiffness: 40, damping: 20 })
  const orbX = useTransform(sx, [-1, 1], [-30, 30])
  const orbY = useTransform(sy, [-1, 1], [-20, 20])

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e
    const { width, height } = (currentTarget as HTMLElement).getBoundingClientRect()
    mx.set((clientX / width - 0.5) * 2)
    my.set((clientY / height - 0.5) * 2)
  }

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* ── Backgrounds ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,_#1a1000_0%,_#0a0a0a_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_70%,_#0f0800_0%,_transparent_55%)]" />

      {/* Dot-grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201,168,76,0.6) 1px, transparent 0)`,
          backgroundSize: '44px 44px',
        }}
      />

      {/* Noise texture */}
      <div className="noise-overlay" />

      {/* ── Parallax glow orbs ── */}
      <motion.div
        style={{ x: orbX, y: orbY }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        animate={{ opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 6, repeat: Infinity }}
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-gold-500 blur-[100px]" />
      </motion.div>
      <motion.div
        style={{ x: useTransform(orbX, v => -v * 0.6), y: useTransform(orbY, v => -v * 0.6) }}
        className="absolute bottom-1/4 right-1/4 w-[360px] h-[360px] rounded-full pointer-events-none"
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-amber-400 blur-[80px]" />
      </motion.div>

      {/* ── Animated gold sweep lines ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        {[0, 1, 2, 3, 4].map(i => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-gold-500/25 to-transparent"
            style={{ top: `${15 + i * 17}%`, left: 0, right: 0 }}
            animate={{ opacity: [0, 0.6, 0], scaleX: [0.2, 1, 0.2] }}
            transition={{ duration: 4 + i * 0.7, repeat: Infinity, delay: i * 1.1, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* ── Rotating ring decoration ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-gold-500/5 animate-spin-slow pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-gold-500/[0.03] pointer-events-none"
        style={{ animation: 'spin-slow 35s linear infinite reverse' }}
        aria-hidden
      />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24">

        {/* Location pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 text-white/40 text-xs tracking-widest uppercase mb-5"
        >
          <MapPin size={11} className="text-gold-500" />
          İzmir / Buca
        </motion.div>

        {/* Pre-heading badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 glass-gold rounded-full px-5 py-2 mb-8 block mx-auto w-fit"
        >
          <Star size={11} className="text-gold-500 fill-gold-500" />
          <span className="text-gold-500 text-xs tracking-widest uppercase font-semibold">
            İzmir Buca&apos;nın #1 Detailing Merkezi
          </span>
          <Star size={11} className="text-gold-500 fill-gold-500" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-playfair text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold text-white leading-[1.08] tracking-tight mb-5"
        >
          Aracınızın{' '}
          <br className="hidden sm:block" />
          <span className="text-shimmer">İlk Günkü</span>
          <br />
          <span className="text-white/90">Temizliğine</span>{' '}
          <span className="text-outline font-playfair">Dönün.</span>
        </motion.h1>

        {/* Animated gold divider */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500"
          />
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            className="text-gold-500 text-sm"
          >
            ✦
          </motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-white/55 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          İzmir Buca&apos;da premium oto detaylı temizlik, koltuk yıkama ve
          derinlemesine hijyen hizmeti.{' '}
          <span className="text-gold-400/80 font-medium">
            Profesyonel ekipman. Garantili sonuç.
          </span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          {/* Primary — WhatsApp */}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full text-base font-semibold transition-colors duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-400/35 w-full sm:w-auto justify-center overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <MessageCircle size={20} />
            WhatsApp&apos;tan Fiyat Al
          </motion.a>

          {/* Secondary — Before/After */}
          <motion.a
            href="#oncesi-sonrasi"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-3 border border-gold-500/40 hover:border-gold-500 text-gold-500 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:bg-gold-500/8 w-full sm:w-auto justify-center"
          >
            Öncesi &amp; Sonrası Gör
            <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </motion.a>
        </motion.div>

        {/* ── Animated stat counters ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex items-center justify-center gap-1 mb-14 flex-wrap"
        >
          {STATS.map((stat, i) => (
            <div key={i} className="flex items-center gap-1">
              <div className="glass-gold rounded-xl px-5 py-3 text-center min-w-[90px]">
                <div className="font-playfair text-2xl font-bold text-gold-gradient">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="text-white/40 text-[11px] tracking-wide mt-0.5">{stat.label}</div>
              </div>
              {i < STATS.length - 1 && (
                <div className="w-px h-10 bg-gradient-to-b from-transparent via-gold-500/20 to-transparent mx-1" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {TRUST_BADGES.map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-center gap-2 text-white/40 text-xs">
              <Icon size={12} className="text-gold-500/70" />
              <span className="tracking-wide">{text}</span>
              {i < TRUST_BADGES.length - 1 && (
                <span className="hidden sm:inline text-gold-500/20 ml-2">|</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-white/20 text-[10px] tracking-[0.25em] uppercase">Keşfet</span>
        <ChevronDown size={18} className="text-gold-500/30" />
      </motion.div>
    </section>
  )
}
