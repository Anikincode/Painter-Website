import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { site } from '@/data/site'

export default function CTABanner() {
  return (
    <section className="bg-[var(--color-navy)] section-pad">
      <div className="container-tight text-center">
        <p className="section-label text-[var(--color-orange-light)] mb-4">Get Started Today</p>
        <h2 className="font-heading font-bold text-white text-3xl md:text-4xl lg:text-5xl mb-5 max-w-2xl mx-auto leading-tight">
          Ready to See Your Home Transformed?
        </h2>
        <p className="text-slate-300 text-lg max-w-xl mx-auto mb-8">
          Quote in 24 hours. Painting this week. No surprises — just a beautiful finish backed by our written warranty.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/painter-demo/contact"
            className="bg-[var(--color-orange)] hover:bg-[var(--color-orange-hover)] text-white font-bold text-base px-8 py-4 rounded-md transition-colors shadow-lg"
          >
            Get Your Free Quote Today
          </Link>
          <a
            href={site.company.phoneTel}
            className="flex items-center gap-2 text-white font-semibold text-base hover:text-[var(--color-orange-light)] transition-colors"
          >
            <Phone className="w-5 h-5" />
            {site.company.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
