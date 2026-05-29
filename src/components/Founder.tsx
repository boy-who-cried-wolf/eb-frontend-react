import { assets, links } from '../data/assets'
import { Button } from './ui/Button'
import { Reveal } from './ui/Reveal'

export function Founder() {
  return (
    <>
      <section id="about" className="section-padding section-alt">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Reveal>
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-coral">
                  About the founder
                </p>
                <h2 className="mt-3 font-heading text-3xl font-bold text-brand-burgundy sm:text-4xl lg:text-5xl">
                  Meet Victor Lagos
                </h2>
                <p className="mt-3 text-lg font-semibold text-brand-burgundy/80">
                  Founder, CEO & Chief Visionary Officer
                </p>
                <div className="brand-divider !mx-0 !mt-6" />
              </Reveal>

              <div className="mt-8 space-y-5">
                {[
                  'Victor Lagos has spent nearly two decades on the front line of Australian finance, helping everyday Australians and high-net-worth clients build wealth through smarter property and wealth strategies.',
                  'After years of late nights, clunky systems and seeing good brokers burn out, he became obsessed with finding a better way. The result is Evolve Broker, a practical, broker-designed platform that blends AI with the heart of true advisory work.',
                  "Simply by giving brokers the tools and support they need to be the trusted partners in their client's financial universe.",
                ].map((text, i) => (
                  <Reveal key={i} delay={100 + i * 80}>
                    <p className="text-base leading-relaxed text-navy-800 sm:text-lg">{text}</p>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal variant="fade-left" delay={150}>
              <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-brand-coral/15" />
                <img
                  src={assets.victorLagos}
                  alt="Victor Lagos, founder of Evolve Broker"
                  className="relative w-full rounded-3xl object-cover shadow-2xl ring-1 ring-black/5"
                  width={819}
                  height={1024}
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding section-alt">
        <div className="container-site">
          <Reveal variant="scale">
            <blockquote className="mx-auto max-w-3xl rounded-2xl border-l-4 border-brand-coral bg-white px-8 py-8 text-center shadow-sm sm:px-12">
              <p className="font-heading text-xl leading-relaxed text-brand-burgundy sm:text-2xl">
                &ldquo;Our mission is to help good people grow wealth and empower the wealthy to do
                more good.&rdquo;
              </p>
              <div className="mt-8">
                <Button variant="secondary" href={links.learnMore}>
                  Learn More
                </Button>
              </div>
            </blockquote>
          </Reveal>
        </div>
      </section>
    </>
  )
}
