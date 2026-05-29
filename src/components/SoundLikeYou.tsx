import { assets, links } from '../data/assets'
import { painQuestions } from '../data/content'
import { Button } from './ui/Button'
import { Reveal } from './ui/Reveal'

export function SoundLikeYou() {
  return (
    <section id="why" className="section-padding">
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <Reveal>
              <h2 className="text-center font-heading text-3xl font-bold text-brand-burgundy sm:text-4xl lg:text-left">
                Does this sound like you?
              </h2>
              <div className="brand-divider lg:mx-0" />
            </Reveal>

            <div className="mt-10 space-y-5">
              <Reveal delay={80}>
                <p className="text-center text-lg leading-relaxed text-navy-800 lg:text-left">
                  {painQuestions[0]}
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p className="text-center text-lg leading-relaxed text-navy-800/80 lg:text-left">
                  {painQuestions[1]}
                </p>
              </Reveal>

              {[painQuestions[2], painQuestions[3]].map((question, i) => (
                <Reveal key={question} delay={160 + i * 80}>
                  <div className="brand-card flex items-start gap-4 !bg-brand-cream/50 !p-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-coral/15 text-brand-coral">
                      <i className="fas fa-check-circle text-base" aria-hidden />
                    </span>
                    <p className="text-base leading-relaxed text-navy-800 lg:text-lg">{question}</p>
                  </div>
                </Reveal>
              ))}

              <Reveal delay={320}>
                <p className="rounded-2xl border border-brand-burgundy/10 bg-brand-burgundy/[0.04] px-5 py-4 text-center text-lg leading-relaxed text-brand-burgundy lg:text-left">
                  Evolve Broker is your AI-powered CRM and growth blueprint that makes that shift a
                  reality.
                </p>
              </Reveal>
            </div>

            <Reveal delay={400}>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <Button href={links.apply} size="lg">
                  Ready to Apply
                </Button>
                <Button variant="secondary" href={links.learnMore} size="lg">
                  Learn More
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal variant="fade-right" className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brand-coral/20 to-brand-burgundy/10 blur-sm" />
              <img
                src={assets.sectionSoundLikeYou}
                alt="Broker working with clients"
                className="relative w-full rounded-2xl object-cover shadow-2xl ring-1 ring-black/5"
                width={1024}
                height={1024}
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
