import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'  
import About from './Component/AboutUs/About'
import Project from './Component/Projects/Project'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'

function App() {


  return (
    <>
     <Navbar/>
     <Home/>
     <Project/>
     <About/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
