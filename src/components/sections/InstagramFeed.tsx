import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '@/lib/constants'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedSection from '@/components/ui/AnimatedSection'

const MOCK_POSTS = [
  { id: 1, emoji: '🚗', bg: 'from-dark-700 to-dark-800', label: 'Araç Detaylı Temizlik' },
  { id: 2, emoji: '🛋️', bg: 'from-dark-600 to-dark-700', label: 'Koltuk Yıkama' },
  { id: 3, emoji: '✨', bg: 'from-dark-800 to-dark-700', label: 'Pasta Cila' },
  { id: 4, emoji: '🔬', bg: 'from-dark-700 to-dark-600', label: 'Seramik' },
  { id: 5, emoji: '🏠', bg: 'from-dark-600 to-dark-800', label: 'Ev Koltuk' },
  { id: 6, emoji: '🦠', bg: 'from-dark-800 to-dark-600', label: 'Dezenfeksiyon' },
]

export default function InstagramFeed() {
  return (
    <section className="section-padding bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Instagram'da Biz"
          subtitle={`${INSTAGRAM_HANDLE} hesabımızda güncel çalışmalarımızı takip edin.`}
        />

        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {MOCK_POSTS.map((post, i) => (
              <a
                key={post.id}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative aspect-square rounded-xl bg-gradient-to-br ${post.bg} border border-dark-500 group overflow-hidden flex items-center justify-center`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="text-5xl opacity-30 group-hover:opacity-60 transition-opacity">{post.emoji}</span>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/10 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <svg className="w-8 h-8 text-white mx-auto mb-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span className="text-white text-xs">{post.label}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 glass-card border-gold-500/30 text-white font-semibold px-8 py-4 rounded-2xl hover:border-gold-500/60 hover:shadow-gold-glow transition-all duration-300"
          >
            <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Instagram&apos;da Takip Et
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
