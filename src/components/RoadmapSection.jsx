export default function RoadmapSection() {
  return (
    <section id="roadmap" className="bg-white py-20 border-b border-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-bold font-heading text-teal mb-12">From annotation to scale</h2>

            <div className="space-y-8">
              {/* Phase Now */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-teal flex-shrink-0 mt-1"></div>
                  <div className="w-0.5 h-16 bg-cream my-2"></div>
                </div>
                <div className="pb-8">
                  <p className="text-sm font-mono text-teal font-bold">Now</p>
                  <h3 className="text-lg font-heading font-bold text-teal mt-2">Data annotation & model fine-tuning</h3>
                  <p className="text-sm text-teal mt-2">Seeking EXIST + NGI Zero grants. e.V. incorporation in progress.</p>
                </div>
              </div>

              {/* Phase 0 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-coral border-2 border-coral flex-shrink-0 mt-1"></div>
                  <div className="w-0.5 h-16 bg-cream my-2"></div>
                </div>
                <div className="pb-8">
                  <p className="text-sm font-mono text-teal font-bold">Phase 0</p>
                  <h3 className="text-lg font-heading font-bold text-teal mt-2">SLHC anchor partnership (Berlin)</h3>
                  <p className="text-sm text-teal mt-2">Demo installation · "Digitale Teilhabe" workshop series · co-grant application.</p>
                </div>
              </div>

              {/* Year 1 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-teal flex-shrink-0 mt-1"></div>
                  <div className="w-0.5 h-16 bg-cream my-2"></div>
                </div>
                <div className="pb-8">
                  <p className="text-sm font-mono text-teal font-bold">Year 1</p>
                  <h3 className="text-lg font-heading font-bold text-teal mt-2">Berlin pilot — 2–3 care centers</h3>
                  <p className="text-sm text-teal mt-2">Track MAU, task completion rate, time-to-first-success. Capture testimonials.</p>
                </div>
              </div>

              {/* Year 2 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-teal flex-shrink-0 mt-1"></div>
                  <div className="w-0.5 h-16 bg-cream my-2"></div>
                </div>
                <div className="pb-8">
                  <p className="text-sm font-mono text-teal font-bold">Year 2</p>
                  <h3 className="text-lg font-heading font-bold text-teal mt-2">Validate & launch Elderly Extension</h3>
                  <p className="text-sm text-teal mt-2">3–5 care centers. Target: 1,000 MAU. First B2B revenue.</p>
                </div>
              </div>

              {/* Year 3 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-teal flex-shrink-0 mt-1"></div>
                </div>
                <div>
                  <p className="text-sm font-mono text-teal font-bold">Year 3</p>
                  <h3 className="text-lg font-heading font-bold text-teal mt-2">Scale to 20 Berlin care centers</h3>
                  <p className="text-sm text-teal mt-2">~1,500–2,000 active users. Transition to hybrid grant + B2B revenue model.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-sm font-mono font-bold uppercase text-teal tracking-widest mb-6">Impact alignment</h3>
            <div className="flex flex-wrap gap-2 mb-12">
              <div className="bg-white border border-cream rounded-full px-4 py-2 flex items-center gap-2">
                <span className="font-mono font-bold text-coral">SDG 10</span>
                <span className="text-teal text-sm">Reduced inequalities</span>
              </div>
              <div className="bg-white border border-cream rounded-full px-4 py-2 flex items-center gap-2">
                <span className="font-mono font-bold text-coral">SDG 4</span>
                <span className="text-teal text-sm">Quality education</span>
              </div>
              <div className="bg-white border border-cream rounded-full px-4 py-2 flex items-center gap-2">
                <span className="font-mono font-bold text-coral">SDG 3</span>
                <span className="text-teal text-sm">Good health & wellbeing</span>
              </div>
              <div className="bg-white border border-cream rounded-full px-4 py-2 flex items-center gap-2">
                <span className="font-mono font-bold text-coral">SDG 17</span>
                <span className="text-teal text-sm">Partnerships</span>
              </div>
            </div>

            <h3 className="text-sm font-mono font-bold uppercase text-teal tracking-widest mb-4">Key KPIs</h3>
            <ul className="space-y-3 text-sm text-teal">
              <li className="flex gap-3">
                <span className="text-coral font-bold flex-shrink-0">—</span>
                <span>Monthly active users (MAU) and 30-day retention rate</span>
              </li>
              <li className="flex gap-3">
                <span className="text-coral font-bold flex-shrink-0">—</span>
                <span>Task completion rate — % of voice commands successfully resolved</span>
              </li>
              <li className="flex gap-3">
                <span className="text-coral font-bold flex-shrink-0">—</span>
                <span>Time-to-first-success — new user completing first task unaided</span>
              </li>
              <li className="flex gap-3">
                <span className="text-coral font-bold flex-shrink-0">—</span>
                <span>Cost per active user</span>
              </li>
              <li className="flex gap-3">
                <span className="text-coral font-bold flex-shrink-0">—</span>
                <span>Caregiver-reported independence score (qualitative, at pilot sites)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
