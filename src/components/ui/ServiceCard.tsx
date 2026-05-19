'use client'

import { motion } from 'framer-motion'
import type { Service } from '@/types'

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div
      className="relative rounded-2xl p-6 flex flex-col gap-5 overflow-hidden group cursor-default h-full bg-[#0a0a0a] border border-white/[0.06] hover:border-gold-500/40 transition-all duration-300"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

      {service.badge && (
        <span className="absolute top-4 right-4 text-xs font-bold bg-gold-gradient text-black px-2.5 py-1 rounded-full">
          {service.badge}
        </span>
      )}

      {/* Icon container */}
      <div className="w-14 h-14 rounded-xl bg-gold-500/8 border border-gold-500/20 flex items-center justify-center text-2xl group-hover:bg-gold-500/15 group-hover:border-gold-500/40 transition-all duration-300">
        {service.icon}
      </div>

      <div>
        <h3 className="font-playfair font-bold text-white text-lg mb-2.5 group-hover:text-gold-400 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-white/45 text-sm leading-relaxed">{service.description}</p>
      </div>

      {/* Bottom yellow line on hover */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gold-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
}
