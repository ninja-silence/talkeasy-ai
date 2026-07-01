import './FeaturesSection.css'

const features = [
  {
    title: 'Voice Navigation',
    description: 'Navigate device features using your voice, no text required.',
  },
  {
    title: 'Offline Capability',
    description: 'Use Talkeasy even when you don\'t have internet connectivity.',
  },
  {
    title: 'Simple Interface',
    description: 'Clean, intuitive design that requires no written English knowledge.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-content">
          <h2>How Talkeasy Works</h2>
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
