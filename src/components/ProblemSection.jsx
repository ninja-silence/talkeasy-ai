export default function ProblemSection() {
  return (
    <section id="problem" className="bg-white py-20 border-b border-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-bold font-heading text-teal mb-6">Billions are locked out of modern technology</h2>
            <p className="text-lg text-teal mb-6 leading-relaxed">
              Smartphones are designed with the assumption of literacy, internet access, and familiarity with touch interfaces. For those who don't fit that mold, the device in their hand is largely useless.
            </p>

            <ul className="space-y-3">
              <li className="flex gap-3 text-teal">
                <span className="text-coral font-bold">—</span>
                <span>51% of Europeans aged 50+ do not use the internet</span>
              </li>
              <li className="flex gap-3 text-teal">
                <span className="text-coral font-bold">—</span>
                <span>1 in 4 adults over 65 in the US is offline; lack of digital skills is the top cited barrier</span>
              </li>
              <li className="flex gap-3 text-teal">
                <span className="text-coral font-bold">—</span>
                <span>739 million adults worldwide remain illiterate as of 2024</span>
              </li>
              <li className="flex gap-3 text-teal">
                <span className="text-coral font-bold">—</span>
                <span>In Germany, only 31% of seniors use the internet confidently for tasks like online banking</span>
              </li>
              <li className="flex gap-3 text-teal">
                <span className="text-coral font-bold">—</span>
                <span>Germany's 19.5M elderly (23.2% of population) make it one of the oldest countries in the world</span>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-lg font-heading font-bold text-teal mb-4">Gap in existing solutions</h3>
            <p className="text-sm text-teal mb-4">No existing product combines all four attributes at once:</p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-cream">
                    <th className="text-left py-3 px-2 font-heading font-bold text-teal text-sm">Competitor</th>
                    <th className="text-center py-3 px-2 font-heading font-bold text-teal text-sm">Voice</th>
                    <th className="text-center py-3 px-2 font-heading font-bold text-teal text-sm">On-device</th>
                    <th className="text-center py-3 px-2 font-heading font-bold text-teal text-sm">Open</th>
                    <th className="text-center py-3 px-2 font-heading font-bold text-teal text-sm">Novices</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-cream bg-peach bg-opacity-50">
                    <td className="py-3 px-2 font-bold text-teal">Talkeasy</td>
                    <td className="text-center py-3 px-2 text-coral text-lg">✓</td>
                    <td className="text-center py-3 px-2 text-coral text-lg">✓</td>
                    <td className="text-center py-3 px-2 text-coral text-lg">✓</td>
                    <td className="text-center py-3 px-2 text-coral text-lg">✓</td>
                  </tr>
                  <tr className="border-b border-cream text-teal text-sm">
                    <td className="py-3 px-2">Saarthi (India)</td>
                    <td className="text-center py-3 px-2 text-green-600">✓</td>
                    <td className="text-center py-3 px-2 text-green-600">✓</td>
                    <td className="text-center py-3 px-2 text-gray-400">—</td>
                    <td className="text-center py-3 px-2 text-green-600">✓</td>
                  </tr>
                  <tr className="border-b border-cream text-teal text-sm">
                    <td className="py-3 px-2">BaldPhone</td>
                    <td className="text-center py-3 px-2 text-gray-400">—</td>
                    <td className="text-center py-3 px-2 text-green-600">✓</td>
                    <td className="text-center py-3 px-2 text-green-600">✓</td>
                    <td className="text-center py-3 px-2 text-green-600">✓</td>
                  </tr>
                  <tr className="border-b border-cream text-teal text-sm">
                    <td className="py-3 px-2">Google Voice Access</td>
                    <td className="text-center py-3 px-2 text-green-600">✓</td>
                    <td className="text-center py-3 px-2 text-gray-400">—</td>
                    <td className="text-center py-3 px-2 text-gray-400">—</td>
                    <td className="text-center py-3 px-2 text-gray-400">—</td>
                  </tr>
                  <tr className="text-teal text-sm">
                    <td className="py-3 px-2">GrandPad / Jitterbug</td>
                    <td className="text-center py-3 px-2 text-gray-400">—</td>
                    <td className="text-center py-3 px-2 text-gray-400">—</td>
                    <td className="text-center py-3 px-2 text-gray-400">—</td>
                    <td className="text-center py-3 px-2 text-green-600">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
