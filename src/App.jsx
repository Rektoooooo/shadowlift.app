import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Premium from './components/Premium'
import Screenshots from './components/Screenshots'
import Testimonials from './components/Testimonials'
import Download from './components/Download'
import Footer from './components/Footer'
import DarkVeil from './components/DarkVeil'
import SplitPreview from './pages/SplitPreview'
import StarsBackground from './components/StarsBackground';
import './App.css'

function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Premium />
      <Screenshots />
      <Testimonials />
      <Download />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app-background">
            <StarsBackground />
        </div>
        <div className="app-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/splits/:shareId" element={<SplitPreview />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
