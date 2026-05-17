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
    <AnimatedSection className={cn('mb-12', centered && 'text-center', className)}>
      <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      <div className={cn('flex mb-6', centered ? 'justify-center' : 'justify-start')}>
        <div className="h-0.5 w-16 bg-gold-500" />
        <div className="h-0.5 w-8 bg-gold-500/30 ml-1" />
      </div>
      {subtitle && (
        <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  )
}
