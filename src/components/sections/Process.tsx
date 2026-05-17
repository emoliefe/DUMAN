'use client'

import { motion } from 'framer-motion'
import { PROCESS_STEPS } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'

export default function Process() {
  return (
    <section className="section-padding bg-dark-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Nasıl Çalışıyoruz?"
          subtitle="4 basit adımda aracınız profesyonel temizliğe kavuşur."
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connecting gold line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-dark-600 via-gold-500/50 to-dark-600" />

          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              {/* Step circle */}
              <div className="relative mb-5">
                <div className="w-20 h-20 rounded-full bg-dark-700 border-2 border-gold-500/60 flex flex-col items-center justify-center shadow-gold-glow z-10 relative">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-gold-500 text-dark-900 text-xs font-bold flex items-center justify-center">
                  {step.step}
                </div>
              </div>

              <h3 className="text-white font-semibold text-base mb-2">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
