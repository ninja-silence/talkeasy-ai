import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Solution() {
  return (
    <>
      <Header />
      <main>
        <section className="solution-hero">
          <div className="container">
            <h1>Our Solution</h1>
            <p className="lead">Advanced voice communication for modern teams</p>
          </div>
        </section>

        <section className="solution-content">
          <div className="container">
            <div className="section-content">
              <h2>How VoiceLink Works</h2>
              <p>
                VoiceLink uses state-of-the-art technology to deliver crystal-clear voice
                communication with minimal latency. Our platform is built on a scalable
                infrastructure that grows with your needs.
              </p>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <h3>Crystal Clear Audio</h3>
                <p>HD voice quality that sounds natural and professional</p>
              </div>
              <div className="feature-card">
                <h3>Low Latency</h3>
                <p>Real-time communication with imperceptible delays</p>
              </div>
              <div className="feature-card">
                <h3>Secure & Encrypted</h3>
                <p>End-to-end encryption to keep your conversations private</p>
              </div>
              <div className="feature-card">
                <h3>Easy Integration</h3>
                <p>Works with your existing tools and workflows</p>
              </div>
            </div>

            <div className="section-content">
              <h2>Technical Specifications</h2>
              <ul>
                <li>Supports up to 1000+ concurrent participants</li>
                <li>99.99% uptime guarantee</li>
                <li>Global network of servers for optimal performance</li>
                <li>Advanced noise cancellation and echo reduction</li>
                <li>Multi-protocol support (SIP, WebRTC, and more)</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
