interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  dark?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-coral sm:text-sm">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-heading text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight ${
          dark ? 'text-white' : 'text-brand-burgundy'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:mt-5 sm:text-lg ${
            dark ? 'text-white/80' : 'text-slate-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
