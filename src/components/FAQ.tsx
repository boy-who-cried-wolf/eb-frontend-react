import { useState } from 'react'
import { faqs } from '../data/content'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding section-alt">
      <div className="container-site">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionHeading title="Frequently Asked Questions" />
            <div className="brand-divider" />
          </Reveal>

          <div className="mt-12 space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <Reveal key={i} delay={i * 50}>
                  <div
                    className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                      isOpen ? 'border-brand-coral/30 shadow-md' : 'border-black/5 shadow-sm'
                    }`}
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span className="font-heading text-base font-semibold text-brand-burgundy sm:text-lg">
                        {faq.question}
                      </span>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? 'rotate-180 bg-brand-coral text-white'
                            : 'bg-brand-coral/10 text-brand-coral'
                        }`}
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="border-t border-black/5 px-5 pb-5 pt-4 leading-relaxed text-slate-muted sm:px-6 sm:pb-6">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
