'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import { BUSINESS_NAME, WHATSAPP_URL } from '@/lib/constants'

const NAV_LINKS = [
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Öncesi/Sonrası', href: '#oncesi-sonrasi' },
  { label: 'Paketler', href: '#paketler' },
  { label: 'SSS', href: '#sss' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/[0.06] py-3'
          : 'py-5 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-lg bg-gold-500 flex items-center justify-center">
            <span className="text-black text-sm font-black">D</span>
          </div>
          <span className="font-playfair text-xl font-bold text-white tracking-wider group-hover:text-gold-400 transition-colors duration-300">
            {BUSINESS_NAME}
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/50 hover:text-white transition-colors duration-300 text-sm tracking-wider uppercase font-medium relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menüyü aç/kapat"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-0 bg-black z-40 flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
              aria-label="Menüyü kapat"
            >
              <X size={28} />
            </button>

            {/* Logo in menu */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gold-500 flex items-center justify-center">
                <span className="text-black text-base font-black">D</span>
              </div>
              <span className="font-playfair text-gold-400 text-xl font-bold tracking-wider">
                {BUSINESS_NAME}
              </span>
            </div>

            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                className="font-playfair text-3xl text-white/70 hover:text-white transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </motion.a>
            ))}

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold mt-4 hover:bg-green-400 transition-colors"
            >
              <MessageCircle size={20} />
              WhatsApp ile Ara
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
