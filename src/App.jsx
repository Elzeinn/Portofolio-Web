import { useState } from 'react'
import './index.css'
import Header from './component/Header.jsx'
import HeroSection from './component/HeroSection.jsx'
import AboutSection from './component/AboutSection.jsx'

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
    </>
  )
}

export default App
