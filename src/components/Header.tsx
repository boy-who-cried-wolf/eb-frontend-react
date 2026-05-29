import { useEffect, useState } from 'react'
import { assets, links } from '../data/assets'
import { navLinks } from '../data/content'
import { Button } from './ui/Button'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onHero = !scrolled

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        onHero
          ? 'bg-gradient-to-b from-black/50 to-transparent py-4'
          : 'border-b border-black/5 bg-white/95 py-1.5 shadow-sm backdrop-blur-md sm:py-2'
      }`}
    >
      <div className="container-site flex items-center justify-between gap-4">
        <a
          href="#"
          className={`grid shrink-0 overflow-hidden [grid-template-areas:'logo'] ${
            onHero ? '' : '-my-3 sm:-my-4'
          }`}
        >
          <img
            src={assets.logoHeaderDark}
            alt="evolvebroker"
            width={1024}
            height={473}
            className={`[grid-area:logo] h-10 w-auto self-center transition-opacity duration-300 sm:h-11 ${
              onHero ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <img
            src={assets.logoHeaderLight}
            alt="evolvebroker"
            width={500}
            height={500}
            className={`[grid-area:logo] h-[5.25rem] w-auto self-center transition-opacity duration-300 sm:h-24 lg:h-[6.5rem] ${
              onHero ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                onHero
                  ? 'text-white/85 hover:text-white'
                  : 'text-navy-800/70 hover:text-brand-burgundy'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:gap-3 lg:flex">
          <Button
            variant="ghost"
            href={links.contact}
            className={`!px-4 ${onHero ? '!text-white/85 hover:!text-white' : ''}`}
          >
            Contact Us
          </Button>
          <Button href={links.learnMore}>Join Broker Insights</Button>
        </div>

        <button
          type="button"
          className={`flex h-10 w-10 items-center justify-center rounded-xl border lg:hidden ${
            onHero
              ? 'border-white/20 bg-white/10 text-white'
              : 'border-black/10 bg-white text-brand-burgundy'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="container-site pb-4 lg:hidden">
          <div className="mt-3 rounded-2xl border border-black/5 bg-white p-5 shadow-lg">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 text-navy-800 hover:bg-brand-cream"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <hr className="my-4 border-black/5" />
            <div className="flex flex-col gap-3">
              <Button href={links.contact} variant="secondary" className="w-full">
                Contact Us
              </Button>
              <Button href={links.apply} className="w-full">
                Ready to Apply
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
