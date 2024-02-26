import React from 'react'
import {Link} from "react-router-dom"
const Hero = () => {
  return (
    <div>
        <div className='d-flex justify-content-center align-items-center '>
            <h1>Are you or your child</h1>
            <h1>struggling to keep</h1>
            <h1>up with schoolwork</h1>
            <p>Qualified & Verified Tutors</p>
            <p>One-time payment of <b>100 AED</b></p>
            <p>No commission / Hidden fees</p>
            <p>Direct communication with tutors</p>
<div className='d-flex'>
        <Link to="/login" className="btn btn-primary " style={{ backgroundColor: "#01428B" ,color: "white"}}>
          Find a Tutor
        </Link>

        <Link to="/login" className="btn btn-primary " style={{ backgroundColor: "white" ,color: "white"}}>
          Become a Tutor
        </Link>
</div>

<div>
    <img src="images/Hero.jpg" alt="" />
</div>

        </div>
    </div>
  )
}

export default Hero