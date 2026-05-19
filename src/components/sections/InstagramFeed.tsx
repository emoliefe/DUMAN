import Image from 'next/image'
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '@/lib/constants'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function InstagramFeed() {
  return (
    <section className="section-padding bg-dark-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="flex flex-col md:flex-row items-center gap-10">
          {/* Featured image */}
          <div className="relative w-full md:w-72 aspect-square rounded-2xl overflow-hidden flex-shrink-0 border border-gold-500/20 shadow-gold-glow">
            <Image
              src="/images/instagram/IMG-20250304-WA0069.jpg"
              alt="Duman Detay çalışma"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 288px"
            />
            {/* Instagram overlay badge */}
            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full p-2">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
          </div>

          {/* Text + CTA */}
          <div className="text-center md:text-left">
            <span className="text-gold-500 text-sm tracking-widest uppercase font-medium">
              Instagram
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
              Çalışmalarımızı<br />
              <span className="text-gold-gradient">Takip Edin</span>
            </h2>
            <p className="text-white/50 mb-8 leading-relaxed max-w-sm mx-auto md:mx-0">
              Öncesi/sonrası dönüşümler, güncel işler ve müşteri memnuniyeti{' '}
              <span className="text-gold-400">{INSTAGRAM_HANDLE}</span> hesabında.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-gold-glow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram&apos;da Takip Et
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
