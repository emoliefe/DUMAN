'use client'

import { motion } from 'framer-motion'
import { FAQ_ITEMS } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'
import AccordionItem from '@/components/ui/AccordionItem'

export default function FAQ() {
  return (
    <section id="sss" className="section-padding bg-dark-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Sık Sorulan Sorular"
          subtitle="Merak ettiklerinizin cevabı burada."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col gap-3">
            {FAQ_ITEMS.map(item => (
              <AccordionItem key={item.question} item={item} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
