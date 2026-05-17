import type { Testimonial } from '@/types'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="glass-card rounded-2xl p-6 flex flex-col gap-4 h-full hover:border-gold-500/20 transition-colors duration-300">
      {/* Quote decoration */}
      <span className="font-playfair text-4xl text-gold-500/20 leading-none select-none">
        &ldquo;
      </span>

      {/* Stars */}
      <div className="flex gap-1 -mt-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} className="text-gold-500 text-sm">★</span>
        ))}
      </div>

      {/* Text */}
      <p className="text-white/60 text-sm leading-relaxed flex-1">
        {testimonial.text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-white/5">
        <div className="w-10 h-10 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400 font-bold text-sm flex-shrink-0">
          {testimonial.initials}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{testimonial.name}</p>
          <p className="text-white/30 text-xs">
            {testimonial.service} · {testimonial.date}
          </p>
        </div>
      </div>
    </div>
  )
}
