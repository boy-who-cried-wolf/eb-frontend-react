import { Reveal } from '../ui/Reveal'

interface LegalProseProps {
  html: string
}

export function LegalProse({ html }: LegalProseProps) {
  return (
    <section className="section-padding">
      <div className="container-site">
        <Reveal variant="fade-up">
          <article
            className="legal-prose mx-auto max-w-3xl"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Reveal>
      </div>
    </section>
  )
}
