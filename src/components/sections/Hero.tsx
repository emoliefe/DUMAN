'use client'

import { motion } from 'framer-motion'
import { MessageCircle, ChevronDown, Star, Shield, Zap } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/constants'

const TRUST_BADGES = [
  { icon: <Star size={14} className="text-gold-400 fill-gold-400" />, text: 'Premium Temizlik' },
  { icon: <Shield size={14} className="text-gold-400" />, text: 'Derinlemesine Hijyen' },
  { icon: <Zap size={14} className="text-gold-400" />, text: 'Profesyonel Ekipman' },
]

const PARTICLE_LINES = [0, 1, 2, 3, 4]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background: radial yellow glow at top */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(234,179,8,0.1),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_80%,rgba(234,179,8,0.05),transparent)]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-100" />

      {/* Yellow glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-gold-500 blur-[160px] opacity-[0.06] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gold-400 blur-[140px] opacity-[0.05] pointer-events-none" />

      {/* Animated yellow particle lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLE_LINES.map(i => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent"
            style={{ top: `${15 + i * 17}%`, left: 0, right: 0 }}
            animate={{ opacity: [0, 0.6, 0], scaleX: [0.2, 1, 0.2] }}
            transition={{ duration: 4 + i * 0.8, repeat: Infinity, delay: i * 1.2, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Vertical accent line - left */}
      <div className="absolute left-[8%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/20 to-transparent hidden lg:block" />
      {/* Vertical accent line - right */}
      <div className="absolute right-[8%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/20 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">

        {/* Pre-heading badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 border border-gold-500/30 bg-gold-500/5 rounded-full px-5 py-2.5 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse flex-shrink-0" />
          <span className="text-gold-400 text-xs tracking-[0.2em] uppercase font-semibold">
            İzmir Buca&apos;nın #1 Detailing Merkezi
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse flex-shrink-0" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-5"
        >
          <span className="text-white">Aracınızın </span>
          <span className="relative inline-block">
            <span className="text-gold-gradient">İlk Günkü</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gold-400/50 origin-left"
            />
          </span>
          <br />
          <span className="text-white">Temizliğine Dönün.</span>
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-3 mb-7"
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold-500" />
          <div className="w-1.5 h-1.5 rotate-45 bg-gold-400" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold-500" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/55 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          İzmir Buca&apos;da premium oto detaylı temizlik, koltuk yıkama ve derinlemesine hijyen hizmeti.{' '}
          <span className="text-gold-400 font-medium">Profesyonel ekipman. Garantili sonuç.</span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-2xl text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={20} />
            WhatsApp&apos;tan Fiyat Al
          </a>
          <a
            href="#oncesi-sonrasi"
            className="group flex items-center gap-3 border border-gold-500/40 hover:border-gold-500 text-white/80 hover:text-gold-400 px-8 py-4 rounded-2xl text-base font-semibold transition-all duration-300 hover:bg-gold-500/8 w-full sm:w-auto justify-center"
          >
            Öncesi Sonrası Gör
            <span className="group-hover:translate-x-1 transition-transform text-gold-400">→</span>
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
        >
          {TRUST_BADGES.map((badge, i) => (
            <div key={i} className="flex items-center gap-2.5 text-white/40 text-sm">
              <div className="w-7 h-7 rounded-lg border border-gold-500/20 bg-gold-500/5 flex items-center justify-center flex-shrink-0">
                {badge.icon}
              </div>
              <span className="font-medium">{badge.text}</span>
              {i < 2 && <span className="hidden sm:block text-white/10 ml-4">|</span>}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-white/25 text-xs tracking-[0.2em] uppercase">Keşfet</span>
        <ChevronDown size={20} className="text-gold-500/50" />
      </motion.div>
    </section>
  )
}
