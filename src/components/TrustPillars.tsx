import { trustPillars } from '../data/content'
import { Reveal } from './ui/Reveal'

const pillarIcons = [
  'fas fa-microchip',
  'fas fa-diagram-project',
  'fas fa-rocket',
] as const

export function TrustPillars() {
  return (
    <section className="section-padding section-alt">
      <div className="container-site">
        <div className="grid gap-6 md:grid-cols-3">
          {trustPillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 100}>
              <article className="brand-card group h-full text-center !p-8">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-coral/15 to-brand-burgundy/10 text-brand-coral transition-transform duration-300 group-hover:scale-110">
                  <i className={`${pillarIcons[i]} text-2xl`} aria-hidden />
                </div>
                <p className="font-heading text-lg font-bold leading-snug text-brand-burgundy">
                  {pillar.title}
                </p>
                <p className="mt-2 text-base text-brand-coral">{pillar.subtitle}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
