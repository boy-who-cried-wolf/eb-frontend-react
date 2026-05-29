import type { ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  external?: boolean
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-coral text-white shadow-md shadow-brand-coral/20 hover:bg-brand-coral-dark hover:shadow-lg hover:shadow-brand-coral/30',
  secondary:
    'border-2 border-brand-burgundy/15 bg-white text-brand-burgundy hover:border-brand-burgundy/30 hover:bg-brand-burgundy/[0.03]',
  ghost: 'text-slate-muted hover:text-brand-burgundy',
}

const sizes: Record<ButtonSize, string> = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    const isExternal = external ?? href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
