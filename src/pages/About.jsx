import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Header />
      <main>
        <section className="about-hero">
          <div className="container">
            <h1>About VoiceLink</h1>
            <p className="lead">We're building the future of voice communication</p>
          </div>
        </section>

        <section className="about-content">
          <div className="container">
            <div className="section-content">
              <h2>Our Mission</h2>
              <p>
                VoiceLink empowers teams and individuals to communicate effectively through
                intelligent voice technology that breaks down barriers and creates meaningful connections.
              </p>
            </div>

            <div className="section-content">
              <h2>Our Story</h2>
              <p>
                Founded by a team of communication experts and engineers, VoiceLink was born
                from the frustration of existing voice solutions. We believed there had to be a
                better way—one that combines simplicity, reliability, and intelligence.
              </p>
            </div>

            <div className="section-content">
              <h2>Our Values</h2>
              <ul>
                <li><strong>Clarity</strong> - Clear communication leads to better outcomes</li>
                <li><strong>Reliability</strong> - Your voice matters, and we deliver it every time</li>
                <li><strong>Innovation</strong> - We constantly push the boundaries of what's possible</li>
                <li><strong>User-First</strong> - Everything we build starts with you in mind</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
