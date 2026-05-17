import { cn } from '@/lib/utils'

interface GoldBadgeProps {
  icon?: string
  label: string
  className?: string
}

export default function GoldBadge({ icon, label, className }: GoldBadgeProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-gold-400',
        className
      )}
    >
      {icon && <span>{icon}</span>}
      <span>{label}</span>
    </div>
  )
}
