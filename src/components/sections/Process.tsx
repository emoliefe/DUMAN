'use client'

import { motion } from 'framer-motion'
import { PROCESS_STEPS } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'

export default function Process() {
  return (
    <section className="section-padding bg-[#050505]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Nasıl Çalışıyoruz?"
          subtitle="4 basit adımda aracınız profesyonel temizliğe kavuşur."
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connecting yellow line (desktop) */}
          <div className="hidden md:block absolute top-[2.25rem] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Step circle */}
              <div className="relative mb-6">
                <div className="w-[4.5rem] h-[4.5rem] rounded-2xl bg-[#0a0a0a] border border-white/[0.08] group-hover:border-gold-500/40 flex items-center justify-center shadow-card-dark transition-all duration-300 z-10 relative">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="absolute -bottom-2.5 -right-2.5 w-6 h-6 rounded-lg bg-gold-500 text-black text-xs font-black flex items-center justify-center shadow-gold-glow">
                  {step.step}
                </div>
              </div>

              <h3 className="text-white font-bold text-sm mb-2 tracking-wide group-hover:text-gold-400 transition-colors duration-300">{step.title}</h3>
              <p className="text-white/40 text-xs leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
