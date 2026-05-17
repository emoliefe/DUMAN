import { cn } from '@/lib/utils'
import AnimatedSection from './AnimatedSection'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <AnimatedSection className={cn('mb-14', centered && 'text-center', className)}>
      <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
        {title}
      </h2>
      <div className={cn('flex items-center gap-2 mb-6', centered ? 'justify-center' : 'justify-start')}>
        <div className="h-px w-12 bg-gold-500" />
        <div className="w-1.5 h-1.5 rotate-45 bg-gold-400" />
        <div className="h-px w-12 bg-gold-500" />
      </div>
      {subtitle && (
        <p className="text-white/45 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  )
}
