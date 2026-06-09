import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

const FULL_BLEED_HERO_PATHS = ['/', '/contact-us', '/insights', '/nfbd26']

export function MainLayout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const fullBleedHero = FULL_BLEED_HERO_PATHS.includes(pathname)

  return (
    <>
      <Header isHome={isHome} />
      <main className={fullBleedHero ? undefined : 'pt-24'}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
