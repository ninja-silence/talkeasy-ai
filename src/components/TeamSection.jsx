export default function TeamSection() {
  return (
    <section id="team" className="bg-cream py-20 border-b border-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold font-heading text-teal mb-12">Team</h2>

        <div className="bg-white border border-cream rounded-lg p-8 mb-12">
          <div className="flex gap-8 mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-coral to-orange flex items-center justify-center flex-shrink-0">
              <span className="text-white font-heading font-bold text-2xl">NG</span>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-heading font-bold text-teal mb-1">Natnael W. Getahun</h3>
              <p className="text-sm text-teal mb-4">Founder & Lead Engineer · Senior Software Engineer at SUSE GmbH · Berlin</p>
              <p className="text-sm text-teal leading-relaxed mb-4">
                BSc Computer Science from Jacobs University Bremen (ML, Computer Vision, Robotics). 7+ years of professional experience in full-stack and backend development, open-source engineering, and cloud infrastructure. Active contributor and maintainer of SUSE open-source projects including OSEM. Native English and Amharic speaker — Amharic is a low-resource language with significant demand for voice AI tooling.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cream text-teal text-xs rounded-full border border-cream">Open-source engineering (SUSE)</span>
                <span className="px-3 py-1 bg-cream text-teal text-xs rounded-full border border-cream">AWS ML Specialty (2025)</span>
                <span className="px-3 py-1 bg-cream text-teal text-xs rounded-full border border-cream">AWS Solutions Architect (2025)</span>
                <span className="px-3 py-1 bg-cream text-teal text-xs rounded-full border border-cream">Python · Ruby · JavaScript</span>
                <span className="px-3 py-1 bg-cream text-teal text-xs rounded-full border border-cream">Docker · Terraform · Ansible</span>
                <span className="px-3 py-1 bg-cream text-teal text-xs rounded-full border border-cream">Native English & Amharic</span>
                <span className="px-3 py-1 bg-cream text-teal text-xs rounded-full border border-cream">B1 German</span>
                <span className="px-3 py-1 bg-cream text-teal text-xs rounded-full border border-cream">7+ years Berlin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
