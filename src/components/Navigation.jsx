import React, { useState, useEffect } from 'react'
import './Navigation.css'

function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/Images/AppIcon@3x.png" alt="ShadowLift Logo" className="logo-image" />
          <span className="logo-text">ShadowLift</span>
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#features" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>
            Features
          </a>
          <a href="#premium" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('premium'); }}>
            Premium
          </a>
          <a href="#screenshots" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('screenshots'); }}>
            Screenshots
          </a>
          <a href="#download" className="nav-link nav-cta" onClick={(e) => { e.preventDefault(); scrollToSection('download'); }}>
            Download
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
