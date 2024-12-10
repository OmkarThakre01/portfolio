import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/hero'
import Background from './Components/background/background'
import './App.css'
import Icon from './Components/Icons/Icon'

function App() {
  
  return (
   <div >
    <Background/>
    <Navbar/>
    <Hero/>
    <Icon/>
   </div>
  )
}

export default App
