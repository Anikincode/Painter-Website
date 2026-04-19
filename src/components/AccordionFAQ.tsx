import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { site } from '@/data/site'

export default function AccordionFAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {site.faq.map((item, i) => (
        <div
          key={i}
          className="bg-white border border-[var(--color-border)] rounded-xl overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-slate-50 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-heading font-semibold text-[var(--color-navy)] text-sm sm:text-base">
              {i + 1}. {item.question}
            </span>
            <ChevronDown
              className={cn(
                'w-5 h-5 text-[var(--color-muted)] shrink-0 transition-transform duration-200',
                open === i && 'rotate-180'
              )}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-[var(--color-muted)] text-sm leading-relaxed border-t border-[var(--color-border)]">
              <p className="pt-4">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
