import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">VL</span>
              </div>
              <span className="font-bold text-lg text-white">VoiceLink</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Transforming the way people interact with technology through intelligent voice solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/solution" className="text-sm text-gray-400 hover:text-white transition">Features</Link></li>
              <li><Link to="/solution" className="text-sm text-gray-400 hover:text-white transition">Pricing</Link></li>
              <li><Link to="/solution" className="text-sm text-gray-400 hover:text-white transition">Security</Link></li>
              <li><Link to="/solution" className="text-sm text-gray-400 hover:text-white transition">Roadmap</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-white transition">About</Link></li>
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-white transition">Blog</Link></li>
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-white transition">Careers</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/solution" className="text-sm text-gray-400 hover:text-white transition">Documentation</Link></li>
              <li><Link to="/solution" className="text-sm text-gray-400 hover:text-white transition">API Reference</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-400 hover:text-white transition">Support</Link></li>
              <li><Link to="/solution" className="text-sm text-gray-400 hover:text-white transition">Community</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-sm text-gray-400 hover:text-white transition">Privacy</a></li>
              <li><a href="/terms" className="text-sm text-gray-400 hover:text-white transition">Terms</a></li>
              <li><a href="/cookies" className="text-sm text-gray-400 hover:text-white transition">Cookies</a></li>
              <li><a href="/license" className="text-sm text-gray-400 hover:text-white transition">License</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} VoiceLink. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition">Terms of Service</a>
              <a href="/cookies" className="hover:text-white transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
