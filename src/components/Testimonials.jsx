import React, { useEffect, useRef, useState } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    quote: "Finally, a workout tracker that doesn't sell my data or spam me with ads. The offline mode is a game-changer at my gym.",
    author: "Mike R.",
    role: "Powerlifter",
    rating: 5
  },
  {
    quote: "The AI workout summaries are incredible. It's like having a personal coach analyze every session. And it all stays on my device!",
    author: "Sarah K.",
    role: "Fitness Enthusiast",
    rating: 5
  },
  {
    quote: "I've tried every fitness app out there. ShadowLift is the first one that feels like it was actually built by someone who lifts.",
    author: "James T.",
    role: "Bodybuilder",
    rating: 5
  }
]

function Testimonials() {
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
    <section className="testimonials" ref={sectionRef}>
      <div className="testimonials-container">
        <div className={`testimonials-header ${inView ? 'animate' : ''}`}>
          <span className="section-label">Testimonials</span>
          <h2 className="testimonials-title">
            Loved by <span className="highlight">Lifters</span>
          </h2>
          <p className="testimonials-subtitle">
            Here's what our users are saying about ShadowLift.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card ${inView ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <blockquote className="testimonial-quote">
                "{testimonial.quote}"
              </blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="author-info">
                  <span className="author-name">{testimonial.author}</span>
                  <span className="author-role">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
