import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'  
import About from './Component/AboutUs/About'

function App() {


  return (
    <>
     <Navbar/>
     <Home/>
     <About/>

    </>
  )
}

export default App
