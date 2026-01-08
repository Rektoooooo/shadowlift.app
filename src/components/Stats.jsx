import React, { useEffect, useRef, useState } from 'react'
import './Stats.css'

const stats = [
  { number: 1000, suffix: '+', label: 'Happy Lifters', icon: '💪' },
  { number: 5, suffix: '', label: 'Pre-Built Programs', icon: '📋' },
  { number: 0, suffix: '', label: 'Ads Forever', icon: '✨' },
  { number: 100, suffix: '%', label: 'On-Device Privacy', icon: '🔒' }
]

function AnimatedNumber({ target, suffix, inView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let startTime
    const duration = 2000

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * target))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [target, inView])

  return <span>{count}{suffix}</span>
}

function Stats() {
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
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats" ref={sectionRef}>
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`stat-card ${inView ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">
                <AnimatedNumber target={stat.number} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
