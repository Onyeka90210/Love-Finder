import { useState } from 'react'
import Hero from './pages/Hero'
import NavBar from './pages/NavBar'
import Form from './pages/Form'
import "bootstrap/dist/css/bootstrap.min.css";
import About from './pages/About'
import Members from './pages/Members'
import Footer from './pages/Footer'
import Testimonials from './pages/Testimonials'

function App() {


  return (
    <>
    <NavBar/>
    <Hero/>
    <Form/>
    <About/>
    <Members/>
    <Testimonials/>
    <Footer/>  
    </>
  )
}

export default App
