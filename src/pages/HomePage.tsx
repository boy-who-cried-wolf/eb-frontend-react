import { ApplyCTA } from '../components/ApplyCTA'
import { Benefits } from '../components/Benefits'
import { FAQ } from '../components/FAQ'
import { Features } from '../components/Features'
import { Founder } from '../components/Founder'
import { Hero } from '../components/Hero'
import { PainPoints } from '../components/PainPoints'
import { SoundLikeYou } from '../components/SoundLikeYou'
import { Transformation } from '../components/Transformation'
import { TrustPillars } from '../components/TrustPillars'
import { VideoSection } from '../components/VideoSection'

export function HomePage() {
  return (
    <>
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
    </>
  )
}
