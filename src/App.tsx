import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { InsightsPage } from './pages/InsightsPage'
import { JoinWaitlistPage } from './pages/JoinWaitlistPage'
import { Nfbd26Page } from './pages/Nfbd26Page'
import { PrivacyPage } from './pages/PrivacyPage'
import { TermsPage } from './pages/TermsPage'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="contact-us" element={<ContactPage />} />
          <Route path="privacy-policy" element={<PrivacyPage />} />
          <Route path="privacy" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="terms-of-service" element={<TermsPage />} />
          <Route path="terms" element={<Navigate to="/terms-of-service" replace />} />
          <Route path="join-waitlist" element={<JoinWaitlistPage />} />
          <Route path="insights" element={<InsightsPage />} />
          <Route path="nfbd26" element={<Nfbd26Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
