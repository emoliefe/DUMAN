'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/data'

const EXTRA_TESTIMONIALS = [
  {
    id: '5',
    name: 'Kemal B.',
    initials: 'KB',
    rating: 5,
    text: 'Uber aracımı getirdim, o günden beri düzenli müşterisiyim. Müşterilerim de fark ediyor.',
    service: 'Araç İçi Temizlik',
    date: 'Mayıs 2025',
  },
  {
    id: '6',
    name: 'Özge T.',
    initials: 'ÖT',
    rating: 5,
    text: 'Ev koltuğumuzun üzerindeki eski lekeleri hiç çıkar diye düşünmemiştim. Mucize gibi geldi!',
    service: 'Ev Koltuk Yıkama',
    date: 'Nisan 2025',
  },
]

const ALL = [...TESTIMONIALS, ...EXTRA_TESTIMONIALS]

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="text-gold-400 fill-gold-400" />
      ))}
    </div>
  )
}

function TestimonialCard({ t, big = false }: { t: typeof ALL[0]; big?: boolean }) {
  return (
    <div className={`bento-card p-6 flex flex-col gap-4 ${big ? 'row-span-2' : ''}`}>
      {/* Quote mark */}
      <span className="font-playfair text-5xl leading-none text-gold-500/20 select-none">&ldquo;</span>

      {/* Stars */}
      <StarRow count={t.rating} />

      {/* Text */}
      <p className={`text-white/65 leading-relaxed flex-1 ${big ? 'text-base' : 'text-sm'}`}>
        {t.text}
      </p>

      {/* Service tag */}
      <span className="text-gold-500/50 text-[11px] tracking-wide font-medium">
        {t.service}
      </span>

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-white/5">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-500/30 to-gold-900/20 border border-gold-500/20 flex items-center justify-center text-gold-400 font-bold text-xs flex-shrink-0">
          {t.initials}
        </div>
        <div>
          <div className="text-white/80 text-sm font-medium">{t.name}</div>
          <div className="text-white/30 text-xs">{t.date}</div>
        </div>
      </div>
    </div>
  )
}

/* Marquee row — scrolls infinitely */
function MarqueeRow({ items, reverse = false }: { items: typeof ALL; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden" aria-hidden>
      <div
        className="flex gap-4 w-max"
        style={{
          animation: `marquee ${reverse ? '35s' : '28s'} linear infinite ${reverse ? 'reverse' : 'normal'}`,
        }}
      >
        {doubled.map((t, i) => (
          <div key={i} className="w-72 flex-shrink-0">
            <TestimonialCard t={t} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Testimonials() {
  const row1 = ALL.slice(0, 3)

  return (
    <section className="section-padding bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-gold-500 text-xs tracking-[0.2em] uppercase font-semibold block mb-3">
            Referanslarımız
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
            Müşterilerimiz <span className="text-gold-gradient">Ne Diyor?</span>
          </h2>
          <p className="text-white/40 max-w-md mx-auto text-sm">
            Gerçek müşterilerimizin gerçek deneyimleri.
          </p>
        </motion.div>

        {/* Marquee rows — desktop & mobile */}
        <div className="space-y-4 mb-14">
          <MarqueeRow items={row1.length >= 2 ? ALL : ALL} />
          <MarqueeRow items={ALL} reverse />
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-4 max-w-lg mx-auto"
        >
          {[
            { value: '500+', label: 'Mutlu Müşteri' },
            { value: '%98',  label: 'Memnuniyet'    },
            { value: '5 ★',  label: 'Ortalama Puan' },
          ].map(stat => (
            <div key={stat.label} className="glass-gold rounded-2xl p-4 text-center">
              <div className="font-playfair text-2xl font-bold text-gold-gradient">
                {stat.value}
              </div>
              <div className="text-white/35 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
