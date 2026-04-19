import { ShieldCheck, BadgeDollarSign, Award, Star, ThumbsUp, CheckCircle } from 'lucide-react'
import { site } from '@/data/site'

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  ShieldCheck,
  BadgeDollarSign,
  Award,
  Star,
  ThumbsUp,
  CheckCircle,
}

export default function TrustBar() {
  return (
    <section className="bg-[var(--color-navy)] py-8">
      <div className="container-tight">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {site.trustBadges.map((badge) => {
            const Icon = iconMap[badge.icon] ?? ShieldCheck
            return (
              <div
                key={badge.label}
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[var(--color-orange-light)]" />
                </div>
                <span className="text-white text-xs font-semibold leading-tight">
                  {badge.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
