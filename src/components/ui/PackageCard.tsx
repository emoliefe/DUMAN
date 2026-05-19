'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Check, X, MessageCircle } from 'lucide-react'
import type { Package } from '@/types'
import { buildWhatsAppUrl } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function PackageCard({ pkg }: { pkg: Package }) {
  /* 3D tilt on mouse-move */
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 150, damping: 20 })
  const sy = useSpring(y, { stiffness: 150, damping: 20 })
  const rotateX = useTransform(sy, [-0.5, 0.5], [6, -6])
  const rotateY = useTransform(sx, [-0.5, 0.5], [-6, 6])

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const handleLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={cn(
        'relative rounded-2xl flex flex-col gap-5 overflow-hidden transition-shadow duration-400',
        pkg.highlighted
          ? 'bg-[#111008] border border-gold-500/60 shadow-[0_0_60px_rgba(201,168,76,0.18),0_0_120px_rgba(201,168,76,0.06)] p-7 scale-[1.03]'
          : 'glass-card border-white/5 hover:border-gold-500/25 p-6'
      )}
    >
      {/* Premium ambient glow (highlighted only) */}
      {pkg.highlighted && (
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />
      )}

      {/* Top highlight line */}
      {pkg.highlighted && (
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
      )}

      {/* Badge */}
      {pkg.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500 text-black text-[11px] font-bold px-4 py-1 rounded-full shadow-lg shadow-gold-500/30 tracking-wide">
            ⭐ {pkg.badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="flex items-end justify-between gap-2 mt-2">
        <div>
          <h3 className={cn(
            'font-playfair text-2xl font-bold',
            pkg.highlighted ? 'text-shimmer' : 'text-white'
          )}>
            {pkg.name}
          </h3>
          <p className="text-white/30 text-xs mt-1 tracking-wide">{pkg.priceNote}</p>
        </div>
        {pkg.highlighted && (
          <div className="text-gold-500/40 text-[10px] tracking-widest uppercase font-medium pb-0.5">
            Tam Paket
          </div>
        )}
      </div>

      {/* Divider */}
      <div className={cn(
        'h-px',
        pkg.highlighted
          ? 'bg-gradient-to-r from-transparent via-gold-500/30 to-transparent'
          : 'bg-white/5'
      )} />

      {/* Feature list */}
      <ul className="flex flex-col gap-2.5 flex-1">
        {pkg.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm">
            <span className={cn(
              'w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0',
              feature.included
                ? pkg.highlighted
                  ? 'bg-gold-500/20 text-gold-400'
                  : 'bg-white/8 text-gold-500'
                : 'bg-transparent text-white/20'
            )}>
              {feature.included
                ? <Check size={11} strokeWidth={2.5} />
                : <X size={10} strokeWidth={2} />}
            </span>
            <span className={cn(
              'text-sm',
              feature.included ? 'text-white/75' : 'text-white/20 line-through decoration-white/15'
            )}>
              {feature.label}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <motion.a
        href={buildWhatsAppUrl(pkg.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={cn(
          'w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2',
          pkg.highlighted
            ? 'bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-black shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 animate-pulse-gold'
            : pkg.id === 'mid'
              ? 'bg-green-500/90 hover:bg-green-500 text-white'
              : 'bg-white/5 hover:bg-white/8 text-white/70 border border-white/8'
        )}
      >
        <MessageCircle size={15} />
        {pkg.cta}
      </motion.a>
    </motion.div>
  )
}
