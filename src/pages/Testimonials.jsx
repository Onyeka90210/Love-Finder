import React from 'react'
import MayB from '../assets/MayB.svg'
import PD from '../assets/PD.svg'
import KJ from '../assets/KJ.svg'
import '../styles/Testimonials.css'


const Testimonials = () => {
  return (
    <>
        <div className='my-5'>
        <div className='text-center TTM'>
            <h2>Testimonials</h2>
            <p style={{color: "#7C0B0B"
}}>Our Clients Say</p>
        </div>
        <div className='d-lg-flex testdiv my-5'>
            <div className='text-center testbox'>
              <p>Lorem ipsum dolor sit amet vitae consectetur. Diam nulla velit odio urna lacinia tincidunt diam tortor. Pellentesque eget lorem nisi auct erat sit sed enim. Amet nunc arcu cursus adipiscing sapie imperdiet.</p>
              <div className='d-flex info'><img src={PD} alt="" /><p className='name'>Paul Doe</p></div>
            </div>
            <div className='text-center testbox'>
              <p>Lorem ipsum dolor sit amet vitae consectetur. Diam nulla velit odio urna lacinia tincidunt diam tortor. Pellentesque eget lorem nisi auct erat sit sed enim. Amet nunc arcu cursus adipiscing sapie imperdiet.</p>
              <div className='d-flex info'><img src={KJ} alt="" /><p className='name'>Kelvin Job</p></div>

            </div>
            <div className='text-center testbox'>
              <p>Lorem ipsum dolor sit amet vitae consectetur. Diam nulla velit odio urna lacinia tincidunt diam tortor. Pellentesque eget lorem nisi auct erat sit sed enim. Amet nunc arcu cursus adipiscing sapie imperdiet.</p>
              <div className='d-flex info'><img src={MayB} alt="" /><p className='name'>Mary Bells</p></div>
            </div>
        </div>
        <div className='text-center my-5 SON'>
            <h2>Subscribe to Our Newsletter</h2>
            <p style={{color: '#7C0B0B'}}>Stay up to date with our latest updates and find someone of similar passion as you</p>
            <label htmlFor="">
              <input placeholder="    Your Email"type="text" className='subdiv'/>
              <button className='sub' style={{color: 'white'}}>Subscribe</button>
            </label>
        </div>

    </div>
    </>

  )
}

export default Testimonials