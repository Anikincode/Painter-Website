import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import HeroBanner from '@/components/HeroBanner'
import TrustBar from '@/components/TrustBar'
import ServiceCard from '@/components/ServiceCard'
import FeatureCard from '@/components/FeatureCard'
import ReviewCard from '@/components/ReviewCard'
import PricingCard from '@/components/PricingCard'
import AccordionFAQ from '@/components/AccordionFAQ'
import CTABanner from '@/components/CTABanner'
import { site } from '@/data/site'

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let start = 0
          const duration = 1800
          const step = Math.ceil(target / (duration / 16))
          const timer = setInterval(() => {
            start += step
            if (start >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(start)
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <TrustBar />

      {/* Stats bar */}
      <section className="bg-white py-10 border-b border-[var(--color-border)]">
        <div className="container-tight">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: site.company.homesServed, suffix: '+', label: 'Homes Painted' },
              { value: 20, suffix: '+', label: 'Years Experience' },
              { value: 100, suffix: '%', label: 'In-House Team' },
              { value: 5, suffix: '.0★', label: 'Google Rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading font-bold text-4xl text-[var(--color-navy)] mb-1">
                  <AnimatedCounter target={stat.value} />{stat.suffix}
                </p>
                <p className="text-[var(--color-muted)] text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-pad bg-[var(--color-page-bg)]">
        <div className="container-tight">
          <p className="section-label mb-3">Our Services</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[var(--color-navy)] max-w-xl">
              Every Room & Every Property Covered
            </h2>
            <Link
              to="/painter-demo/services"
              className="text-sm font-semibold text-[var(--color-orange)] hover:underline shrink-0"
            >
              View All Services →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {site.services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section id="about" className="section-pad bg-white">
        <div className="container-tight">
          <p className="section-label mb-3">Why Choose Us</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[var(--color-navy)] mb-10 max-w-xl">
            Why Homeowners Choose Us Every Time
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {site.features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="section-pad bg-[var(--color-page-bg)]">
        <div className="container-tight">
          <p className="section-label mb-3">Our Work</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[var(--color-navy)]">
              Real Work. Real Homes.
            </h2>
            <Link
              to="/painter-demo/gallery"
              className="text-sm font-semibold text-[var(--color-orange)] hover:underline shrink-0"
            >
              View Full Gallery →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {site.gallery.slice(0, 6).map((img) => (
              <div key={img.src} className="group aspect-[4/3] rounded-xl overflow-hidden relative">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[var(--color-navy-dark)]/0 group-hover:bg-[var(--color-navy-dark)]/40 transition-colors flex items-end p-3">
                  <span className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity bg-[var(--color-navy)]/80 px-2 py-1 rounded">
                    {img.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="section-pad bg-white">
        <div className="container-tight">
          <p className="section-label mb-3">Customer Reviews</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[var(--color-navy)] mb-10">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {site.reviews.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-pad bg-[var(--color-page-bg)]">
        <div className="container-tight">
          <p className="section-label mb-3">Special Offers</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[var(--color-navy)] mb-3">
            Current Promotions
          </h2>
          <p className="text-[var(--color-muted)] mb-10">Fixed pricing, no hidden fees. What you see is what you pay.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {site.pricing.map((p) => (
              <PricingCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section id="areas" className="section-pad bg-white">
        <div className="container-tight">
          <p className="section-label mb-3">Service Areas</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[var(--color-navy)] mb-4">
            Serving {site.company.serviceArea}
          </h2>
          <p className="text-[var(--color-muted)] mb-8 max-w-xl">
            We serve all major neighbourhoods in your area. Same great crew, same warranty, wherever you are.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {site.areas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-[var(--color-page-bg)] border border-[var(--color-border)] rounded-full text-sm font-medium text-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white cursor-pointer transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
          <div className="bg-[var(--color-navy)]/5 border border-[var(--color-navy)]/20 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-[var(--color-navy)]">Not sure if we cover your area?</p>
              <p className="text-sm text-[var(--color-muted)]">Call us — we likely do, and we offer free on-site quotes.</p>
            </div>
            <a
              href={site.company.phoneTel}
              className="shrink-0 bg-[var(--color-navy)] text-white font-semibold px-5 py-2.5 rounded-md hover:bg-[var(--color-navy-light)] transition-colors text-sm"
            >
              {site.company.phone}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-pad bg-[var(--color-page-bg)]">
        <div className="container-tight">
          <p className="section-label mb-3">FAQ</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[var(--color-navy)] mb-10">
            Common Questions
          </h2>
          <div className="max-w-3xl">
            <AccordionFAQ />
          </div>
          <p className="mt-8 text-sm text-[var(--color-muted)]">
            Still have questions?{' '}
            <Link to="/painter-demo/contact" className="text-[var(--color-orange)] font-semibold hover:underline">
              Get a free quote — no obligation.
            </Link>
          </p>
        </div>
      </section>

      {/* Paint brands */}
      <section className="bg-white py-12 border-y border-[var(--color-border)]">
        <div className="container-tight text-center">
          <p className="text-[var(--color-muted)] text-sm mb-6">
            We use only premium paints — backed by our written warranty
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {site.paintBrands.map((brand) => (
              <span
                key={brand}
                className="font-heading font-bold text-xl text-[var(--color-navy)]/40 tracking-tight"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  )
}
