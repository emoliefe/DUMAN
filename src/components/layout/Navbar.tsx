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
          ? 'glass border-b border-white/5 py-3'
          : 'py-5 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-gold-500 text-lg">✦</span>
          <span className="font-playfair text-xl font-bold text-gold-gradient tracking-widest">
            {BUSINESS_NAME}
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-gold-500 transition-colors duration-300 text-sm tracking-wider uppercase font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
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

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-0 bg-black/98 z-40 flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white"
              aria-label="Menüyü kapat"
            >
              <X size={28} />
            </button>
            <span className="font-playfair text-gold-500 text-lg tracking-widest mb-4">
              ✦ {BUSINESS_NAME} ✦
            </span>
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-playfair text-3xl text-white hover:text-gold-500 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full text-lg font-medium mt-4 hover:bg-green-400 transition-colors"
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
