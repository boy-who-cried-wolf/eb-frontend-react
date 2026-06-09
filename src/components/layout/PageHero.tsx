import type { ReactNode } from 'react'
import { Reveal } from '../ui/Reveal'

interface PageHeroProps {
  title: string
  description?: string
  children?: ReactNode
}

export function PageHero({ title, description, children }: PageHeroProps) {
  return (
    <section className="section-padding border-b border-black/5 bg-white/70">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal variant="fade-up">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-brand-burgundy sm:text-5xl">
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal variant="fade-up" delay={100}>
              <p className="mt-5 text-lg leading-relaxed text-slate-muted">{description}</p>
            </Reveal>
          )}
          {children && (
            <Reveal variant="fade-up" delay={180}>
              <div className="mt-6">{children}</div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
