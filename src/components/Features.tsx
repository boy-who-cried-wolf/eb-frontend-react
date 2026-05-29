import { links } from '../data/assets'
import { workflowFeatures } from '../data/content'
import { Button } from './ui/Button'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const featureIcons = [
  'fas fa-paper-plane',
  'fas fa-chart-line',
  'fas fa-comments',
  'fas fa-calendar-check',
  'fas fa-mobile-screen-button',
  'fas fa-file-shield',
] as const

export function Features() {
  return (
    <section id="features" className="section-padding">
      <div className="container-site">
        <Reveal>
          <SectionHeading eyebrow="Evolve Broker brings together" title="All in one coherent workflow" />
          <div className="brand-divider" />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workflowFeatures.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 80}>
              <article className="brand-card group h-full !p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-coral/10 text-brand-coral transition-colors group-hover:bg-brand-coral group-hover:text-white">
                  <i className={`${featureIcons[i]} text-base`} aria-hidden />
                </div>
                <h3 className="font-heading text-lg font-bold text-brand-burgundy">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-muted sm:text-base">
                  {feature.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mx-auto mt-16 max-w-3xl space-y-4 text-center">
            <p className="text-lg font-semibold leading-relaxed text-brand-burgundy sm:text-xl">
              All in one coherent workflow which works alongside your existing aggregator CRM.
            </p>
            <p className="text-base leading-relaxed text-slate-muted sm:text-lg">
              If you&apos;ve been trying to stitch these pieces together yourself, Evolve Broker
              brings the complete system together with you.
            </p>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={links.apply} size="lg">
              Ready to Apply
            </Button>
            <Button variant="secondary" href={links.learnMore} size="lg">
              Learn More
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
