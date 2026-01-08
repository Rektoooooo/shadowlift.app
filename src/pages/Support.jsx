import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Support.css'

const Support = () => {
  const navigate = useNavigate()

  const faqs = [
    {
      question: "How do I create a workout split?",
      answer: "Go to the Routine tab, tap 'Create Split', and add your workout days. You can customize each day with exercises, sets, and rep goals."
    },
    {
      question: "How do I sync my data across devices?",
      answer: "Enable iCloud sync in Settings > Connections. Your workouts, splits, and progress photos will automatically sync across all your Apple devices signed into the same iCloud account."
    },
    {
      question: "How do I connect to Apple Health?",
      answer: "Go to Settings > Connections and enable HealthKit. ShadowLift can sync your weight, BMI, and workout data with Apple Health."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "Subscriptions are managed through Apple. Go to Settings > Apple ID > Subscriptions on your iPhone, find ShadowLift, and tap 'Cancel Subscription'."
    },
    {
      question: "How do I restore my purchases?",
      answer: "Go to Settings > Premium in the app and tap 'Restore Purchases'. Make sure you're signed into the same Apple ID you used for the original purchase."
    },
    {
      question: "Is my data private?",
      answer: "Absolutely. All your workout data stays on your device and in your personal iCloud account. We never have access to your fitness data. AI features run 100% on-device."
    }
  ]

  return (
    <div className="support-container">
      <button onClick={() => navigate('/')} className="back-button">
        &larr; Back to Home
      </button>

      <div className="support-content">
        <div className="support-header">
          <h1>Support</h1>
          <p>We're here to help you get the most out of ShadowLift</p>
        </div>

        <div className="support-sections">
          <section className="support-section contact-section">
            <div className="section-icon">
              <span>&#x2709;</span>
            </div>
            <h2>Contact Us</h2>
            <p>Have a question or found a bug? We'd love to hear from you.</p>
            <a href="mailto:sebastian.kucera@icloud.com" className="btn-primary">
              Email Support
            </a>
            <p className="response-time">We typically respond within 24 hours</p>
          </section>

          <section className="support-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details key={index} className="faq-item">
                  <summary className="faq-question">{faq.question}</summary>
                  <p className="faq-answer">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="support-section resources-section">
            <h2>Quick Links</h2>
            <div className="resources-grid">
              <a href="/privacy" className="resource-card">
                <span className="resource-icon">&#x1F512;</span>
                <span className="resource-title">Privacy Policy</span>
                <span className="resource-desc">How we protect your data</span>
              </a>
              <a href="mailto:sebastian.kucera@icloud.com" className="resource-card">
                <span className="resource-icon">&#x1F4AC;</span>
                <span className="resource-title">Send Feedback</span>
                <span className="resource-desc">Help us improve</span>
              </a>
              <a href="https://apps.apple.com/app/shadowlift/id6739989569" target="_blank" rel="noopener noreferrer" className="resource-card">
                <span className="resource-icon">&#x2B50;</span>
                <span className="resource-title">Rate the App</span>
                <span className="resource-desc">Leave a review</span>
              </a>
            </div>
          </section>
        </div>
      </div>

      <footer className="support-footer">
        <p>ShadowLift &copy; 2025. Built with love for lifters everywhere.</p>
      </footer>
    </div>
  )
}

export default Support
