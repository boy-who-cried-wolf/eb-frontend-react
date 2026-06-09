import type { ReactNode } from 'react'
import { Reveal } from '../ui/Reveal'

interface ImagePageHeroProps {
  image: string
  title: string
  description?: string
  children?: ReactNode
  compact?: boolean
}

export function ImagePageHero({
  image,
  title,
  description,
  children,
  compact = false,
}: ImagePageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden border-b border-black/5 ${
        compact ? 'min-h-[42vh]' : 'min-h-[48vh] sm:min-h-[52vh]'
      }`}
    >
      <img
        src={image}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-center"
        width={1024}
        height={576}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(109,35,64,0.9) 0%, rgba(138,45,79,0.65) 45%, rgba(138,45,79,0.35) 70%, rgba(0,0,0,0.25) 100%)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/15" />

      <div
        className={`container-site relative z-10 flex items-center ${
          compact ? 'min-h-[42vh] py-20' : 'min-h-[48vh] py-24 sm:min-h-[52vh] sm:py-28'
        }`}
      >
        <div className="mx-auto max-w-3xl text-center">
          <Reveal variant="fade-up">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal variant="fade-up" delay={120}>
              <p className="mt-5 text-lg leading-relaxed text-white/90">{description}</p>
            </Reveal>
          )}
          {children && (
            <Reveal variant="fade-up" delay={200}>
              <div className="mt-6">{children}</div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
