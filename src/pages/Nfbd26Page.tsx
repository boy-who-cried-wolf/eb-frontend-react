import { assets, links } from '../data/assets'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'

const checklist = [
  'Are you a small, values-driven brokerage that wants to grow without burning out?',
  'Do you believe AI and automation could give your time back?',
  'Are you doing more admin than strategy right now?',
  'Do you want a system that sits beside your aggregator CRM — not replace it?',
] as const

const stats = [
  { value: '5', label: 'mins', description: 'Fact find. Start to finish.' },
  { value: 'AI', label: '', description: 'Agents that book appointments' },
  { value: 'BID', label: '', description: 'Compliant notes, automatically' },
  { value: 'Live', label: '', description: 'Back-book monitoring, in real time' },
] as const

export function Nfbd26Page() {
  return (
    <>
      <section className="section-padding overflow-hidden bg-brand-burgundy text-white">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                  National Finance Brokers Day 2026 │ 19 August · The Star Brisbane
                </span>
                <h1 className="mt-6 font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                  Explore the future of
                  <br />
                  broking.
                </h1>
                <p className="mt-6 max-w-lg text-lg text-white/85">
                  Evolve Broker is the AI-powered CRM built specifically for lean, values-led mortgage
                  broker teams. See how it works, then apply to join.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button href={links.apply} external>
                    Apply for Founding Access
                  </Button>
                  <Button
                    href="/#video"
                    variant="secondary"
                    className="!border-white/30 !bg-white/10 !text-white hover:!bg-white/20"
                  >
                    See It in Action
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding section-alt text-center">
        <div className="container-site">
          <Reveal>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-navy-800">
              An AI-powered CRM and blueprint that frees brokers from admin — so you can focus on
              client care, <strong className="text-brand-burgundy">strategy, and growth.</strong>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-coral">
                  Is Evolve Broker right for you?
                </p>
                <h2 className="mt-3 font-heading text-3xl font-bold text-brand-burgundy sm:text-4xl">
                  Does this sound like you?
                </h2>
                <p className="mt-4 text-lg text-slate-muted">
                  Late nights. Endless follow-ups. Too many deals in the air. If you care about your
                  clients&apos; property and wealth journey but never have enough time, keep reading.
                </p>
                <ul className="mt-8 space-y-4">
                  {checklist.map((item) => (
                    <li key={item} className="flex gap-3 border-b border-black/5 pb-4 last:border-0">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-coral/15 text-brand-coral">
                        ✓
                      </span>
                      <span className="text-navy-800">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button href={links.apply} external>
                    Ready to Apply
                  </Button>
                  <Button href={links.learnMore} variant="secondary">
                    Learn More
                  </Button>
                </div>
              </div>
            </Reveal>
            <Reveal variant="fade-right">
              <img
                src={assets.nfbd26Broker}
                alt="Mortgage broker at work"
                className="mx-auto w-full max-w-md rounded-2xl object-cover shadow-lg"
                width={768}
                height={1024}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding section-alt">
        <div className="container-site">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.value} delay={i * 80}>
                <div className="brand-card text-center">
                  <p className="font-heading text-4xl font-bold text-brand-burgundy">
                    {stat.value}
                    {stat.label && (
                      <span className="block text-2xl font-normal text-brand-coral">{stat.label}</span>
                    )}
                  </p>
                  <p className="mt-3 text-sm text-slate-muted">{stat.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
