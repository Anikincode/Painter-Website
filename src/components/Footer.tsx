import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, PaintBucket } from 'lucide-react'
import { site } from '@/data/site'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy-dark)] text-white">
      <div className="container-tight py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[var(--color-orange)] rounded flex items-center justify-center">
                <PaintBucket className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-lg font-heading">{site.company.name}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">{site.company.tagline}</p>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-slate-500" />
                {site.company.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-slate-500" />
                <a href={site.company.phoneTel} className="hover:text-white transition-colors">
                  {site.company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-slate-500" />
                <a href={`mailto:${site.company.email}`} className="hover:text-white transition-colors">
                  {site.company.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-slate-500" />
                {site.company.hours}
              </li>
            </ul>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {['Interior Painting', 'Exterior Painting', 'Cabinet Refinishing', 'Commercial Painting', 'Deck Staining', 'Drywall Repair'].map((s) => (
                <li key={s}>
                  <Link to="/painter-demo/services" className="hover:text-white transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Support */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4">
              Support
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {[
                { label: 'Contact Us', href: '/painter-demo/contact' },
                { label: 'Free Quote', href: '/painter-demo/contact' },
                { label: 'Gallery', href: '/painter-demo/gallery' },
                { label: 'FAQ', href: '/#faq' },
                { label: 'Warranty', href: '#' },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Company */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Reviews', href: '#reviews' },
                { label: 'Service Areas', href: '#areas' },
                { label: 'Privacy Policy', href: '#' },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-slate-800">
              <p className="text-xs text-slate-500 mb-2">We use premium paints from:</p>
              <div className="flex flex-wrap gap-2">
                {site.paintBrands.map((b) => (
                  <span key={b} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container-tight py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <span>© 2026 {site.company.name}. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
