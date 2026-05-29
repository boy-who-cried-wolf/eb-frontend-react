import { transformations } from '../data/content'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const transformIcons = [
  'fas fa-gear',
  'fas fa-layer-group',
  'ti-bar-chart-alt',
  'fas fa-location-crosshairs',
] as const

export function Transformation() {
  return (
    <section className="section-padding bg-brand-burgundy text-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="With Evolve Broker, the way you work starts to change"
          dark
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {transformations.map((lines, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-colors hover:bg-white/10">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-coral/20 text-brand-coral">
                  <i className={`${transformIcons[i]} text-xl`} aria-hidden />
                </div>
                <p className="text-base leading-relaxed text-white/90 sm:text-lg">
                  {lines.map((line, j) => (
                    <span key={j}>
                      {line}
                      {j < lines.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
