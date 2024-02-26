import React, { useState } from 'react'
import teacherdata from '../teacherdata'

const Teacher = () => {
    const [data,setData]=useState(teacherdata)
  return (
    <div className='row  '>

{data.map((ele,index)=>{
    return(

        <div key={index} className='col text-white '  >
        <img src={ele.image} alt="" width="120px" height="120px" style={{borderRadius:"50%"}}/>
        <h6>{ele.subject}</h6>

        </div>
    )
})}
    </div>
  )
}

export default Teacher