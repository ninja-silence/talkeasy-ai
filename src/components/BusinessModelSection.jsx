export default function BusinessModelSection() {
  return (
    <section id="model" className="bg-cream py-20 border-b border-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-bold font-heading text-teal mb-6">Open core + premium extensions</h2>
            <p className="text-lg text-teal mb-8 leading-relaxed">
              The base app is AGPL-3.0 — free forever. Revenue comes from purpose-built AI modules sold to institutions with budgets and a mandate to serve their populations.
            </p>

            <div className="bg-white border-l-4 border-coral p-4 mb-8 italic text-teal">
              "End users always get the core for free; institutions pay for context-specific intelligence on top of it."
            </div>

            <h3 className="text-sm font-mono font-bold uppercase text-teal tracking-widest mb-4">Elderly extension pricing</h3>
            <div className="bg-white border border-cream rounded-lg overflow-hidden">
              <div className="border-b border-cream p-4 flex justify-between items-start">
                <div>
                  <p className="font-heading font-bold text-teal">Base</p>
                  <p className="text-xs text-teal mt-1">Up to 20 devices · caregiver dashboard · standard language pack</p>
                </div>
                <p className="font-mono font-bold text-coral whitespace-nowrap ml-4">€1,800 / yr</p>
              </div>
              <div className="border-b border-cream p-4 flex justify-between items-start">
                <div>
                  <p className="font-heading font-bold text-teal">Pro</p>
                  <p className="text-xs text-teal mt-1">Unlimited devices · white-label · custom language pack · priority support</p>
                </div>
                <p className="font-mono font-bold text-coral whitespace-nowrap ml-4">€3,600 / yr</p>
              </div>
              <div className="p-4 flex justify-between items-start">
                <div>
                  <p className="font-heading font-bold text-teal">Institutional</p>
                  <p className="text-xs text-teal mt-1">Multi-site · SLA · integration support · dedicated onboarding</p>
                </div>
                <p className="font-mono font-bold text-coral whitespace-nowrap ml-4">€6,000+ / yr</p>
              </div>
            </div>
            <p className="text-xs text-teal mt-2">Base tier is deliberately below the €2,000/year threshold that typically triggers formal procurement in German care settings.</p>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-sm font-mono font-bold uppercase text-teal tracking-widest mb-4">All revenue streams</h3>
            <div className="space-y-3 mb-8">
              <div className="bg-white border border-cream rounded-lg p-4 flex justify-between items-center">
                <div>
                  <p className="font-heading font-bold text-teal">Core app</p>
                  <p className="text-xs text-teal">AGPL-3.0 · always free for end users</p>
                </div>
                <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-green-100 text-green-700">Free</span>
              </div>
              <div className="bg-white border border-cream rounded-lg p-4 flex justify-between items-center">
                <div>
                  <p className="font-heading font-bold text-teal">Premium extension licenses</p>
                  <p className="text-xs text-teal">Care centers · schools · employment agencies · NGOs</p>
                </div>
                <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-blue-100 text-blue-700">B2B</span>
              </div>
              <div className="bg-white border border-cream rounded-lg p-4 flex justify-between items-center">
                <div>
                  <p className="font-heading font-bold text-teal">Commercial license</p>
                  <p className="text-xs text-teal">White-label · proprietary integrations · SLA-backed support</p>
                </div>
                <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-blue-100 text-blue-700">B2B</span>
              </div>
              <div className="bg-white border border-cream rounded-lg p-4 flex justify-between items-center">
                <div>
                  <p className="font-heading font-bold text-teal">Grant & accelerator funding</p>
                  <p className="text-xs text-teal">Primary source in Years 1–2</p>
                </div>
                <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-purple-100 text-purple-700">Grants</span>
              </div>
              <div className="bg-white border border-cream rounded-lg p-4 flex justify-between items-center">
                <div>
                  <p className="font-heading font-bold text-teal">Corporate partnerships</p>
                  <p className="text-xs text-teal">Deutsche Telekom, Vodafone — co-branding + CSR</p>
                </div>
                <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-yellow-100 text-yellow-700">Partners</span>
              </div>
              <div className="bg-white border border-cream rounded-lg p-4 flex justify-between items-center">
                <div>
                  <p className="font-heading font-bold text-teal">Community funding</p>
                  <p className="text-xs text-teal">Open Collective + Betterplace.org · €10K–€50K/year</p>
                </div>
                <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-orange-100 text-orange-700">Community</span>
              </div>
            </div>

            <h3 className="text-sm font-mono font-bold uppercase text-teal tracking-widest mb-4">Funding targets</h3>
            <div className="space-y-3">
              <div className="bg-white border border-cream rounded-lg p-4 flex justify-between items-start">
                <div>
                  <p className="font-heading font-bold text-teal">EXIST Gründungsstipendium</p>
                  <p className="text-xs text-teal">Priority #1 · Year 1 anchor · BMWK + ESF co-funded</p>
                </div>
                <p className="font-mono font-bold text-coral whitespace-nowrap ml-4">Up to €143K</p>
              </div>
              <div className="bg-white border border-cream rounded-lg p-4 flex justify-between items-start">
                <div>
                  <p className="font-heading font-bold text-teal">NGI Zero Commons Fund</p>
                  <p className="text-xs text-teal">Deadline June 1, 2026 · NLnet / EU</p>
                </div>
                <p className="font-mono font-bold text-coral whitespace-nowrap ml-4">Up to €50K</p>
              </div>
              <div className="bg-white border border-cream rounded-lg p-4 flex justify-between items-start">
                <div>
                  <p className="font-heading font-bold text-teal">Vodafone Stiftung</p>
                  <p className="text-xs text-teal">Post-pilot · Year 2</p>
                </div>
                <p className="font-mono font-bold text-coral whitespace-nowrap ml-4">€50K–€300K</p>
              </div>
              <div className="bg-white border border-cream rounded-lg p-4 flex justify-between items-start">
                <div>
                  <p className="font-heading font-bold text-teal">McGovern Foundation</p>
                  <p className="text-xs text-teal">Year 2 · rolling</p>
                </div>
                <p className="font-mono font-bold text-coral whitespace-nowrap ml-4">$100K–$500K</p>
              </div>
              <div className="bg-white border border-cream rounded-lg p-4 flex justify-between items-start">
                <div>
                  <p className="font-heading font-bold text-teal">hub.raum (DT incubator)</p>
                  <p className="text-xs text-teal">Year 2 · corporate partnership</p>
                </div>
                <p className="font-mono font-bold text-coral whitespace-nowrap ml-4">€25K–€100K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
