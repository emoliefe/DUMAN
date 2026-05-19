'use client'

import { motion } from 'framer-motion'
import { MessageCircle, MapPin } from 'lucide-react'
import {
  WHATSAPP_URL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  GOOGLE_MAPS_EMBED,
  GOOGLE_MAPS_URL,
} from '@/lib/constants'

export default function FinalCTA() {
  return (
    <section
      id="iletisim"
      className="relative section-padding bg-[#080808] overflow-hidden"
    >
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      {/* Background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(201,168,76,0.1)_0%,_transparent_65%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gold-500/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-amber-900/10 blur-[80px] pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10 px-4 sm:px-6">

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass-gold rounded-full px-5 py-2 mb-10"
        >
          <span className="text-gold-500 text-xs tracking-widest uppercase font-semibold">
            Harekete Geçin
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-playfair text-3xl md:text-5xl font-bold text-white leading-tight mb-4"
        >
          Aracınız Kirli Görünmüyor
          <br />
          <span className="text-outline font-playfair text-4xl md:text-6xl">Olabilir.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-playfair text-xl md:text-2xl text-gold-gradient font-semibold mb-6"
        >
          Ama Derinlemesine Temiz Olduğu Anlamına Gelmez.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-white/45 text-base mb-10 leading-relaxed max-w-xl mx-auto"
        >
          Profesyonel ekibimizle iletişime geçin.
          <span className="text-white/70"> Ücretsiz keşif ve fiyat teklifi</span> alın.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
        >
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 shadow-xl shadow-green-500/20 hover:shadow-green-500/35 wa-pulse"
          >
            <MessageCircle size={22} />
            WhatsApp&apos;tan Hemen Randevu Al
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-2 text-white/30 text-sm mb-14"
        >
          <span className="text-gold-500/50 text-base">📷</span>
          <span>veya Instagram&apos;dan DM atın:{' '}</span>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-500 hover:text-gold-300 transition-colors"
          >
            {INSTAGRAM_HANDLE}
          </a>
        </motion.div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="rounded-2xl overflow-hidden border border-gold-500/20"
        >
          <iframe
            src={GOOGLE_MAPS_EMBED}
            width="100%"
            height="280"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Duman Detay Konum"
          />
          <div className="flex items-center justify-between px-5 py-3.5 bg-[#0f0f0f] border-t border-gold-500/10">
            <div className="flex items-center gap-2 text-white/45 text-sm">
              <MapPin size={13} className="text-gold-500 flex-shrink-0" />
              <span>Çamlıpınar, 293/4. Sk. No:3/A, Buca/İzmir</span>
            </div>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 text-xs border border-gold-500/25 px-3 py-1.5 rounded-full hover:bg-gold-500/8 transition-colors whitespace-nowrap"
            >
              Yol Tarifi →
            </a>
          </div>
        </motion.div>

        <p className="text-white/15 text-xs mt-8">
          İzmir Buca · Profesyonel Oto Detaylı Temizlik · Araç Koltuk Yıkama · Ev Koltuk Temizleme
        </p>
      </div>
    </section>
  )
}
