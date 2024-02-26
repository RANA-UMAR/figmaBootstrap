import React from "react";
import { Link } from "react-router-dom";
import { BiCheck } from "react-icons/bi";
import Subjects from "./Subjects";
import "../index.css"
import Teacher from "./Teacher";
import CurrData from "./CurrData";
import Cards from "./Cards";
import Verified from "./Verified";
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TestimonialSlider, { Slider } from "../components/Slider";
const Navbar = () => {
  return (
    <div>
    <div className="d-flex justify-content-around align-items-center">
      <div className="img">
        <img src="images/logo.jpg" width="150" height="40" alt="" />
      </div>
      <div className="links d-flex justify-content-center align-items-center gap-5 ">
        <ul className="d-flex gap-5 mt-3" style={{ listStyleType: 'none',  }}>
          <li>
            <Link to="/" className="text-decoration-none list-unstyled active " style={{ textDecoration: 'none',color:"#F8A722"  }}>Home</Link>
          </li>
          <li>
            <Link to="/find-tutors" style={{ textDecoration: 'none',color:"#313131" }}>Find Tutors</Link>
          </li>
          <li>
            <Link to="/how-it-works" style={{ textDecoration: 'none',color:"#313131" }}>How it works</Link>
          </li>
          <li>
            <Link to="/support" style={{ textDecoration: 'none',color:"#313131" }}>Support</Link>
          </li>
          <li>
            <Link to="/contact-us" style={{ textDecoration: 'none',color:"#313131" }}>Contact Us</Link>
          </li>
        </ul>
        <Link to="/login" className="btn btn-primary " style={{ backgroundColor: "#01428B" ,color: "white"}}>
          Login
        </Link>
      </div>
    </div>

 {/* Hero Section */}
 <div className="d-flex justify-content-around align-items-center   ">
  <div className="">
    <div className="">
    <div className="">
      <h1 style={{color:"#01428B", fontSize: "3rem"}}>Are you or your child</h1>
      <h1 style={{color:"#01428B", fontSize: "3rem"}}>struggling to keep</h1>
      <h1 style={{color:"#01428B", fontSize: "3rem"}}>up with <span style={{color:"#F8A722"}}>schoolwork?</span></h1>
      </div>
      <p><BiCheck style={{ marginRight: "4px" }} />Qualified & Verified Tutors</p>
      <p><BiCheck style={{ marginRight: "4px" }} />One-time payment of <b>100 AED</b></p>
      <p><BiCheck style={{ marginRight: "4px" }} />No commission / Hidden fees</p>
      <p><BiCheck style={{ marginRight: "4px" }} />Direct communication with tutors</p>
      <div className='d-flex align-items-center  gap-3 '>
        <Link to="/login" className="btn shadow  " style={{ backgroundColor: "#F8A722", color: "white" }}>
          Find a Tutor
        </Link>

        <Link to="/login" className="btn shadow " style={{ backgroundColor: "white", color: "#313131", border: "1px solid #313131" }}>
  Become a Tutor
</Link>

      </div>
    </div>
  </div>
  <div className="">
    <img src="images/hero.jpg" width="501px" height="607px" alt="" />
  </div>
</div>



<Subjects/>


<div class="main container-fluid" style={{backgroundColor:"#8CA6CA",  padding:"7rem 0",overflow:"hidden" }}>
  <div class="row">
    <div class="col-lg text-center">
      <div class="content" style={{marginBottom: "20px"}}>
        <h1 className="">OUR TUTORS SPEAK</h1>
        <p style={{marginBottom: "5rem"}}>we have teachers who can speak different languages</p>
      </div>
      <Teacher/>
    </div>
  </div>
</div>



{/* curriculum */}

<div>
  <div className="container text-center">
    <h1>EXPLORE BY <span style={{color:"#F8A722"}}>CURRICULUM</span></h1>
    <p>Every tutor has its own subject specialization</p>
    <div>

    <CurrData/>
    </div>
  </div>
</div>


{/* teachme */}


<div>
<div className="container text-center mt-5">
    <h1>Why TEACH <span style={{color:"#F8A722"}}>ME</span></h1>
    <p style={{paddingBottom:"100px"}}>Search For Qualified Tutors, Find Your Match, And Start Learning</p>

    <div>
    <Cards/>
    </div>
  </div>
</div>



<div className="main container-fluid " style={{ backgroundColor: "#FCD89C", padding: "7rem 0", position:"relative",zIndex:"10" }}>
  <div class="d-flex justify-content-center gap-3 " >
  
    <img src="images/103.png" alt="" width="250px" height="300px" style={{ marginTop: "-150px" ,marginRight:"0px",borderRadius:"20px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",zIndex:"11", position:"relative"}} />
   
    <div class=" w-50 " style={{marginTop:"-40px"}}>
      <h2>Find the best tutor,<br/> who can teach you</h2>
      <p className="" style={{width:"370px"}}>
        TeachME platform strives to provide a comprehensive database of tutors that cover a variety of subjects,
        languages, test preps and all major curriculums taught in the UAE. Users can search for Ministry Verified tutors
        according to their requirements. Ratings and Reviews from fellow users help to make an informed decision. Start
        now to support your child's education journey and set them on the path to success
      </p>
      <Link
        to="/login"
        class="btn"
        style={{color: "black" ,border:"1px solid black"}}
      >
        Find Tutors
      </Link>

    </div>
</div>
      <img src="images/dot.png" alt="" width="191px" height="423px" />


<div className="d-flex justify-content-center gap-3" style={{marginLeft:"100px",marginTop:"-350px"}} >
  <div className="mt-5 " >
    <h2>Get students to teach</h2>
    <p className="" style={{width:"370px"}}>
    Tutors are able to showcase their experience and expertise on the TeachME platform. For a one time payment you can advertise your services, upload a video introducing yourself, and provide key details like subjects taught, curriculum, educational background, languages spoken and areas of service. We take no commission or add any hidden fees. What you make is all yours! Sign up today</p>
    <Link
        to="/login"
        class="btn"
        style={{color: "black" ,border:"1px solid black"}}
      >
        Get Students
      </Link>
  </div>
  <img src="images/102.png" alt="" width="250px" height="300px" style={{borderRadius:"20px"}} />
</div>


</div>


{/* verified tutors */}


<Verified/>

{/* slider */}

<TestimonialSlider/>

<div>
<div class="container text-center">
  <div class="row">
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
    
  </div>
</div>
</div>

        </div>
  );
};

export default Navbar;
