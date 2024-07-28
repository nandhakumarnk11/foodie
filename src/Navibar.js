import React from 'react'
import "./Navi.css"
import image1 from "./assets/1.png"
const Navibar = () => {
  return (
    <div>
        <nav>
        <img className='navimg' src={image1} alt=''></img>
        <button className='navbtn'>join the waitlist</button>
        </nav>
    </div>
  )
}

export default Navibar
