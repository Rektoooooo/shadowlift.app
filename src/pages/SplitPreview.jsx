import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchSharedSplit } from '../utils/cloudkit'
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
    // We can't preview splits on the web - must open in app
    setLoading(false)
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

  // Show simple message to open in app
  return (
    <div className="split-preview-container">
      <div className="split-preview-content">
        <div className="split-preview-header">
          <h1>Workout Split Shared</h1>
          <p>Open this link in the ShadowLift app to import this workout split.</p>
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
