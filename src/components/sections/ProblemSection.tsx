'use client'

import { motion } from 'framer-motion'
import { WHATSAPP_URL } from '@/lib/constants'

const PROBLEMS = [
  {
    icon: '🦠',
    title: 'Koltuk Altında Bakteri',
    desc: 'Görünmeyen yüzlerce bakteri koltuğunuzda yaşıyor.',
  },
  {
    icon: '🚬',
    title: 'Sigara Kokusu',
    desc: 'Duman koku bezi ve plastiklere işler, sıradan temizlik çıkaramaz.',
  },
  {
    icon: '👶',
    title: 'Çocuk Lekeleri',
    desc: 'Meyve suyu, mama ve çikolata lekelerini normal silme çıkarmaz.',
  },
  {
    icon: '👁️',
    title: 'Görünmeyen Kirler',
    desc: 'Torpido altı, kemer kanalları, havalandırma izleri.',
  },
  {
    icon: '🤧',
    title: 'Alerjenler',
    desc: 'Araç içindeki toz, kıl ve polenlere karşı derinlemesine temizlik şart.',
  },
  {
    icon: '🐾',
    title: 'Evcil Hayvan İzi',
    desc: 'Tüy ve koku koltuğun dokusuna işler, normal temizlikle çıkmaz.',
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
}

export default function ProblemSection() {
  return (
    <section className="section-padding bg-dark-900 relative overflow-hidden">
      <div className="glow-orb w-64 h-64 bg-red-900 top-0 right-0 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-red-400 uppercase bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full">
            Düşündünüz mü?
          </span>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mt-6 mb-4">
            Temiz Görünüyor Ama{' '}
            <span className="text-red-400">Gerçekten</span> Temiz mi?
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Yüzeysel temizlik, gizli tehlikeleri ortadan kaldırmaz. İşte fark etmediğiniz
            problemler:
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {PROBLEMS.map(p => (
            <motion.div
              key={p.title}
              variants={cardVariants}
              className="glass-gold rounded-xl p-5 hover:border-gold-500/40 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="text-gold-400 font-semibold mb-1.5 text-sm">{p.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <div className="glass-card rounded-2xl p-8 border-gold-500/20 max-w-2xl mx-auto">
            <p className="font-playfair text-xl md:text-2xl font-bold text-gold-400 mb-2">
              Çözüm Duman Detay&apos;da
            </p>
            <p className="text-white/50 text-sm mb-6">
              Profesyonel ekipman ve uzman ekibimizle aracınızı gerçek anlamda temizliyoruz.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold-gradient text-dark-900 font-bold px-8 py-3 rounded-xl hover:shadow-gold-glow-lg transition-all duration-300 animate-pulse-gold"
            >
              Profesyonel Temizlik İçin WhatsApp&apos;tan Yazın →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
