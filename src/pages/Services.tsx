import CTABanner from '@/components/CTABanner'
import { site } from '@/data/site'

const serviceDetails = [
  {
    id: 'interior',
    title: 'Interior Painting',
    description:
      'From accent walls to full home repaints — we handle walls, ceilings, trim, doors, cabinets, and more. Our team preps every surface, protects your furniture, and leaves your space spotless.',
    price: 'Starting at $1.80/sq ft',
    image: site.gallery[0].src,
    items: ['Living Rooms & Bedrooms', 'Kitchens & Bathrooms', 'Ceilings & Trim', 'Accent Walls', 'Drywall Repair', 'Wallpaper Removal'],
  },
  {
    id: 'exterior',
    title: 'Exterior Painting',
    description:
      'Protect and beautify your home\'s exterior with professional-grade coatings that withstand your local climate. We paint siding, fascia, soffits, decks, fences, garage doors, and more.',
    price: 'Starting at $4,000',
    image: site.gallery[1].src,
    items: ['Siding & Fascia', 'Decks & Fences', 'Front Doors', 'Garage Doors', 'Eavestrough Painting', 'Foundation Parging'],
  },
  {
    id: 'cabinets',
    title: 'Cabinet Refinishing',
    description:
      'Transform outdated cabinets into a showroom-quality finish — without the cost of replacement. We spray-apply industrial-grade topcoats for a hard, durable finish that resists chips and stains.',
    price: 'Starting at $2,500',
    image: site.gallery[2].src,
    items: ['Kitchen Cabinets', 'Bathroom Vanities', 'Built-Ins & Shelving', 'Hardware Replacement', '5-Year Warranty', 'Colour Matching'],
  },
  {
    id: 'commercial',
    title: 'Commercial Painting',
    description:
      'Minimal disruption. Maximum finish. We work evenings and weekends to keep your business running while we transform your space — offices, retail, strata, and multi-unit residential.',
    price: 'Custom quote',
    image: site.gallery[3].src,
    items: ['Office Spaces', 'Retail & Restaurants', 'Strata & Condo Corporations', 'Multi-Unit Residential', 'Industrial Coatings', 'After-Hours Scheduling'],
  },
]

export default function Services() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-[var(--color-navy)] section-pad">
        <div className="container-tight">
          <p className="section-label text-[var(--color-orange-light)] mb-3">Our Services</p>
          <h1 className="font-heading font-bold text-white text-4xl md:text-5xl mb-4 max-w-2xl">
            Every Painting Service You Need
          </h1>
          <p className="text-slate-300 text-lg max-w-xl">
            Interior, exterior, cabinets, and commercial — backed by written warranties and fixed pricing.
          </p>
        </div>
      </section>

      {/* Service sections */}
      <div className="bg-[var(--color-page-bg)]">
        {serviceDetails.map((s, i) => (
          <section key={s.id} id={s.id} className="section-pad border-b border-[var(--color-border)] last:border-0">
            <div className="container-tight">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="inline-block bg-[var(--color-orange)]/10 text-[var(--color-orange)] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                    {s.price}
                  </span>
                  <h2 className="font-heading font-bold text-3xl text-[var(--color-navy)] mb-4">
                    {s.title}
                  </h2>
                  <p className="text-[var(--color-muted)] leading-relaxed mb-6">{s.description}</p>
                  <ul className="grid grid-cols-2 gap-2 mb-8">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-[var(--color-text)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-orange)] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/painter-demo/contact"
                    className="inline-block bg-[var(--color-orange)] hover:bg-[var(--color-orange-hover)] text-white font-semibold px-6 py-3 rounded-md transition-colors"
                  >
                    Get a Quote for {s.title}
                  </a>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-lg aspect-[4/3] ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CTABanner />
    </main>
  )
}
