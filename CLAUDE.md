# Painter Demo Site — CLAUDE.md

Demo website for Anikin Technologies prospects. Generic "Your Company Painters" placeholder.  
Stack: React + Vite + Tailwind CSS v4 + shadcn/ui → GitHub Pages

---

## File Map

| File / Folder | Purpose |
|---------------|---------|
| `src/data/site.ts` | ALL placeholder content — swap this to rebrand for a real client |
| `src/components/Navbar.tsx` | Sticky header with mobile drawer |
| `src/components/Footer.tsx` | 4-column footer |
| `src/components/HeroBanner.tsx` | Full-viewport hero with image, trust badges, CTAs |
| `src/components/TrustBar.tsx` | Navy bar with 6 trust icon tiles |
| `src/components/ServiceCard.tsx` | Service card with image, title, description, link |
| `src/components/FeatureCard.tsx` | Icon + heading + text block |
| `src/components/ReviewCard.tsx` | Review quote with avatar initials |
| `src/components/PricingCard.tsx` | Offer card with badge and price |
| `src/components/AccordionFAQ.tsx` | Expandable FAQ list |
| `src/components/CTABanner.tsx` | Full-width navy CTA section (page closer) |
| `src/pages/Home.tsx` | Homepage — all 12 sections |
| `src/pages/Services.tsx` | Services detail page (alternating layout) |
| `src/pages/Gallery.tsx` | Masonry gallery with filter tabs |
| `src/pages/Contact.tsx` | Quote request form + contact sidebar |
| `src/lib/utils.ts` | `cn()` Tailwind merge utility |
| `src/index.css` | CSS variables (colors, fonts) + Tailwind import |
| `vite.config.ts` | Base path set to `/painter-demo/` for GitHub Pages |

---

## Design Tokens (CSS Variables)

Defined in `src/index.css` @theme block:

- `--color-navy` `#1E3A8A` — primary brand (headings, nav, trust bar)
- `--color-navy-dark` `#0F172A` — footer, dark overlays
- `--color-orange` `#EA580C` — CTA buttons, highlights
- `--color-orange-hover` `#C2410C` — button hover
- `--color-page-bg` `#F8FAFC` — page background
- `--color-muted` `#64748B` — secondary text
- `--color-border` `#E2E8F0` — card borders
- `--font-heading` Poppins
- `--font-body` Open Sans

---

## Commands

```bash
npm run dev       # Local dev server
npm run build     # Production build → /dist
npm run deploy    # Build + push to gh-pages branch
```

---

## To Rebrand for a Real Client

1. Edit `src/data/site.ts` — update company name, phone, email, colors, services, reviews
2. Replace Unsplash image URLs with real project photos
3. Update Formspree endpoint in `src/pages/Contact.tsx`
4. Update `vite.config.ts` base path if repo name changes
5. Update `homepage` in `package.json`

---

## PRD

Full product requirements: `../PRD.md`
