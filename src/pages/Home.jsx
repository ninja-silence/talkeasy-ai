import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import MarketSection from '../components/MarketSection'
import ProblemSection from '../components/ProblemSection'
import SolutionSection from '../components/SolutionSection'
import BusinessModelSection from '../components/BusinessModelSection'
import RoadmapSection from '../components/RoadmapSection'
import TeamSection from '../components/TeamSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MarketSection />
        <ProblemSection />
        <SolutionSection />
        <BusinessModelSection />
        <RoadmapSection />
        <TeamSection />
      </main>
      <Footer />
    </>
  )
}
