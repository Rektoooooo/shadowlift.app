import React from 'react'
import './Download.css'

function Download() {
  return (
    <section className="download" id="download">
      <div className="download-container">
        <div className="download-content">
          <h2 className="download-title">Ready to Transform Your Training?</h2>
          <p className="download-subtitle">
            Join thousands of lifters tracking their progress with ShadowLift. Start free, upgrade anytime.
          </p>

          <div className="download-buttons">
            <a href="#" className="download-btn download-btn-appstore">
              <svg className="download-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="download-text">
                <span className="download-label">Download on the</span>
                <span className="download-store">App Store</span>
              </div>
            </a>

            <a href="mailto:support@shadowlift.app?subject=TestFlight%20Beta%20Access" className="download-btn download-btn-beta">
              <svg className="download-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div className="download-text">
                <span className="download-label">Join the</span>
                <span className="download-store">TestFlight Beta</span>
              </div>
            </a>
          </div>

          <div className="download-info">
            <div className="info-item">
              <svg className="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Free to start</span>
            </div>
            <div className="info-item">
              <svg className="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>No ads, ever</span>
            </div>
            <div className="info-item">
              <svg className="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Works offline</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download
