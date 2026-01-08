import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/Images/AppIcon@3x.png" alt="ShadowLift" className="footer-logo-img" />
              <span className="footer-logo-text">ShadowLift</span>
            </div>
            <p className="footer-tagline">
              The fitness tracker built for real gym conditions. Track workouts, smash goals, see results.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Product</h4>
            <ul className="footer-list">
              <li><a href="#features">Features</a></li>
              <li><a href="#premium">Premium</a></li>
              <li><a href="#screenshots">Screenshots</a></li>
              <li><a href="#download">Download</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-list">
              <li><a href="/support">Help Center</a></li>
              <li><a href="mailto:sebastian.kucera@icloud.com">Contact Us</a></li>
              <li><a href="mailto:sebastian.kucera@icloud.com">TestFlight Beta</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Connect</h4>
            <ul className="footer-list">
              <li><a href="https://www.instagram.com/seb.kuc/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="mailto:sebastian.kucera@icloud.com">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 ShadowLift. All rights reserved. Built with ❤️ by Sebastián Kučera
          </p>
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <span className="footer-divider">•</span>
            <a href="/support">Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
