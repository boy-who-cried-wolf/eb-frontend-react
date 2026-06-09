import { assets } from '../data/assets'
import { ContactForm } from '../components/ContactForm'
import { ImagePageHero } from '../components/layout/ImagePageHero'
import { Reveal } from '../components/ui/Reveal'

export function ContactPage() {
  return (
    <>
      <ImagePageHero
        image={assets.contactHero}
        title="Get in Touch"
        description="Whether you have a question about Evolve Broker, want to learn more about how it works, or are ready to explore if it is the right fit for your brokerage, we would love to hear from you."
      />
      <section className="section-padding pt-0">
        <Reveal variant="fade-up" delay={100}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  )
}
