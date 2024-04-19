import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import About2 from './Components/About2'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'



function App() {


  return (
    <div className='w-full h-screen '>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <About2/>
      <Eyes/>
      <Featured/>
    </div>
  )
}

export default App
