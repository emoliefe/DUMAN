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
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Subtle yellow glow top right */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-gold-400 uppercase bg-gold-500/8 border border-gold-500/20 px-5 py-2 rounded-full mb-5">
            Düşündünüz mü?
          </span>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mt-2 mb-5 leading-tight">
            Temiz Görünüyor,{' '}
            <span className="text-gold-gradient">Ama Gerçekten</span>
            <br />
            Temiz mi?
          </h2>
          <p className="text-white/45 text-lg max-w-2xl mx-auto">
            Yüzeysel temizlik, gizli tehlikeleri ortadan kaldırmaz. İşte fark etmediğiniz
            problemler:
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {PROBLEMS.map(p => (
            <motion.div
              key={p.title}
              variants={cardVariants}
              className="bg-[#080808] border border-white/[0.06] hover:border-gold-500/30 rounded-2xl p-6 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500/8 border border-gold-500/15 flex items-center justify-center text-2xl mb-4 group-hover:bg-gold-500/12 group-hover:border-gold-500/30 transition-all duration-300">
                {p.icon}
              </div>
              <h3 className="text-white font-bold mb-2 text-sm tracking-wide group-hover:text-gold-400 transition-colors duration-300">{p.title}</h3>
              <p className="text-white/40 text-xs leading-relaxed">{p.desc}</p>
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
          <div className="bg-[#0a0a00] border border-gold-500/25 rounded-2xl p-10 max-w-2xl mx-auto relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(234,179,8,0.07),transparent_70%)]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />

            <div className="relative z-10">
              <p className="font-playfair text-2xl md:text-3xl font-bold text-white mb-2">
                Çözüm <span className="text-gold-gradient">Duman Detay&apos;da</span>
              </p>
              <p className="text-white/40 text-sm mb-7">
                Profesyonel ekipman ve uzman ekibimizle aracınızı gerçek anlamda temizliyoruz.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold-gradient text-black font-bold px-9 py-3.5 rounded-xl hover:shadow-gold-glow-lg transition-all duration-300 animate-pulse-gold tracking-wide"
              >
                Profesyonel Temizlik İçin Yazın →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
