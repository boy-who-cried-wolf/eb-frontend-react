import { links } from '../data/assets'
import { Button } from './ui/Button'
import { Reveal } from './ui/Reveal'

export function ApplyCTA() {
  return (
    <section id="apply" className="section-padding pb-20 sm:pb-28">
      <div className="container-site">
        <Reveal variant="scale">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-brand-burgundy px-8 py-12 text-center text-white shadow-2xl sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <div className="absolute -left-10 top-0 h-48 w-48 rounded-full bg-brand-coral blur-3xl" />
              <div className="absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-brand-plum blur-3xl" />
            </div>

            <div className="relative">
              <h2 className="font-heading text-3xl font-bold sm:text-4xl">
                Ready to evolve the way you broker?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base text-white/80 sm:text-lg">
                Join the first group of independent brokers building a better way to serve clients.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href={links.apply} size="lg" className="min-w-[180px]">
                  Ready to Apply
                </Button>
                <Button
                  variant="secondary"
                  href={links.contact}
                  size="lg"
                  className="min-w-[180px] !border-white/30 !bg-white/10 !text-white hover:!bg-white/20"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
