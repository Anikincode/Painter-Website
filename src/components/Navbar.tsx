import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, PaintBucket } from 'lucide-react'
import { cn } from '@/lib/utils'
import { site } from '@/data/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
        scrolled ? 'bg-white border-b border-[var(--color-border)] shadow-sm' : 'bg-white/95 backdrop-blur-sm'
      )}
    >
      <div className="container-tight flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/painter-demo/" className="flex items-center gap-2 font-heading font-700">
          <div className="w-8 h-8 bg-[var(--color-navy)] rounded flex items-center justify-center">
            <PaintBucket className="w-4 h-4 text-white" />
          </div>
          <span className="text-[var(--color-navy)] font-semibold text-lg leading-tight hidden sm:block">
            Your Company<br />
            <span className="text-xs font-normal text-[var(--color-muted)]">Painters</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {site.nav.links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-navy)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={site.company.phoneTel}
            className="flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)] hover:text-[var(--color-orange)] transition-colors"
          >
            <Phone className="w-4 h-4" />
            {site.company.phone}
          </a>
          <Link
            to="/painter-demo/contact"
            className="bg-[var(--color-orange)] hover:bg-[var(--color-orange-hover)] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
          >
            Free Quote
          </Link>
        </div>

        {/* Mobile: phone + hamburger */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href={site.company.phoneTel}
            className="flex items-center gap-1.5 text-sm font-semibold text-[var(--color-navy)]"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">{site.company.phone}</span>
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md text-[var(--color-navy)] hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-white border-t border-[var(--color-border)] shadow-lg">
          <nav className="container-tight py-4 flex flex-col gap-1">
            {site.nav.links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="py-3 px-4 text-base font-medium text-[var(--color-text)] hover:bg-slate-50 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-[var(--color-border)]">
              <Link
                to="/painter-demo/contact"
                className="block w-full text-center bg-[var(--color-orange)] hover:bg-[var(--color-orange-hover)] text-white font-semibold py-3 rounded-md transition-colors"
              >
                Get a Free Quote
              </Link>
              <a
                href={site.company.phoneTel}
                className="mt-3 flex items-center justify-center gap-2 text-[var(--color-navy)] font-semibold py-2"
              >
                <Phone className="w-4 h-4" />
                {site.company.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
