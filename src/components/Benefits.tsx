import { links } from '../data/assets'
import { benefits } from '../data/content'
import { Button } from './ui/Button'
import { Reveal } from './ui/Reveal'

export function Benefits() {
  return (
    <section className="section-padding">
      <div className="container-site">
        <Reveal variant="scale">
          <div className="mx-auto max-w-4xl rounded-3xl border border-brand-burgundy/10 bg-white p-8 shadow-lg sm:p-12 lg:p-16">
            <div className="text-center">
              <h2 className="font-heading text-3xl font-bold leading-tight text-brand-burgundy sm:text-4xl">
                AI-Powered CRM +
                <br className="hidden sm:block" />
                Broker-Designed Blueprint
              </h2>
              <p className="mt-4 text-lg text-brand-coral">Allows you more time to:</p>
            </div>

            <ul className="mt-10 space-y-5">
              {benefits.map((benefit, i) => (
                <li key={i}>
                  <Reveal delay={i * 80}>
                    <div className="flex items-start gap-4 rounded-xl bg-brand-cream/60 px-5 py-4">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-coral text-xs text-white">
                        <i className="fas fa-check" aria-hidden />
                      </span>
                      <span className="text-base leading-relaxed text-navy-800 sm:text-lg">{benefit}</span>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>

            <Reveal delay={300}>
              <div className="mt-10 text-center">
                <Button href={links.apply} size="lg">
                  Ready to Apply
                </Button>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
