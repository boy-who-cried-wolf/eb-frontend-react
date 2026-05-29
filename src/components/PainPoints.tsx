import type { ReactNode } from 'react'
import { adminProblems } from '../data/content'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const icons: Record<string, ReactNode> = {
  document: <i className="fa fa-file-lines text-xl" aria-hidden />,
  disconnect: <i className="ti-unlink text-xl" aria-hidden />,
  monitor: <i className="fa fa-eye-slash text-xl" aria-hidden />,
  repeat: <i className="fas fa-repeat text-xl" aria-hidden />,
}

export function PainPoints() {
  return (
    <section className="section-padding section-alt">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            title="As your book grows, your admin doesn't just double, it explodes."
            align="center"
          />
          <div className="brand-divider" />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {adminProblems.map((problem, i) => (
            <Reveal key={problem.title} delay={i * 100}>
              <article className="brand-card flex h-full gap-5 !p-6 sm:!p-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-coral/10 text-brand-coral">
                  {icons[problem.icon]}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-burgundy">{problem.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-muted sm:text-base">
                    {problem.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
