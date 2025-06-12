import './App.css'
import React, { useEffect } from "react"

import Header from "./components/Header"


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
      <Header/>
   </main>
  )
}

export default App
