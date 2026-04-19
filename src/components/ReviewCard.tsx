import { Star } from 'lucide-react'

interface ReviewCardProps {
  quote: string
  name: string
  location: string
  initials: string
  platform: string
}

export default function ReviewCard({ quote, name, location, initials, platform }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 border border-[var(--color-border)] shadow-sm flex flex-col gap-4">
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-[var(--color-text)] text-sm leading-relaxed flex-1">
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-[var(--color-border)]">
        <div className="w-9 h-9 rounded-full bg-[var(--color-navy)] flex items-center justify-center shrink-0">
          <span className="text-white text-xs font-bold">{initials}</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--color-text)]">{name}</p>
          <p className="text-xs text-[var(--color-muted)]">{location} · {platform}</p>
        </div>
      </div>
    </div>
  )
}
