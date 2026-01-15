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

  const proFeatures = [
    { icon: 'trophy', title: 'Automatic PR Tracking', description: 'Never miss a personal record' },
    { icon: 'camera', title: 'Progress Photo Timeline', description: 'Track your visual transformation' },
    { icon: 'template', title: 'Workout Templates', description: 'Pre-built programs for your goals' },
    { icon: 'fire', title: 'Advanced Streak Analytics', description: 'Motivation & predictions' },
    { icon: 'chart', title: 'BMI Tracking & Analysis', description: 'Monitor your body composition' },
    { icon: 'history', title: 'Unlimited History', description: 'Lifetime workout access' },
    { icon: 'palette', title: 'Custom App Appearance', description: 'Choose your theme & colors' },
    { icon: 'graph', title: 'Advanced Graph Statistics', description: 'Week, month & all-time filtering' }
  ]

  const aiFeatures = [
    { icon: 'sparkle', title: 'AI Workout Summary', description: 'Weekly insights & recommendations' },
    { icon: 'brain', title: 'AI Personalized Split', description: 'Generate custom workout plans with AI' }
  ]

  const FeatureIcon = ({ type }) => {
    const icons = {
      trophy: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.5 3.5h2.25A2.25 2.25 0 0121 5.75v1.5a2.25 2.25 0 01-2.25 2.25H16.5m-9 0H5.25A2.25 2.25 0 013 7.25v-1.5A2.25 2.25 0 015.25 3.5H7.5m9 0V2.25A.75.75 0 0015.75 1.5h-7.5a.75.75 0 00-.75.75V3.5m9 0H7.5m9 6v5.25a3 3 0 01-3 3h-3a3 3 0 01-3-3V9.5" />,
      camera: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z M15 13.5a3 3 0 11-6 0 3 3 0 016 0z" />,
      template: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />,
      fire: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />,
      chart: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75z M9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625z M16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />,
      history: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />,
      palette: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />,
      graph: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />,
      sparkle: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />,
      brain: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    }
    return (
      <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {icons[type]}
      </svg>
    )
  }

  return (
    <section className="premium" id="premium" ref={sectionRef}>
      {/* Ambient background effects */}
      <div className="premium-glow premium-glow-1"></div>
      <div className="premium-glow premium-glow-2"></div>

      <div className="premium-container">
        <div className={`premium-header ${inView ? 'animate' : ''}`}>
          <div className="premium-eyebrow">
            <span className="eyebrow-line"></span>
            <span className="eyebrow-text">Premium Plans</span>
            <span className="eyebrow-line"></span>
          </div>
          <h2 className="premium-title">
            Unlock Your <span className="title-highlight">Full Potential</span>
          </h2>
          <p className="premium-subtitle">
            Choose the plan that matches your ambition. Both include a 7-day free trial.
          </p>
        </div>

        <div className="pricing-cards">
          {/* Pro Plan */}
          <div className={`pricing-card ${inView ? 'animate' : ''}`} style={{ animationDelay: '0.15s' }}>
            <div className="card-inner">
              <div className="card-header">
                <div className="plan-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <div className="plan-info">
                  <h3 className="plan-name">Pro</h3>
                  <p className="plan-tagline">All premium features</p>
                </div>
              </div>

              <div className="pricing-display">
                <div className="price-row price-row-monthly">
                  <span className="price-amount">
                    <span className="currency">$</span>
                    <span className="value">2.99</span>
                  </span>
                  <span className="price-period">/month</span>
                </div>
                <div className="price-divider">
                  <span>or</span>
                </div>
                <div className="price-row price-row-yearly">
                  <span className="price-amount">
                    <span className="currency">$</span>
                    <span className="value">29.99</span>
                  </span>
                  <span className="price-period">/year</span>
                  <span className="save-badge">Save 17%</span>
                </div>
              </div>

              <div className="features-list">
                {proFeatures.map((feature, index) => (
                  <div className="feature-item" key={index} style={{ animationDelay: `${0.3 + index * 0.05}s` }}>
                    <div className="feature-icon-wrap">
                      <FeatureIcon type={feature.icon} />
                    </div>
                    <div className="feature-content">
                      <span className="feature-name">{feature.title}</span>
                      <span className="feature-desc">{feature.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pro+AI Plan - Featured */}
          <div className={`pricing-card pricing-card-featured ${inView ? 'animate' : ''}`} style={{ animationDelay: '0.25s' }}>
            <div className="featured-glow"></div>
            <div className="featured-badge-wrap">
              <span className="featured-badge">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Most Popular
              </span>
            </div>

            <div className="card-inner">
              <div className="card-header">
                <div className="plan-icon plan-icon-ai">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                  </svg>
                </div>
                <div className="plan-info">
                  <h3 className="plan-name">Pro <span className="ai-plus">+ AI</span></h3>
                  <p className="plan-tagline">Unlock your full potential</p>
                </div>
              </div>

              <div className="pricing-display">
                <div className="price-row price-row-monthly">
                  <span className="price-amount">
                    <span className="currency">$</span>
                    <span className="value">4.99</span>
                  </span>
                  <span className="price-period">/month</span>
                </div>
                <div className="price-divider">
                  <span>or</span>
                </div>
                <div className="price-row price-row-yearly">
                  <span className="price-amount">
                    <span className="currency">$</span>
                    <span className="value">49.99</span>
                  </span>
                  <span className="price-period">/year</span>
                  <span className="save-badge">Save 17%</span>
                </div>
              </div>

              <div className="features-list">
                {/* AI-exclusive features first */}
                <div className="ai-exclusive-section">
                  {aiFeatures.map((feature, index) => (
                    <div className="feature-item feature-item-ai" key={`ai-${index}`} style={{ animationDelay: `${0.35 + index * 0.05}s` }}>
                      <div className="feature-icon-wrap feature-icon-ai">
                        <FeatureIcon type={feature.icon} />
                      </div>
                      <div className="feature-content">
                        <span className="feature-name">
                          {feature.title}
                          <span className="ai-tag">AI</span>
                        </span>
                        <span className="feature-desc">{feature.description}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="included-divider">
                  <span className="divider-text">Everything in Pro included</span>
                </div>

                {/* Pro features */}
                {proFeatures.map((feature, index) => (
                  <div className="feature-item feature-item-included" key={index} style={{ animationDelay: `${0.45 + index * 0.04}s` }}>
                    <div className="feature-icon-wrap">
                      <FeatureIcon type={feature.icon} />
                    </div>
                    <div className="feature-content">
                      <span className="feature-name">{feature.title}</span>
                      <span className="feature-desc">{feature.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={`premium-cta ${inView ? 'animate' : ''}`}>
          <div className="cta-content">
            <div className="cta-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg>
            </div>
            <div className="cta-text">
              <h3 className="cta-title">Start Your Free Trial</h3>
              <p className="cta-subtitle">7 days free, then decide. Cancel anytime.</p>
            </div>
          </div>
          <a href="https://apps.apple.com/app/shadowlift/id6743451583" className="cta-button">
            <svg className="apple-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download on App Store
          </a>
        </div>
      </div>
    </section>
  )
}

export default Premium
