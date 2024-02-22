import React from 'react'
import '../styles/Hero.css'
import hh from '../assets/Holdinghands.svg'
import logo from '../assets/Logo.svg'

const Hero = () => {
  const hhh = <img src={hh} alt="" />


  return (
    <>
    <section>
      <div className='heromain' style={{backgroundImage: `url(${hh})`}}> 
      <div className='inner'>
<h2 style={{fontWeight:700}}>Join Our Platform & FInd a Match Today.</h2>
<button>Join Free Today</button>
      </div>
      </div>
  </section>
  </>
  )
}

export default Hero