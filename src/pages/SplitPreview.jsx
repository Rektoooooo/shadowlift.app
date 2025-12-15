import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './SplitPreview.css'

const SplitPreview = () => {
  const { shareId } = useParams()
  const navigate = useNavigate()
  const [split, setSplit] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchSplit()
  }, [shareId])

  const fetchSplit = async () => {
    try {
      setLoading(true)
      setError(null)

      // Fetch from CloudKit Public Database
      // Using CloudKit JS API
      const response = await fetch(`https://api.apple-cloudkit.com/database/1/iCloud.com.gymly.app/production/public/records/lookup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              recordName: `shared_${shareId}`
            }
          ]
        })
      })

      if (!response.ok) {
        throw new Error('Split not found')
      }

      const data = await response.json()

      if (data.records && data.records.length > 0) {
        const record = data.records[0]
        const splitData = JSON.parse(atob(record.fields.splitData.value))
        setSplit(splitData)
      } else {
        setError('Split not found. The link may be invalid or expired.')
      }
    } catch (err) {
      console.error('Error fetching split:', err)
      setError('Failed to load workout split. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleOpenInApp = () => {
    // Try to open deep link
    window.location.href = `shadowlift://import-split/${shareId}`

    // Fallback to App Store after a delay if app doesn't open
    setTimeout(() => {
      window.location.href = 'https://apps.apple.com/app/shadowlift/id6739989569'
    }, 2000)
  }

  const handleDownloadApp = () => {
    window.location.href = 'https://apps.apple.com/app/shadowlift/id6739989569'
  }

  if (loading) {
    return (
      <div className="split-preview-container">
        <div className="split-preview-loading">
          <div className="spinner"></div>
          <p>Loading workout split...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="split-preview-container">
        <div className="split-preview-error">
          <h2>❌ Oops!</h2>
          <p>{error}</p>
          <button onClick={() => navigate('/')} className="btn-primary">
            Go to Homepage
          </button>
        </div>
      </div>
    )
  }

  if (!split) {
    return null
  }

  const totalExercises = split.days?.reduce((total, day) => {
    return total + (day.exercises?.length || 0)
  }, 0) || 0

  return (
    <div className="split-preview-container">
      <div className="split-preview-header">
        <button onClick={() => navigate('/')} className="back-button">
          ← Back
        </button>
        <h1>{split.name}</h1>
        <div className="split-stats">
          <span className="stat">
            <strong>{split.days?.length || 0}</strong> Days
          </span>
          <span className="stat-divider">•</span>
          <span className="stat">
            <strong>{totalExercises}</strong> Exercises
          </span>
        </div>
      </div>

      <div className="split-preview-content">
        <div className="days-list">
          {split.days?.map((day, index) => (
            <div key={day.id || index} className="day-card">
              <div className="day-header">
                <h3>Day {day.dayOfSplit} - {day.name}</h3>
                <span className="exercise-count">
                  {day.exercises?.length || 0} exercises
                </span>
              </div>

              {day.exercises && day.exercises.length > 0 && (
                <div className="exercises-list">
                  {day.exercises
                    .sort((a, b) => (a.exerciseOrder || 0) - (b.exerciseOrder || 0))
                    .map((exercise, exIndex) => (
                    <div key={exercise.id || exIndex} className="exercise-item">
                      <div className="exercise-info">
                        <span className="exercise-number">{exercise.exerciseOrder}</span>
                        <span className="exercise-name">{exercise.name}</span>
                      </div>
                      <div className="exercise-details">
                        <span className="exercise-muscle">{exercise.muscleGroup}</span>
                        <span className="exercise-reps">{exercise.repGoal}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="split-actions">
          <button onClick={handleOpenInApp} className="btn-primary btn-large">
            <span className="btn-icon">📱</span>
            Open in ShadowLift
          </button>

          <p className="download-text">
            Don't have the app?{' '}
            <button onClick={handleDownloadApp} className="link-button">
              Download ShadowLift
            </button>
          </p>
        </div>
      </div>

      <footer className="split-preview-footer">
        <p>Shared via ShadowLift - Track your workouts, build your strength</p>
      </footer>
    </div>
  )
}

export default SplitPreview
