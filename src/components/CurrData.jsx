import React, { useState } from 'react'
import currdata from '../currdata'

const CurrData = () => {
    const[data,setData] = useState(currdata)
  return (
    <div>
        <div className='row'>
        {data.map((elem,index)=>{
            return(
                <div key={index} className='col '>
                <img src={elem.image} alt=""width="100px" height="100px" style={{borderRadius:"50%"}}/>
                <h1  style={{fontSize:"15px"}} >{elem.subject}</h1>

                </div>
            )
        })}

        </div>
    </div>
  )
}

export default CurrData