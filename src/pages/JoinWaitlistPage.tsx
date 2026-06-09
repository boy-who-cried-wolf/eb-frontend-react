import { ghlForms, links } from '../data/assets'
import { GhlFormEmbed } from '../components/GhlFormEmbed'
import { PageHero } from '../components/layout/PageHero'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'

export function JoinWaitlistPage() {
  return (
    <>
      <PageHero
        title="Join the waitlist"
        description="A pre-configured CRM blueprint for solo to small broker teams, powered by Effi and AI. Launch faster, reduce admin, and keep clients engaged long after settlement."
      />
      <section className="section-padding pt-0">
        <div className="container-site">
          <GhlFormEmbed formId={ghlForms.waitlist} title="Registration of Interest" minHeight={873} />

          <Reveal variant="fade-up" delay={120}>
            <div className="mx-auto mt-12 max-w-xl text-center">
              <h2 className="font-heading text-2xl font-bold text-brand-burgundy">Not sure yet?</h2>
              <div className="mt-6">
                <Button href={links.webinar} external>
                  Watch the webinar
                </Button>
              </div>
              <p className="mt-8 text-sm text-slate-muted">
                Backed by Effi • Integrated with LoanOptions.ai
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
