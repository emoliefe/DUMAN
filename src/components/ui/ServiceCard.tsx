'use client'

import { motion } from 'framer-motion'
import type { Service } from '@/types'

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div
      className="relative glass-card rounded-2xl p-6 flex flex-col gap-4 overflow-hidden group cursor-default h-full"
      whileHover={{ borderColor: 'rgba(201, 168, 76, 0.5)', y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {service.badge && (
        <span className="absolute top-4 right-4 text-xs font-semibold bg-gold-gradient text-dark-900 px-2 py-0.5 rounded-full">
          {service.badge}
        </span>
      )}
      <div className="text-4xl">{service.icon}</div>
      <div>
        <h3 className="font-playfair font-semibold text-white text-lg mb-2 group-hover:text-gold-400 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
      </div>
      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-card-shine opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
}
