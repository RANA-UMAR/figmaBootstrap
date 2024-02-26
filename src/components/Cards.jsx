import React from 'react'
import { Link } from 'react-router-dom'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const Cards = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-sm">
        <div className=" h-100 ">
          <img className="card-img-top" src="images/card/11.png" alt="Card imag" style={{borderRadius:"20px",marginBottom:"30px"}} />
          <div className="card-body text-start">
            <h5 className="card-title">Filter Tutors By Subject,<br/> Curriculum, Language<br/> and Location</h5>
            <p className="card-text" style={{color:"#94A2B3"}}>It's simple and easy. Just one click from<br/> finding the best Tutors.</p>
            <Link to="/" className='fw-bold ' style={{textDecoration:"none" , fontWeight:"medium" ,color:"black"}}>Learn More<ChevronRightIcon/></Link>
          </div>
        </div>
      </div>
      <div className="col-sm">
        <div className=" h-100 ">
          <img className="card-img-top" src="images/card/22.png" alt="Card " style={{borderRadius:"20px",marginBottom:"30px"}}/>
          <div className="card-body text-start">
            <h5 className="card-title">Supporting the SEN<br/> Community</h5>
            <p className="card-text" style={{color:"#94A2B3"}}>TeachME makes supporting kids with<br/> learning challenges a priority. Search<br/> our database for qualified SEN tutors<br/> and Shadow Teachers</p>
            <Link to="/" className='fw-bold ' style={{textDecoration:"none" , fontWeight:"medium" ,color:"black"}}>Learn More<ChevronRightIcon/></Link>
          </div>
        </div>
      </div>
      <div className="col-sm">
        <div className=" h-100 ">
          <img className="card-img-top" src="images/card/33.png" alt="Card " style={{borderRadius:"20px",marginBottom:"30px"}} />
          <div className="card-body text-start">
            <h5 className="card-title">One Low Cost, No Hidden<br/> Fees</h5>
            <p className="card-text" style={{color:"#94A2B3"}}>For a one time yearly payment you will<br/> have access to tutors and students at<br/> your fingertips. We cut out the middle<br/> man by eliminating all hidden costs<br/> and there is no commission fees.<br/> Keeping the cost low for our students!</p>
            <Link to="/" className='fw-bold ' style={{textDecoration:"none" , fontWeight:"medium" ,color:"black"}}>Learn More<ChevronRightIcon/></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Cards