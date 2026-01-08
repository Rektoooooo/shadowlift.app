import React, { useEffect, useRef, useState } from 'react'
import './Premium.css'

function Premium() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])
  const premiumFeatures = [
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'AI Workout Summaries',
      description: 'Get smart insights after every workout. AI analyzes your performance, tracks trends, and gives personalized recommendationsall on your device, 100% private.',
      tag: 'iOS 26+ Only'
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Personal Records',
      description: 'Automatically track your PRs for every exercise. See your 1RM, 5RM, 10RM, and total volume records. Get notified when you crush a new PR.',
      tag: 'Beat Your Best'
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Progress Photos',
      description: 'Document your transformation with progress photos. Built-in pose guidance, before/after comparisons, and automatic syncing across devices.',
      tag: 'See The Gains'
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Pre-Built Templates',
      description: 'Jump-start your training with proven programs. Includes PPL, PHAT, Upper/Lower, Arnold Split, and Full Body routines. Start lifting in seconds.',
      tag: '5 Programs Included'
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      ),
      title: 'Streak Analytics',
      description: 'Track your workout consistency with advanced streak tracking. See your current streak, longest streak, and weekly patterns. Stay motivated.',
      tag: 'Build The Habit'
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: 'Custom Themes',
      description: 'Make ShadowLift yours with 5 accent colors and matching app icons. Choose from Blue, Green, Purple, Pink, or Orange themes.',
      tag: 'Personalize Your App'
    }
  ]

  return (
    <section className="premium" id="premium" ref={sectionRef}>
      <div className="premium-container">
        <div className={`premium-header ${inView ? 'animate' : ''}`}>
          <div className="premium-badge">
            <svg className="badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="badge-text">Premium Features</span>
          </div>
          <h2 className="premium-title">
            Take Your Training to the <span className="highlight">Next Level</span>
          </h2>
          <p className="premium-subtitle">
            Unlock powerful premium features designed to maximize your gains. From AI insights to progress tracking, everything you need to dominate your fitness journey.
          </p>
          <div className="premium-pricing">
            <div className="price-option">
              <span className="price-currency">€</span>
              <span className="price">2.99</span>
              <span className="price-period">/month</span>
            </div>
            <span className="price-separator">or</span>
            <div className="price-option">
              <span className="price-currency">€</span>
              <span className="price">29.99</span>
              <span className="price-period">/year</span>
              <span className="price-save">Save 17%</span>
            </div>
          </div>
        </div>

        <div className="premium-grid">
          {premiumFeatures.map((feature, index) => (
            <div
              className={`premium-card ${inView ? 'animate' : ''}`}
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="premium-icon-wrapper">
                {feature.icon}
              </div>
              <div className="premium-content">
                <div className="premium-card-header">
                  <h3 className="premium-card-title">{feature.title}</h3>
                  <span className="premium-tag">{feature.tag}</span>
                </div>
                <p className="premium-card-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`premium-footer ${inView ? 'animate' : ''}`}>
          <div className="premium-footer-content">
            <h3 className="premium-footer-title">Ready to Level Up?</h3>
            <p className="premium-footer-text">
              Unlock AI insights, progress photos, and pre-built programs. <strong>Everything you need to maximize your gains.</strong>
            </p>
          </div>
          <a href="#download" className="btn btn-primary btn-large">
            <svg className="btn-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Get Premium Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default Premium
