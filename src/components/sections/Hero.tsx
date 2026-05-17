'use client'

import { motion } from 'framer-motion'
import { MessageCircle, ChevronDown, Star, Shield, Zap } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/constants'

const TRUST_BADGES = [
  { icon: <Star size={14} className="text-gold-500 fill-gold-500" />, text: 'Premium Temizlik' },
  { icon: <Shield size={14} className="text-gold-500" />, text: 'Derinlemesine Hijyen' },
  { icon: <Zap size={14} className="text-gold-500" />, text: 'Profesyonel Ekipman' },
]

const PARTICLE_LINES = [0, 1, 2, 3, 4]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,_#1a1200_0%,_#0a0a0a_50%,_#0d0800_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_#0d0800_0%,_transparent_60%)]" />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201,168,76,0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Animated gold particle lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLE_LINES.map(i => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"
            style={{ top: `${20 + i * 15}%`, left: 0, right: 0 }}
            animate={{ opacity: [0, 0.5, 0], scaleX: [0, 1, 0] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.8 }}
          />
        ))}
      </div>

      {/* Glow orbs */}
      <div className="glow-orb w-96 h-96 bg-gold-500 top-1/4 left-1/4 opacity-8" />
      <div className="glow-orb w-80 h-80 bg-gold-400 bottom-1/3 right-1/4 opacity-6" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">
        {/* Pre-heading badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-2 mb-8"
        >
          <Star size={12} className="text-gold-500 fill-gold-500" />
          <span className="text-gold-500 text-xs tracking-widest uppercase font-medium">
            İzmir Buca&apos;nın #1 Detailing Merkezi
          </span>
          <Star size={12} className="text-gold-500 fill-gold-500" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4"
        >
          Aracınızın{' '}
          <span className="text-gold-gradient">İlk Günkü</span>
          <br />
          Temizliğine Geri Dönün.
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-6"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          İzmir Buca&apos;da premium oto detaylı temizlik, koltuk yıkama ve derinlemesine hijyen hizmeti.{' '}
          <span className="text-gold-400">Profesyonel ekipman. Garantili sonuç.</span>
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
            className="group flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={22} />
            WhatsApp&apos;tan Fiyat Al
          </a>
          <a
            href="#oncesi-sonrasi"
            className="group flex items-center gap-3 border border-gold-500/50 hover:border-gold-500 text-gold-500 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-gold-500/10 w-full sm:w-auto justify-center"
          >
            Öncesi Sonrası Gör
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          {TRUST_BADGES.map((badge, i) => (
            <div key={i} className="flex items-center gap-2 text-white/50 text-sm">
              {badge.icon}
              <span>{badge.text}</span>
              {i < 2 && <span className="hidden sm:block text-gold-500/30 mx-2">|</span>}
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
        <span className="text-white/30 text-xs tracking-widest uppercase">Keşfet</span>
        <ChevronDown size={24} className="text-gold-500/40" />
      </motion.div>
    </section>
  )
}
