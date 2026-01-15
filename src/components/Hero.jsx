import React from 'react'
import Prism from './Prism'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Prism Background */}
      <div className="hero-prism-bg">
        <Prism
          animationType="3drotate"
          scale={3.8}
          baseWidth={3.6}
          hueShift={0}
          glow={0.8}
          bloom={0.8}
          noise={0}
          timeScale={0.2}
          suspendWhenOffscreen={true}
        />
      </div>

      {/* Gradient overlay to fade to site background */}
      <div className="hero-gradient-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">🎉</span>
            <span className="badge-text">Now Available on the App Store</span>
          </div>

          <h1 className="hero-title">
            The Fitness Tracker Built for <span className="highlight">Real Gym Conditions</span>
          </h1>

          <p className="hero-subtitle">
            Track your workouts, smash your goals, and see real progress.{' '}
            <strong>Built for lifters who demand the best.</strong>
          </p>

          <div className="hero-features">
            <div className="hero-feature">
              <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
              <span>Your Data Stays Private</span>
            </div>
            <div className="hero-feature">
              <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <span>Works Offline in the Gym</span>
            </div>
            <div className="hero-feature">
              <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>AI Workout Insights</span>
            </div>
          </div>

          <div className="hero-cta">
            <a href="https://apps.apple.com/app/shadowlift/id6743451583" className="btn btn-primary">
              <svg className="btn-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on App Store
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-item">
              <span className="trust-number">Zero Ads</span>
              <span className="trust-label">Clean Experience</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item">
              <span className="trust-number">iOS 26+</span>
              <span className="trust-label">Latest AI Features</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item">
              <span className="trust-number">Released</span>
              <span className="trust-label">Real Gym Tested</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src="/Images/ShadownLift_Main.png" alt="ShadowLift App Interface" className="app-screenshot" />
        </div>
      </div>
    </section>
  )
}

export default Hero
