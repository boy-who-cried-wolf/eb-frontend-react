import { assets, links } from '../data/assets'
import { Button } from './ui/Button'
import { Reveal } from './ui/Reveal'

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] overflow-hidden">
      <img
        src={assets.heroBackground}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-[center_25%]"
        width={1024}
        height={576}
        fetchPriority="high"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(109,35,64,0.88) 0%, rgba(138,45,79,0.5) 38%, rgba(138,45,79,0.15) 58%, transparent 72%)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

      <div className="container-site relative z-10 flex min-h-[92vh] w-full items-center py-28 sm:py-32">
        <div className="mr-auto w-full max-w-xl text-left lg:max-w-2xl">
          <Reveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-coral">
              AI-Powered CRM for Brokers
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-heading text-[clamp(2.25rem,5.5vw,4rem)] font-bold leading-[1.12] tracking-tight text-white">
              Maximise your time.
              <br />
              Deliver the property
              <br />
              and wealth strategies
              <br />
              your clients deserve.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/90 sm:text-xl">
              An AI-powered CRM and blueprint that frees you from admin to focus on client care.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
              <Button href={links.apply} size="lg">
                Ready to Apply
              </Button>
              <Button
                variant="secondary"
                href={links.learnMore}
                size="lg"
                className="!border-white/30 !bg-white/10 !text-white hover:!bg-white/20"
              >
                Learn More
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
