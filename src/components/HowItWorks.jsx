import React, { useEffect, useRef, useState } from 'react'
import './HowItWorks.css'

const steps = [
  {
    number: '01',
    title: 'Create Your Split',
    description: 'Choose from pre-built templates like PPL, Upper/Lower, or build your own custom workout split tailored to your goals.',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'Log Your Workouts',
    description: 'Track every set, rep, and weight with our lightning-fast interface. Works offline so you never miss a rep in the gym.',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'Analyze Progress',
    description: 'View detailed muscle analytics, track personal records, and get AI-powered insights to optimize your training.',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    number: '04',
    title: 'Crush Your Goals',
    description: 'Stay consistent with streak tracking, celebrate PRs, and watch your transformation unfold over time.',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
]

function HowItWorks() {
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
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="how-it-works" id="how-it-works" ref={sectionRef}>
      <div className="how-it-works-container">
        <div className={`how-it-works-header ${inView ? 'animate' : ''}`}>
          <span className="section-label">How It Works</span>
          <h2 className="how-it-works-title">
            Start Training Smarter in <span className="highlight">4 Simple Steps</span>
          </h2>
          <p className="how-it-works-subtitle">
            From your first workout to crushing PRs, ShadowLift makes tracking effortless.
          </p>
        </div>

        <div className="steps-container">
          <div className="steps-line" />
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step-card ${inView ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="step-number-wrapper">
                <span className="step-number">{step.number}</span>
                <div className="step-dot" />
              </div>
              <div className="step-content">
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
