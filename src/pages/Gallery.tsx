import { useState } from 'react'
import CTABanner from '@/components/CTABanner'
import { site } from '@/data/site'
import { cn } from '@/lib/utils'

const categories = ['All', 'Interior', 'Exterior', 'Cabinets', 'Commercial']

export default function Gallery() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? site.gallery : site.gallery.filter((g) => g.category === active)

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-[var(--color-navy)] section-pad">
        <div className="container-tight">
          <p className="section-label text-[var(--color-orange-light)] mb-3">Portfolio</p>
          <h1 className="font-heading font-bold text-white text-4xl md:text-5xl mb-4">
            Real Work. Real Homes.
          </h1>
          <p className="text-slate-300 text-lg max-w-xl">
            Every project is handled by our in-house team — no subcontractors. See the results for yourself.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-pad bg-[var(--color-page-bg)]">
        <div className="container-tight">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  'px-5 py-2 rounded-full text-sm font-semibold transition-colors border',
                  active === cat
                    ? 'bg-[var(--color-navy)] text-white border-[var(--color-navy)]'
                    : 'bg-white text-[var(--color-navy)] border-[var(--color-border)] hover:border-[var(--color-navy)]'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img) => (
              <div key={img.src} className="group break-inside-avoid rounded-xl overflow-hidden relative shadow-sm">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[var(--color-navy-dark)]/0 group-hover:bg-[var(--color-navy-dark)]/50 transition-colors flex items-end p-4">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-block bg-white text-[var(--color-navy)] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-1">
                      {img.category}
                    </span>
                    <p className="text-white text-sm leading-snug">{img.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  )
}
