export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                ✨ Your AI Voice Assistant
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Speak Freely,<br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Capture Every Thought
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              VoiceLink transforms how you interact with technology. Speak naturally, let AI do the work. No typing. No complexity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105">
                Get Started Free
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition">
                Watch Demo
              </button>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-gray-900">10K+</p>
                <p className="text-gray-600">Active Users</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">4.9★</p>
                <p className="text-gray-600">App Rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">99%</p>
                <p className="text-gray-600">Uptime</p>
              </div>
            </div>
          </div>

          {/* Right - Mobile App Mockup */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Floating gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-3xl blur-3xl opacity-30 -z-10"></div>

              {/* App Showcase */}
              <img
                src="/images/idea_app_design_2.png"
                alt="VoiceLink Mobile App"
                className="w-full max-w-2xl h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
