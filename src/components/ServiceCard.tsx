import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  href: string
}

export default function ServiceCard({ title, description, image, href }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-[var(--color-border)] hover:shadow-md transition-shadow">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading font-semibold text-lg text-[var(--color-navy)] mb-2">
          {title}
        </h3>
        <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">{description}</p>
        <Link
          to={href}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-orange)] hover:gap-2.5 transition-all"
        >
          Learn More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
