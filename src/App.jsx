import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Solution from './pages/Solution'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}
