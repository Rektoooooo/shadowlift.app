import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Privacy.css'

const Privacy = () => {
  const navigate = useNavigate()
  const lastUpdated = "January 8, 2025"

  return (
    <div className="privacy-container">
      <button onClick={() => navigate('/')} className="back-button">
        &larr; Back to Home
      </button>

      <div className="privacy-content">
        <div className="privacy-header">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: {lastUpdated}</p>
        </div>

        <div className="privacy-intro">
          <p>
            At ShadowLift, we believe your fitness data is personal and should stay that way.
            This Privacy Policy explains how we collect, use, and protect your information when
            you use our iOS application.
          </p>
        </div>

        <div className="privacy-sections">
          <section className="privacy-section">
            <h2>1. Information We Collect</h2>
            <p>ShadowLift collects the following types of information:</p>

            <div className="data-category">
              <h3>Account Information</h3>
              <ul>
                <li><strong>Email Address:</strong> Collected through Apple Sign In for account identification</li>
                <li><strong>User ID:</strong> A unique identifier for your account</li>
              </ul>
            </div>

            <div className="data-category">
              <h3>Fitness Data</h3>
              <ul>
                <li>Workout logs (exercises, sets, reps, weights)</li>
                <li>Workout splits and routines</li>
                <li>Progress tracking data</li>
                <li>Workout history and statistics</li>
              </ul>
            </div>

            <div className="data-category">
              <h3>Health Data (Optional)</h3>
              <ul>
                <li>Weight and BMI (if you enable HealthKit integration)</li>
                <li>Height (if you enable HealthKit integration)</li>
              </ul>
            </div>

            <div className="data-category">
              <h3>Photos (Optional)</h3>
              <ul>
                <li>Progress photos you choose to capture within the app</li>
              </ul>
            </div>
          </section>

          <section className="privacy-section">
            <h2>2. How We Use Your Information</h2>
            <p>All data collected is used solely to provide app functionality:</p>
            <ul>
              <li>Display and track your workouts</li>
              <li>Sync your data across your devices via iCloud</li>
              <li>Calculate fitness statistics and progress</li>
              <li>Generate AI-powered workout insights (processed entirely on your device)</li>
            </ul>
            <div className="highlight-box">
              <strong>We do NOT use your data for:</strong>
              <ul>
                <li>Advertising or marketing</li>
                <li>Selling to third parties</li>
                <li>User tracking or profiling</li>
                <li>Analytics about user behavior</li>
              </ul>
            </div>
          </section>

          <section className="privacy-section">
            <h2>3. Data Storage & Security</h2>
            <p>Your data is stored securely using Apple's infrastructure:</p>
            <ul>
              <li><strong>Local Storage:</strong> Your workout data is stored locally on your device using SwiftData</li>
              <li><strong>iCloud Sync:</strong> If enabled, data syncs to your personal iCloud account (CloudKit private database). Only you can access this data.</li>
              <li><strong>Encryption:</strong> All data is encrypted in transit and at rest using Apple's standard encryption</li>
            </ul>
            <p className="emphasis">
              We never have access to your workout data, progress photos, or health information.
              Everything stays within your personal Apple ecosystem.
            </p>
          </section>

          <section className="privacy-section">
            <h2>4. AI Features</h2>
            <p>
              ShadowLift offers AI-powered workout summaries and insights on supported devices (iPhone 15 Pro and newer with iOS 26+).
            </p>
            <div className="highlight-box positive">
              <strong>100% On-Device Processing</strong>
              <p>
                All AI features use Apple's on-device FoundationModels framework. Your workout data
                is never sent to external servers for AI processing. Everything happens locally on your device.
              </p>
            </div>
          </section>

          <section className="privacy-section">
            <h2>5. Third-Party Services</h2>
            <p>ShadowLift uses the following Apple services:</p>
            <ul>
              <li><strong>Apple Sign In:</strong> For secure authentication</li>
              <li><strong>CloudKit:</strong> For syncing data to your personal iCloud</li>
              <li><strong>HealthKit:</strong> For optional health data integration</li>
              <li><strong>StoreKit:</strong> For subscription purchases (Apple handles all payment processing)</li>
            </ul>
            <p>We do not use any third-party analytics, advertising, or tracking services.</p>
          </section>

          <section className="privacy-section">
            <h2>6. Data Retention & Deletion</h2>
            <p>You have full control over your data:</p>
            <ul>
              <li><strong>Delete Account:</strong> You can delete your account and all associated data from Settings within the app</li>
              <li><strong>Local Data:</strong> Deleting the app removes all local data</li>
              <li><strong>iCloud Data:</strong> Data synced to iCloud can be managed through your iCloud settings</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>7. Children's Privacy</h2>
            <p>
              ShadowLift is rated 13+ and is not intended for children under 13. We do not knowingly
              collect personal information from children under 13 years of age.
            </p>
          </section>

          <section className="privacy-section">
            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any
              significant changes by updating the "Last updated" date at the top of this policy.
            </p>
          </section>

          <section className="privacy-section">
            <h2>9. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <div className="contact-info">
              <p><strong>Email:</strong> <a href="mailto:sebastian.kucera@icloud.com">privacy@shadowlift.app</a></p>
              <p><strong>Developer:</strong> Sebastian Kucera</p>
              <p><strong>Location:</strong> Slovakia, European Union</p>
            </div>
          </section>
        </div>
      </div>

      <footer className="privacy-footer">
        <p>ShadowLift &copy; 2025. Your fitness data, your control.</p>
      </footer>
    </div>
  )
}

export default Privacy
