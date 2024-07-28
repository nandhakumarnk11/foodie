import React from 'react'
import "./Home.css"

import image3 from "./assets/3.webp"
import video1 from './assets/5.mp4'
import image1 from "./assets/1.png"

const Home = () => {
  return (
   <>

   <div className='map'> 
    
    <img className='pink' src={image3} alt=''></img>
   
   </div>
   <div className='secpage'>
    <video className='vidtag' src={video1}  type="video/mp4"  muted autoPlay ></video>
    <div className='sec-tag2'>
    <img className='foodpic' src={image1} alt=''></img><br></br>
    <h1 className='food-h1'>welcome to foodie</h1>
    <div className='foodie-para'>
        <p>At foodie, we redefine convenience with our seamless <br></br> <p className='para-span'>food delivery service. Whether you're craving the <br></br> flavors of home or exploring new culinary delights,<br></br>  foodie brings it all to your doorstep. From hearty <br></br> breakfasts to gourmet dinners and everything in
            </p> between, our curated menu caters to every palate and <br></br> <span className='para-span-1'>preference.</span></p> <br></br>
            <button className='food-btn'>join the waitlist</button>
    </div>

    </div>

   </div>





   </>
  )
}

export default Home
