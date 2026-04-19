import { DollarSign, Clock, ShieldCheck } from 'lucide-react'

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  DollarSign,
  Clock,
  ShieldCheck,
}

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const Icon = iconMap[icon] ?? ShieldCheck
  return (
    <div className="flex flex-col items-start gap-4 p-8 bg-white rounded-xl border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-lg bg-[var(--color-navy)]/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-[var(--color-navy)]" />
      </div>
      <div>
        <h3 className="font-heading font-semibold text-lg text-[var(--color-navy)] mb-2">
          {title}
        </h3>
        <p className="text-[var(--color-muted)] text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
