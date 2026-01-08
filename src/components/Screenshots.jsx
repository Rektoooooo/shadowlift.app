import React, { useRef, useEffect, useState, useCallback } from 'react'
import './Screenshots.css'

function Screenshots() {
  const containerRef = useRef(null)
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const screenshots = [
    {
      image: '/Images/MainView.png',
      title: 'Track Your Workouts',
      description: 'Log sets, reps, and weights with lightning-fast input.'
    },
    {
      image: '/Images/Calendar.png',
      title: 'Workout Calendar',
      description: 'Visualize your training consistency and history.'
    },
    {
      image: '/Images/Graph.png',
      title: 'Muscle Analytics',
      description: 'Track volume across all 10 muscle groups.'
    },
    {
      image: '/Images/AISummary.png',
      title: 'AI Workout Insights',
      description: 'Get smart summaries after every workout—100% private.'
    },
    {
      image: '/Images/BMI.png',
      title: 'Body Metrics',
      description: 'Track your BMI and sync with Apple Health.'
    },
    {
      image: '/Images/MyWeight.png',
      title: 'Weight Progress',
      description: 'Monitor weight changes and training trends.'
    },
    {
      image: '/Images/Settings.png',
      title: 'Customize Everything',
      description: 'Custom themes, colors, and app icons.'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToIndex = useCallback((index) => {
    if (containerRef.current) {
      const container = containerRef.current
      const track = container.querySelector('.screenshot-track')
      const items = track.querySelectorAll('.screenshot-item')

      if (items[index]) {
        const item = items[index]
        const containerWidth = container.offsetWidth
        const trackRect = track.getBoundingClientRect()
        const itemRect = item.getBoundingClientRect()
        const containerRect = container.getBoundingClientRect()

        // Calculate offset from container's left edge to item's center
        const itemCenterOffset = (itemRect.left - containerRect.left) + (itemRect.width / 2)
        const targetScroll = container.scrollLeft + itemCenterOffset - (containerWidth / 2)

        container.scrollTo({
          left: Math.max(0, targetScroll),
          behavior: 'smooth'
        })
        setActiveIndex(index)
      }
    }
  }, [])

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      const container = containerRef.current
      const track = container.querySelector('.screenshot-track')
      const items = track.querySelectorAll('.screenshot-item')
      const containerRect = container.getBoundingClientRect()
      const containerCenter = containerRect.left + containerRect.width / 2

      let closestIndex = 0
      let closestDistance = Infinity

      items.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect()
        const itemCenter = itemRect.left + itemRect.width / 2
        const distance = Math.abs(containerCenter - itemCenter)

        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex)
      }
    }
  }, [activeIndex])

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      let scrollTimeout
      const debouncedScroll = () => {
        clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(handleScroll, 50)
      }

      container.addEventListener('scroll', debouncedScroll)
      return () => {
        container.removeEventListener('scroll', debouncedScroll)
        clearTimeout(scrollTimeout)
      }
    }
  }, [handleScroll])

  const goToNext = () => {
    if (activeIndex < screenshots.length - 1) {
      scrollToIndex(activeIndex + 1)
    }
  }

  const goToPrev = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1)
    }
  }

  return (
    <section className="screenshots" id="screenshots" ref={sectionRef}>
      <div className="screenshots-container">
        <div className={`screenshots-header ${inView ? 'animate' : ''}`}>
          <span className="section-label">App Preview</span>
          <h2 className="screenshots-title">
            Experience <span className="highlight">ShadowLift</span>
          </h2>
          <p className="screenshots-subtitle">
            A powerful fitness tracker designed for real lifters. Beautiful, fast, and packed with features.
          </p>
        </div>

        <div className={`screenshot-showcase ${inView ? 'animate' : ''}`}>
          {/* Navigation Arrows */}
          <button
            className={`showcase-nav showcase-nav-prev ${activeIndex === 0 ? 'disabled' : ''}`}
            onClick={goToPrev}
            aria-label="Previous screenshot"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="screenshot-scroll-container" ref={containerRef}>
            <div className="screenshot-track">
              {screenshots.map((screenshot, index) => {
                const isActive = index === activeIndex

                return (
                  <div
                    className={`screenshot-item ${isActive ? 'active' : ''}`}
                    key={index}
                    onClick={() => scrollToIndex(index)}
                    style={{ animationDelay: `${index * 0.08}s` }}
                  >
                    <div className="screenshot-image-wrapper">
                      <img
                        src={screenshot.image}
                        alt={screenshot.title}
                        className="screenshot-image"
                      />
                      {/* Glow Effect */}
                      <div className="screenshot-glow"></div>
                    </div>

                    {/* Caption */}
                    <div className="screenshot-caption">
                      <h3 className="screenshot-title">{screenshot.title}</h3>
                      <p className="screenshot-description">{screenshot.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <button
            className={`showcase-nav showcase-nav-next ${activeIndex === screenshots.length - 1 ? 'disabled' : ''}`}
            onClick={goToNext}
            aria-label="Next screenshot"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className={`showcase-dots ${inView ? 'animate' : ''}`}>
          {screenshots.map((_, index) => (
            <button
              key={index}
              className={`showcase-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>

        {/* Active Screenshot Info */}
        <div className={`showcase-info ${inView ? 'animate' : ''}`}>
          <span className="showcase-counter">
            {String(activeIndex + 1).padStart(2, '0')} / {String(screenshots.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  )
}

export default Screenshots
