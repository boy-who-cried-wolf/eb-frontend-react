import { ApplyCTA } from './components/ApplyCTA'
import { Benefits } from './components/Benefits'
import { FAQ } from './components/FAQ'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Founder } from './components/Founder'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { PainPoints } from './components/PainPoints'
import { SoundLikeYou } from './components/SoundLikeYou'
import { Transformation } from './components/Transformation'
import { TrustPillars } from './components/TrustPillars'
import { VideoSection } from './components/VideoSection'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SoundLikeYou />
        <PainPoints />
        <VideoSection />
        <TrustPillars />
        <Features />
        <Transformation />
        <Benefits />
        <Founder />
        <FAQ />
        <ApplyCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
