'use client'

import { motion } from 'framer-motion'
import type { Package } from '@/types'
import { WHATSAPP_URL } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <motion.div
      className={cn(
        'relative rounded-2xl p-6 flex flex-col gap-5 border transition-all duration-300',
        pkg.highlighted
          ? 'bg-dark-700 border-gold-500 shadow-gold-glow-lg scale-105'
          : 'glass-card border-dark-500 hover:border-gold-500/30'
      )}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* Badge */}
      {pkg.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-gold-gradient text-dark-900 text-xs font-bold px-4 py-1 rounded-full shadow-gold-glow">
            ⭐ {pkg.badge}
          </span>
        </div>
      )}

      {/* Name */}
      <div>
        <h3
          className={cn(
            'font-playfair text-2xl font-bold mb-1',
            pkg.highlighted ? 'text-gold-gradient' : 'text-white'
          )}
        >
          {pkg.name}
        </h3>
        <p className="text-xs text-white/30">{pkg.priceNote}</p>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-2.5 flex-1">
        {pkg.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm">
            <span
              className={cn(
                'w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0',
                feature.included
                  ? 'bg-gold-500/20 text-gold-500'
                  : 'bg-dark-500 text-white/20'
              )}
            >
              {feature.included ? '✓' : '✗'}
            </span>
            <span className={feature.included ? 'text-white/80' : 'text-white/25 line-through'}>
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
          'w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200',
          pkg.highlighted
            ? 'bg-gold-gradient text-dark-900 hover:shadow-gold-glow-lg animate-pulse-gold'
            : pkg.id === 'mid'
              ? 'bg-green-500 hover:bg-green-400 text-white'
              : 'bg-dark-500 text-white hover:bg-dark-400 border border-white/10'
        )}
      >
        {pkg.cta}
      </a>
    </motion.div>
  )
}
