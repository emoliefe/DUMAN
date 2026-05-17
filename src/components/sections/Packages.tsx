'use client'

import { motion } from 'framer-motion'
import { PACKAGES } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'
import PackageCard from '@/components/ui/PackageCard'

export default function Packages() {
  return (
    <section id="paketler" className="section-padding bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Hizmet Paketlerimiz"
          subtitle="İhtiyacınıza göre doğru paketi seçin. Tüm araç tipleri için uygun fiyatlar."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <PackageCard pkg={pkg} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-white/40 text-sm">
            Fiyatlar araç tipine göre değişmektedir. Kesin fiyat için{' '}
            <a
              href="https://wa.me/905XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:underline"
            >
              WhatsApp&apos;tan iletişime geçin
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  )
}
