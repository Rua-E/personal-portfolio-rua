import './App.css'
import React, { useEffect } from "react"

import Header from "./components/Header"
import MouseFollower from './components/MouseFollower'
import About from './components/About'


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
   </main>
  )
}

export default App
