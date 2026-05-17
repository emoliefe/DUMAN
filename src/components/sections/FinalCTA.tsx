'use client'

import { motion } from 'framer-motion'
import { MessageCircle, MapPin } from 'lucide-react'
import { WHATSAPP_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '@/lib/constants'

export default function FinalCTA() {
  return (
    <section
      id="iletisim"
      className="section-padding bg-dark-900 relative overflow-hidden"
    >
      {/* Dramatic gold glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(201,168,76,0.12)_0%,_transparent_70%)]" />
      <div className="glow-orb w-96 h-96 bg-gold-500 -top-20 left-1/2 -translate-x-1/2 opacity-10" />
      <div className="glow-orb w-64 h-64 bg-gold-400 bottom-0 right-10 opacity-8" />

      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold-gradient" />

      <div className="max-w-3xl mx-auto text-center relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-gold-500 uppercase bg-gold-500/10 border border-gold-500/30 px-4 py-2 rounded-full">
            Harekete Geçin
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-playfair text-3xl md:text-5xl font-bold text-white mt-8 mb-6 leading-tight"
        >
          Aracınız Kirli Görünmüyor Olabilir.
          <br />
          <span className="text-gold-gradient text-2xl md:text-3xl font-semibold">
            Ama Derinlemesine Temiz Olduğu Anlamına Gelmez.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/50 text-lg mb-10 leading-relaxed"
        >
          Profesyonel ekibimizle iletişime geçin. Ücretsiz keşif ve fiyat teklifi alın.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30"
          >
            <MessageCircle size={22} />
            WhatsApp&apos;tan Hemen Randevu Al
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-white/30 text-sm mb-12"
        >
          veya Instagram&apos;dan DM atın:{' '}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-500 hover:underline"
          >
            {INSTAGRAM_HANDLE}
          </a>
        </motion.p>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card rounded-2xl overflow-hidden border-gold-500/20"
        >
          <div className="h-48 bg-gradient-to-br from-dark-700 to-dark-800 flex flex-col items-center justify-center gap-3">
            <MapPin size={32} className="text-gold-500" />
            <p className="text-white font-semibold text-lg">İzmir / Buca</p>
            <p className="text-white/40 text-sm">Detaylı adres için WhatsApp&apos;tan yazın</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-500 text-xs border border-gold-500/30 px-4 py-2 rounded-full hover:bg-gold-500/10 transition-colors mt-1"
            >
              Yol Tarifi Al →
            </a>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-white/20 text-xs mt-8"
        >
          İzmir Buca · Profesyonel Oto Detaylı Temizlik · Araç Koltuk Yıkama · Ev Koltuk Temizleme
        </motion.p>
      </div>
    </section>
  )
}
