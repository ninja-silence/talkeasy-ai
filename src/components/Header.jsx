import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">VL</span>
            </div>
            <span className="font-bold text-lg text-gray-900 hidden sm:inline">VoiceLink</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition text-sm font-medium">
              Home
            </Link>
            <Link to="/solution" className="text-gray-700 hover:text-blue-600 transition text-sm font-medium">
              Solution
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition text-sm font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition text-sm font-medium">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium text-sm transition">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-4 text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            <Link to="/" className="text-gray-700 hover:text-blue-600 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="#features" className="text-gray-700 hover:text-blue-600 py-2 text-sm font-medium">
              Features
            </Link>
            <Link to="#pricing" className="text-gray-700 hover:text-blue-600 py-2 text-sm font-medium">
              Pricing
            </Link>
            <Link to="#about" className="text-gray-700 hover:text-blue-600 py-2 text-sm font-medium">
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
