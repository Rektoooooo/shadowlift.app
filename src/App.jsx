import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import Premium from './components/Premium'
import Screenshots from './components/Screenshots'
import Download from './components/Download'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Features />
      <Premium />
      <Screenshots />
      <Download />
      <Footer />
    </div>
  )
}

export default App
