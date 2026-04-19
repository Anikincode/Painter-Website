import { Link } from 'react-router-dom'

interface PricingCardProps {
  title: string
  price: string
  description: string
  badge: string
  expiry: string
}

export default function PricingCard({ title, price, description, badge, expiry }: PricingCardProps) {
  return (
    <div className="relative bg-white rounded-xl border border-[var(--color-border)] shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      {/* Badge */}
      <div className="bg-[var(--color-orange)] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 text-center">
        {badge}
      </div>

      <div className="p-6">
        <h3 className="font-heading font-bold text-xl text-[var(--color-navy)] mb-1">{title}</h3>
        <p className="text-3xl font-bold text-[var(--color-orange)] mb-3">{price}</p>
        <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-5">{description}</p>
        <p className="text-xs text-[var(--color-muted)] mb-5 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
          {expiry}
        </p>
        <Link
          to="/painter-demo/contact"
          className="block w-full text-center bg-[var(--color-navy)] hover:bg-[var(--color-navy-light)] text-white font-semibold py-3 rounded-md transition-colors"
        >
          Book Now
        </Link>
      </div>
    </div>
  )
}
