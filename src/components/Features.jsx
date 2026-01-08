import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import './Features.css'

const DEFAULT_SPOTLIGHT_RADIUS = 400
const MOBILE_BREAKPOINT = 768

const featuresData = [
  {
    label: 'Insights',
    title: 'Track Every Rep',
    description: 'Log sets, reps, and weight with detailed tracking for all exercise types',
    bgColor: 'rgba(20, 20, 20, 0.6)'
  },
  {
    label: 'Overview',
    title: 'Workout Calendar',
    description: 'Visual calendar showing your training history and consistency',
    bgColor: 'rgba(24, 24, 24, 0.65)'
  },
  {
    label: 'Connectivity',
    title: 'Works Offline',
    description: 'Log workouts in the gym without WiFi. Syncs when you\'re back online',
    bgColor: 'rgba(18, 18, 18, 0.7)',
    image: '/Images/Shadow_NoInternet.png'
  },
  {
    label: 'Efficiency',
    title: 'Apple Health Sync',
    description: 'Seamlessly sync with Apple Health for complete health tracking',
    bgColor: 'rgba(26, 26, 26, 0.6)',
    image: '/Images/Shadow_HealtKit.png'
  },
  {
    label: 'Analytics',
    title: 'Muscle Analytics',
    description: 'Track volume across muscle groups and optimize your workout split',
    bgColor: 'rgba(22, 22, 22, 0.65)'
  },
  {
    label: 'Protection',
    title: 'Your Data is Private',
    description: 'No ads, no tracking, no data selling. Your workouts stay yours',
    bgColor: 'rgba(28, 28, 28, 0.6)'
  },
  {
    label: 'AI Power',
    title: 'AI Workout Insights',
    description: 'Get personalized recommendations based on your training patterns',
    bgColor: 'rgba(19, 19, 19, 0.7)'
  },
  {
    label: 'Progress',
    title: 'Personal Records',
    description: 'Track your PRs and celebrate every milestone you hit',
    bgColor: 'rgba(25, 25, 25, 0.65)'
  },
  {
    label: 'Organization',
    title: 'Custom Exercises',
    description: 'Create unlimited custom exercises tailored to your training style',
    bgColor: 'rgba(21, 21, 21, 0.6)'
  },
  {
    label: 'Performance',
    title: 'Body Metrics',
    description: 'Track weight, BMI, and body measurements alongside your workouts',
    bgColor: 'rgba(23, 23, 23, 0.65)'
  }
]

const calculateSpotlightValues = radius => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75
})

const updateCardGlowProperties = (card, mouseX, mouseY, glow, radius) => {
  const rect = card.getBoundingClientRect()
  const relativeX = ((mouseX - rect.left) / rect.width) * 100
  const relativeY = ((mouseY - rect.top) / rect.height) * 100

  card.style.setProperty('--glow-x', `${relativeX}%`)
  card.style.setProperty('--glow-y', `${relativeY}%`)
  card.style.setProperty('--glow-intensity', glow.toString())
  card.style.setProperty('--glow-radius', `${radius}px`)
}

const GlobalSpotlight = ({ gridRef, spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS }) => {
  const spotlightRef = useRef(null)

  useEffect(() => {
    if (!gridRef?.current) return

    const spotlight = document.createElement('div')
    spotlight.className = 'global-spotlight'
    spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(254, 38, 23, 0.15) 0%,
        rgba(254, 38, 23, 0.08) 15%,
        rgba(254, 38, 23, 0.04) 25%,
        rgba(254, 38, 23, 0.02) 40%,
        rgba(254, 38, 23, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `
    document.body.appendChild(spotlight)
    spotlightRef.current = spotlight

    const handleMouseMove = e => {
      if (!spotlightRef.current || !gridRef.current) return

      const section = gridRef.current.closest('.features')
      const rect = section?.getBoundingClientRect()
      const mouseInside =
        rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom

      const cards = gridRef.current.querySelectorAll('.feature-bento-card')

      if (!mouseInside) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out'
        })
        cards.forEach(card => {
          card.style.setProperty('--glow-intensity', '0')
        })
        return
      }

      const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius)
      let minDistance = Infinity

      cards.forEach(card => {
        const cardRect = card.getBoundingClientRect()
        const centerX = cardRect.left + cardRect.width / 2
        const centerY = cardRect.top + cardRect.height / 2
        const distance =
          Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2
        const effectiveDistance = Math.max(0, distance)

        minDistance = Math.min(minDistance, effectiveDistance)

        let glowIntensity = 0
        if (effectiveDistance <= proximity) {
          glowIntensity = 1
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity)
        }

        updateCardGlowProperties(card, e.clientX, e.clientY, glowIntensity, spotlightRadius)
      })

      gsap.to(spotlightRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      })

      const targetOpacity =
        minDistance <= proximity
          ? 0.8
          : minDistance <= fadeDistance
            ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
            : 0

      gsap.to(spotlightRef.current, {
        opacity: targetOpacity,
        duration: targetOpacity > 0 ? 0.2 : 0.5,
        ease: 'power2.out'
      })
    }

    const handleMouseLeave = () => {
      gridRef.current?.querySelectorAll('.feature-bento-card').forEach(card => {
        card.style.setProperty('--glow-intensity', '0')
      })
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out'
        })
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current)
    }
  }, [gridRef, spotlightRadius])

  return null
}

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

function Features() {
  const gridRef = useRef(null)
  const sectionRef = useRef(null)
  const isMobile = useMobileDetection()
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

  return (
    <section className="features" id="features" ref={sectionRef}>
      <div className="features-container">
        <div className={`features-header ${inView ? 'animate' : ''}`}>
          <span className="section-label">Features</span>
          <h2 className="features-title">Everything You Need to Crush Your Goals</h2>
          <p className="features-subtitle">
            Powerful features designed for serious lifters. Track progress, stay consistent, and achieve real results.
          </p>
        </div>

        {!isMobile && <GlobalSpotlight gridRef={gridRef} spotlightRadius={DEFAULT_SPOTLIGHT_RADIUS} />}

        <div className="features-bento-grid" ref={gridRef}>
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className={`feature-bento-card ${inView ? 'animate' : ''}`}
              style={{
                backgroundColor: feature.bgColor,
                animationDelay: `${index * 0.05}s`
              }}
            >
              {feature.image && (
                <div className="card-image">
                  <img src={feature.image} alt={feature.title} />
                </div>
              )}
              <div className="card-header">
                <span className="card-label">{feature.label}</span>
              </div>
              <div className="card-content">
                <h3 className="card-title">{feature.title}</h3>
                <p className="card-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
