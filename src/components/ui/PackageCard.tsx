'use client'

import { motion } from 'framer-motion'
import type { Package } from '@/types'
import { WHATSAPP_URL } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <motion.div
      className={cn(
        'relative rounded-2xl p-7 flex flex-col gap-6 transition-all duration-300',
        pkg.highlighted
          ? 'bg-[#0d0d00] border-2 border-gold-500 shadow-gold-glow-lg scale-105'
          : 'bg-[#080808] border border-white/[0.07] hover:border-gold-500/25'
      )}
      whileHover={{ y: pkg.highlighted ? -3 : -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* Top glow for featured */}
      {pkg.highlighted && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient rounded-t-2xl" />
      )}

      {/* Badge */}
      {pkg.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gold-gradient text-black text-xs font-black px-5 py-1.5 rounded-full shadow-gold-glow tracking-wider">
            ⭐ {pkg.badge}
          </span>
        </div>
      )}

      {/* Name */}
      <div className="mt-1">
        <h3
          className={cn(
            'font-playfair text-2xl font-bold mb-1',
            pkg.highlighted ? 'text-gold-gradient' : 'text-white'
          )}
        >
          {pkg.name}
        </h3>
        <p className="text-xs text-white/25 tracking-wider">{pkg.priceNote}</p>
      </div>

      {/* Divider */}
      <div className={cn('h-px', pkg.highlighted ? 'bg-gold-500/30' : 'bg-white/[0.06]')} />

      {/* Features */}
      <ul className="flex flex-col gap-3 flex-1">
        {pkg.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm">
            <span
              className={cn(
                'w-5 h-5 rounded-lg flex items-center justify-center text-xs flex-shrink-0 font-bold',
                feature.included
                  ? 'bg-gold-500/15 text-gold-400 border border-gold-500/30'
                  : 'bg-white/[0.04] text-white/15 border border-white/[0.06]'
              )}
            >
              {feature.included ? '✓' : '✗'}
            </span>
            <span className={cn(
              'text-sm',
              feature.included ? 'text-white/75' : 'text-white/20 line-through'
            )}>
              {feature.label}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'w-full text-center py-3.5 rounded-xl font-bold text-sm transition-all duration-200 tracking-wide',
          pkg.highlighted
            ? 'bg-gold-gradient text-black hover:shadow-gold-glow-lg animate-pulse-gold'
            : pkg.id === 'mid'
              ? 'bg-green-500 hover:bg-green-400 text-white hover:shadow-lg hover:shadow-green-500/20'
              : 'bg-white/[0.05] text-white/70 hover:bg-white/[0.09] border border-white/[0.08]'
        )}
      >
        {pkg.cta}
      </a>
    </motion.div>
  )
}
