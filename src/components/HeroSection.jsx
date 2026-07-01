export default function HeroSection() {
  return (
    <section className="flex items-center bg-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col justify-center max-w-3xl">
          {/* <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-white border border-teal rounded-full text-teal text-xs font-mono font-semibold mb-6">
              Berlin · Open source · Pre-revenue
            </span>
          </div> */}

          <h1 className="text-6xl md:text-7xl font-bold font-heading text-teal mb-6 leading-tight">
            Voice-first<br />
            navigation for<br />
            <span className="bg-gradient-to-r from-coral to-orange bg-clip-text text-transparent">
              everyone.
            </span>
          </h1>

          <p className="text-lg text-teal mb-8 leading-relaxed max-w-2xl">
            An AI-powered mobile application that helps senior citizens and digitally illiterate people navigate smartphones — with all voice inference running on-device, requiring no internet connection for daily use.
          </p>

          {/* <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 bg-white text-teal border border-teal rounded-full text-xs font-mono">AGPL-3.0 open core</span>
            <span className="px-3 py-1 bg-white text-teal border border-teal rounded-full text-xs font-mono">Offline-first · on-device AI</span>
            <span className="px-3 py-1 bg-white text-teal border border-teal rounded-full text-xs font-mono">Android-first</span>
            <span className="px-3 py-1 bg-white text-teal border border-teal rounded-full text-xs font-mono">Multilingual</span>
            <span className="px-3 py-1 bg-white text-teal border border-teal rounded-full text-xs font-mono">Berlin pilot ready</span>
          </div> */}

          <div className="flex flex-col sm:flex-row gap-4">
            {/* <button className="px-8 py-3 bg-coral hover:bg-coral-dark text-white rounded-lg font-semibold transition">
              Get Early Access
            </button> */}
            <button className="px-8 py-3 border-2 border-teal text-teal hover:bg-teal hover:text-white rounded-lg font-semibold transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
