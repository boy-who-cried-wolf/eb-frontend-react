import { assets, links } from '../data/assets'
import { Reveal } from './ui/Reveal'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-burgundy-dark py-12 text-white sm:py-14">
      <div className="container-site">
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            <a href="#" className="shrink-0">
              <img
                src={assets.logoFooter}
                alt="Evolve Broker powered by Effi"
                className="h-11 w-auto opacity-95 transition-opacity hover:opacity-100 sm:h-14"
                width={1024}
                height={473}
              />
            </a>

            <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/75">
              <a
                href={links.privacy}
                className="transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              <a
                href={links.terms}
                className="transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>
              <a
                href={links.contact}
                className="transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </a>
            </nav>

            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/75 transition-all hover:border-white/40 hover:text-white"
              aria-label="Instagram"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </Reveal>

        <div className="mt-10 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/70">
            Contact Us:{' '}
            <a href={links.email} className="underline underline-offset-2 hover:text-white">
              admin@evolvedecosystem.com
            </a>
          </p>
          <p className="mt-3 text-xs text-white/45">
            © {new Date().getFullYear()} Evolve Broker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
