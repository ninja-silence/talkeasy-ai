import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="container footer-content">
        <div className="footer-section">
          <h3>VoiceLink</h3>
          <p>Transforming the way people interact with technology. Our mission is to make technology accessible and intuitive for everyone.</p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@voicelink.app</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
