import { assets, links } from '../data/assets'
import { Button } from './ui/Button'
import { Reveal } from './ui/Reveal'

export function VideoSection() {
  return (
    <section id="video" className="section-padding">
      <div className="container-site">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="mb-6 flex justify-center overflow-hidden sm:mb-8">
              <img
                src={assets.logoEffi}
                alt="EB CRM powered by Effi"
                className="h-auto w-56 origin-center scale-125 sm:w-64"
                width={500}
                height={500}
              />
            </div>
          </Reveal>

          <Reveal delay={120} variant="scale">
            <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/10 sm:rounded-3xl">
              <video
                className="aspect-video w-full bg-brand-burgundy-dark object-cover"
                controls
                playsInline
                muted
                loop
                poster={assets.heroBackground}
              >
                <source src={assets.platformVideo} type="video/mp4" />
                <source src={assets.platformVideoRemote} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Reveal>

          <Reveal delay={240}>
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
      </div>
    </section>
  )
}
