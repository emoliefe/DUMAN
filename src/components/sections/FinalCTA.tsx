'use client'

import { motion } from 'framer-motion'
import { MessageCircle, MapPin } from 'lucide-react'
import { WHATSAPP_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '@/lib/constants'

export default function FinalCTA() {
  return (
    <section
      id="iletisim"
      className="section-padding bg-black relative overflow-hidden"
    >
      {/* Yellow dramatic glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(234,179,8,0.1),transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />

      {/* Glow orbs */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-gold-500/8 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-gold-400/5 blur-[80px] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="max-w-3xl mx-auto text-center relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-gold-400 uppercase bg-gold-500/8 border border-gold-500/25 px-5 py-2 rounded-full">
            Harekete Geçin
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-playfair text-3xl md:text-5xl font-bold text-white mt-8 mb-5 leading-tight"
        >
          Aracınız Kirli Görünmüyor
          <br className="hidden sm:block" />
          <span className="text-white/70"> Olabilir.</span>
          <br />
          <span className="text-gold-gradient text-2xl md:text-3xl font-semibold">
            Ama Derinlemesine Temiz Değil.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/45 text-lg mb-10 leading-relaxed"
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
            className="group flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-5 rounded-2xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/25"
          >
            <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
            WhatsApp&apos;tan Hemen Randevu Al
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-white/25 text-sm mb-12"
        >
          veya Instagram&apos;dan DM atın:{' '}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-400 hover:text-gold-300 hover:underline transition-colors"
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
          className="rounded-2xl overflow-hidden border border-gold-500/20 bg-[#080800]"
        >
          <div className="h-52 flex flex-col items-center justify-center gap-3 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(234,179,8,0.05),transparent)]" />
            <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center relative">
              <MapPin size={26} className="text-gold-400" />
            </div>
            <p className="text-white font-bold text-lg relative">İzmir / Buca</p>
            <p className="text-white/35 text-sm relative">Detaylı adres için WhatsApp&apos;tan yazın</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 text-xs border border-gold-500/30 bg-gold-500/5 px-5 py-2.5 rounded-xl hover:bg-gold-500/12 hover:border-gold-500/50 transition-all duration-300 relative font-medium"
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
          className="text-white/15 text-xs mt-8"
        >
          İzmir Buca · Profesyonel Oto Detaylı Temizlik · Araç Koltuk Yıkama · Ev Koltuk Temizleme
        </motion.p>
      </div>
    </section>
  )
}
