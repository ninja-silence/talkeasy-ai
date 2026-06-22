import Header from '../components/Header'
import ProblemSection from '../components/ProblemSection'
import SolutionSection from '../components/SolutionSection'
import FeaturesSection from '../components/FeaturesSection'
import ValuesSection from '../components/ValuesSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <ValuesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
