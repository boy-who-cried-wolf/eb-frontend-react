import { assets, ghlForms } from '../data/assets'
import { GhlFormEmbed } from '../components/GhlFormEmbed'
import { ImagePageHero } from '../components/layout/ImagePageHero'
import { Reveal } from '../components/ui/Reveal'

export function InsightsPage() {
  return (
    <>
      <ImagePageHero
        image={assets.insightsHero}
        title="Join Broker Insights List"
        description="Short, practical insights on retention, admin automation, and running a cleaner broking operation."
      >
        <p className="text-sm font-medium text-white/80">Takes 10 seconds. Unsubscribe anytime.</p>
      </ImagePageHero>

      <section className="section-padding pt-0">
        <div className="container-site">
          <Reveal variant="fade-up" delay={80}>
            <p className="mx-auto mb-8 max-w-xl text-center text-slate-muted">
              We&apos;ll send you practical broker insights, product updates, and invitations to
              upcoming demos. No spam.
            </p>
          </Reveal>
          <GhlFormEmbed formId={ghlForms.insights} title="Broker Insights signup" minHeight={620} />
        </div>
      </section>
    </>
  )
}
