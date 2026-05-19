'use client'

import { motion } from 'framer-motion'
import { Phone, Car, Sparkles, Trophy } from 'lucide-react'

const STEPS = [
  {
    step: 1,
    icon: Phone,
    title: 'Randevu Al',
    description: 'WhatsApp üzerinden hızlıca iletişime geçin, size en uygun zamanı belirleyelim.',
    color: 'from-green-900/30 to-transparent',
    iconColor: 'text-green-400',
  },
  {
    step: 2,
    icon: Car,
    title: 'Aracı Teslim Et',
    description: 'Aracınızı belirlenen saatte işletmemize teslim edin veya adresinize gelelim.',
    color: 'from-blue-900/30 to-transparent',
    iconColor: 'text-blue-400',
  },
  {
    step: 3,
    icon: Sparkles,
    title: 'Detaylı Temizlik',
    description: 'Uzman ekibimiz profesyonel ekipmanlarla aracınıza özel işlem uygular.',
    color: 'from-gold-900/30 to-transparent',
    iconColor: 'text-gold-400',
  },
  {
    step: 4,
    icon: Trophy,
    title: 'Yenilenmiş Teslim',
    description: 'Aracınız ilk günkü tazeliğiyle, koku ve kirden arındırılmış şekilde teslim edilir.',
    color: 'from-amber-900/30 to-transparent',
    iconColor: 'text-amber-400',
  },
]

export default function Process() {
  return (
    <section className="section-padding bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 text-xs tracking-[0.2em] uppercase font-semibold block mb-3">
            Süreç
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
            Nasıl <span className="text-gold-gradient">Çalışıyoruz?</span>
          </h2>
          <p className="text-white/40 max-w-md mx-auto text-sm">
            4 basit adımda aracınız profesyonel temizliğe kavuşur.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px">
            <motion.div
              className="h-full bg-gradient-to-r from-green-800/40 via-gold-500/50 to-amber-700/40"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <div className="relative mb-5 z-10">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} border border-white/8 flex items-center justify-center`}>
                      <Icon size={26} className={step.iconColor} strokeWidth={1.5} />
                    </div>
                    {/* Step number */}
                    <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-gold-500 text-black text-[11px] font-bold flex items-center justify-center shadow-md">
                      {step.step}
                    </div>
                  </div>

                  <h3 className="text-white font-semibold text-base mb-2 font-playfair">
                    {step.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
