import { Link } from 'react-router-dom'
import { Phone, Star } from 'lucide-react'
import { site } from '@/data/site'

function StarRow({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

export default function HeroBanner() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white">
      {/* Content */}
      <div className="relative z-10 container-tight pt-24 pb-16">
        {/* Review badges */}
        <div className="flex flex-wrap gap-4 mb-6">
          {['Google', 'Facebook', 'Yelp'].map((platform) => (
            <div
              key={platform}
              className="flex items-center gap-2 bg-[var(--color-navy)]/5 border border-[var(--color-navy)]/15 rounded-full px-4 py-1.5"
            >
              <StarRow />
              <span className="text-[var(--color-navy)] text-sm font-medium">5.0 · {platform}</span>
            </div>
          ))}
        </div>

        {/* Eyebrow */}
        <p className="section-label mb-3">{site.hero.eyebrow}</p>

        {/* H1 */}
        <h1 className="font-heading font-bold text-[var(--color-navy)] text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl mb-5">
          {site.hero.h1}
        </h1>

        {/* Subheadline */}
        <p className="text-[var(--color-muted)] text-lg max-w-xl leading-relaxed mb-8">
          {site.hero.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <Link
            to="/painter-demo/contact"
            className="bg-[var(--color-orange)] hover:bg-[var(--color-orange-hover)] text-white font-semibold text-base px-7 py-3.5 rounded-md transition-colors shadow-lg"
          >
            {site.hero.primaryCTA}
          </Link>
          <a
            href={site.company.phoneTel}
            className="flex items-center gap-2 text-[var(--color-navy)] font-semibold text-base hover:text-[var(--color-orange)] transition-colors"
          >
            <Phone className="w-5 h-5" />
            {site.hero.secondaryCTA}
          </a>
        </div>

        {/* Urgency */}
        <p className="text-[var(--color-muted)] text-sm font-medium flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse inline-block" />
          {site.hero.urgency}
        </p>

        {/* Photo strip */}
        <div className="mt-12 grid grid-cols-3 gap-3 max-w-xl">
          {site.hero.galleryImages.map((img) => (
            <div key={img.src} className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--color-muted)]/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-[var(--color-muted)]/30" />
      </div>
    </section>
  )
}
