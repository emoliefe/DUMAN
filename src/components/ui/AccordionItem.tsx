'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import type { FAQItem } from '@/types'

export default function AccordionItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="text-white font-medium text-sm md:text-base pr-4">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gold-500 text-2xl font-light flex-shrink-0"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-dark-500 pt-4">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
