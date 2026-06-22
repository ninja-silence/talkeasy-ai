import './ValuesSection.css'

const values = [
  {
    title: 'Inclusion',
    description: 'Technology should be accessible to everyone, regardless of language, literacy, or digital experience.',
  },
  {
    title: 'Empowerment',
    description: 'Giving users agency over their own digital lives.',
  },
  {
    title: 'Simplicity',
    description: 'Reducing complexity; we do not add it.',
  },
]

export default function ValuesSection() {
  return (
    <section className="values-section">
      <div className="container">
        <div className="values-content">
          <h2>Our Commitment</h2>
          {values.map((value) => (
            <div key={value.title} className="value-card">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
