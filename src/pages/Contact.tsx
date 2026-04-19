import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react'
import { site } from '@/data/site'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Replace with your Formspree endpoint
    const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(form),
    }).catch(() => null)

    // Show success regardless (demo mode)
    if (!res || res.ok || true) setSubmitted(true)
  }

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-[var(--color-navy)] section-pad">
        <div className="container-tight">
          <p className="section-label text-[var(--color-orange-light)] mb-3">Contact Us</p>
          <h1 className="font-heading font-bold text-white text-4xl md:text-5xl mb-4">
            Get Your Free Quote in 24 Hours
          </h1>
          <p className="text-slate-300 text-lg max-w-xl">
            Tell us about your project. We'll respond within 24 hours — often within the hour.
          </p>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-page-bg)]">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl p-10 shadow-sm border border-[var(--color-border)] flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="font-heading font-bold text-2xl text-[var(--color-navy)]">
                    Quote Request Received!
                  </h2>
                  <p className="text-[var(--color-muted)] max-w-sm">
                    Thanks! We'll review your project details and get back to you within 24 hours — usually much faster.
                  </p>
                  <a
                    href={site.company.phoneTel}
                    className="mt-2 bg-[var(--color-orange)] text-white font-semibold px-6 py-3 rounded-md hover:bg-[var(--color-orange-hover)] transition-colors"
                  >
                    Or Call Us Now: {site.company.phone}
                  </a>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--color-border)] space-y-5"
                >
                  <h2 className="font-heading font-bold text-xl text-[var(--color-navy)] mb-1">
                    Request a Free Quote
                  </h2>
                  <p className="text-sm text-[var(--color-muted)] pb-2 border-b border-[var(--color-border)]">
                    All fields marked * are required
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-text)] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full border border-[var(--color-border)] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-text)] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        required
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        className="w-full border border-[var(--color-border)] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[var(--color-text)] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@email.com"
                      className="w-full border border-[var(--color-border)] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[var(--color-text)] mb-1.5">
                      Service Type *
                    </label>
                    <select
                      required
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-[var(--color-border)] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] transition bg-white"
                    >
                      <option value="">Select a service...</option>
                      <option>Interior Painting</option>
                      <option>Exterior Painting</option>
                      <option>Cabinet Refinishing</option>
                      <option>Commercial Painting</option>
                      <option>Not sure — need advice</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[var(--color-text)] mb-1.5">
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your space — number of rooms, current condition, any specific concerns..."
                      className="w-full border border-[var(--color-border)] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[var(--color-orange)] hover:bg-[var(--color-orange-hover)] text-white font-bold py-3.5 rounded-lg transition-colors text-base"
                  >
                    Send Quote Request →
                  </button>
                  <p className="text-xs text-center text-[var(--color-muted)]">
                    We'll respond within 24 hours. No obligation, no pressure.
                  </p>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-[var(--color-border)] shadow-sm">
                <h3 className="font-heading font-semibold text-[var(--color-navy)] mb-4">Contact Info</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[var(--color-orange)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--color-text)]">Phone</p>
                      <a href={site.company.phoneTel} className="text-[var(--color-muted)] hover:text-[var(--color-orange)] transition-colors">
                        {site.company.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[var(--color-orange)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--color-text)]">Email</p>
                      <a href={`mailto:${site.company.email}`} className="text-[var(--color-muted)] hover:text-[var(--color-orange)] transition-colors">
                        {site.company.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[var(--color-orange)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--color-text)]">Address</p>
                      <p className="text-[var(--color-muted)]">{site.company.address}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[var(--color-orange)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--color-text)]">Hours</p>
                      <p className="text-[var(--color-muted)]">{site.company.hours}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-[var(--color-navy)] rounded-xl p-6 text-white">
                <h3 className="font-heading font-semibold mb-3">What Happens Next?</h3>
                <ol className="space-y-3 text-sm text-slate-300">
                  {[
                    'We review your request and contact you within 24 hours',
                    'We schedule a free on-site visit at your convenience',
                    'You receive a detailed written quote — fixed price, no surprises',
                    'We start painting — often within the same week',
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="w-5 h-5 rounded-full bg-[var(--color-orange)] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
