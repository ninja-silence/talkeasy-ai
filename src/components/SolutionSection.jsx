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

          {/* Right Column */}
          <div>
            <h3 className="text-sm font-mono font-bold uppercase text-teal tracking-widest mb-6">Why now — the technical window (2025–2026)</h3>
            <p className="text-sm text-teal mb-6">For the first time, the entire Talkeasy voice pipeline fits under 1GB on a sub-€100 Android device.</p>

            <div className="space-y-3 mb-6">
              <div className="bg-white border border-cream rounded-lg p-4 flex gap-4">
                <div className="font-mono font-bold text-xs text-coral bg-peach bg-opacity-50 px-3 py-1 rounded h-fit">ASR</div>
                <div className="flex-1">
                  <h4 className="font-heading font-bold text-teal">Whisper tiny Q4</h4>
                  <p className="text-sm text-teal">~250MB RAM · MIT license · on-device speech recognition</p>
                </div>
              </div>
              <div className="bg-white border border-cream rounded-lg p-4 flex gap-4">
                <div className="font-mono font-bold text-xs text-coral bg-peach bg-opacity-50 px-3 py-1 rounded h-fit">LLM</div>
                <div className="flex-1">
                  <h4 className="font-heading font-bold text-teal">TinyLlama 1.1B Q4</h4>
                  <p className="text-sm text-teal">~700MB RAM · first sub-1GB on-device LLM viable on entry-level Android</p>
                </div>
              </div>
              <div className="bg-white border border-cream rounded-lg p-4 flex gap-4">
                <div className="font-mono font-bold text-xs text-coral bg-peach bg-opacity-50 px-3 py-1 rounded h-fit">TTS</div>
                <div className="flex-1">
                  <h4 className="font-heading font-bold text-teal">Piper TTS</h4>
                  <p className="text-sm text-teal">40MB · 1,100+ languages · natural offline speech synthesis, MIT license</p>
                </div>
              </div>
            </div>

            <div className="bg-peach bg-opacity-30 border border-peach rounded-lg p-4 mb-6">
              <p className="text-xs text-teal font-mono mb-2">Combined pipeline</p>
              <p className="text-3xl font-heading font-bold text-teal mb-2">~800 MB total</p>
              <p className="text-sm text-teal">Fits under 1GB for the first time in 2025 — enabling a complete voice AI experience on devices owned by the populations Talkeasy serves.</p>
            </div>

            <div>
              <h3 className="text-sm font-mono font-bold uppercase text-teal tracking-widest mb-4">Regulatory window</h3>
              <ul className="space-y-2 text-sm text-teal">
                <li className="flex gap-3">
                  <span className="text-coral font-bold flex-shrink-0">—</span>
                  <span>EU Accessibility Act (June 2025) mandates accessible digital products across member states</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-coral font-bold flex-shrink-0">—</span>
                  <span>Germany's adult day care software market: USD 1.08B in 2024 — institutions already buying</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-coral font-bold flex-shrink-0">—</span>
                  <span>NGI Zero Commons Fund deadline: June 1, 2026</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
