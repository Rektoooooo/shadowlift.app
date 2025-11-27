import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import Premium from './components/Premium'
import Screenshots from './components/Screenshots'
import Download from './components/Download'
import Footer from './components/Footer'
import DarkVeil from './components/DarkVeil'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="app-background">
        <DarkVeil hueShift={250} speed={0.5} />
      </div>
      <div className="app-content">
        <Navigation />
        <Hero />
        <Features />
        <Premium />
        <Screenshots />
        <Download />
        <Footer />
      </div>
    </div>
  )
}

export default App
