import './App.css'
import React, { useEffect } from "react"

import Header from "./components/Header"
import MouseFollower from './components/MouseFollower'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Resume from './components/Resume'


function App() {
  async function initLocomotiveScroll() {
    const LocomotiveScroll = (await import("locomotive-scroll")).default
    new LocomotiveScroll()
  }

  useEffect(() => {
    initLocomotiveScroll()
  }, [])

  return (
   <main>
      <MouseFollower />
      <Header/>
      <About />
      <TechStack />
      <Projects />
      <Resume />
   </main>
  )
}

export default App
