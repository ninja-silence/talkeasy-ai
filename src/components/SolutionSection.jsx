export default function SolutionSection() {
  return (
    <section id="product" className="bg-cream py-20 border-b border-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-bold font-heading text-teal mb-6">A voice navigator that works without internet</h2>
            <p className="text-lg text-teal mb-8 leading-relaxed">
              Talkeasy listens, understands, and acts — calling family, setting reminders, finding information — entirely on-device in the user's own language. No data leaves the phone.
            </p>

            <h3 className="text-sm font-mono font-bold uppercase text-teal tracking-widest mb-6">Core values</h3>
            <div className="space-y-6">
              <div className="border-b border-cream pb-6">
                <div className="flex gap-4">
                  <span className="text-coral font-heading font-bold text-lg flex-shrink-0">01</span>
                  <div>
                    <h4 className="font-heading font-bold text-teal mb-2">Inclusion</h4>
                    <p className="text-teal leading-relaxed">Technology should be accessible to everyone, regardless of language, literacy, or digital experience.</p>
                  </div>
                </div>
              </div>
              <div className="border-b border-cream pb-6">
                <div className="flex gap-4">
                  <span className="text-coral font-heading font-bold text-lg flex-shrink-0">02</span>
                  <div>
                    <h4 className="font-heading font-bold text-teal mb-2">Simplicity</h4>
                    <p className="text-teal leading-relaxed">We reduce complexity; we do not add it. We will not add new functionality to existing device features.</p>
                  </div>
                </div>
              </div>
              <div className="border-b border-cream pb-6">
                <div className="flex gap-4">
                  <span className="text-coral font-heading font-bold text-lg flex-shrink-0">03</span>
                  <div>
                    <h4 className="font-heading font-bold text-teal mb-2">Privacy</h4>
                    <p className="text-teal leading-relaxed">Sensitive data stays on-device. No user data is sold or monetized. All AI processing happens locally.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-4">
                  <span className="text-coral font-heading font-bold text-lg flex-shrink-0">04</span>
                  <div>
                    <h4 className="font-heading font-bold text-teal mb-2">Open source</h4>
                    <p className="text-teal leading-relaxed">We build in public and contribute back to the communities we serve. AGPL-3.0 prevents proprietary forks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
