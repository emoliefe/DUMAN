'use client'

import { motion } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'
import TestimonialCard from '@/components/ui/TestimonialCard'

export default function Testimonials() {
  return (
    <section className="section-padding bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Müşterilerimiz Ne Diyor?"
          subtitle="Gerçek müşterilerimizin gerçek deneyimleri."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <TestimonialCard testimonial={t} />
            </motion.div>
          ))}
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto text-center">
            {[
              { value: '500+', label: 'Mutlu Müşteri' },
              { value: '%98', label: 'Memnuniyet' },
              { value: '5★', label: 'Ortalama Puan' },
            ].map(stat => (
              <div key={stat.label} className="glass-card rounded-xl p-4">
                <div className="font-playfair text-2xl font-bold text-gold-500">
                  {stat.value}
                </div>
                <div className="text-white/40 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
