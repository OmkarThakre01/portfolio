import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/hero'
import Background from './Components/background/background'
import './App.css'

function App() {
  
  return (
   <div >
    <Background/>
    <Navbar/>
    <Hero/>
   </div>
  )
}

export default App
