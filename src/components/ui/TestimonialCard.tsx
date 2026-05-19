import type { Testimonial } from '@/types'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-[#080808] border border-white/[0.06] hover:border-gold-500/25 rounded-2xl p-6 flex flex-col gap-4 h-full transition-all duration-300 group">
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} className="text-gold-400 text-sm">★</span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-white/55 text-sm leading-relaxed flex-1 group-hover:text-white/65 transition-colors duration-300">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
        <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center text-gold-400 font-bold text-sm flex-shrink-0">
          {testimonial.initials}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{testimonial.name}</p>
          <p className="text-white/25 text-xs mt-0.5">
            {testimonial.service} · {testimonial.date}
          </p>
        </div>
      </div>
    </div>
  )
}
