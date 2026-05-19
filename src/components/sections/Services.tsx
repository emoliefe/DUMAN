'use client'

import { motion } from 'framer-motion'
import { Car, Sofa, Home, Sparkles, ShieldCheck, Wind, ArrowRight } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/constants'

const SERVICES = [
  {
    id: 'ic-temizlik',
    icon: Car,
    title: 'Araç İçi Detaylı Temizlik',
    description: 'Koltuk, tavan, kapı döşemesi, göğüslük ve taban halısı dahil — her noktayı eksiksiz temizliyoruz.',
    badge: 'En Popüler',
    size: 'featured', // spans 2 cols
    accent: 'from-gold-500/10 to-transparent',
  },
  {
    id: 'koltuk-yikama',
    icon: Sofa,
    title: 'Araç Koltuk Yıkama',
    description: 'Kumaş ve deri koltuklarda derin temizlik ve hijyen.',
    size: 'normal',
    accent: 'from-amber-900/10 to-transparent',
  },
  {
    id: 'pasta-cila',
    icon: Sparkles,
    title: 'Pasta & Cila',
    description: 'Boya yüzeyindeki çizik ve matlaşmayı giderir, showroom parlaklığı verir.',
    size: 'normal',
    accent: 'from-yellow-900/10 to-transparent',
  },
  {
    id: 'ev-koltuk',
    icon: Home,
    title: 'Ev Koltuk Yıkama',
    description: 'Kanepe, köşe takımı ve ofis koltukları için yerinde temizlik hizmeti.',
    size: 'normal',
    accent: 'from-stone-800/20 to-transparent',
  },
  {
    id: 'seramik',
    icon: ShieldCheck,
    title: 'Seramik Kaplama',
    description: 'Nano seramik kaplama — boya, UV ve çevre etkilerine karşı uzun ömürlü koruma kalkanı.',
    size: 'wide', // spans 2 cols on md+
    accent: 'from-blue-950/15 to-transparent',
  },
  {
    id: 'dezenfeksiyon',
    icon: Wind,
    title: 'Dezenfeksiyon',
    description: 'Bakteri, alerjen ve virüsleri yok eden ozon dezenfeksiyonu.',
    size: 'normal',
    accent: 'from-teal-950/15 to-transparent',
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

export default function Services() {
  return (
    <section id="hizmetler" className="section-padding bg-[#090909]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-gold-500 text-xs tracking-[0.2em] uppercase font-semibold block mb-3">
            Ne yapıyoruz?
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-white/45 max-w-xl mx-auto text-base leading-relaxed">
            Her aracın, her koltuğun derinlemesine temizlenmesi için uzman ekip ve profesyonel ekipmanlar.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {SERVICES.map((service) => {
            const Icon = service.icon
            const isFeatured = service.size === 'featured'
            const isWide = service.size === 'wide'

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`bento-card shine-effect group p-7 flex flex-col gap-5 ${
                  isFeatured ? 'sm:col-span-2 lg:col-span-2' : ''
                } ${isWide ? 'sm:col-span-2 lg:col-span-2' : ''}`}
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-4">
                  {/* Icon */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.accent} border border-gold-500/15`}>
                      <Icon size={22} className="text-gold-400" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Badge */}
                  {service.badge && (
                    <span className="text-[11px] font-semibold bg-gold-500 text-black px-2.5 py-1 rounded-full tracking-wide flex-shrink-0">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className={`font-playfair font-semibold text-white mb-2 group-hover:text-gold-300 transition-colors duration-300 ${isFeatured ? 'text-2xl' : 'text-lg'}`}>
                    {service.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Footer link */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold-500/60 hover:text-gold-400 text-xs font-medium tracking-wide transition-colors duration-300 group/link"
                >
                  Bilgi Al
                  <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>

                {/* Bottom gold line accent */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
