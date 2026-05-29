import { useEffect, useRef, useState, type ReactNode } from 'react'

type RevealVariant = 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'scale'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  variant?: RevealVariant
}

const variantHidden: Record<RevealVariant, string> = {
  'fade-up': 'opacity-0 translate-y-10',
  'fade-in': 'opacity-0',
  'fade-left': 'opacity-0 -translate-x-10',
  'fade-right': 'opacity-0 translate-x-10',
  scale: 'opacity-0 scale-95',
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  variant = 'fade-up',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:scale-100 ${
        visible ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : variantHidden[variant]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
