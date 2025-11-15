import React, { useRef } from 'react'
import './Screenshots.css'

function Screenshots() {
  const scrollRef = useRef(null)

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

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="screenshots" id="screenshots">
      <div className="screenshots-container">
        <div className="screenshots-header">
          <h2 className="screenshots-title">See It In Action</h2>
          <p className="screenshots-subtitle">
            A powerful fitness tracker designed for real lifters. Simple, fast, and packed with features.
          </p>
        </div>

        <div className="carousel-wrapper">
          <button
            className="carousel-button carousel-button-left"
            onClick={() => scroll('left')}
            aria-label="Previous screenshot"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="carousel-container" ref={scrollRef}>
            <div className="carousel-track">
              {screenshots.map((screenshot, index) => (
                <div className="carousel-item" key={index}>
                  <img
                    src={screenshot.image}
                    alt={screenshot.title}
                    className="carousel-image"
                  />
                  <div className="carousel-caption">
                    <h3 className="carousel-title">{screenshot.title}</h3>
                    <p className="carousel-description">{screenshot.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="carousel-button carousel-button-right"
            onClick={() => scroll('right')}
            aria-label="Next screenshot"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Screenshots
